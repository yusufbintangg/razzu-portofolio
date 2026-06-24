"use client";

import { useRef, useState, useEffect } from "react";

interface VideoClip {
  url: string;
  views: string;
  tiktokUrl?: string;
}

interface SocialAccount {
  name: string;
  subtitle: string;
  stats: string;
  platform: "instagram" | "tiktok";
  profileUrl: string;
  avatarColor?: string;
  videos: VideoClip[];
}

// Inject q_auto,f_auto ke Cloudinary URL
function optimizeUrl(url: string) {
  return url.replace("/upload/", "/upload/q_auto,f_auto/");
}

const accounts: SocialAccount[] = [
  {
    name: "tokoluciana",
    subtitle: "Toko Bahan Kue Luciana",
    stats: "16.4K followers  •  2,364 posts",
    platform: "instagram",
    profileUrl: "https://www.instagram.com/tokoluciana",
    photoProfile: "https://res.cloudinary.com/dflurcp1z/image/upload/v1782295514/Luciana_-_Logo_uj9tqu.png",
    videos: [
      { url: "https://res.cloudinary.com/dflurcp1z/video/upload/v1782222363/razzu-portfolio/web-luciana-1.mov", views: "1M" },
      { url: "https://res.cloudinary.com/dflurcp1z/video/upload/v1782222246/razzu-portfolio/web-luciana-2.mov", views: "63,7k" },
      { url: "https://res.cloudinary.com/dflurcp1z/video/upload/v1782223270/razzu-portfolio/web-luciana-3.mov", views: "12,8k" },
    ],
  },
  {
    name: "Cerita Masdi",
    subtitle: "masdiibae",
    stats: "35K followers  •  239.3K likes",
    platform: "tiktok",
    profileUrl: "https://www.tiktok.com/@masdiibae",
    photoProfile: "https://res.cloudinary.com/dflurcp1z/image/upload/v1782295515/WhatsApp_Image_2026-06-24_at_14.56.25_msj5qz.jpg",
    videos: [
      { url: "https://res.cloudinary.com/dflurcp1z/video/upload/v1782222516/razzu-portfolio/web-masdii-1.mov", tiktokUrl: "https://www.tiktok.com/@masdiibae/video/7611476905803500818", views: "10,5k" },
      { url: "https://res.cloudinary.com/dflurcp1z/video/upload/v1782222580/razzu-portfolio/web-masdi-2.mov", tiktokUrl: "https://www.tiktok.com/@masdiibae/video/7624453402986024210", views: "2,8k" },
      { url: "https://res.cloudinary.com/dflurcp1z/video/upload/v1782222629/razzu-portfolio/copy_074b7994-4e58-45e8-bf88-23ea5789a6d5.mov", tiktokUrl: "https://www.tiktok.com/@masdiibae/video/7628552582021205256", views: "3,9k" },
    ],
  },
];

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16.5 3c.3 2.1 1.7 3.6 4 3.8v2.9c-1.4 0-2.7-.4-3.9-1.2v6.6a5.6 5.6 0 1 1-4.9-5.6v2.9a2.7 2.7 0 1 0 2 2.6V3h2.8z" fill="white" />
    </svg>
  );
}

function EyeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function ArrowRightIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M1 8H15M8 15L15 8L8 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MuteIcon({ muted, size = 14 }: { muted: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      {muted ? (
        <path d="M23 9l-6 6M17 9l6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  );
}

function VideoCard({ clip, muted, onToggleMute }: { clip: VideoClip; muted: boolean; onToggleMute: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Lazy load: play only when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current || !inView) return;
    videoRef.current.muted = muted;
    videoRef.current.play().catch(() => {});
  }, [inView]);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = muted;
    if (!muted) videoRef.current.play().catch(() => {});
  }, [muted]);

  // Pause when out of view
  useEffect(() => {
    if (!videoRef.current) return;
    if (!inView) videoRef.current.pause();
    else videoRef.current.play().catch(() => {});
  }, [inView]);

  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMute();
  };

  return (
    <div
      ref={wrapperRef}
      className="relative rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer"
      style={{ aspectRatio: "9/16", maxHeight: 680 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inView ? (
        <video
          ref={videoRef}
          src={optimizeUrl(clip.url)}
          loop
          muted={muted}
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
      )}

      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0.4,
        }}
      />

      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between z-10">
        <button
          className="flex items-center gap-1 px-2 py-1 rounded-full text-white font-medium transition-all duration-200 hover:scale-105"
          style={{
            fontSize: "clamp(6px, 1.5vw, 11px)",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <EyeIcon size={10} />
          {clip.views}
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={handleMute}
            className="rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              width: "clamp(20px, 4vw, 30px)",
              height: "clamp(20px, 4vw, 30px)",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <MuteIcon muted={muted} size={10} />
          </button>

          {clip.tiktokUrl && (
            <button
              onClick={(e) => { e.stopPropagation(); window.open(clip.tiktokUrl, "_blank", "noopener,noreferrer"); }}
              className="rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                width: "clamp(20px, 4vw, 30px)",
                height: "clamp(20px, 4vw, 30px)",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <TikTokIcon size={10} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function SocialCard({ account, unmuteIdx, onToggleMute }: { account: SocialAccount; unmuteIdx: number | null; onToggleMute: (i: number) => void }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={account.photoProfile}
          alt={account.name}
          className="rounded-full flex-shrink-0"
          style={{ width: "clamp(56px, 8vw, 80px)", height: "clamp(56px, 8vw, 80px)" }}
          />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className="text-white font-bold leading-tight" style={{ fontSize: "clamp(18px, 3vw, 26px)" }}>
              {account.name}
            </span>
            <button
              onClick={() => window.open(account.profileUrl, "_blank", "noopener,noreferrer")}
              className="rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
              style={{ width: 34, height: 34, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              {account.platform === "instagram" ? <InstagramIcon size={16} /> : <TikTokIcon size={16} />}
            </button>
            <button
              onClick={() => window.open(account.profileUrl, "_blank", "noopener,noreferrer")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-black text-xs font-semibold bg-white transition-all duration-200 hover:bg-gray-100 hover:scale-105"
            >
              Visit Profile <ArrowRightIcon size={12} />
            </button>
          </div>
          <p className="text-gray-400 text-sm mb-0.5">{account.subtitle}</p>
          <p className="text-gray-400 text-sm">{account.stats}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {account.videos.map((clip, i) => (
          <VideoCard key={i} clip={clip} muted={unmuteIdx !== i} onToggleMute={() => onToggleMute(i)} />
        ))}
      </div>
    </div>
  );
}

export function ProductSection() {
  const [unmuteMap, setUnmuteMap] = useState<Record<number, number | null>>({});

  const handleToggle = (accountIdx: number, videoIdx: number) => {
    setUnmuteMap((prev) => {
      const next: Record<number, number | null> = {};
      accounts.forEach((_, i) => { next[i] = null; });
      next[accountIdx] = prev[accountIdx] === videoIdx ? null : videoIdx;
      return next;
    });
  };

  return (
    <section id="product" className="w-full" style={{ padding: "100px 0 80px", background: "#000908", scrollMarginTop: 80 }}>
      <div className="px-5 sm:px-10 xl:px-0" style={{ maxWidth: 1280, margin: "0 auto", boxSizing: "border-box" }}>
        <p className="text-white font-semibold mb-14" style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.3 }}>
          My Clients
        </p>
        <div className="flex flex-col gap-16">
          {accounts.map((account, ai) => (
            <SocialCard key={ai} account={account} unmuteIdx={unmuteMap[ai] ?? null} onToggleMute={(vi) => handleToggle(ai, vi)} />
          ))}
        </div>
      </div>
    </section>
  );
}