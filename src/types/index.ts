export interface PlanFeature {
  included: boolean;
  text: string;
}

export interface Plan {
  name: string;
  tag: string;
  description: string;
  price: string;
  featured?: boolean;
  features: PlanFeature[];
}

export interface FaqGroup {
  title: string;
  questions: { question: string; answer: string }[];
}

export interface Step {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: 'bag' | 'cart' | 'list' | 'palette';
}
