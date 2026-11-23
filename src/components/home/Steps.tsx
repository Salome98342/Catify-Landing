import { homeSteps, homeStepsCopy } from '../../data/steps';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

export function Steps() {
  return (
    <section className="band mint">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>{homeStepsCopy.eyebrow}</Eyebrow>
          <h2>
            {homeStepsCopy.title.split('\n').map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal>
          <ol className="steps">
            {homeSteps.map((step, index) => (
              <li key={step.title}>
                <span className="num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
