import svgPaths from "../../../imports/LandingPageDesktop/svg-epgds4kw6n";
import imgHero from "figma:asset/pprazzuzoomout.jpeg";
import { PJ, BG_MAIN, IconBtn, useWindowWidth } from "../ui";

export function HeroSection() {
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        scrollMarginTop: 0,
      }}
    >
      {/* Portrait photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <img
          alt="Razzu — Video Editor"
          src={imgHero}
          style={isMobile ? {
            position: "absolute",
            width: "100%",
            height: "90%",
            objectFit: "cover",
            transform: "scale(1.40)",
            objectPosition: "center 100%",
          } : {
            position: "absolute",
            width: "100%",
            maxWidth: "none",
            height: "273.21%",
            top: "-150.47%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>

      {/* Green radial overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 150% at 50% 0%, rgba(13,162,129,0.56) 0%, rgba(10,122,97,0.56) 17.5%, rgba(7,81,64,0.56) 35%, rgba(5,61,48,0.56) 44%, rgba(3,41,32,0.56) 52.6%, rgba(2,20,16,0.56) 61%, rgba(0,0,0,0.56) 70%)",
        }}
      />

      {/* Bottom dark fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, #000b09  0%, rgba(10,31,15,0.55) 30%, transparent 60%)",
        }}
      />

      {/* Hero content */}
      <div
        className="px-5 sm:px-10 xl:px-0"
        style={{
          position: "absolute",
          bottom: "1vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1280px, 100%)",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 300,
              fontSize: "clamp(18px, 3vw, 36px)",
              color: "white",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Hi, I'm Razzu,
          </p>
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 800,
              fontSize: "clamp(48px, 9.5vw, 128px)",
              color: "white",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            VIDEO EDITOR
          </p>
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 500,
              fontSize: "clamp(16px, 2.5vw, 36px)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Short Video Specialist
          </p>
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <a
            href="https://wa.me/6285866845223"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderRadius: 33,
              padding: "10px 10px 10px 22px",
              cursor: "pointer",
              position: "relative",
              zIndex: 1,

              /* samain style kayak navbar */
              background:
                "linear-gradient(135deg, rgba(20, 20, 25, 0.4) 0%, rgba(10, 10, 12, 0.25) 100%)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: `
                0 16px 40px rgba(0, 0, 0, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.3),
                inset 0 -1px 1px rgba(0, 0, 0, 0.1)
              `,
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              textDecoration: "none",
              overflow: "hidden",
              transform: "translateZ(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <span
              style={{ fontFamily: PJ, fontWeight: 500, fontSize: "clamp(15px, 2vw, 20px)", color: "white", position: "relative", zIndex: 1 }}
            >
              WhatsApp
            </span>
            <IconBtn>
              <svg width="18" height="18" viewBox="0 0 20.0077 20" fill="none">
                <path
                  d={svgPaths.p2598c870}
                  stroke="#151B1D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p16b4cb80}
                  stroke="#151B1D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </IconBtn>

            {/* shine sweep */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                transform: "translateX(-120%) skewX(-20deg)",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                transition: "transform 0.7s ease",
              }}
              className="wa-shine"
            />
          </a>


          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: PJ,
              fontWeight: 500,
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Portfolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 8H15M8 15L15 8L8 1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
