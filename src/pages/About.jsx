import React from "react";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

const stats = [
  { id: 1, label: "Years of activity", value: "1" },
  { id: 2, label: "Events hosted", value: "20+" },
  { id: 3, label: "Books donated", value: "8,000+" },
  { id: 4, label: "Communities reached", value: "15+" }
];

const timeline = [
  { year: "2024", text: "IbaFest concept and community consultations" },
  { year: "2024 Q4", text: "Pilot events and library support projects" },
  { year: "2025", text: "Inaugural IbaFest — week-long celebration in Ibadan" },
  { year: "2026+", text: "Year-round programming & regional outreach" }
];

const team = [
  {
    name: "Niyi Black",
    role: "Founder & Festival Director",
    img: "/images/about-team-1.jpg"
  },
  {
    name: "Amina Olu",
    role: "Program Curator",
    img: "/images/about-team-2.jpg"
  },
  {
    name: "Chinedu Okoro",
    role: "Community & Partnerships",
    img: "/images/about-team-3.jpg"
  }
];

function StatCard({ stat }) {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm p-6 text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">{stat.value}</div>
      <div className="mt-2 text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="w-full h-64 md:h-56">
        <img
          src={member.img}
          alt={`${member.name} — ${member.role}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold text-lg text-[#3E3E3E]">{member.name}</div>
        <div className="text-sm text-[var(--color-text-secondary)]">{member.role}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="w-full h-[360px] md:h-[520px] rounded-sm overflow-hidden">
            <img
              src="/images/about-hero.jpg"
              alt="IbaFest — community of readers and creatives"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same... */}
      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display font-extrabold text-[40px] leading-[42.5px] text-[var(--color-primary)] mb-4">
                About Ìbà Fest
              </h1>
              <p className="text-[20px] leading-[24px] text-[var(--color-text-secondary)] max-w-3xl">
                Ìbà Fest (Ibadan Book & Arts Festival) celebrates storytelling,
                creative learning, and cultural exchange. Rooted in Ibadan's
                rich literary legacy, we host events, support libraries, and
                create platforms for writers, artists, and communities to
                connect — nurturing the next generation of cultural leaders.
              </p>
            </div>

            <div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Our mission</h3>
                <p className="text-[var(--color-text-secondary)]">
                  To expand access to books, support creative livelihoods, and
                  celebrate African stories that shape education and community.
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-sm uppercase text-[var(--color-primary)] mb-2">Core values</h4>
                  <ul className="text-[var(--color-text-secondary)] space-y-2">
                    <li>• Community empowerment</li>
                    <li>• Literary excellence</li>
                    <li>• Accessibility & inclusion</li>
                    <li>• Cultural legacy & innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StatCard key={s.id} stat={s} />
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <h2 className="font-display font-extrabold text-[32px] md:text-[40px] text-[var(--color-primary)] mb-6">
            Our journey
          </h2>

          <div className="space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6 items-start">
                <div className="w-20 flex-none">
                  <div className="text-sm font-semibold text-[var(--color-primary)]">{t.year}</div>
                </div>
                <div className="flex-1 text-[var(--color-text-secondary)]">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <h2 className="font-display font-extrabold text-[32px] md:text-[40px] text-[var(--color-primary)] mb-6">
            Meet the team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-[var(--color-primary)]">
                Join us in building the next chapter
              </h3>
              <p className="text-[var(--color-text-secondary)] mt-2 max-w-xl">
                Partner, volunteer, donate books, or register for events — your
                involvement helps turn ideas into impact across communities.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="/register">
                <button className="rounded-md bg-[var(--color-primary)] text-white px-6 py-3 md:px-8 md:py-4 font-medium">
                  Register now
                </button>
              </a>
              <a href="/donations">
                <button className="rounded-md border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 md:px-8 md:py-4 font-medium bg-white">
                  Donate / Sponsor
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
