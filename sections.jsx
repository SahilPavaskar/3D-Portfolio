/* global React, Motion */
const { useRef: useRefS, useEffect: useEffectS, useState: useStateS } = React;
const { motion: motionS, useScroll: useScrollS, useTransform: useTransformS } = window.Motion;

const NAV_LINKS = ["About", "Experience", "Projects"];

/* Inline lucide-style icons */
const IconUserPlus = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </svg>
);
const IconLogIn = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

/* ============================== NAV ============================== */
function GlassNav() {
  return (
    <FadeIn delay={0} y={-20}>
      <nav className="relative z-30 w-full px-6 md:px-10 pt-5 md:pt-6">
        <div className="flex items-center justify-between w-full gap-6">
          {/* Brand */}
          <a
            href="#"
            className="font-medium tracking-tight whitespace-nowrap"
            style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 1.4vw, 1.25rem)" }}
          >
            Sahil<sup style={{ fontSize: "0.55em", opacity: 0.6, marginLeft: "2px" }}>™</sup>
          </a>

          {/* Center liquid-glass pill */}
          <div className="hidden md:block relative">
            <div
              className="relative flex items-center gap-1 p-1.5 rounded-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(40,42,48,0.55) 0%, rgba(40,42,48,0.25) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: [
                  "inset 0 1px 0 rgba(255,255,255,0.35)",
                  "inset 0 -1px 0 rgba(255,255,255,0.08)",
                  "0 20px 50px rgba(0,0,0,0.55)",
                  "0 2px 6px rgba(0,0,0,0.4)",
                ].join(", "),
              }}
            >
              {/* Top inner highlight blob — mimics specular reflection */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{
                  top: "-40%",
                  left: "10%",
                  right: "10%",
                  height: "120%",
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 60%)",
                  filter: "blur(6px)",
                }}
              />
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={"#" + link.toLowerCase().replace(/\s+/g, "-")}
                  className="relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:bg-white/[0.08]"
                  style={{ color: "#F5F8FB" }}
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-transform duration-200 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(180deg, #1f1f24 0%, #07070a 100%)",
                  color: "#F5F8FB",
                  border: "1px solid rgba(255,255,255,0.16)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.18), 0 4px 12px rgba(0,0,0,0.5)",
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-5 md:gap-7" style={{ color: "#D7E2EA" }}>
            <a
              href="mailto:sahilpavaskar81@gmail.com"
              className="hidden sm:flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            >
              <IconUserPlus />
              <span>Hire Me</span>
            </a>
            <a
              href="assets/Sahil_Pavaskar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            >
              <IconLogIn />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </FadeIn>
  );
}

/* ============================= HERO ============================= */
function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex flex-col"
      style={{ overflowX: "clip", background: "#000000" }}
      data-screen-label="01 Hero"
    >
      <GlassNav />

      {/* Heading */}
      <div className="relative z-20 mt-6 sm:mt-4 md:-mt-5 overflow-hidden w-full">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
            style={{ fontSize: "clamp(3rem, 17.5vw, 30rem)" }}
          >
            <span className="block text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] leading-none">
              Hi, i&apos;m sahil
            </span>
          </h1>
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[320px] sm:w-[460px] md:w-[600px] lg:w-[720px] xl:w-[820px]">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src="assets/portrait.png"
              alt="Sahil — portrait"
              className="w-full block select-none pointer-events-none"
              style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))" }}
            />
          </FadeIn>
        </Magnet>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: "#D7E2EA", fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a security engineer hardening systems by breaking them first
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================ MARQUEE ============================ */
/* Curated palette — pulls from the same accent vocabulary as the navbar +
 * contact button, so the marquee feels part of the system instead of a
 * random rainbow. */
const TILE_ACCENTS = [
  "#A78BFA", // violet
  "#5EEAD4", // mint
  "#F472B6", // pink
  "#60A5FA", // azure
  "#FCD34D", // amber
];

const SEC_TOOLS = [
  "Burp Suite", "Nmap", "Metasploit", "Wireshark", "Kali Linux", "Frida", "Ghidra",
  "BloodHound", "Mimikatz", "Cobalt Strike", "OWASP ZAP", "John the Ripper",
  "Hashcat", "sqlmap", "Hydra", "Nikto", "Nessus", "Splunk", "Suricata",
  "Volatility", "Radare2",
];
const MARQUEE_PLACEHOLDERS = SEC_TOOLS.map((label, i) => ({
  id: i,
  label,
  color: TILE_ACCENTS[i % TILE_ACCENTS.length],
}));

