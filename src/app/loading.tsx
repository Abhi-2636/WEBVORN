export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07100d] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="ambient-beam opacity-30 top-[30%] left-[30%]" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Sleek rotating ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-[rgba(255,255,255,0.05)]" />
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#34d399] animate-spin"
            style={{
              animationDuration: "0.8s",
            }}
          />
        </div>

        {/* Loading text pulse */}
        <span
          className="text-sm font-medium tracking-widest text-[#34d399] uppercase animate-pulse"
          style={{
            fontFamily: "var(--font-outfit)",
            textShadow: "0 0 10px rgba(52, 211, 153, 0.3)",
          }}
        >
          Loading...
        </span>
      </div>
    </div>
  );
}
