import { skillGroups } from '../data/profile';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

const Skills = () => (
  <Section
    id="skills"
    label="Toolkit"
    title={
      <>
        What I <em className="text-accent">work with</em>.
      </>
    }
  >
    <dl className="border-b border-line">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={Math.min(i, 4) * 0.03}>
          <div className="group grid gap-2 border-t border-line py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
            <dt className="font-serif text-2xl leading-tight transition-colors group-hover:text-accent">
              {group.title}
            </dt>
            <dd className="leading-relaxed text-fg/80 sm:pt-1.5">{group.items.join(', ')}</dd>
          </div>
        </Reveal>
      ))}
    </dl>
  </Section>
);

export default Skills;
