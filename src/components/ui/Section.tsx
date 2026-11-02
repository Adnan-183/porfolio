import { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  label: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}

/**
 * Editorial section: a rule across the top, the label sitting in the left
 * margin on wide screens, and the content in the wider right column.
 */
const Section = ({ id, label, title, intro, children }: SectionProps) => (
  <section id={id} className="py-20 sm:py-28">
    <div className="container-page">
      <div className="grid gap-8 border-t border-fg pt-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <p className="label lg:sticky lg:top-24">{label}</p>
        </div>
        <div className="lg:col-span-9">
          {(title || intro) && (
            <Reveal className="mb-12 max-w-3xl sm:mb-16">
              {title && (
                <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-fg sm:text-6xl">
                  {title}
                </h2>
              )}
              {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
            </Reveal>
          )}
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default Section;
