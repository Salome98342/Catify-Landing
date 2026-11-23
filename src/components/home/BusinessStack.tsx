import { homeContent } from '../../data/home';
import type { CSSProperties } from 'react';

export function BusinessStack() {
  return (
    <div className="stack" aria-label={homeContent.businessesLabel}>
      {homeContent.businesses.map((business) => (
        <div
          className="load-in"
          style={{ '--d': business.delay } as CSSProperties}
          key={business.name}
        >
          <div
            className="mini"
            style={{ '--f': business.float } as CSSProperties}
          >
            <div className="ltr">{business.initial}</div>
            <div className="txt">
              <small>{business.kind}</small>
              <b>{business.name}</b>
            </div>
          </div>
        </div>
      ))}
      <p
        className="stack-note load-in"
        style={{ '--d': '1s' } as CSSProperties}
      >
        {homeContent.businessNote}
      </p>
    </div>
  );
}