function MarqueeTile({ item }) {
  const c = item.color;
  return (
    <div
      className="shrink-0 relative"
      style={{ width: "420px", height: "270px", overflow: "visible" }}
    >
      {/* Soft colored glow behind/under the card — extends past edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-30px",
          left: "-20px",
          right: "-20px",
          bottom: "-50px",
          background: `radial-gradient(ellipse 60% 50% at 50% 95%, ${c}cc 0%, ${c}55 30%, ${c}00 70%)`,
          filter: "blur(28px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Dark glass card */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: "28px",
          background: `linear-gradient(135deg, rgba(18,18,22,0.92) 0%, rgba(14,14,18,0.85) 45%, ${c}25 100%)`,
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: [
            "inset 0 1.5px 0 rgba(255,255,255,0.25)",
            `inset 0 -1.5px 0 ${c}aa`,
            "inset 0 0 60px rgba(0,0,0,0.4)",
            "0 24px 50px rgba(0,0,0,0.55)",
          ].join(", "),
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Top sheen */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "40%",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Index */}
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 28,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "rgba(245,248,251,0.45)",
          }}
        >
          / {String(item.id + 1).padStart(2, "0")}
        </div>

        {/* Category mini-label, color-tinted */}
        <div
          style={{
            position: "absolute",
            top: 26,
            right: 28,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "10px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: c,
            textShadow: `0 0 12px ${c}99`,
          }}
        >
          ● daily
        </div>

        {/* Tool name */}
        <div
          style={{
            position: "absolute",
            left: 28,
            bottom: 36,
            right: 28,
            color: "#F5F8FB",
            fontWeight: 500,
            fontSize: "clamp(30px, 2.6vw, 42px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          {item.label}
        </div>

        {/* Bottom color hairline accent — like the reference's LED rim */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 28,
            right: 28,
            bottom: 20,
            height: 2,
            borderRadius: 999,
            background: `linear-gradient(90deg, ${c} 0%, ${c}55 60%, transparent 100%)`,
            boxShadow: `0 0 12px ${c}cc`,
          }}
        />
      </div>
    </div>
  );
}

