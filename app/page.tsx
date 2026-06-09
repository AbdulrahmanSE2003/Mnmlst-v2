import Contact from "@/features/home/Contact";
import Glimpse from "@/features/home/Glimpse";
import Hero from "@/features/home/Hero";
import Projects from "@/features/home/Projects";
import Testimonials from "@/features/home/Testimonials";
import TextReveal from "@/features/home/TextReveal";

const page = async () => {
  return (
    <div className={``}>
      <Hero />
      <Glimpse />
      <TextReveal />
      <Testimonials />
      <Projects />
      <Contact />
    </div>
  );
};

export default page;
