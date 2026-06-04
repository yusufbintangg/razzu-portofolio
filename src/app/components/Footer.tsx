import { PJ, BG_FOOTER, BG_MAIN, IconBtn, ArrowUpRight } from "./ui";

const socials = ["TIKTOK", "|", "INSTAGRAM", "|", "YOUTUBE"];

export function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section
        style={{
          width: "100%",
          padding: "80px 0",
          background: BG_MAIN,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
          }}
        >
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 600,
              fontSize: "clamp(36px, 5.5vw, 72px)",
              color: "white",
              lineHeight: 1.2,
              textAlign: "center",
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
              border: "none",
              borderRadius: 33,
              padding: "10px 8px 10px 24px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#1a6b3a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#090b0b";
            }}
          >
            <span
              style={{
                fontFamily: PJ,
                fontWeight: 500,
                fontSize: 20,
                color: "white",
              }}
            >
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
        style={{
          width: "100%",
          background: BG_FOOTER,
          padding: "40px 80px 48px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: PJ,
              fontWeight: 700,
              fontSize: "clamp(60px, 9vw, 128px)",
              color: "white",
              lineHeight: "100px",
              margin: 0,
            }}
          >
            razzu.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              paddingBottom: 8,
            }}
          >
            {socials.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: PJ,
                  fontWeight: 600,
                  fontSize: 18,
                  color: "white",
                  lineHeight: "28px",
                  cursor: item !== "|" ? "pointer" : "default",
                  transition: item !== "|" ? "opacity 0.2s" : undefined,
                }}
                onMouseEnter={
                  item !== "|"
                    ? (e) => {
                        (e.currentTarget as HTMLSpanElement).style.opacity =
                          "0.6";
                      }
                    : undefined
                }
                onMouseLeave={
                  item !== "|"
                    ? (e) => {
                        (e.currentTarget as HTMLSpanElement).style.opacity =
                          "1";
                      }
                    : undefined
                }
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
