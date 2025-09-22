import React from "react";
import Container from '@/components/layout/Container'
// import ProgramList from "@/components/features/ProgramComponents";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// import { programs } from "../data/mockData";

export default function AnnualFestival() {
  return (
    <main>
      <Navbar />

      <section className="py-20 px-6 md:px-0 bg-white">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="text-left">
            <h1 className="font-display font-extrabold text-[40px] leading-[42.5px] text-primary mb-6">
              IbaFest Annual Festival
            </h1>

            <p className="text-[20px] leading-[24px] text-text-secondary w-full">
              Ibadan Book and Arts Festival (IbaFest) is a vibrant celebration of
              African literature, creativity, and cultural dialogue. Rooted in the
              historic city of Ibadan, IbaFest brings together writers, artists,
              readers, educators, and change-makers to explore the power of
              stories and the potential of the Creative and Cultural Industries to
              shape education, community, and national development. Through an
              annual festival and year-round programming, IbaFest nurtures
              literacy, promotes artistic excellence, supports library
              development, and empowers the next generation of cultural leaders.
            </p>
          </div>
        </div>
        </Container>
      </section>

      <section className="py-6 md:py-10">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <img
            src="/images/annual-festival.jpg"
            alt="IbaFest hero"
            className="w-full h-[420px] md:h-[560px] object-cover rounded-sm"
          />
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <a href="/register">
                <button className="rounded-md bg-primary text-white px-6 py-3 md:px-8 md:py-4 font-medium">
                  Register now
                </button>
              </a>

              <a href="https://forms.gle/yx5MntzwxgUvR7998">
                <button className="rounded-md bg-white text-primary border border-primary px-6 py-3 md:px-8 md:py-4 font-medium">
                  Volunteer to help
                </button>
              </a>
            </div>
          </div>
        </div>
        </Container>
      </section>

      <section className="py-20 px-6 md:px-28 bg-white text-center">
      <Container>
        <h2 className="font-display text-[32px] md:text-[40px] font-black text-primary">
          IBAFEST 2025: THE INAUGURAL EDITION
        </h2>

        <p className="mt-4 text-[20px] leading-[24px] text-text-secondary max-w-3xl mx-auto">
          IbaFest makes its grand debut in October 2025 with a full week of
          inspiring events celebrating literature, culture, and creative
          innovation in Ibadan. From poetry slams to panel discussions, art
          exhibitions to musical performances, and film screenings to children's
          storytelling corners—our inaugural edition promises something for
          everyone.
        </p>

        {/* <div className="mt-12">
          <ProgramList items={programs} />
        </div> */}

        <div className="mt-8 max-w-[720px] mx-auto w-full">
          <a href="#register" className="block w-full">
            <button className="w-full rounded-md bg-primary text-white px-6 py-3 md:px-10 md:py-4 font-medium">
              Register for IbaFest 2025
            </button>
          </a>
        </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <h2 className="font-display font-extrabold text-[40px] leading-[42.5px] text-primary mb-6">
            Why Ibadan?
          </h2>

          <p className="text-[20px] leading-[24px] text-text-secondary mb-8">
            From the iconic University of Ibadan to the legacy of literary
            pioneers like Wole Soyinka, Chinua Achebe, Flora Nwapa, and the
            Mbari Club, Ibadan has long stood as a beacon of African thought and
            creativity. !baFest reclaims this legacy and reimagines it for a new
            generation—strengthening ties between literature, cultural memory,
            and development.
          </p>

          <img
            src="/images/ibadan.jpg"
            alt="Why Ibadan"
            className="w-full h-[420px] md:h-[560px] object-cover rounded-sm"
          />

          <div className="mt-8">
            <a href="#register">
              <button className="rounded-md bg-primary text-white px-6 py-3 md:px-8 md:py-4 font-medium">
                Register now
              </button>
            </a>
          </div>
        </div>
        </Container>
      </section>

      {/* <section className="py-20 px-6 md:px-28">
        <Container>
          <TicketPromo />
        </Container>
      </section> */}

      <Footer />
    </main>
  );
}