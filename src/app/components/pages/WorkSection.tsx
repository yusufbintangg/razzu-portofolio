import { useRef, useState, useEffect } from "react";
import svgPaths from "../../../imports/LandingPageDesktop/svg-epgds4kw6n";
import imgIPhoneFrame from "figma:asset/6f59004e8b74c237545d46a63e409dc54388a516.png";
import { PJ, BG_MAIN, SeeAllButton, PlayIcon, useWindowWidth } from "../ui";

const phones = [
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782097002/razzu-portfolio/konten-endorse.mov",
    tiktokUrl: "https://www.tiktok.com/@razzu", // ganti sesuai link tiktok video ini
    featured: false,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782096323/razzu-portfolio/konten-5.mp4",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: true,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782097376/razzu-portfolio/konten-8.mp4",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: false,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782095717/razzu-portfolio/konten-1.mp4",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: false,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782183116/razzu-portfolio/lomba-project.mp4",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: false,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782182322/razzu-portfolio/masdiibae-20.mp4",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: false,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782199179/razzu-portfolio/fixpole.mp4",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: false,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782199971/razzu-portfolio/profil-fix.mov",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: false,
  },
  {
    video:
      "https://res.cloudinary.com/dflurcp1z/video/upload/v1782200588/razzu-portfolio/project-malay.mp4",
    tiktokUrl: "https://www.tiktok.com/@razzu",
    featured: false,
  }
];



function MuteIcon({ muted, size }: { muted: boolean; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M11 5L6 9H2v6h4l5 4V5z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {muted ? (
        <path
          d="M23 9l-6 6M17 9l6 6"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function TikTokIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M16.5 3c.3 2.1 1.7 3.6 4 3.8v2.9c-1.4 0-2.7-.4-3.9-1.2v6.6a5.6 5.6 0 1 1-4.9-5.6v2.9a2.7 2.7 0 1 0 2 2.6V3h2.8z"
        fill="white"
      />
    </svg>
  );
}

function PhoneMockup({
  video, tiktokUrl, featured = false, width, height,
  muted, onToggleMute,  // ← tambah ini
}: {
  video: string; tiktokUrl: string; featured?: boolean;
  width: number; height: number;
  muted: boolean; onToggleMute: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMute();
  };

  const openTiktok = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(tiktokUrl, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      if (!muted) videoRef.current.play().catch(() => {});
    }
  }, [muted]);

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
      {/* Video */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "-1.2%",
          right: "-1.2%",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
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
      {/* Mute button */}
      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: 14,
          left: 14,
          zIndex: 4,
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.45)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        aria-label={muted ? "Unmute" : "Mute"}
      >
        <MuteIcon muted={muted} size={16} />
      </button>
      {/* TikTok button */}
      <button
        onClick={openTiktok}
        style={{
          position: "absolute",
          bottom: 14,
          right: 14,
          zIndex: 4,
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.45)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        aria-label="Open on TikTok"
      >
        <TikTokIcon size={16} />
      </button>
    </div>
  );
}

export function WorkSection() {
  const [unmuteIdx, setUnmuteIdx] = useState<number | null>(null);
  const w = useWindowWidth();
  const sidePad = w < 640 ? 20 : w < 1024 ? 40 : 80;
  // biar jaraknya gak terlalu mepet
  const gap = w < 480 ? 28 : w < 768 ? 32 : w < 1024 ? 40 : 124;
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
              video={phone.video}
              tiktokUrl={phone.tiktokUrl}
              featured={phone.featured}
              width={phoneW}
              height={phoneH}
              muted={unmuteIdx !== i}
              onToggleMute={() => setUnmuteIdx(unmuteIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}