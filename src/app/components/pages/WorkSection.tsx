import svgPaths from "../../../imports/LandingPageDesktop/svg-epgds4kw6n";
import imgIPhoneFrame from "figma:asset/6f59004e8b74c237545d46a63e409dc54388a516.png";
import imgThumb1 from "figma:asset/cd62211c8d7f569379fcd49837a58e6d5162852e.png";
import imgThumb2 from "figma:asset/2d98715884f56d8617b14ee5ee099ce974f889b1.png";
import imgThumb3 from "figma:asset/e21cd2a15ca80523e959c0c11192eec8b474b8f9.png";
import imgThumb4 from "figma:asset/4feb98a662d728156532c4e479fccf7fb59920c0.png";
import imgThumb5 from "figma:asset/c37bb386587ac93519a24ca6a4dd346b81a6ada0.png";
import imgThumb6 from "figma:asset/a7eeffba86f877396943bb2224cf6cf0b4536752.png";
import imgThumb7 from "figma:asset/13a83e63292a465cc3e7079b42f710cc30fbc3ca.png";
import imgThumb8 from "figma:asset/bbc7e6f5fd74afdf3af0874232dbdefbf0112e71.png";
import imgThumb9 from "figma:asset/2d16774ca45bb7a177d9cae0f2b705a1ff0c6aad.png";
import { PJ, BG_MAIN, SeeAllButton, PlayIcon, useWindowWidth } from "../ui";

const phones = [
  { thumb: imgThumb1, featured: false },
  { thumb: imgThumb2, featured: true },
  { thumb: imgThumb3, featured: false },
  { thumb: imgThumb4, featured: false },
  { thumb: imgThumb5, featured: false },
  { thumb: imgThumb6, featured: false },
  { thumb: imgThumb7, featured: false },
  { thumb: imgThumb8, featured: false },
  { thumb: imgThumb9, featured: false },
];

function PhoneMockup({
  thumb,
  featured = false,
  width,
  height,
}: {
  thumb: string;
  featured?: boolean;
  width: number;
  height: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        flexShrink: 0,
        cursor: "pointer",
        transition: "transform 0.3s ease",
        isolation: "isolate",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
    >
      {/* Screen bg */}
      <div
        style={{
          position: "absolute",
          top: 0, bottom: 0,
          left: "-1.79%", right: "-1.54%",
          backgroundColor: featured ? "#058162" : "#023629",
          zIndex: 0,
        }}
      />
      {/* Thumbnail */}
      <div
        style={{
          position: "absolute",
          top: 0, bottom: 0,
          left: "-1.79%", right: "-1.54%",
          overflow: "hidden",
          mixBlendMode: featured ? "normal" : "luminosity",
          opacity: featured ? 1 : 0.5,
          zIndex: 1,
        }}
      >
        <img
          alt=""
          src={thumb}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* iPhone frame */}
      <div
        style={{
          position: "absolute",
          top: "-3.32%", bottom: "-3.32%",
          left: "-9.74%", right: "-9.91%",
          zIndex: 3,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <img alt="" src={imgIPhoneFrame} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {/* Play icon */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 4,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 10,
        }}
      >
        <PlayIcon size={Math.round(width * 0.185)} />
      </div>
    </div>
  );
}

export function WorkSection() {
  const w = useWindowWidth();
  const sidePad = w < 640 ? 20 : w < 1024 ? 40 : 80;
  // biar jaraknya gak terlalu mepet
  const gap = w < 480 ? 28 : w < 768 ? 32 : w < 1024 ? 40 : 64;
  const containerW = Math.min(w, 1280) - sidePad * 2;
  const phoneW = Math.min(Math.floor((containerW - gap * 2) / 3), 280);
  const phoneH = Math.round(phoneW * (600 / 280));

  return (
    <section
      id="work"
      style={{ width: "100%", padding: "100px 0 80px", background: BG_MAIN, scrollMarginTop: 80 }}
    >
      <div
        className="px-5 sm:px-10 xl:px-0"
        style={{ maxWidth: 1280, margin: "0 auto", boxSizing: "border-box" }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 56,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 60px)",
              color: "white",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Selected Work
          </p>
          <SeeAllButton
            icon={
              <svg width="17" height="20" viewBox="0 0 18.984 21.384" fill="none">
                <path
                  d={svgPaths.p19d0a380}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.71429"
                />
              </svg>
            }
          />
        </div>

        {/* Phone grid — selalu 3 kolom */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, max-content)",
            gap,
            justifyContent: "center",
          }}
        >
          {phones.map((phone, i) => (
            <PhoneMockup
              key={i}
              thumb={phone.thumb}
              featured={phone.featured}
              width={phoneW}
              height={phoneH}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
