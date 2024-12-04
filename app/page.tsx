
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PopularProperty from "@/components/PopularProperty";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Statistics />
      <PopularProperty />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
