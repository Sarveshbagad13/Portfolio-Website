import React, { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiGithub,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'bagadsarvesh13@gmail.com',
    href: 'mailto:bagadsarvesh13@gmail.com',
    color: 'bg-amber-400/10 text-amber-400',
    border: 'hover:border-amber-400/40',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: null,
    color: 'bg-indigo-400/10 text-indigo-400',
    border: 'hover:border-indigo-400/40',
  },
];

const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    handle: '@Sarveshbagad13',
    href: 'https://github.com/Sarveshbagad13/',
    accent: 'hover:text-white hover:border-white/30 hover:bg-white/10',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    handle: 'Sarvesh Bagad',
    href: 'https://www.linkedin.com/in/sarvesh-bagad-42286228b/',
    accent: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    handle: '500+ Problems',
    href: 'https://leetcode.com/u/sarvesh_13/',
    accent: 'hover:text-orange-400 hover:border-orange-400/40 hover:bg-orange-400/10',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `New Contact from ${form.name} via Portfolio`,
          message: form.message,
          from_name: form.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFeedbackMsg("Thank you! Your message has been sent directly to Sarvesh's inbox.");
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          setFeedbackMsg('');
        }, 7000);
      } else {
        setStatus('error');
        setFeedbackMsg(data.message || 'Something went wrong. Please email bagadsarvesh13@gmail.com directly.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMsg('Failed to send message. Please email bagadsarvesh13@gmail.com directly.');
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#FBFBFA] py-28 sm:py-32 overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-amber-300/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── SECTION HEADER ── */}
        <div className="mb-16 sm:mb-20">
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Let's Build Something{' '}
            <span className="text-[#F59E0B]">Great</span> Together
          </h2>
          <p className="mt-5 max-w-xl text-slate-500 text-base sm:text-lg leading-relaxed">
            Have a project idea, internship opportunity, or just want to connect? I'm always open to interesting conversations.
          </p>
        </div>

        {/* ── TWO-COLUMN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ════ LEFT: Info Panel ════ */}
          <div className="flex flex-col gap-8">

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color, border }) => (
                <div
                  key={label}
                  className={`group flex items-center gap-5 p-5 rounded-[22px] bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] ${border}`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl shrink-0 ${color}`}>
                    <Icon className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-800 font-semibold text-sm sm:text-base hover:text-amber-500 transition-colors duration-200 truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-800 font-semibold text-sm sm:text-base">{value}</p>
                    )}
                  </div>
                  {href && (
                    <FiArrowUpRight className="ml-auto text-slate-300 group-hover:text-amber-400 transition-colors duration-200 shrink-0 text-lg" />
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] border border-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Find Me Online</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, handle, href, accent }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3.5 rounded-2xl border border-white/8 bg-white/5 text-slate-300 transition-all duration-200 group ${accent}`}
                  >
                    <Icon className="text-xl shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm leading-none">{label}</p>
                      <p className="text-xs text-slate-500 mt-1 group-hover:text-current transition-colors duration-200">{handle}</p>
                    </div>
                    <FiArrowUpRight className="ml-auto text-slate-600 group-hover:text-current transition-colors duration-200 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ════ RIGHT: Contact Form ════ */}
          <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-[0_8px_40px_rgba(15,23,42,0.07)] p-8 sm:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Message</h3>
            <p className="text-sm text-slate-400 mb-8">I'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Sarvesh Bagad"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Project / Internship / Collaboration"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project idea or opportunity..."
                  required
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 outline-none resize-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`mt-2 w-full flex items-center justify-center gap-2.5 font-bold text-sm py-4 rounded-2xl transition-all duration-300 group cursor-pointer ${
                  status === 'loading'
                    ? 'bg-amber-400/80 text-slate-900 cursor-not-allowed opacity-80'
                    : status === 'success'
                    ? 'bg-emerald-500 text-white shadow-[0_8px_30px_rgba(16,185,129,0.35)]'
                    : 'bg-[#F59E0B] hover:bg-amber-400 text-slate-950 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(245,158,11,0.35)]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <FiLoader className="text-lg animate-spin" />
                    <span>Sending to Sarvesh...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <FiCheckCircle className="text-lg" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <FiSend className="text-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Feedback Message */}
              {status === 'success' && (
                <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-emerald-50 border border-emerald-300/80 text-emerald-800 text-xs font-semibold animate-fadeIn">
                  <FiCheckCircle className="text-emerald-600 text-lg shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-rose-50 border border-rose-300/80 text-rose-800 text-xs font-semibold animate-fadeIn">
                  <FiAlertCircle className="text-rose-600 text-lg shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              <p className="text-center text-xs text-slate-400 mt-1">
                Or email me directly at{' '}
                <a href="mailto:bagadsarvesh13@gmail.com" className="text-amber-500 hover:underline font-medium">
                  bagadsarvesh13@gmail.com
                </a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
