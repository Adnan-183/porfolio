import { useState } from 'react';
import { profile } from '../data/profile';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

const channels = [
  { label: 'WhatsApp', value: profile.phone, href: profile.whatsapp },
  { label: 'LinkedIn', value: 'in/adnan-mobdev', href: profile.linkedin },
  { label: 'GitHub', value: profile.github.replace('https://github.com/', ''), href: profile.github },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" label="Contact">
      <Reveal>
        <p className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Building something and need a hand on the backend, the app, or both?{' '}
          <em className="text-accent">Write to me.</em>
        </p>

        <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="link-u break-all font-serif text-3xl sm:text-5xl"
          >
            {profile.email}
          </a>
          <button onClick={copyEmail} className="link font-mono text-[11px] uppercase tracking-wider text-muted" aria-live="polite">
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <ul className="grid border-t border-line sm:grid-cols-3">
          {channels.map((c, i) => (
            <li key={c.label} className={`border-b border-line py-5 sm:border-b-0 ${i > 0 ? 'sm:border-l sm:pl-6' : ''}`}>
              <p className="label">{c.label}</p>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="link mt-2 text-lg">
                {c.value} ↗
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};

export default Contact;
