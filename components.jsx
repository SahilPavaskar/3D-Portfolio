/* global React, Motion */
const { useRef, useEffect, useState, useMemo } = React;
const { motion, useScroll, useTransform, useMotionValueEvent } = window.Motion;

/* ----------------------- RevealHeading -------------------------- */
/**
 * Two-layer headline: hollow outline base + solid fill on top, where the
 * fill is clipped from 100% (invisible) down to 0% (fully revealed) based
 * on the section's scroll progress. Reads as "the text fills in as you
 * scroll into the section".
 */
function RevealHeading({
  children,
  className,
  style,
  fillColor = "#F5F8FB",
  strokeColor = "rgba(215,226,234,0.55)",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: "relative", display: "inline-block", lineHeight: 1, ...style }}
    >
      {/* Outline base — always visible */}
      <span
        aria-hidden="true"
        style={{
          color: "transparent",
          WebkitTextStroke: `1.2px ${strokeColor}`,
          display: "block",
        }}
      >
        {children}
      </span>
      {/* Solid fill on top — clipped */}
      <motion.span
        style={{
          position: "absolute",
          inset: 0,
          color: fillColor,
          clipPath,
          WebkitClipPath: clipPath,
          display: "block",
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

/* ----------------------------- FadeIn ----------------------------- */
function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, as = "div", className, style }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ----------------------------- Magnet ----------------------------- */
function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
  style,
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("translate3d(0,0,0)");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const within =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding;
      if (within) {
        setActive(true);
        setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
      } else {
        setActive(false);
        setTransform("translate3d(0,0,0)");
      }
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/* --------------------------- AnimatedText -------------------------- */
function AnimatedText({ text, className, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = useMemo(() => text.split(""), [text]);
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = (i + 1) / chars.length;
        let opacity = 0.2;
        if (progress >= end) opacity = 1;
        else if (progress > start) {
          opacity = 0.2 + 0.8 * ((progress - start) / (end - start));
        }
        return (
          <span key={i} style={{ position: "relative", display: "inline" }}>
            <span style={{ opacity: 0 }}>{c}</span>
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                opacity,
                transition: "opacity 0.1s linear",
              }}
            >
              {c}
            </span>
          </span>
        );
      })}
    </p>
  );
}

/* -------------------------- ContactButton -------------------------- */
function ContactButton({ className = "", href = "mailto:sahilpavaskar81@gmail.com" }) {
  return (
    <div className={"relative inline-block " + className}>
      {/* Soft outer color halo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-22px -32px -32px -32px",
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(182,0,168,0.55) 0%, rgba(118,33,176,0.3) 45%, rgba(190,76,0,0.18) 70%, transparent 85%)",
          filter: "blur(26px)",
          pointerEvents: "none",
        }}
      />
      <a
        href={href}
        className={
          "relative inline-block rounded-full text-white font-medium uppercase tracking-widest " +
          "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 " +
          "text-xs sm:text-sm md:text-base " +
          "transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
        }
        style={{
          background:
            "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
          border: "1px solid rgba(255,255,255,0.38)",
          boxShadow: [
            "inset 0 1.5px 0 rgba(255,255,255,0.6)",
            "inset 0 -1.5px 0 rgba(0,0,0,0.32)",
            "inset 0 0 22px rgba(255,255,255,0.12)",
            "0 14px 34px rgba(118,33,176,0.5)",
            "0 4px 10px rgba(0,0,0,0.35)",
          ].join(", "),
          overflow: "hidden",
        }}
      >
        {/* Top specular sheen */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "8%",
            right: "8%",
            height: "55%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
            borderRadius: "999px",
          }}
        />
        {/* Side glints */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "20%",
            bottom: "20%",
            left: 2,
            width: 2,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
            borderRadius: "999px",
            filter: "blur(1px)",
          }}
        />
        <span style={{ position: "relative", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>
          Contact Me
        </span>
      </a>
    </div>
  );
}

/* ------------------------ LiveProjectButton ------------------------ */
function LiveProjectButton({ className = "", label = "Live Project" }) {
  return (
    <button
      className={
        "rounded-full border-2 font-medium uppercase tracking-widest " +
        "px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base " +
        "transition-colors duration-200 " +
        className
      }
      style={{ borderColor: "#D7E2EA", color: "#D7E2EA" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(215,226,234,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {label}
    </button>
  );
}

Object.assign(window, {
  FadeIn,
  Magnet,
  AnimatedText,
  ContactButton,
  LiveProjectButton,
  RevealHeading,
});
