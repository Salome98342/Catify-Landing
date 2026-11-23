import { businessKinds, businessKindsLabel } from '../../data/business-kinds';

export function Marquee() {
  return (
    <div className="marquee" aria-label={businessKindsLabel}>
      <div className="track">
        {[0, 1].map((copy) => (
          <div className="track-copy" aria-hidden={copy === 1} key={copy}>
            {businessKinds.map((kind) => (
              <span className="chip" key={`${copy}-${kind}`}>
                {kind}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
