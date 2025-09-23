import React from "react";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function LiteracyLibraries() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="text-left">
            <h1 className="font-display font-extrabold text-[40px] leading-[42.5px] text-primary mb-6">
              Literacy Libraries
            </h1>

            <p className="text-[20px] leading-[24px] text-text-secondary w-full">
              Book drives, reading clubs, mobile library initiatives, and direct
              support for public and school libraries.
            </p>
          </div>
        </div>
        </Container>
      </section>

      <section className="py-6 md:py-10">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <img
            src="/images/Literacy Libraries.jpg"
            alt="Literacy Libraries hero"
            className="w-full h-[420px] md:h-[560px] object-cover rounded-sm"
          />

          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <a href="https://forms.gle/LaJbzXmFgQHbMa7c9">
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

      <section className="py-16 bg-white">
      <Container>
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <h3 className="font-display font-extrabold text-[40px] leading-[42.5px] text-primary mb-6 text-left">
            YOU MAY ALSO LIKE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/images/podcast-2.jpg", "/images/podcast-1.jpg", "/images/podcast-2.jpg"].map((img, i) => (
              <div key={i} className="rounded-md overflow-hidden shadow-sm">
                <img
                  src={img}
                  alt={`podcast ${i + 1}`}
                  className="w-full h-[483px] md:h-[483px] object-cover block"
                />
              </div>
            ))}
          </div>
        </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}