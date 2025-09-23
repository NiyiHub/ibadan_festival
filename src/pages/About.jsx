import React from "react";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

const stats = [
  { id: 1, label: "Years of activity", value: "4" },
  { id: 2, label: "Events hosted", value: "8+" },
  { id: 3, label: "Number of Participants", value: "1,000+" },
  // { id: 4, label: "Communities reached", value: "15+" }
];

const timeline = [
  { year: "2021", text: "Concept and Community Consultations" },
  { year: "2022", text: "Pilot Events" },
  { year: "2023", text: "Rebuilding" },
  { year: "2024", text: "Planning and Strategy" },
  { year: "2025 Q1-Q2", text: "Book Reading and Conservation" },
  { year: "2025 Q1-Q2", text: "Town and Gown Interaction" },
  { year: "2025 Q3-Q4", text: "Festival Prelude Events" },
  { year: "2025 Q4", text: "Inaugural Festival" }
];

const team = [
  {
    name: "Servio Gbadamosi",
    role: "Founder & Festival Director",
    img: "/images/Servio_Gbadamosi.jpg"
  },
  {
    name: "Kayode Sanni",
    role: "Program Curator",
    img: "/images/Kayode_Sanni.jpg"
  },
  {
    name: "Solomon Muyiwa Ogungbenro",
    role: "Community & Partnerships",
    img: "/images/Solomon_Muyiwa_Ogungbenro.jpg"
  },
  {
    name: "Temiloluwa Peculiar Ibitomi",
    role: "Community & Partnerships",
    img: "/images/Temiloluwa_Peculiar_Ibitomi.jpg"
  },
  {
    name: "Su'eddie Vershima Agema",
    role: "Team Member",
    img: "/images/Su'eddie_Vershima_Agema.jpg"
  },
  {
    name: "Rukayat Amudah",
    role: "Team Member",
    img: "/images/Rukayat_Amudah.jpg"
  },
  {
    name: "Ocheni Kazeem Oneshojo",
    role: "Team Member",
    img: "/images/Ocheni_Kazeem_Oneshojo.jpg"
  },
  {
    name: "Ikechukwu Nwaogu",
    role: "Team Member",
    img: "/images/Ikechukwu_Nwaogu.jpg"
  },
  {
    name: "Anthonia Duru",
    role: "Team Member",
    img: "/images/Anthonia_Duru.JPG"
  }
];

function StatCard({ stat }) {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm p-6 text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
      <div className="mt-2 text-sm text-text-secondary">{stat.label}</div>
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
        <div className="text-sm text-text-secondary">{member.role}</div>
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
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="w-full h-[360px] md:h-[520px] rounded-sm overflow-hidden">
            <img
              src="/images/about-hero2.jpg"
              alt="IbaFest — community of readers and creatives"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </Container>
      </section>

      {/* Rest of the component remains the same... */}
      <section className="py-16">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display font-extrabold text-[40px] leading-[42.5px] text-primary mb-4">
                About IbaFest
              </h1>
              <p className="text-[20px] leading-[24px] text-text-secondary max-w-3xl">
                IbaFest (Ibadan Book & Arts Festival) celebrates storytelling,
                creative learning, and cultural exchange. Rooted in Ibadan's
                rich literary legacy, we host events, support libraries, and
                create platforms for writers, artists, and communities to
                connect — nurturing the next generation of cultural leaders.
              </p>
            </div>

            <div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-primary text-lg mb-3">Our Vision</h3>
                <p className="text-text-secondary">
                  To be Africa’s most influential cultural platform for transforming society through literature, arts, education, and creative innovation.
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold text-primary text-lg mb-3">Our Mission</h3>
                <p className="text-text-secondary">
                  We celebrate stories, empower creativity, and amplify voices to strengthen literacy, foster innovation, grow the creative economy, and advance equitable access to education and cultural resources.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </section>

      <section className="relative">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="w-full h-[360px] md:h-[520px] rounded-sm overflow-hidden">
            <img
              src="/images/about-hero3.jpg"
              alt="IbaFest — community of readers and creatives"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </Container>
      </section>

      {/* KEY STATS */}
      <section className="py-12 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StatCard key={s.id} stat={s} />
            ))}
          </div>
        </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-16">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <h2 className="font-display font-extrabold text-[32px] md:text-[40px] text-primary mb-6">
            Our journey
          </h2>

          <div className="space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="flex text-primary gap-6 items-start">
                <div className="w-20 flex-none">
                  <div className="text-sm font-semibold text-[var(--color-primary)]">{t.year}</div>
                </div>
                <div className="flex-1 text-text-secondary">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="py-16 bg-white">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <h2 className="font-display font-extrabold text-[32px] md:text-[40px] text-primary mb-6">
            Meet the team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-primary">
                Join us in building the next chapter
              </h3>
              <p className="text-text-secondary mt-2 max-w-xl">
                Partner, volunteer, donate books, or register for events — your
                involvement helps turn ideas into impact across communities.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://forms.gle/LaJbzXmFgQHbMa7c9">
                <button className="rounded-md bg-primary text-white px-6 py-3 md:px-8 md:py-4 font-medium">
                  Register now
                </button>
              </a>
              <a href="/donations">
                <button className="rounded-md border border-primary text-primary px-6 py-3 md:px-8 md:py-4 font-medium bg-white">
                  Donate / Sponsor
                </button>
              </a>
            </div>
          </div>
        </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
