export function Logo({ small = false, variant = "dark" }: { small?: boolean; variant?: "dark" | "light" }) {
  const stroke = variant === "dark" ? "#0c0a09" : "#e8c896";
  const fill = variant === "dark" ? "#0c0a09" : "#e8c896";
  const subColor = variant === "dark" ? "#57534e" : "rgba(212,165,116,0.7)";
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 48 48" className={small ? "h-7 w-7" : "h-10 w-10"} aria-hidden>
        <circle cx="24" cy="24" r="22" fill="none" stroke={stroke} strokeWidth="1.5" />
        <text
          x="24" y="32" textAnchor="middle" fontFamily="serif"
          fontSize="22" fill={fill} fontWeight="500"
        >
          D
        </text>
      </svg>
      <div className="leading-none">
        <div
          className={`font-serif tracking-[0.18em] ${small ? "text-base" : "text-2xl"}`}
          style={{ color: fill }}
        >
          DOUCIER
        </div>
        {!small && (
          <div className="text-[10px] tracking-[0.35em] mt-1" style={{ color: subColor }}>
            DOCES GOURMET
          </div>
        )}
      </div>
    </div>
  );
}
