interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
