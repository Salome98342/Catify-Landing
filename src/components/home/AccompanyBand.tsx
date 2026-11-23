import { services } from '../../data/services';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { Checklist } from '../ui/Checklist';

export function AccompanyBand() {
  return (
    <section className="band night">
      <div className="wrap split">
        <Reveal className="section-head" style={{ margin: 0 }}>
          <Eyebrow>{services.homeEyebrow}</Eyebrow>
          <h2>{services.homeTitle}</h2>
          <p className="lead">{services.homeDescription}</p>
          <div>
            <Button to="/del-valle-te-acompana" variant="inverse" arrow>
              {services.homeButton}
            </Button>
          </div>
        </Reveal>
        <Reveal className="home-service-list">
          <Checklist items={services.homeItems} style={{ fontSize: 18 }} />
        </Reveal>
      </div>
    </section>
  );
}
