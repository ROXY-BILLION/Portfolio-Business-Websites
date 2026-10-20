import SectionHeading from './SectionHeading';
import './Testimonials.css';

const testimonials = [
  { quote: 'Orbit helped us stop guessing and start growing. The strategy was clear, the creative felt like us, and the results followed.', name: 'Maya Roberts', role: 'Founder, Goodfolk Studio', initials: 'MR' },
  { quote: 'For the first time, our marketing feels connected. Every campaign has a purpose and we know what success looks like.', name: 'Daniel Okafor', role: 'Marketing Lead, Northstar', initials: 'DO' },
  { quote: 'They think like partners, not vendors. We have better visibility, better conversations, and a plan we can build on.', name: 'Amara James', role: 'Director, Bloom & Wild Co.', initials: 'AJ' }
];

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <SectionHeading
          label="Kind words"
          title={<>Good work is better <span className="text-gradient">together.</span></>}
          description="The best measure of our work is what changes for the people we work with."
        />
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <span className="testimonial-card__quote-mark" aria-hidden="true">“</span>
              <p className="testimonial-card__quote">{item.quote}</p>
              <div className="testimonial-card__person">
                <span className="testimonial-card__avatar">{item.initials}</span>
                <div><strong>{item.name}</strong><span>{item.role}</span></div>
              </div>
            </article>
          ))}
        </div>
        <p className="testimonials__disclaimer">Sample testimonials for the practice project.</p>
      </div>
    </section>
  );
}

export default Testimonials;
