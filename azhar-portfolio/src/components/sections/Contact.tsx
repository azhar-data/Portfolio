'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Mail,
  Linkedin,
  MessageCircle,
  Clock,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FormInput } from '@/components/ui/FormInput'

// ─── Zod Schema ──────────────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  message: z
    .string()
    .min(20, 'Please describe your project in at least 20 characters')
    .max(2000, 'Message is too long'),
})

type ContactFormData = z.infer<typeof contactSchema>

// ─── Contact Info Data ────────────────────────────────────────────────────────

const contactDetails = [
  {
    icon: Mail,
    label: 'Drop me a line',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Linkedin,
    label: 'Connect professionally',
    value: 'muhammad-azhar-ai-engin',
    href: 'https://www.linkedin.com/in/muhammad-azhar-ai-engin',
  },
  {
    icon: MessageCircle,
    label: 'Quick chat',
    value: '+92-XXX-XXXXXXX',
    href: 'https://wa.me/92XXXXXXXXXX',
  },
]

// ─── Shared input class ───────────────────────────────────────────────────────

const inputClass =
  'w-full bg-[#0A0F1C] border border-white/10 text-white rounded-xl py-3 px-4 outline-none ' +
  'focus:border-blue-500 transition-colors duration-200 placeholder-[#94A3B8] ' +
  'disabled:opacity-50 disabled:cursor-not-allowed'

// ─── Component ────────────────────────────────────────────────────────────────

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          budget: data.budget ?? '',
          message: data.message,
        }),
      })

      if (!res.ok) throw new Error('Server error')

      setFormState('success')
      reset()
    } catch {
      setFormState('error')
    }
  }

  const isDisabled = formState === 'loading'

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(ellipse, #3B82F6 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="11 · CONTACT"
          title="Let's Build Something Intelligent"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── LEFT COLUMN (60%) ── */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <p className="text-[#94A3B8] text-lg leading-relaxed max-w-lg">
              Have a project in mind? I&apos;d love to hear about it. Send me a message
              and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact detail cards */}
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl p-4 border border-white/10
                    bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:bg-white/8
                    transition-all duration-200 group"
                >
                  <span
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-white/10
                      group-hover:from-blue-600/30 group-hover:to-cyan-500/30 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-blue-400" />
                  </span>
                  <div>
                    <p className="text-[#F8FAFC] font-medium leading-tight">{value}</p>
                    <p className="text-[#94A3B8] text-sm mt-0.5">{label}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-[#F8FAFC] text-sm font-medium">
                Currently available for new projects
              </span>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Usually responds within 24 hours</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN (40%) ── */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">

              {/* ── SUCCESS STATE ── */}
              {formState === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center text-center gap-4 py-10"
                >
                  <span className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </span>
                  <div>
                    <p className="text-[#F8FAFC] font-semibold text-lg">Message sent!</p>
                    <p className="text-[#94A3B8] text-sm mt-1">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 text-blue-400 text-sm underline underline-offset-2 hover:text-blue-300"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {/* ── ERROR BANNER ── */}
              {formState === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mb-5 flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}

              {/* ── FORM ── */}
              {formState !== 'success' && (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <FormInput label="Name" required error={errors.name?.message}>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Muhammad Azhar"
                      disabled={isDisabled}
                      className={inputClass}
                      {...register('name')}
                    />
                  </FormInput>

                  {/* Email */}
                  <FormInput label="Email" required error={errors.email?.message}>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      disabled={isDisabled}
                      className={inputClass}
                      {...register('email')}
                    />
                  </FormInput>

                  {/* Project Type */}
                  <FormInput label="Project Type" required error={errors.projectType?.message}>
                    <select
                      id="contact-project-type"
                      disabled={isDisabled}
                      className={inputClass}
                      defaultValue=""
                      {...register('projectType')}
                    >
                      <option value="" disabled>
                        Select a project type…
                      </option>
                      {[
                        'AI Agent / LLM Application',
                        'RAG / Knowledge System',
                        'Machine Learning Model',
                        'Workflow Automation',
                        'Full-Stack AI Application',
                        'Data Analysis & Dashboard',
                        'Other',
                      ].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormInput>

                  {/* Budget Range */}
                  <FormInput label="Budget Range" error={errors.budget?.message}>
                    <select
                      id="contact-budget"
                      disabled={isDisabled}
                      className={inputClass}
                      defaultValue=""
                      {...register('budget')}
                    >
                      <option value="">Prefer not to say</option>
                      {[
                        'Under $500',
                        '$500 – $1,500',
                        '$1,500 – $5,000',
                        "$5,000+",
                        "Let's discuss",
                      ].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormInput>

                  {/* Project Details */}
                  <FormInput label="Project Details" required error={errors.message?.message}>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell me about your project, goals, timeline…"
                      disabled={isDisabled}
                      className={`${inputClass} resize-none`}
                      {...register('message')}
                    />
                  </FormInput>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isDisabled}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl
                      font-semibold text-white text-sm
                      bg-gradient-to-r from-blue-600 to-cyan-500
                      hover:from-blue-500 hover:to-cyan-400
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                      disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-200 shadow-lg shadow-blue-500/20"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
