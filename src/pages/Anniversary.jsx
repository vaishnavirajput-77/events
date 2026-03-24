import ServiceCard from '../components/ServiceCard';
import { anniversaryPackages } from '../data/services';

export default function Anniversary() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Anniversary Collection</p>
          <h1 className="display-lg">Timeless Love, Celebrated</h1>
          <p>Romantic setups that speak the language of love for your special day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Anniversary Packages</p>
            <h2 className="headline-lg">Rekindle the magic</h2>
          </div>
          <div className="grid grid-2">
            {anniversaryPackages.map(p => <ServiceCard key={p.id} service={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
