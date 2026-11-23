import { plansComparison } from '../../data/plans';

export function PlansTable() {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            {plansComparison.headings.map((heading, index) => (
              <th key={`${heading}-${index}`}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plansComparison.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <td key={cell}>{cell}</td>
                ) : (
                  <td key={`${row[0]}-${index}`}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
