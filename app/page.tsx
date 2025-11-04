"use client";
import AutoScaleCarousel from "@/components/ui/AutoScaleCarousel";
import ImageSection from "@/components/ui/ImageSection";
import Image from "next/image";

export default function Home() {
  const slides = [
    { src: "/images/hero3.avif", alt: "Hero 1" },
    { src: "/images/hero2.avif", alt: "Hero 2" },
    { src: "/images/hero1.avif", alt: "Hero 3" },
    { src: "/images/hero4.avif", alt: "Hero 3" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <AutoScaleCarousel slides={slides} interval={3500} />

      {/* Image Section */}
      <ImageSection />

      {/* Content Section */}
      <section className="w-full">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center py-16 px-6 bg-white">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground font-heading">
            We Bring Your Dream Home to Life
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground font-heading mt-2">
            Home Renovation Contractors
          </h1>
          <p className="text-4xl text-gray-600 mt-3 mb-4">
            Family Owned And Operated For Over 10 Years
          </p>

          <p className="max-w-3xl mt-6 text-gray-500 text-3xl md:text-base">
            At ValueHomes, we specialize in delivering comprehensive
            construction and renovation solutions that bring design dreams to
            life. With years of industry expertise, our team of professionals
            handles every phase — from initial design and planning to final
            finishing touches — ensuring superior quality and craftsmanship
            throughout. Our commitment to transparency, timelines, and client
            satisfaction has earned us the trust of homeowners and businesses
            alike. At ValueHomes, we don’t just build structures — we build
            lasting relationships and spaces that inspire!
          </p>

          {/* Button */}

          <button className="mt-10 bg-foreground text-background px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary">
            Book a Consultation
          </button>
        </div>

        {/* Bottom Black Section */}
        <div className="bg-foreground text-background text-center py-20 px-6">
          <h3 className="text-4xl md:text-5xl font-bold">
            FREE Virtual Design And <br /> Budget Consultations
          </h3>

          <button className="mt-12 bg-background text-foreground px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background">
            Book a Time Today!
          </button>

          <p className="text-lg text-background mt-8 max-w-xl mx-auto">
            We will walk you through your home and assess key design elements
            and budget considerations.
          </p>
        </div>
      </section>

      {/* Design Section */}
      <section className="w-full h-screen flex flex-col md:flex-row">
        {/* Left - Image */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
          <Image
            src="/images/houzzSection.avif"
            alt="Modern interior design"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right - Content */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-white">
          <div className="flex flex-col items-center justify-center text-center px-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              It&apos;s All About The Details. <br />
              When It Comes To Design.
            </h2>

            <p className="text-gray-500 mt-5 max-w-md text-lg">
              Every project needs a properly structured plan that guides the
              renovation process; a road map with details.
            </p>

            <button className="mt-8 bg-foreground text-background px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background rounded-none">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/wholeHouse.avif"
          alt="Modern kitchen interior"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="relative z-10 bg-white/20 backdrop-blur-sm text-center px-10 py-12 md:px-20 md:py-16 shadow-lg">
          <h3 className="text-gray-700 text-lg md:text-xl">Best Of Houzz</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            11 Years In A Row
          </h2>

          <button className="mt-8 bg-foreground text-background px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background">
            Learn More
          </button>
        </div>

        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      <section className="w-full h-screen flex flex-col md:flex-row">
        {/* Left - Image */}

        <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-foreground">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-background leading-tight">
              2016, 2019, 2020, 2022, & 2023. <br />
              NKBA award-winning. <br />
              kitchen & bath design firm
            </h2>

            <p className="text-gray-300 mt-5 max-w-md text-sm">
              Every project needs a properly structured plan that guides the
              renovation process; a road map with details.
            </p>

            <button className="mt-8 bg-background text-foreground px-4 py-2 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background rounded-none">
              Learn More
            </button>
          </div>
        </div>
        {/* Right - Content */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
          <Image
            src="/images/bathroom.avif"
            alt="Modern interior design"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Learn More */}
      <section className="h-64 w-full flex text-center items-center justify-center bg-graybackground">
        <div>
          <h1 className="text-center text-4xl text-background">
            Make you Home More Beautiful!!
          </h1>
          <button className="mt-8 bg-foreground text-background px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background rounded-none">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