function MarqueeSection() {
  const sectionRef = useRefS(null);
  const [offset, setOffset] = useStateS(0);

  useEffectS(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const o = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(o);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row1 = MARQUEE_PLACEHOLDERS.slice(0, 11);
  const row2 = MARQUEE_PLACEHOLDERS.slice(11);
  const row1Triple = [...row1, ...row1, ...row1];
  const row2Triple = [...row2, ...row2, ...row2];

  const totalW1 = row1.length * (420 + 32);
  const totalW2 = row2.length * (420 + 32);
  const x1 = ((offset - 200) % totalW1 + totalW1) % totalW1;
  const x2 = ((offset - 200) % totalW2 + totalW2) % totalW2;

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 relative"
      style={{ background: "#000000", overflow: "hidden" }}
      data-screen-label="02 Stack"
    >
      <div className="flex flex-col gap-8 relative" style={{ paddingTop: 30, paddingBottom: 50 }}>
        <div className="flex gap-8" style={{ transform: `translateX(${-totalW1 + x1}px)`, willChange: "transform" }}>
          {row1Triple.map((item, i) => (
            <MarqueeTile key={"a" + i} item={item} />
          ))}
        </div>
        <div className="flex gap-8" style={{ transform: `translateX(${-x2}px)`, willChange: "transform" }}>
          {row2Triple.map((item, i) => (
            <MarqueeTile key={"b" + i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================= ABOUT ============================= */
const JOURNEY = [
  {
    year: "2020",
    chapter: "01 / Foundations",
    title: "Bachelor's begins",
    body:
      "Started B.S. in Computer Science at Mumbai University. First real exposure to networking, operating-system internals, and the C/C++ stack that everything else builds on.",
    accent: "#A78BFA",
  },
  {
    year: "2021",
    chapter: "02 / Origin",
    title: "Cloud Security Intern",
    body:
      "Six months at BKC Health Center hardening a hybrid-cloud HIPAA environment — IAM least-privilege, Terraform controls, container baselines, automated misconfig scanning.",
    accent: "#5EEAD4",
  },
  {
    year: "2022",
    chapter: "03 / Profession",
    title: "Security Software Engineer",
    body:
      "Two years at Deven Infotech leading STRIDE threat models across 8 microservices, building Python and Java tooling into GitHub Actions, and cutting SAST false positives by 40%.",
    accent: "#F472B6",
  },
  {
    year: "2024",
    chapter: "04 / Mastery",
    title: "Master's at Cal State",
    body:
      "Started an M.S. in Computer Science at Cal State East Bay while going deeper on web exploitation, applied cryptography, and authentication protocol research — Security+ in hand.",
    accent: "#60A5FA",
  },
  {
    year: "2026",
    chapter: "05 / Build",
    title: "Shipping tooling",
    body:
      "Open-sourcing what I wished existed during engagements — Cloud Identity Attack-Path Analyzer, GuardDuty auto-response pipelines, AI-assisted PR review. AWS SA in hand, OSCP+ this summer.",
    accent: "#FCD34D",
  },
];

function JourneyTimeline() {
  const sectionRef = useRefS(null);
  const pathRef = useRefS(null);
  const [pos, setPos] = useStateS({ x: 0, y: 200 });
  const [endY, setEndY] = useStateS(800);

  // Measure the about section's top so we can map scrollY → progress.
  useEffectS(() => {
    function measure() {
      // Walk up to the closest <section id="about"> for the trigger point.
      let el = sectionRef.current;
      while (el && el.id !== "about") el = el.parentElement;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Animation completes when the section's bottom hits the viewport top.
      setEndY(rect.top + window.scrollY + rect.height * 0.85);
    }
    measure();
    const t = setTimeout(measure, 300);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  // Tie orb position directly to scroll. As the user scrolls from the hero
  // toward (and through) the about section, the orb travels along the wave.
  useEffectS(() => {
    function update() {
      if (!pathRef.current) return;
      const y = window.scrollY;
      const progress = Math.max(0, Math.min(1, y / Math.max(1, endY)));
      try {
        const len = pathRef.current.getTotalLength();
        const pt = pathRef.current.getPointAtLength(progress * len);
        setPos({ x: pt.x, y: pt.y });
      } catch (e) {}
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [endY]);

  // 5-oscillation wave: peak, trough, peak, trough, peak
  const pathD =
    "M 0 200 C 40 60 200 60 240 200 C 280 340 440 340 480 200 C 520 60 680 60 720 200 C 760 340 920 340 960 200 C 1000 60 1160 60 1200 200";

  const milestones = JOURNEY.map((j, i) => ({
    ...j,
    x: 120 + i * 240,
    dotY: i % 2 === 0 ? 90 : 310,
    above: i % 2 === 0,
  }));

  return (
    <div ref={sectionRef} className="w-full max-w-7xl">
      {/* Desktop wave timeline */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1200 440"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
        >
          <defs>
            <filter id="jt-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="b1" />
              <feGaussianBlur stdDeviation="2" in="SourceGraphic" result="b2" />
              <feMerge>
                <feMergeNode in="b1" />
                <feMergeNode in="b2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="jt-wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="25%" stopColor="#5EEAD4" />
              <stop offset="50%" stopColor="#F472B6" />
              <stop offset="75%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#FCD34D" />
            </linearGradient>
            <radialGradient id="jt-orb" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#A7F3D0" />
              <stop offset="35%" stopColor="#A78BFA" />
              <stop offset="75%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </radialGradient>
          </defs>

          {/* Wide colored glow underlay */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#jt-wave)"
            strokeWidth="4"
            filter="url(#jt-glow)"
            opacity="0.8"
          />
          {/* Crisp white wave */}
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.5"
          />

          {/* Milestone dots */}
          {milestones.map((m) => (
            <g key={`dot-${m.year}`}>
              <circle cx={m.x} cy={m.dotY} r="14" fill={m.accent} opacity="0.25" filter="url(#jt-glow)" />
              <circle cx={m.x} cy={m.dotY} r="7" fill={m.accent} />
              <circle cx={m.x} cy={m.dotY} r="3" fill="#fff" />
            </g>
          ))}

          {/* Year + chapter labels */}
          {milestones.map((m) => {
            const yYear = m.above ? m.dotY - 40 : m.dotY + 55;
            const yChapter = m.above ? m.dotY - 65 : m.dotY + 78;
            return (
              <g key={`label-${m.year}`} textAnchor="middle">
                <text
                  x={m.x}
                  y={yChapter}
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  fontSize="11"
                  letterSpacing="2.5"
                  fill="rgba(245,248,251,0.55)"
                >
                  {m.chapter.toUpperCase()}
                </text>
                <text
                  x={m.x}
                  y={yYear}
                  fontFamily="Kanit, sans-serif"
                  fontWeight="700"
                  fontSize="36"
                  fill={m.accent}
                  style={{ filter: `drop-shadow(0 0 6px ${m.accent}99)` }}
                >
                  {m.year}
                </text>
              </g>
            );
          })}

          {/* Iridescent orb riding the wave */}
          <g>
            <circle
              cx={pos.x}
              cy={pos.y}
              r="46"
              fill="url(#jt-orb)"
              opacity="0.3"
              filter="url(#jt-glow)"
            />
            <circle
              cx={pos.x}
              cy={pos.y}
              r="30"
              fill="url(#jt-orb)"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
            />
            <ellipse
              cx={pos.x - 8}
              cy={pos.y - 10}
              rx="10"
              ry="7"
              fill="rgba(255,255,255,0.5)"
            />
          </g>
        </svg>

        {/* Body text columns aligned to milestones */}
        <div className="grid grid-cols-5 gap-3 lg:gap-6 mt-4 sm:mt-6">
          {milestones.map((m) => (
            <div key={`body-${m.year}`} className="text-center px-2">
              <h3
                className="font-medium mb-2 sm:mb-3"
                style={{
                  color: "#F5F8FB",
                  fontSize: "clamp(1rem, 1.4vw, 1.3rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {m.title}
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{
                  color: "rgba(245,248,251,0.65)",
                  fontSize: "clamp(0.78rem, 0.95vw, 0.95rem)",
                }}
              >
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden flex flex-col gap-10 mt-4 relative pl-2">
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 17,
            top: 14,
            bottom: 14,
            width: 2,
            background:
              "linear-gradient(180deg, #A78BFA 0%, #5EEAD4 25%, #F472B6 50%, #60A5FA 75%, #FCD34D 100%)",
            opacity: 0.7,
            boxShadow: "0 0 12px rgba(167,139,250,0.5)",
          }}
        />
        {milestones.map((m) => (
          <div key={`m-${m.year}`} className="relative pl-12">
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 11,
                top: 6,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: m.accent,
                boxShadow: `0 0 14px ${m.accent}cc, 0 0 28px ${m.accent}66`,
              }}
            />
            <div
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: m.accent,
              }}
            >
              {m.chapter}
            </div>
            <div
              className="font-bold mt-1"
              style={{
                color: m.accent,
                fontSize: "1.6rem",
                letterSpacing: "-0.02em",
                textShadow: `0 0 12px ${m.accent}88`,
              }}
            >
              {m.year}
            </div>
            <h3
              className="font-medium mt-2"
              style={{ color: "#F5F8FB", fontSize: "1.15rem", letterSpacing: "-0.01em" }}
            >
              {m.title}
            </h3>
            <p
              className="font-light leading-relaxed mt-2"
              style={{ color: "rgba(245,248,251,0.65)", fontSize: "0.92rem" }}
            >
              {m.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32"
      style={{ background: "#000000", overflow: "hidden" }}
      data-screen-label="03 About"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10 w-full">
        <FadeIn delay={0} y={40}>
          <RevealHeading
            className="font-black uppercase tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </RevealHeading>
        </FadeIn>

        <AnimatedText
          text="Security Engineer with 2+ years building security into software and cloud infrastructure — STRIDE threat models, vulnerability discovery, identity and crypto controls. I bridge offensive findings into clear engineering fixes, and ship security tooling so the next finding gets caught automatically."
          className="font-medium text-center leading-relaxed"
          style={{
            color: "#D7E2EA",
            maxWidth: "640px",
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
          }}
        />

        <JourneyTimeline />

        <FadeIn delay={0.1} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================== EXPERIENCE =========================== */
const EXPERIENCES = [
  {
    n: "01",
    title: "Threat Modeling & Design Reviews",
    subtitle: "STRIDE · microservices · auth flows",
    detail:
      "Led STRIDE threat models across 8 microservices at Deven Infotech, catching authentication flaws, weak cryptographic configurations, and insecure deployment practices before they ever reached production.",
    color: "#A78BFA",
  },
  {
    n: "02",
    title: "Vulnerability Discovery",
    subtitle: "Web · APIs · bug bounty",
    detail:
      "Hunted authentication bypass, SSRF, and injection vulnerabilities across internal web apps and external bug bounty programs — building proof-of-concept exploits to demonstrate business impact to product and engineering.",
    color: "#F472B6",
  },
  {
    n: "03",
    title: "Security Automation",
    subtitle: "CI/CD · SAST/DAST · Python · Java",
    detail:
      "Built Python and Java tooling in GitHub Actions to catch exposed secrets, insecure dependencies, and identity misconfigurations automatically. Tuned SAST rules to cut false positives by 40% across a 12-engineer org.",
    color: "#60A5FA",
  },
  {
    n: "04",
    title: "Cloud Security",
    subtitle: "AWS · IAM · GuardDuty · Terraform",
    detail:
      "Hardened AWS environments end-to-end — Terraform-managed IAM least-privilege, GuardDuty-driven incident response, VPC and container baselines, and continuous misconfig scanning that cut manual assessment time by 30%.",
    color: "#5EEAD4",
  },
  {
    n: "05",
    title: "Applied Cryptography & Identity",
    subtitle: "TLS · OAuth 2.0 · SAML · OIDC",
    detail:
      "Audited TLS configurations, OAuth 2.0 / SAML / OIDC integrations, and certificate hygiene. Built a Python tool that flags weak ciphers, expired certs, and insecure TLS versions with structured remediation steps.",
    color: "#FCD34D",
  },
];

function ExperienceCard({ exp, isActive, onActivate }) {
  const c = exp.color;
  return (
    <motionS.button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      initial={false}
      animate={{ flexGrow: isActive ? 9 : 1 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      className="relative h-full overflow-hidden flex-shrink-0 text-left"
      style={{
        flexBasis: 0,
        minWidth: 80,
        borderRadius: 32,
        cursor: "pointer",
        outline: "none",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.08) 100%)",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.22)",
        boxShadow: [
          "inset 0 1.5px 0 rgba(255,255,255,0.45)",
          "inset 0 -1px 0 rgba(255,255,255,0.08)",
          "0 24px 50px rgba(0,0,0,0.55)",
          "0 4px 10px rgba(0,0,0,0.3)",
        ].join(", "),
      }}
      aria-expanded={isActive}
    >
      {/* Soft colored glow inside, bottom-right — gives the glass a tint */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-15%",
          width: "75%",
          height: "85%",
          background: `radial-gradient(circle, ${c}55 0%, transparent 65%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      {/* Colored bottom hairline — picks up the card's accent like an LED */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "12%",
          right: "12%",
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`,
          boxShadow: `0 0 14px ${c}cc`,
          pointerEvents: "none",
        }}
      />
      {/* Top specular sheen */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "8%",
          right: "8%",
          height: "32%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* COLLAPSED — vertical strip */}
      <motionS.div
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex flex-col items-center justify-between py-8"
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "rgba(245,248,251,0.55)",
          }}
        >
          {exp.n}
        </div>
        <div
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "Kanit, sans-serif",
            fontSize: "clamp(14px, 1.2vw, 18px)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#F5F8FB",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {exp.title}
        </div>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: c,
            boxShadow: `0 0 14px ${c}cc`,
          }}
        />
      </motionS.div>

      {/* EXPANDED — full content */}
      <motionS.div
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, delay: isActive ? 0.25 : 0 }}
        className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-10"
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "13px",
              letterSpacing: "0.3em",
              color: "rgba(245,248,251,0.55)",
            }}
          >
            / {exp.n}
          </div>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 999,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: c,
              background: `${c}15`,
              border: `1px solid ${c}55`,
              backdropFilter: "blur(8px)",
              textShadow: `0 0 8px ${c}66`,
            }}
          >
            ● focus area
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-xl">
          <h3
            style={{
              color: "#F5F8FB",
              fontSize: "clamp(1.8rem, 3.4vw, 3rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {exp.title}
          </h3>
          <p
            style={{
              color: "rgba(245,248,251,0.7)",
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              fontWeight: 300,
              lineHeight: 1.55,
              maxWidth: "44ch",
            }}
          >
            {exp.detail}
          </p>
          <div
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: c,
              opacity: 0.85,
              marginTop: 4,
            }}
          >
            {exp.subtitle}
          </div>
        </div>
      </motionS.div>
    </motionS.button>
  );
}

function ExperienceSection() {
  const [active, setActive] = useStateS(0);

  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative"
      style={{ background: "#000000" }}
      data-screen-label="04 Experience"
    >
      <FadeIn delay={0} y={40}>
        <div className="text-center">
          <RevealHeading
            className="font-black uppercase tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Experience
          </RevealHeading>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-center mx-auto mt-6 sm:mt-8"
          style={{
            color: "rgba(245,248,251,0.55)",
            fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)",
            fontWeight: 300,
            maxWidth: "520px",
            lineHeight: 1.6,
          }}
        >
          Hover any pillar to see what I&apos;ve actually been doing for the last six years.
        </p>
      </FadeIn>

      <div
        className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-20 flex gap-3 sm:gap-4"
        style={{
          height: "clamp(380px, 56vh, 560px)",
        }}
      >
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard
            key={exp.n}
            exp={exp}
            isActive={active === i}
            onActivate={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}

/* ========================= CERTIFICATIONS ======================== */
const CERT_PALETTE = ["#A78BFA", "#F472B6", "#5EEAD4", "#FCD34D", "#60A5FA"];
const CERTS = [
  {
    code: "OSCP+",
    name: "Offensive Security Certified Professional+",
    issuer: "OffSec",
    year: "Jun 2026",
    color: CERT_PALETTE[0],
  },
  {
    code: "AWS SAA",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "Apr 2026",
    color: CERT_PALETTE[1],
  },
  {
    code: "SEC+",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "Feb 2025",
    color: CERT_PALETTE[2],
  },
  {
    code: "M.S. CS",
    name: "Master of Science in Computer Science",
    issuer: "Cal State East Bay",
    year: "May 2026",
    color: CERT_PALETTE[3],
  },
  {
    code: "B.S. CS",
    name: "Bachelor of Science in Computer Science",
    issuer: "Mumbai University",
    year: "May 2024",
    color: CERT_PALETTE[4],
  },
];

function CertificationsSection() {
  return (
    <section
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-[5] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-28 md:pb-36"
      style={{ background: "#000000" }}
      data-screen-label="05 Certifications"
    >
      <FadeIn delay={0} y={40}>
        <div className="text-center">
          <RevealHeading
            className="font-black uppercase tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Credentials
          </RevealHeading>
        </div>
      </FadeIn>

      <div
        className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-28 grid gap-4 sm:gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
      >
        {CERTS.map((c, i) => (
          <FadeIn key={c.code} delay={i * 0.06} y={24}>
            <motionS.div
              whileHover={{ y: -10, scale: 1.025 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="group relative p-6 sm:p-7 md:p-8 flex flex-col gap-4 sm:gap-5 h-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.08) 100%)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "28px",
                boxShadow: [
                  "inset 0 1.5px 0 rgba(255,255,255,0.45)",
                  "inset 0 -1px 0 rgba(255,255,255,0.08)",
                  "0 24px 50px rgba(0,0,0,0.55)",
                  "0 4px 10px rgba(0,0,0,0.3)",
                ].join(", "),
              }}
            >
              {/* Soft colored glow inside, bottom-right */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-25%",
                  right: "-20%",
                  width: "85%",
                  height: "95%",
                  background: `radial-gradient(circle, ${c.color}55 0%, transparent 65%)`,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />
              {/* Top specular sheen */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "8%",
                  right: "8%",
                  height: "40%",
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 70%)",
                  pointerEvents: "none",
                }}
              />
              {/* Bottom LED hairline in the card's color */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "14%",
                  right: "14%",
                  height: 2,
                  background: `linear-gradient(90deg, transparent 0%, ${c.color} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${c.color}cc`,
                  pointerEvents: "none",
                }}
              />
              <div className="flex items-start justify-between gap-4 relative">
                <span
                  className="font-black uppercase leading-none"
                  style={{
                    color: "#F5F8FB",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.code}
                </span>
                <span
                  className="font-light tracking-widest"
                  style={{
                    color: c.color,
                    fontSize: "0.75rem",
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    textShadow: `0 0 10px ${c.color}99`,
                  }}
                >
                  {c.year}
                </span>
              </div>
              <p
                className="font-light leading-snug relative"
                style={{
                  color: "rgba(245,248,251,0.78)",
                  fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                }}
              >
                {c.name}
              </p>
              <div
                className="mt-auto pt-4 uppercase tracking-widest relative flex items-center gap-2"
                style={{
                  color: "rgba(245,248,251,0.55)",
                  fontSize: "0.7rem",
                  borderTop: `1px solid ${c.color}33`,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: c.color,
                    boxShadow: `0 0 8px ${c.color}cc`,
                  }}
                />
                {c.issuer}
              </div>
            </motionS.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* =========================== PROJECTS ============================ */
const IconGithub = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.06.79 2.15v3.18c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);
const IconArrowUR = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="8 7 17 7 17 16" />
  </svg>
);

const PROJECTS = [
  {
    n: "01",
    date: "May 2026",
    name: "Cloud Identity Attack Path Analyzer",
    intro:
      "Built an offline security engineering tool that finds risky AWS IAM and OAuth/OIDC configurations, then explains how they can become attack paths.",
    bullets: [
      "Detects overly permissive IAM policies, privilege-escalation permissions, sts:AssumeRole paths, broad GitHub Actions OIDC trusts, and risky OAuth client settings.",
      "Generates human-readable reports, machine-readable JSON findings, and Mermaid attack graphs for CI-friendly identity risk review.",
    ],
    github: "https://github.com/",
    accent: "#A78BFA",
    tags: ["AWS IAM", "OAuth / OIDC", "Python", "Mermaid"],
  },
  {
    n: "02",
    date: "Mar 2026",
    name: "AWS GuardDuty Automated Incident Response Pipeline",
    intro:
      "Built a hands-on AWS cloud security lab that detects suspicious GuardDuty findings and responds through an event-driven workflow.",
    bullets: [
      "Routes GuardDuty findings through EventBridge into a Python Lambda response function that alerts through SNS and can stop affected EC2 instances above a severity threshold.",
      "Provisioned the workflow with Terraform and designed least-privilege IAM permissions for CloudWatch logging, SNS publishing, EC2 inspection, and optional remediation.",
    ],
    github: "https://github.com/",
    accent: "#5EEAD4",
    tags: ["GuardDuty", "EventBridge", "Lambda", "Terraform", "SNS"],
  },
  {
    n: "03",
    date: "May 2026",
    name: "AI-Powered Code Security Reviewer",
    intro:
      "Built a Python CLI and GitHub Actions workflow that reviews pull request diffs with deterministic AppSec checks and optional OpenAI-assisted analysis.",
    bullets: [
      "Scans git diffs for hardcoded secrets, unsafe deserialization, shell injection risk, broad exception swallowing, SQL string construction, and missing test coverage signals.",
      "Produces terminal, Markdown, and JSON review output for local use or CI, and posts pull-request feedback through a GitHub Actions workflow with optional model-backed reasoning.",
    ],
    github: "https://github.com/",
    accent: "#F472B6",
    tags: ["Python", "GitHub Actions", "OpenAI", "AppSec"],
  },
];

function GithubButton({ href, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center gap-2 transition-transform duration-200 hover:scale-[1.04] overflow-hidden"
      style={{
        padding: "12px 22px",
        borderRadius: 999,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: "0.8rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#F5F8FB",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.08) 100%)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        border: `1px solid ${accent}66`,
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.4)",
          "inset 0 -1px 0 rgba(255,255,255,0.06)",
          `0 0 18px ${accent}55`,
          "0 8px 24px rgba(0,0,0,0.4)",
        ].join(", "),
      }}
    >
      <span aria-hidden="true" style={{ color: accent, display: "inline-flex" }}>
        <IconGithub />
      </span>
      <span style={{ position: "relative" }}>View on GitHub</span>
      <span aria-hidden="true" style={{ color: accent, display: "inline-flex" }}>
        <IconArrowUR />
      </span>
    </a>
  );
}

function ProjectCard({ project, index, total, scrollYProgress }) {
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransformS(scrollYProgress, [index / total, 1], [1, targetScale]);
  const c = project.accent;

  return (
    <div className="h-[90vh] flex items-start justify-center sticky" style={{ top: 0 }}>
      <motionS.div
        className="sticky top-24 md:top-32 w-full relative overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: "clamp(36px, 4vw, 56px)",
          boxShadow: [
            "inset 0 1.5px 0 rgba(255,255,255,0.45)",
            "inset 0 -1px 0 rgba(255,255,255,0.08)",
            "0 30px 60px rgba(0,0,0,0.55)",
            "0 4px 10px rgba(0,0,0,0.3)",
          ].join(", "),
          top: `calc(6rem + ${index * 28}px)`,
          scale,
          transformOrigin: "top center",
          minHeight: "clamp(520px, 70vh, 760px)",
        }}
      >
        {/* Soft colored glow inside, bottom-right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-12%",
            width: "65%",
            height: "85%",
            background: `radial-gradient(circle, ${c}45 0%, transparent 65%)`,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        {/* Secondary halo top-left */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-15%",
            left: "-10%",
            width: "45%",
            height: "55%",
            background: `radial-gradient(circle, ${c}25 0%, transparent 65%)`,
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
        {/* Top specular sheen */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "8%",
            right: "8%",
            height: "30%",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Bottom LED hairline */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: "20%",
            right: "20%",
            height: 2,
            background: `linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`,
            boxShadow: `0 0 14px ${c}cc`,
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col h-full gap-6 sm:gap-8 md:gap-10">
          {/* Top row: number + date + tags */}
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-6 sm:gap-8 md:gap-10 flex-wrap">
              <div
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 120px)",
                  color: "transparent",
                  WebkitTextStroke: `1.5px ${c}bb`,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.n}
              </div>
              <div className="flex flex-col gap-3">
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: 6,
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: c,
                    background: `${c}15`,
                    border: `1px solid ${c}55`,
                    width: "fit-content",
                    textShadow: `0 0 10px ${c}66`,
                  }}
                >
                  {project.date}
                </span>
                <span
                  className="uppercase tracking-widest font-light"
                  style={{ color: "rgba(245,248,251,0.5)", fontSize: "clamp(0.7rem, 1vw, 0.85rem)" }}
                >
                  Personal project
                </span>
              </div>
            </div>
            {project.tags && (
              <div className="flex flex-wrap gap-2 max-w-md justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 999,
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(245,248,251,0.7)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Title */}
          <h3
            style={{
              color: "#F5F8FB",
              fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              maxWidth: "20ch",
            }}
          >
            {project.name}
          </h3>

          {/* Intro */}
          <p
            style={{
              color: "rgba(245,248,251,0.78)",
              fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.55,
              maxWidth: "60ch",
            }}
          >
            {project.intro}
          </p>

          {/* Bullets */}
          <ul className="flex flex-col gap-4 sm:gap-5">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-4 items-start"
                style={{ maxWidth: "70ch" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: 10,
                    height: 10,
                    marginTop: 8,
                    background: c,
                    boxShadow: `0 0 12px ${c}cc`,
                    borderRadius: 2,
                  }}
                />
                <span
                  style={{
                    color: "rgba(245,248,251,0.7)",
                    fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>

          {/* GitHub button */}
          <div className="mt-auto pt-4">
            <GithubButton href={project.github} accent={c} />
          </div>
        </div>
      </motionS.div>
    </div>
  );
}

/* ============================ CONTACT ============================ */
function ProjectsSection() {
  const ref = useRefS(null);
  const { scrollYProgress } = useScrollS({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: "#000000" }}
      data-screen-label="06 Projects"
    >
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <RevealHeading
            className="font-black uppercase tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Projects
          </RevealHeading>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p
          className="text-center mx-auto mb-12 sm:mb-16 md:mb-20"
          style={{
            color: "rgba(245,248,251,0.55)",
            fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)",
            fontWeight: 300,
            maxWidth: "560px",
            lineHeight: 1.6,
          }}
        >
          A handful of personal builds where I&apos;ve put security ideas into running code.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.n}
            project={p}
            index={i}
            total={PROJECTS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 border-t"
      style={{ background: "#000000", borderColor: "rgba(215,226,234,0.1)" }}
      data-screen-label="07 Contact"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <div className="text-center">
            <RevealHeading
              className="font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Let&apos;s talk
            </RevealHeading>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p
            className="font-light text-center leading-relaxed uppercase tracking-wide"
            style={{
              color: "#D7E2EA",
              maxWidth: "560px",
              fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)",
              opacity: 0.7,
            }}
          >
            Have a system you want stress-tested? A breach you need triaged? Drop a line.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
            {[
              { label: "github.com/SahilPavaskar", href: "https://github.com/SahilPavaskar" },
              { label: "linkedin.com/in/sahil-pavaskar", href: "https://www.linkedin.com/in/sahil-pavaskar-325b851b0/" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden transition-transform duration-200 hover:scale-[1.04]"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 18px",
                  borderRadius: 999,
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(245,248,251,0.9)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.08) 100%)",
                  backdropFilter: "blur(18px) saturate(160%)",
                  WebkitBackdropFilter: "blur(18px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  boxShadow: [
                    "inset 0 1px 0 rgba(255,255,255,0.4)",
                    "inset 0 -1px 0 rgba(255,255,255,0.06)",
                    "0 12px 28px rgba(0,0,0,0.45)",
                    "0 2px 6px rgba(0,0,0,0.25)",
                  ].join(", "),
                }}
              >
                {/* Top sheen */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    right: "10%",
                    height: "55%",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 100%)",
                    pointerEvents: "none",
                    borderRadius: "999px",
                  }}
                />
                <span style={{ position: "relative" }}>{l.label}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

Object.assign(window, {
  HeroSection,
  MarqueeSection,
  AboutSection,
  ExperienceSection,
  CertificationsSection,
  ProjectsSection,
  ContactSection,
});
