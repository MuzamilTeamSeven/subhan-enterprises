export function BackgroundDepth() {
  return (
    <div className="bg-depth" aria-hidden="true">
      <div className="bg-depth__glow bg-depth__glow--tl" />
      <div className="bg-depth__glow bg-depth__glow--tr" />
      <div className="bg-depth__glow bg-depth__glow--center" />
      <div className="bg-depth__glow bg-depth__glow--bl" />
      <div className="bg-depth__glow bg-depth__glow--br" />
      <div className="bg-depth__grid" />
      <div className="bg-depth__vignette" />
    </div>
  )
}
