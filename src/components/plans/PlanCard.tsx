import type { Plan } from '../../types';
import { Icon } from '../ui/Icon';

interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article className={`plan${plan.featured ? ' featured' : ''}`}>
      <span className="tag">{plan.tag}</span>
      <h3>{plan.name}</h3>
      <p className="sub">{plan.description}</p>
      <ul>
        {plan.features.map((feature) => (
          <li className={feature.included ? 'yes' : 'no'} key={feature.text}>
            <Icon name={feature.included ? 'check' : 'cross'} />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <p className="price-soon">{plan.price}</p>
    </article>
  );
}
