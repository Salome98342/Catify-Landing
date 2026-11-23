import { Link } from 'react-router-dom';
import { plans, plansCopy } from '../../data/plans';
import { PlanCard } from '../plans/PlanCard';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';

export function PlansPreview() {
  return (
    <section className="band mint">
      <div className="wrap">
        <SectionHead
          className="reveal"
          eyebrow={plansCopy.previewEyebrow}
          title={plansCopy.previewTitle}
          description={plansCopy.previewIntro}
        />
        <Reveal className="plans">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </Reveal>
        <div className="more-plans">
          <Link className="link" to="/planes">
            {plansCopy.previewLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
