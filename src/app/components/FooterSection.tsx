import { PJ, BG_MAIN, BG_FOOTER, IconBtn, ArrowUpRight } from "./ui";

const socials = ["TIKTOK", "|", "INSTAGRAM", "|", "YOUTUBE"];

export function FooterSection() {
  return (
    <>
      {/* CTA Banner */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          background: "#000908",
          padding: "100px 0 40px",
        }}
      >
        {/* Glow bawah */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-250px",
            transform: "translateX(-50%)",
            width: "min(1200px, 100vw)",  // ganti dari width: "1200px"
            height: "600px",
            borderRadius: "50%",
            background: "rgba(0, 120, 95, 0.35) ",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: PJ,
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 72px)",
                color: "#fff",
                lineHeight: 1.1,
                maxWidth: 900,
                margin: 0,
              }}
            >
              Retain More Viewers with
              <br />
              Professional Short-Form Editing.
            </h2>

            <a
              href="https://wa.me/6285866845223"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#070909",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 999,
                padding: "12px 12px 12px 24px",
                cursor: "pointer",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px) scale(1.03)";
                e.currentTarget.style.background = "rgba(26, 107, 58, 0.35)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "#070909";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: PJ,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Start Your Project
              </span>

              <IconBtn>
                <ArrowUpRight size={12} color="#151B1D" />
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

          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: 140,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h1
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: PJ,
                fontWeight: 700,
                fontSize: "clamp(64px, 10vw, 120px)",
                lineHeight: 0.9,
              }}
            >
              razzu.
            </h1>

            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                color: "#fff",
                fontFamily: PJ,
                fontSize: 14,
              }}
            >
              <span>TIKTOK</span>
              <span>|</span>
              <span>INSTAGRAM</span>
              <span>|</span>
              <span>YOUTUBE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
