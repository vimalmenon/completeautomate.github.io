'use client';

import { JSX, useState, FormEvent } from 'react';

const API_URL = 'https://api.completeautomate.com/messages';

export default function ContactPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const resp = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: `Contact form submission from ${name.trim()}`,
          message: message.trim(),
        }),
      });

      if (resp.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await resp.json().catch(() => ({}));
        setStatus('error');
        setErrorMsg(data.error || data.detail || `Error ${resp.status}`);
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.12)] backdrop-blur-xl sm:p-12">
          <p className="text-xs font-semibold tracking-[0.34em] text-primary uppercase">
            Get In Touch
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
            Let&apos;s talk about your automation goals.
          </h1>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Whether you have a project in mind or just want to explore what&apos;s possible, send us
            a message and we&apos;ll get back to you within 24 hours.
          </p>

          {status === 'success' && (
            <div className="mt-6 rounded-xl border border-green-500/40 bg-green-500/10 px-5 py-4 text-sm text-green-400">
              Message sent successfully! We&apos;ll be in touch soon.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-4 text-sm text-red-400">
              {errorMsg || 'Something went wrong. Please try again.'}
            </div>
          )}

          <form onSubmit={handleSubmit} className={`mt-10 grid gap-6`}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground" htmlFor="name">
                  Name
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  id="name"
                  placeholder="Your name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground" htmlFor="email">
                  Email
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  id="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                className="mt-2 w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                id="message"
                placeholder="Tell us about your project or question..."
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === 'sending'}
              />
            </div>

            <button
              className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <hr className="my-10 border-border/40" />

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
                Email
              </h2>
              <a
                className="mt-2 block text-base font-medium text-foreground transition hover:text-primary"
                href="mailto:hello@completeautomate.com"
              >
                hello@completeautomate.com
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-[0.24em] text-muted uppercase">
                Location
              </h2>
              <p className="mt-2 text-base font-medium text-foreground">Remote — Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
