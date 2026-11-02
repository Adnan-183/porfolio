import { education, experience, profile } from '../data/profile';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

const Experience = () => (
  <Section
    id="experience"
    label="Experience"
    title={
      <>
        Where I've <em className="text-accent">worked</em>.
      </>
    }
  >
    <ol>
      {experience.map((job, i) => (
        <Reveal key={job.company} delay={i * 0.05}>
          <li className="grid gap-3 border-t border-line py-8 sm:grid-cols-[150px_1fr] sm:gap-8">
            <p className="font-mono text-xs text-muted sm:pt-2">
              {job.start} – {job.end}
            </p>
            <div>
              <h3 className="font-serif text-3xl leading-tight">
                {job.company}
                {i === 0 && <span className="ml-3 align-middle font-mono text-[11px] text-accent">● now</span>}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">{job.role}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-fg/85">{job.summary}</p>
              {job.highlights.length > 0 && (
                <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-fg/75">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accent">–</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>

    <Reveal className="grid gap-8 border-t border-line pt-8 sm:grid-cols-[150px_1fr] sm:gap-8">
      <p className="label sm:pt-1">Education</p>
      <div className="grid gap-8 sm:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree}>
            <p className="font-serif text-2xl leading-tight">{item.degree}</p>
            <p className="mt-1 text-sm text-muted">
              {item.school} · {item.period}
            </p>
          </div>
        ))}
        <div>
          <p className="label">Languages</p>
          <p className="mt-2 text-sm text-fg/85">{profile.languages.join(', ')}</p>
        </div>
      </div>
    </Reveal>
  </Section>
);

export default Experience;
