const beams = [
  { left: '4%', delay: '-2s', duration: '16s' },
  { left: '13%', delay: '-8s', duration: '20s' },
  { left: '24%', delay: '-12s', duration: '18s' },
  { left: '36%', delay: '-5s', duration: '22s' },
  { left: '49%', delay: '-15s', duration: '19s' },
  { left: '61%', delay: '-9s', duration: '24s' },
  { left: '73%', delay: '-18s', duration: '17s' },
  { left: '86%', delay: '-6s', duration: '21s' },
]

export function BackgroundBeams() {
  return (
    <div className="background-beams" aria-hidden>
      {beams.map((beam) => (
        <span
          key={beam.left}
          className="background-beam"
          style={{
            left: beam.left,
            animationDelay: beam.delay,
            animationDuration: beam.duration,
          }}
        />
      ))}
    </div>
  )
}
