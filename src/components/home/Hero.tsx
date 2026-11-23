import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { homeContent } from '../../data/home';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { BusinessStack } from './BusinessStack';

export function Hero() {
  return (
    <section className="hero">
      <div className="blob a" aria-hidden="true" />
      <div className="blob b" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <Eyebrow live className="load-in">
            {homeContent.eyebrow}
          </Eyebrow>
          <h1 aria-label={homeContent.titleAriaLabel}>
            <span className="mask" aria-hidden="true">
              <span style={{ '--d': '.1s' } as CSSProperties}>
                {homeContent.titleFirst}
              </span>
            </span>
            <span className="mask" aria-hidden="true">
              <span style={{ '--d': '.22s' } as CSSProperties}>
                {homeContent.titleSecond}
                <em>.</em>
              </span>
            </span>
          </h1>
          <p className="lead load-in" style={{ '--d': '.5s' } as CSSProperties}>
            {homeContent.heroDescription}
          </p>
          <div
            className="btn-row load-in"
            style={{ '--d': '.65s' } as CSSProperties}
          >
            <Button to="/lista-de-espera" arrow>
              {homeContent.waitlistButton}
            </Button>
            <Link className="link" to="/planes">
              {homeContent.plansLink}
            </Link>
          </div>
        </div>
        <BusinessStack />
      </div>
    </section>
  );
}
