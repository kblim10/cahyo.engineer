import { philosophyStatement } from '../../data';

export function PhilosophyStrip() {
  const text = `${philosophyStatement} — `;
  const repeated = text.repeat(4);

  return (
    <div className="philosophy-strip" aria-hidden="true">
      <div className="philosophy-track">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  );
}
