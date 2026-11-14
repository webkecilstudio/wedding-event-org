import { team } from '../data/content'
import { unsplash } from '../lib/images'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

export default function Team() {
  return (
    <Section id="team" className="bg-ink text-white">
      <Container>
        <SectionHeading
          kicker="Our Team"
          title="Orang yang benar-benar hadir di hari acara."
          desc="Tim kecil dengan peran jelas. Anda mengenal mereka saat konsultasi, dan mereka yang mengawal acara Anda."
          light
        />

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 80} className={index % 2 === 1 ? 'lg:mt-10' : ''}>
              <article className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={unsplash(member.photo, 500, 650)}
                    alt={`Potret ${member.name}, ${member.role}`}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{member.name}</h3>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-flame">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
