'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, MessageCircle, MapPin, Send, CheckCircle, AlertCircle,
} from 'lucide-react';
import { contactInfo } from '@/data/content';
import SectionHeading from './SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    details: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Client-side validation
  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = 'Invalid email address';
    if (!formData.projectType) next.projectType = 'Please select a project type';
    if (!formData.details.trim()) next.details = 'Please describe your project';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setFormData({ name: '', email: '', projectType: '', budget: '', details: '' });
    } catch {
      setStatus('error');
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  // Shared input classes
  const inputBase =
    'w-full px-4 py-3 bg-navy-950 border rounded-xl text-strong text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/50';

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="09 · Contact"
          title={contactInfo.heading}
          subtitle={contactInfo.subheading}
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ── Contact info sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Card>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-strong mb-1">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-muted hover:text-accent-blue transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-strong mb-1">WhatsApp</p>
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-accent-blue transition-colors"
                    >
                      Message me on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-strong mb-1">Location</p>
                    <p className="text-sm text-muted">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card>
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold font-display text-strong mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted mb-6">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setStatus('idle')} variant="outline" size="sm">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-strong mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-white/5'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-strong mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-white/5'}`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-strong mb-1.5">
                      Project Type <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => updateField('projectType', e.target.value)}
                      className={`${inputBase} ${errors.projectType ? 'border-red-400' : 'border-white/5'}`}
                    >
                      <option value="">Select a project type</option>
                      {contactInfo.projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-xs text-red-400 mt-1">{errors.projectType}</p>
                    )}
                  </div>

                  {/* Budget Range (optional) */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-strong mb-1.5">
                      Budget Range <span className="text-muted text-xs">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => updateField('budget', e.target.value)}
                      className={`${inputBase} border-white/5`}
                    >
                      <option value="">Select a range</option>
                      {contactInfo.budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-strong mb-1.5">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => updateField('details', e.target.value)}
                      className={`${inputBase} resize-none ${errors.details ? 'border-red-400' : 'border-white/5'}`}
                      placeholder="Tell me about your project — goals, timeline, any technical requirements..."
                    />
                    {errors.details && (
                      <p className="text-xs text-red-400 mt-1">{errors.details}</p>
                    )}
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 px-4 py-3 rounded-xl">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  {/* Submit */}
                  <Button type="submit" className="w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
