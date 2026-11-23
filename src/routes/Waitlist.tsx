import { waitlistMessage, whatsappLink } from '../data/contact';
import { waitlistContent } from '../data/waitlist';
import { Button } from '../components/ui/Button';
import { Checklist } from '../components/ui/Checklist';
import { CopyButton } from '../components/ui/CopyButton';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Reveal } from '../components/ui/Reveal';
import type { CSSProperties } from 'react';
import { useCopy } from '../hooks/useCopy';

export function Waitlist() {
  const { copy, status } = useCopy();

  return (
    <>
      <section className="band mint tight">
        <div className="wrap page-intro">
          <Eyebrow live className="load-in">
            {waitlistContent.eyebrow}
          </Eyebrow>
          <h1 className="load-in" style={{ '--d': '.1s' } as CSSProperties}>
            {waitlistContent.title.split('\n').map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="lead load-in" style={{ '--d': '.2s' } as CSSProperties}>
            {waitlistContent.intro}
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap split">
          <Reveal className="section-head" style={{ margin: 0 }}>
            <Eyebrow>{waitlistContent.messageEyebrow}</Eyebrow>
            <h2>{waitlistContent.messageTitle}</h2>
            <Checklist
              items={waitlistContent.fields}
              style={{ fontSize: 17 }}
            />
          </Reveal>
          <Reveal className="panel">
            <div className="template">{waitlistContent.template}</div>
            <div className="btn-row">
              <Button
                href={whatsappLink(waitlistMessage)}
                target="_blank"
                rel="noopener noreferrer"
                arrow
              >
                {waitlistContent.whatsappButton}
              </Button>
              <CopyButton
                onCopy={() => copy(waitlistContent.template, 'waitlist')}
                label={waitlistContent.copyButton}
              />
            </div>
            <p className="status" aria-live="polite">
              {status('waitlist')}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
