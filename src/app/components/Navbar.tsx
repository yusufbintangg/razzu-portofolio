import { useState, useEffect } from "react";
import { RazzuLogo, IconBtn, ArrowUpRight, PJ } from "./ui";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Product", href: "#product" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");

  // LOGIKA AUTO DETECT SCROLL POSITION (Intersection Observer)
  useEffect(() => {
    const observers = navLinks.map(({ href }) => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Jika section tersebut masuk ke area pandang (minimal 40% terlihat)
          if (entry.isIntersecting) {
            setActiveTab(href);
          }
        },
        {
          // Biar active tab gak ketinggalan pas scroll (zona deteksi dibuat lebih toleran)
          rootMargin: "-10% 0px -40% 0px",
          threshold: 0.05,
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((item) => {
        if (item) item.observer.unobserve(item.element);
      });
    };
  }, []);

  const handleNav = (href: string) => {
    setActiveTab(href);
    setOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          padding: "10px 28px",
          borderRadius: 50,
          
          /* === BACKDROP & BASE GLASS EFFECT === */
          background: "linear-gradient(135deg, rgba(20, 20, 25, 0.4) 0%, rgba(10, 10, 12, 0.25) 100%)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: `
            0 16px 40px rgba(0, 0, 0, 0.3), 
            inset 0 1px 1px rgba(255, 255, 255, 0.3),
            inset 0 -1px 1px rgba(0, 0, 0, 0.1)
          `,
          
          /* === LIQUID CONFIGURATION === */
          overflow: "hidden", 
          width: "min(1280px, calc(100vw - 32px))",
          boxSizing: "border-box",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          style={{ textDecoration: "none", flexShrink: 0, position: "relative", zIndex: 1 }}
        >
          <RazzuLogo scale={0.85} />
        </a>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex"
          style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 28, position: "relative", zIndex: 1 }}
        >
          {navLinks.map(({ label, href }) => {
            const isActive = activeTab === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                style={{
                  fontFamily: PJ,
                  fontWeight: 600,
                  fontSize: 16,
                  color: "white",
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: 20,
                  
                  /* Efek visual ketika menu aktif */
                  opacity: isActive ? 1 : 0.75,
                  background: isActive ? "rgba(255, 255, 255, 0.12)" : "transparent",
                  border: isActive ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid transparent",
                  boxShadow: isActive ? "inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.1)" : "none",
                  
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  if (!isActive) e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = isActive ? "1" : "0.75";
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          className="hidden md:flex"
          href="https://wa.me/6285866845223"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "relative",
            zIndex: 1,
            alignItems: "center",
            gap: 10,
            background: "rgba(9, 11, 11, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 33,
            padding: "8px 8px 8px 20px",
            cursor: "pointer",
            flexShrink: 0,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
            transition: "all 0.2s ease",
            textDecoration: "none",
            transform: "translateZ(0)",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(26, 107, 58, 0.8)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.transform = "translateY(-1px) scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(9, 11, 11, 0.5)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          <span style={{ fontFamily: PJ, fontWeight: 500, fontSize: 15, color: "white", position: "relative", zIndex: 1 }}>
            Get in touch
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


        {/* Mobile: spacer */}
        <div className="flex md:hidden" style={{ flex: 1, position: "relative", zIndex: 1 }} />
        
        {/* Mobile: burger menu button */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            position: "relative",
            zIndex: 1,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 6,
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="Menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 3L19 19M19 3L3 19" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="flex md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "rgba(10, 10, 12, 0.6)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          {navLinks.map(({ label, href }) => {
            const isActive = activeTab === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                style={{
                  fontFamily: PJ,
                  fontWeight: isActive ? 800 : 700,
                  fontSize: 36,
                  color: isActive ? "#9d4edd" : "white", // Teks menyala warna cairan liquid saat aktif di mobile
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "color 0.2s ease",
                }}
              >
                {label}
              </a>
            );
          })}
          
          <a
            href="https://wa.me/6285866845223"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(9, 11, 11, 0.7)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 33,
              padding: "12px 12px 12px 28px",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.2s ease, background 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(26, 107, 58, 0.8)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
              e.currentTarget.style.transform = "translateY(-1px) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(9, 11, 11, 0.7)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <span style={{ fontFamily: PJ, fontWeight: 500, fontSize: 18, color: "white", position: "relative", zIndex: 1 }}>
              Get in touch
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
      )}
    </>
  );
}
