import { useEffect, useState } from "react";
import svgPaths from "../../imports/LandingPageDesktop/svg-epgds4kw6n";

export const PJ = "'Plus Jakarta Sans', sans-serif";
export const BG_MAIN = "#0a1f0f";
export const BG_PRODUCT = "#003D34";
export const BG_FOOTER = "#090b0b";

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

export function RazzuLogo({ scale = 1 }: { scale?: number }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 171 22.72"
      style={{ width: 171 * scale, height: 22.72 * scale, display: "block" }}
    >
      <path d={svgPaths.p342d4800} fill="white" />
      <path d={svgPaths.p1ba9a600} fill="white" />
      <path d={svgPaths.p371a2b80} fill="white" />
      <path d={svgPaths.p13286380} fill="white" />
      <path d={svgPaths.p26431d40} fill="white" />
      <path d={svgPaths.p2cb880f0} fill="white" />
    </svg>
  );
}

export function PlayIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * (27.5337 / 24.6969)}
      viewBox="0 0 24.6969 27.5337"
      fill="none"
    >
      <path
        d={svgPaths.p8382080}
        fill="white"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ArrowUpRight({
  size = 12,
  color = "#151B1D",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M11 11V1H1M11 1L1 11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function IconBtn({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        background: dark ? "#1a1a1a" : "white",
        borderRadius: 24,
        padding: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

export function SeeAllButton({ icon }: { icon?: React.ReactNode }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 24px",
        borderRadius: 33,
        border: "1px solid white",
        background: "transparent",
        cursor: "pointer",
        fontFamily: PJ,
        fontWeight: 500,
        fontSize: 18,
        color: "white",
        transition: "background 0.2s",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "#1a6b3a";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
      }}
    >
      {icon && (
        <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
      )}
      See All
    </button>
  );
}
