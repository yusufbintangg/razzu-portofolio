import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/pages/HeroSection";
import { WorkSection } from "./components/pages/WorkSection";
import { ProductSection } from "./components/pages/ProductSection";
import { AboutSection } from "./components/pages/AboutSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div style={{ background: "#0a1f0f", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ProductSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
