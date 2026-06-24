import { useState } from "react";
import { PJ, BG_MAIN } from "../ui";

const testimonials = [
  {
    quote:
      '"Wissh keren kak 😍 Makasih banyak ya, hasilnya sesuai banget sama yang aku mau. Bahkan aku sampai izin save nomor karena puas sama hasil editannya. Fast response juga walaupun lagi ada kendala."',
    author: "Iputu Prema Suryawa",
    role: "CEO",
  },
  {
    quote:
      '"Alhamdulillah setelah kualitas editing konten dinaikin, hasilnya mulai kerasa banget. Sebulan ini retur cuma 1, dan itu pun bukan karena kualitas kontennya. Ternyata editing memang ngaruh besar buat performa."',
    author: "Cerita Masdi",
    role: "Content Creator & Affiliate Marketer",
  },
  {
    quote:
      '"Awalnya cuma pengen edit biasa, ternyata hasil akhirnya lebih rapi dan lebih enak ditonton dari ekspektasi. Transisi, musik, dan detail kecilnya berasa dipikirin."', 
    author: "Rafi Maulana",
    role: "Content Creator",
  },
];

export function AboutSection() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <section
        id="about"
        style={{
          width: "100%",
          padding: "100px 0 80px",
          background: BG_MAIN,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          scrollMarginTop: 80,
        }}
      >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "100%", height: 380,
          background: "linear-gradient(to right, rgba(1,61,47,0.3), rgba(16,32,32,0.2), rgba(0,61,52,0.3))",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="px-5 sm:px-10 xl:px-0"
        style={{ maxWidth: 1280, margin: "0 auto", position: "relative", boxSizing: "border-box" }}
      >
        {/* Layout: side-by-side on md+, stacked on mobile */}
        <div className="flex flex-col md:flex-row" style={{ gap: "clamp(32px, 5vw, 64px)", alignItems: "flex-start" }}>
          {/* Left: title */}
          <div style={{ flexShrink: 0 }}>
            <p
              style={{
                fontFamily: PJ,
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 60px)",
                color: "white",
                lineHeight: 1.3,
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              What My
              <br />
              Clients Say
            </p>
          </div>

          {/* Right: testimonial card */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
            <p
              style={{
                fontFamily: PJ,
                fontWeight: 600,
                height: 150,
                fontSize: "clamp(16px, 1.8vw, 22px)",
                color: "white",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {t.quote}
            </p>

            <div style={{ height: 1, background: "rgba(255,255,255,0.5)" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontFamily: PJ, fontWeight: 600, fontSize: "clamp(16px, 1.6vw, 20px)", color: "white", margin: "0 0 4px 0" }}>
                  {t.author}
                </p>
                <p style={{ fontFamily: PJ, fontWeight: 400, fontSize: "clamp(13px, 1.2vw, 16px)", color: "#e2e7e8", margin: 0 }}>
                  {t.role}
                </p>
              </div>

              {/* Arrows */}
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { fn: prev, d: "M8 1L1 8L8 15M1 8H15" },
                  { fn: next, d: "M1 8H15M8 15L15 8L8 1" },
                ].map(({ fn, d }, i) => (
                  <button
                    key={i}
                    onClick={fn}
                    style={{
                      border: "1px solid white",
                      borderRadius: "50%",
                      background: "transparent",
                      padding: 8,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d={d} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
