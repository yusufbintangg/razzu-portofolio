import { PJ, BG_MAIN, BG_FOOTER, IconBtn, ArrowUpRight } from "./ui";

const socials = ["TIKTOK", "|", "INSTAGRAM", "|", "YOUTUBE"];

export function FooterSection() {
  return (
    <>
      {/* CTA Banner */}
      <section style={{ width: "100%", padding: "80px 0", background: BG_MAIN }}>
        <div
          className="px-5 sm:px-10 xl:px-0"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 600,
              fontSize: "clamp(28px, 5vw, 72px)",
              color: "white",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Retain More Viewers with Professional Short-Form Editing.
          </p>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#090b0b",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 33,
              padding: "12px 12px 12px 28px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#1a6b3a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#090b0b")}
          >
            <span style={{ fontFamily: PJ, fontWeight: 500, fontSize: "clamp(16px, 2vw, 20px)", color: "white" }}>
              Start Your Project
            </span>
            <IconBtn>
              <ArrowUpRight size={12} color="#151B1D" />
            </IconBtn>
          </button>
        </div>
      </section>

      {/* Footer bar */}
      <footer
        style={{ width: "100%", background: BG_FOOTER, padding: "32px 0 40px" }}
      >
        <div
          className="px-5 sm:px-10 xl:px-0 flex flex-col sm:flex-row"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "clamp(8px, 3vw, 20px)",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 700,
              fontSize: "clamp(48px, 10vw, 120px)",
              color: "white",
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            razzu.
          </p>

          <div
            className="flex"
            style={{ alignItems: "center", gap: 14, paddingBottom: "clamp(4px, 1vw, 10px)", flexWrap: "wrap" }}
          >
            {socials.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: PJ,
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.4vw, 18px)",
                  color: item === "|" ? "rgba(255,255,255,0.4)" : "white",
                  lineHeight: "28px",
                  cursor: item !== "|" ? "pointer" : "default",
                  transition: item !== "|" ? "opacity 0.2s" : undefined,
                }}
                onMouseEnter={item !== "|" ? (e) => ((e.currentTarget as HTMLSpanElement).style.opacity = "0.6") : undefined}
                onMouseLeave={item !== "|" ? (e) => ((e.currentTarget as HTMLSpanElement).style.opacity = "1") : undefined}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
