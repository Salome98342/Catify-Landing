import { Link } from 'react-router-dom';
import { plans, plansCopy } from '../data/plans';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { PlanCard } from '../components/plans/PlanCard';
import { PlansTable } from '../components/plans/PlansTable';
import type { CSSProperties } from 'react';

export function Plans() {
  return (
    <>
      <section className="band mint tight">
        <div className="wrap page-intro">
          <span className="eyebrow load-in">{plansCopy.eyebrow}</span>
          <h1 className="load-in" style={{ '--d': '.1s' } as CSSProperties}>
            {plansCopy.title}
          </h1>
          <p className="lead load-in" style={{ '--d': '.2s' } as CSSProperties}>
            {plansCopy.intro}
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <Reveal className="plans">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </Reveal>
          <Reveal className="section-head comparison-head">
            <h2>{plansCopy.compareTitle}</h2>
          </Reveal>
          <Reveal>
            <PlansTable />
          </Reveal>
          <div className="btn-row plans-actions">
            <Button to="/lista-de-espera" arrow>
              {plansCopy.waitlistButton}
            </Button>
            <Link className="link" to="/del-valle-te-acompana">
              {plansCopy.accompanyLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
