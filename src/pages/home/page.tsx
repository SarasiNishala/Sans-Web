import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Studio from "./components/Studio";
import Process from "./components/Process";
import Journal from "./components/Journal";
import AISolutions from "./components/AISolutions";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />
      <Hero />
      <Process />
      <Work />
      <AISolutions />
      <Studio />
      <Journal />
      <Contact />
    </div>
  );
}