import { faqs, faqCopy } from '../data/faqs';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Reveal } from '../components/ui/Reveal';
import { FaqGroup } from '../components/faq/FaqGroup';
import type { CSSProperties } from 'react';

export function Faq() {
  return (
    <>
      <section className="band mint tight">
        <div className="wrap page-intro">
          <Eyebrow className="load-in">{faqCopy.eyebrow}</Eyebrow>
          <h1 className="load-in" style={{ '--d': '.1s' } as CSSProperties}>
            {faqCopy.title.split('\n').map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="lead load-in" style={{ '--d': '.2s' } as CSSProperties}>
            {faqCopy.intro}
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap faq-wrap">
          {faqs.map((group) => (
            <Reveal key={group.title}>
              <FaqGroup group={group} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
