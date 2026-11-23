import {
  contact,
  generalQuestionMessage,
  gmailComposeLink,
  whatsappLink,
} from '../../data/contact';
import { useCopy } from '../../hooks/useCopy';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

export function ContactSection() {
  const { status, copy } = useCopy();

  return (
    <section className="band mint" aria-labelledby="contact-title">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>{contact.contactEyebrow}</Eyebrow>
          <h2 id="contact-title">
            {contact.contactTitle.split('\n').map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal className="contact">
          <div className="panel">
            <Eyebrow>{contact.emailLabel}</Eyebrow>
            <p className="big">{contact.email}</p>
            <p className="status" aria-live="polite">
              {status('mail') || contact.emailStatus}
            </p>
            <div className="btn-row">
              <Button
                href={gmailComposeLink()}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="plain"
              >
                {contact.emailButton}
              </Button>
              <Button
                type="button"
                size="small"
                variant="soft"
                onClick={() => copy(contact.email, 'mail')}
              >
                {contact.copyEmail}
              </Button>
            </div>
          </div>
          <div className="panel">
            <Eyebrow>{contact.whatsappLabel}</Eyebrow>
            <p className="big">{contact.whatsappDisplay}</p>
            <p className="status" aria-live="polite">
              {status('wa') || contact.whatsappStatus}
            </p>
            <div className="btn-row">
              <Button
                href={whatsappLink(generalQuestionMessage)}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="plain"
              >
                {contact.whatsappButton}
              </Button>
              <Button
                type="button"
                size="small"
                variant="soft"
                onClick={() => copy(contact.whatsappDisplay, 'wa')}
              >
                {contact.copyWhatsapp}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
