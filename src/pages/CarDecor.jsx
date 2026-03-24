import ServiceCard from '../components/ServiceCard';
import { carDecorPackages } from '../data/services';

export default function CarDecor() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Car Decor Collection</p>
          <h1 className="display-lg">Arrive in Style</h1>
          <p>Beautiful car decorations for weddings, anniversaries, and surprises.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Car Decor Packages</p>
            <h2 className="headline-lg">Make every ride special</h2>
          </div>
          <div className="grid grid-3">
            {carDecorPackages.map(p => <ServiceCard key={p.id} service={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
