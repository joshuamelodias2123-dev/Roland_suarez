// The "release ripple" — the brand's signature mark.
// variant: "light" (on pine/dark bg) | "dark" (on linen/light bg) | "mono" (single-color, e.g. on clay)
export default function RippleMark({ size = 78, variant = "dark", className = "" }) {
  const palettes = {
    light: { dot: "#C97B5A", arc1: "#F2EDE4", arc2: "#7A9B8E", arc3: "#7A9B8E" },
    dark: { dot: "#C97B5A", arc1: "#1F3A34", arc2: "#7A9B8E", arc3: "#7A9B8E" },
    mono: { dot: "#1F3A34", arc1: "#1F3A34", arc2: "#1F3A34", arc3: "#1F3A34" },
  };
  const c = palettes[variant] || palettes.dark;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="66" r="6" fill={c.dot} />
      <path d="M28 60 A24 24 0 0 1 72 60" stroke={c.arc1} strokeWidth="3.4" strokeLinecap="round" fill="none" />
      <path d="M18 56 A36 36 0 0 1 82 56" stroke={c.arc2} strokeWidth="3.4" strokeLinecap="round" fill="none" opacity={variant === "mono" ? 0.6 : 1} />
      <path d="M9 52 A47 47 0 0 1 91 52" stroke={c.arc3} strokeWidth="3.4" strokeLinecap="round" fill="none" opacity={variant === "mono" ? 0.3 : 0.5} />
    </svg>
  );
}
