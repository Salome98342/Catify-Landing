import type { FaqGroup as FaqGroupData } from '../../types';

interface FaqGroupProps {
  group: FaqGroupData;
}

export function FaqGroup({ group }: FaqGroupProps) {
  return (
    <section className="faq-group">
      <h3>{group.title}</h3>
      {group.questions.map(({ question, answer }) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
}
