import { motion } from 'framer-motion';
import { experience, profile, yearsOfExperience } from '../data/profile';
import { publishedCount } from '../data/projects-data';

const current = experience[0];

// The statement, word by word; `em` words are set in accent italic.
const statement: { text: string; em?: boolean }[] = [
  { text: 'I' },
  { text: 'build' },
  { text: 'backends,', em: true },
  { text: 'mobile', em: true },
  { text: 'apps', em: true },
  { text: 'and' },
  { text: 'the' },
  { text: 'web', em: true },
  { text: 'in' },
  { text: 'between.' },
];

const facts = [
  { label: 'Experience', value: `${yearsOfExperience}+ years` },
  { label: 'Apps on the stores', value: `${publishedCount} live` },
  { label: 'Main stack', value: 'NestJS · Flutter · React' },
  { label: 'Currently', value: current.company },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const Hero = () => (
  <section id="home" className="pt-24 sm:pt-28">
    <div className="container-page">
      <motion.div
        {...fade(0)}
        className="flex flex-wrap items-baseline justify-between gap-2 border-b border-fg pb-3"
      >
        <p className="label text-fg">
          {profile.role}, {current.company}
        </p>
        <p className="label">{profile.location}</p>
      </motion.div>

      <h1 className="mt-10 max-w-5xl font-serif text-[3.1rem] leading-[0.98] tracking-tight sm:mt-14 sm:text-7xl lg:text-[6.5rem]">
        {statement.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block ${word.em ? 'italic text-accent' : ''}`}
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.05, ease }}
            >
              {word.text}
            </motion.span>
            {i < statement.length - 1 && ' '}
          </span>
        ))}
      </h1>

      <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-10">
        <motion.div {...fade(0.7)} className="lg:col-span-6 lg:col-start-1">
          <p className="max-w-xl text-lg leading-relaxed text-fg/85">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#work" className="link-u">See the work →</a>
            <a href={profile.resume} download={profile.resumeFileName} className="link-u">
              Download résumé ↓
            </a>
            <a href={`mailto:${profile.email}`} className="link-u">
              Email me
            </a>
          </div>
        </motion.div>

        <motion.figure {...fade(0.85)} className="lg:col-span-4 lg:col-start-9">
          <div className="group overflow-hidden bg-surface-2">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              loading="eager"
            />
          </div>
          <figcaption className="mt-3 flex justify-between font-mono text-[11px] text-muted">
            <span>Fig. 1: {profile.shortName}, {profile.location.split(',')[0]}</span>
            <span>Hover for colour</span>
          </figcaption>
        </motion.figure>
      </div>

      <motion.dl
        {...fade(1)}
        className="mt-16 grid grid-cols-2 border-y border-line sm:mt-20 lg:grid-cols-4"
      >
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`py-5 pr-4 ${i % 2 === 1 ? 'border-l border-line pl-4' : ''} ${
              i >= 2 ? 'border-t border-line lg:border-t-0' : ''
            } ${i === 2 ? 'lg:border-l lg:pl-4' : ''}`}
          >
            <dt className="label">{fact.label}</dt>
            <dd className="mt-2 font-serif text-2xl sm:text-3xl">{fact.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;
