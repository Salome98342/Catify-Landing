import { services } from '../data/services';
import { accompanyMessage, whatsappLink } from '../data/contact';
import { Button } from '../components/ui/Button';
import { Checklist } from '../components/ui/Checklist';
import { CopyButton } from '../components/ui/CopyButton';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Reveal } from '../components/ui/Reveal';
import type { CSSProperties } from 'react';
import { useCopy } from '../hooks/useCopy';

export function Accompany() {
  const { copy, status } = useCopy();

  return (
    <>
      <section className="band mint tight">
        <div className="wrap page-intro">
          <Eyebrow className="load-in">{services.pageEyebrow}</Eyebrow>
          <h1 className="load-in" style={{ '--d': '.1s' } as CSSProperties}>
            {services.pageTitle.split('\n').map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="lead load-in" style={{ '--d': '.2s' } as CSSProperties}>
            {services.pageIntro}
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap split">
          <Reveal className="section-head" style={{ margin: 0 }}>
            <Eyebrow>{services.includesEyebrow}</Eyebrow>
            <h2>{services.includesTitle}</h2>
            <Checklist items={services.items} style={{ fontSize: 17 }} />
          </Reveal>
          <Reveal>
            <ol className="steps steps-vertical">
              {services.stepsTitle.map((step, index) => (
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
      <section className="band mint">
        <div className="wrap split">
          <Reveal className="section-head" style={{ margin: 0 }}>
            <Eyebrow>{services.ideaEyebrow}</Eyebrow>
            <h2>{services.ideaTitle}</h2>
            <p className="lead">{services.ideaDescription}</p>
            <Checklist items={services.ideaItems} />
          </Reveal>
          <Reveal className="panel">
            <div className="template">{services.message}</div>
            <div className="btn-row">
              <Button
                href={whatsappLink(accompanyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                arrow
              >
                {services.whatsappButton}
              </Button>
              <CopyButton
                onCopy={() => copy(services.message, 'idea')}
                label={services.messageButton}
              />
            </div>
            <p className="status" aria-live="polite">
              {status('idea')}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
