import ServiceCard from '../components/ServiceCard';
import { birthdayPackages } from '../data/services';

export default function Birthday() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Birthday Collection</p>
          <h1 className="display-lg">Celebrate Every Year in Style</h1>
          <p>From surprise setups to grand themed parties, make every birthday unforgettable.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Birthday Packages</p>
            <h2 className="headline-lg">Choose the perfect celebration</h2>
          </div>
          <div className="grid grid-2">
            {birthdayPackages.map(p => <ServiceCard key={p.id} service={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
