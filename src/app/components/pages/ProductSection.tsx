import svgPaths from "../../../imports/LandingPageDesktop/svg-epgds4kw6n";
import imgProd1 from "figma:asset/8c4c4ab8ab6dc78b00357c43388a8e88e5a72969.png";
import imgProd2 from "figma:asset/e7fd750a85d49a4bd5e7384965054c403d49d13b.png";
import imgProd3 from "figma:asset/b52e2e22de875bfb55c8b3991da291619e6d3cd6.png";
import imgProd4 from "figma:asset/f3c403b5568a735f8693fa7904dbadd52b4d8c71.png";
import imgProd5 from "figma:asset/147e12048d770b109230e81432f99c9d081c7a09.png";
import imgProd6 from "figma:asset/69b600b0903a6497ffae929594165d9bb3967805.png";
import { PJ, BG_MAIN, SeeAllButton } from "../ui";

const products = [
  { img: imgProd1, title: "5000 Template Desain dan Video Promo, IG FB Format PPT Power..." },
  { img: imgProd2, title: "Product Promo After Effects Template" },
  { img: imgProd3, title: "Video Editing..." },
  { img: imgProd4, title: "Template Video Promo Website & Mobile Video for Premiere Pro" },
  { img: imgProd5, title: "160+ Template Undangan Pernikahan Digital Video Format PPT (Power Point)" },
  { img: imgProd6, title: "2100 Motion Preset Premiere Pro Templates" },
];

function ProductCard({ img, title }: { img: string; title: string }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        aspectRatio: "4/3",
        cursor: "pointer",
        transition: "filter 0.2s, transform 0.2s",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter = "brightness(1.15)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter = "brightness(1)";
        el.style.transform = "translateY(0)";
      }}
    >
      <img
        alt=""
        src={img}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 14px" }}>
        <p
          style={{
            fontFamily: PJ,
            fontWeight: 500,
            fontSize: "clamp(12px, 1.2vw, 15px)",
            color: "white",
            lineHeight: 1.4,
            margin: "0 0 6px 0",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </p>
        <p style={{ fontFamily: PJ, fontWeight: 700, fontSize: "clamp(14px, 1.4vw, 18px)", color: "white", margin: 0 }}>
          Rp50.000
        </p>
      </div>
    </div>
  );
}

export function ProductSection() {
  return (
    <section
  id="product"
  style={{
    position: "relative",  // ← tambah ini
    width: "100%",
    padding: "100px 0 80px",
    background: BG_MAIN,
    overflow: "hidden",
    scrollMarginTop: 80,
  }}
>
      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          width: "60%", height: "60%",
          background: "radial-gradient(ellipse, rgba(0,110,83,0.3) 0%, transparent 70%)",
          top: "-20%", left: "-15%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "50%", height: "50%",
          background: "radial-gradient(ellipse, rgba(3,66,57,0.35) 0%, transparent 70%)",
          bottom: "-15%", right: "-10%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="px-5 sm:px-10 xl:px-0"
        style={{ maxWidth: 1280, margin: "0 auto", position: "relative", boxSizing: "border-box" }}
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
            My Product
          </p>
          <SeeAllButton
            icon={
              <svg width="20" height="20" viewBox="0 0 22.0045 21" fill="none">
                <path
                  d={svgPaths.pc5fa180}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            }
          />
        </div>

        {/* Product grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(16px, 2.5vw, 32px)" }}
        >
          {products.map((p, i) => (
            <ProductCard key={i} img={p.img} title={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
