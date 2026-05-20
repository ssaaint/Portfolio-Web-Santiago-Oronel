import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { profile } from '../data/profile.js';
import { useI18n } from '../hooks/useI18n.jsx';

const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
  { icon: Github, label: 'GitHub', value: 'github.com/ssaaint', href: profile.socials.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'santiago-oronel', href: profile.socials.linkedin },
];

function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-band bg-ink-50 dark:bg-ink-900/40">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <Reveal>
            <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} intro={t('contact.intro')} />
          </Reveal>

          <Reveal className="mt-8 grid gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink-600 dark:text-ink-100">{t('contact.direct')}</p>
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-white/80 p-4 transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.085]"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/[0.12] text-violet-700 dark:text-violet-200">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-950 dark:text-white">{item.label}</span>
                    <span className="block break-all text-sm text-ink-700 group-hover:text-violet-700 dark:text-ink-100 dark:group-hover:text-violet-200">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </Reveal>
        </div>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
