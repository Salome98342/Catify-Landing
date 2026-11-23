import { features, featuresCopy } from '../../data/features';
import { Icon } from '../ui/Icon';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

export function Features() {
  return (
    <section className="band">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>{featuresCopy.eyebrow}</Eyebrow>
          <h2>
            {featuresCopy.title.split('\n').map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal className="features">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <Icon name={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
