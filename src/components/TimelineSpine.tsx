export default function TimelineSpine() {
  return (
    <div className="fixed pointer-events-none absolute left-350 top-80 z-20 -translate-x-1/2 h-70 w-[2px]">
      <div className="relative h-full w-full bg-white">
        <div className="absolute inset-0 -m-1 bg-white/70 blur-sm" />
        <div className="absolute inset-0 -m-6 bg-white/30 blur-2xl" />
        <div className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full bg-white/70 blur-md animate-[sparkDown_2.4s_linear_infinite]" />
      </div>
    </div>
  );
}
