export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <div className={`flex items-center gap-1.5`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Mnmlst"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="8"
          className={`stroke-foreground/70`}
          strokeWidth="1.25"
        />
        <path
          d="M10 24 L10 12 L18 20 L26 12 L26 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
