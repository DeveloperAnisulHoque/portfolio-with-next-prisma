import { logVisitor } from "@/actions/actions";
import HeroSection from "@/components/custom/home/HeroSection";
import Image from "next/image";

export default async function Home() {
  await logVisitor();
  return (
    <div className="">
      <HeroSection />
      <hr />
    </div>
  );
}
