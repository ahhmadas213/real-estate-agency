'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PopularProperty from "@/components/PopularProperty";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Statistics />
      <PopularProperty />
      <HowItWorks />
      <Testimonials />
      <Footer />

    </div>
  );
}
