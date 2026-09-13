// The periodic beam from the "Holographic Glass" design direction: a narrow
// band of light sweeping across the page, on an endless loop. Pure CSS
// (see .animate-sweep / @keyframes sweep in globals.css), and hidden
// entirely under prefers-reduced-motion via that same stylesheet.
export function LightSweep() {
  return (
    <div className="fixed inset-0 z-40 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="animate-sweep absolute -left-[14%] -top-[20%] -bottom-[20%] w-[14%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,240,255,0.28) 45%, rgba(0,240,255,0.5), rgba(0,240,255,0.28) 55%, transparent)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  )
}
