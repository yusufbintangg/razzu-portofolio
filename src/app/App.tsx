import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/pages/HeroSection";
import { WorkSection } from "./components/pages/WorkSection";
import { ProductSection } from "./components/pages/ProductSection";
import { AboutSection } from "./components/pages/AboutSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <>
      <div style={{ background: "#0a1f0f", minHeight: "100vh" }}>
        <Navbar />
        <HeroSection />
        <WorkSection />
        <ProductSection />
        <AboutSection />
        <FooterSection />
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/6285866845223"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: 24,
    right: 24,
    zIndex: 999,
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(20,20,25,0.4) 0%, rgba(10,10,12,0.25) 100%)",
    backdropFilter: "blur(24px) saturate(160%)",
    WebkitBackdropFilter: "blur(24px) saturate(160%)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.3)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)";
  }}
  aria-label="Chat on WhatsApp"
>
  {/* icon WA di atas */}
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.533 5.855L.057 23.514a.75.75 0 0 0 .921.921l5.703-1.476A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.222-1.443l-.374-.224-3.879 1.004 1.028-3.758-.244-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
</svg>
</a>
    </>
  );
}