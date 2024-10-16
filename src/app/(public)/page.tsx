import { logVisitor } from "@/actions/actions";
import About from "@/components/custom/home/About";
import HeroSection from "@/components/custom/home/HeroSection";

export default async function Home() {
  await logVisitor();
  return (
    <div className="">
      <HeroSection />
      <hr />
      <About />
    </div>
  );
}
