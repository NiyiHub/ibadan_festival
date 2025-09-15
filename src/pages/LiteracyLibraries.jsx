import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LiteracyLibraries() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <div className="text-left">
            <h1 className="font-display font-extrabold text-[40px] leading-[42.5px] text-[var(--color-primary)] mb-6">
              Literacy Libraries
            </h1>

            <p className="text-[20px] leading-[24px] text-[var(--color-text-secondary)] w-full">
              Book drives, reading clubs, mobile library initiatives, and direct
              support for public and school libraries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <img
            src="/images/event-2.png"
            alt="Literacy Libraries hero"
            className="w-full h-[420px] md:h-[560px] object-cover rounded-sm"
          />

          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <a href="/register">
                <button className="rounded-md bg-[var(--color-primary)] text-white px-6 py-3 md:px-8 md:py-4 font-medium">
                  Register now
                </button>
              </a>

              <a href="/volunteer">
                <button className="rounded-md bg-white text-[var(--color-primary)] border border-[var(--color-primary)] px-6 py-3 md:px-8 md:py-4 font-medium">
                  Volunteer to help
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-0">
          <h3 className="font-display font-extrabold text-[40px] leading-[42.5px] text-[var(--color-primary)] mb-6 text-left">
            YOU MAY ALSO LIKE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/images/podcast-2.png", "/images/podcast-1.png", "/images/podcast-2.png"].map((img, i) => (
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
      </section>

      <Footer />
    </main>
  );
}