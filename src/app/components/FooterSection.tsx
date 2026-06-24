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
            <a>
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
                background: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
              }}
              aria-label="Chat on WhatsApp"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.533 5.855L.057 23.514a.75.75 0 0 0 .921.921l5.703-1.476A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.222-1.443l-.374-.224-3.879 1.004 1.028-3.758-.244-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
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
