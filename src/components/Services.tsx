import { services } from '../data/profile';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

const Services = () => (
  <Section
    id="services"
    label="What I do"
    title={
      <>
        Three layers, <em className="text-accent">one</em> person.
      </>
    }
    intro="Most features touch the database, the API, the app and a web screen. I can do all four, so nothing gets lost between hand-offs."
  >
    <div className="grid sm:grid-cols-3">
      {services.map((service, i) => (
        <Reveal
          key={service.id}
          delay={i * 0.08}
          className="border-line sm:pr-6 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-t-0 sm:[&:not(:first-child)]:pl-6"
        >
          <article className="flex h-full flex-col py-6 sm:py-0">
            <h3 className="font-serif text-3xl">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-fg/80">{service.description}</p>
            <ul className="mt-5 flex-1 space-y-1.5 text-sm text-muted">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-accent">–</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] text-muted">{service.stack.join(' / ')}</p>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Services;
