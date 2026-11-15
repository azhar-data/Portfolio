import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  details: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, projectType, budget, details } = body;

    // Validate required fields
    if (!name || !email || !projectType || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Option 1: Send via Resend if API key is provided
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';

    if (resendApiKey && resendApiKey !== 're_your_api_key_here') {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [contactEmail],
          subject: `New Portfolio Inquiry from ${name} (${projectType})`,
          reply_to: email,
          html: `
            <h2>New Portfolio Message</h2>
            <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <hr />
            <h3>Project Details:</h3>
            <p style="white-space: pre-wrap;">${details}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error('Resend error:', errorData);
        return NextResponse.json(
          { error: 'Failed to send message via email service' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: 'Message sent successfully via Resend' },
        { status: 200 }
      );
    }

    // Option 2: Send via Formspree if endpoint is provided
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint && !formspreeEndpoint.includes('your-form-id')) {
      const formspreeResponse = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          budget: budget || 'Not specified',
          message: details,
        }),
      });

      if (!formspreeResponse.ok) {
        return NextResponse.json(
          { error: 'Failed to send message via Formspree' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: 'Message sent successfully via Formspree' },
        { status: 200 }
      );
    }

    // Option 3: Local/dev fallback when keys are not yet configured
    // Logs the contact submission to server console and returns 200 so the UI succeeds
    console.log('--- [DEMO / DEV] Portfolio Contact Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Project Type: ${projectType}`);
    console.log(`Budget: ${budget || 'N/A'}`);
    console.log(`Details: ${details}`);
    console.log('------------------------------------------------');

    return NextResponse.json(
      {
        success: true,
        message: 'Message received (Development mode simulated submission). Configure RESEND_API_KEY in .env.local for production delivery.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
