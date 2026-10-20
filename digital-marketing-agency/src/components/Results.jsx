import SectionHeading from './SectionHeading';
import './Results.css';

const metrics = [
  { value: '4.8×', label: 'Average client return', note: 'More value from every campaign' },
  { value: '62%', label: 'Lower cost per lead', note: 'Less waste, better targeting' },
  { value: '2.4M+', label: 'People reached', note: 'Attention from the right audience' },
  { value: '91%', label: 'Client retention', note: 'Partnerships built to last' }
];

function Results() {
  return (
    <section className="section results" id="results">
      <div className="container">
        <SectionHeading
          label="The impact"
          title={<>Numbers that tell a <span className="text-gradient">better story.</span></>}
          description="Great creative earns attention. Smart strategy turns that attention into meaningful business outcomes."
        />
        <div className="results__grid">
          {metrics.map((metric) => (
            <article className="result-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <h3>{metric.label}</h3>
              <p>{metric.note}</p>
            </article>
          ))}
        </div>
        <p className="results__disclaimer">Illustrative agency metrics for this demo project.</p>
      </div>
    </section>
  );
}

export default Results;
