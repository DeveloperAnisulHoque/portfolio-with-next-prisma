import { logVisitor } from "@/actions/actions";
import About from "@/components/custom/home/About";
import HeroSection from "@/components/custom/home/HeroSection";
import Projects from "@/components/custom/home/Projects";

export default async function Home() {
  await logVisitor();
  return (
    <div className="">
      <HeroSection />
      <hr />
      <About />
      <hr />
      <Projects />
    </div>
  );
}
