import ServiceCard from '../components/ServiceCard';
import { homeDecorPackages } from '../data/services';

export default function HomeDecor() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Home Decor Collection</p>
          <h1 className="display-lg">Transform Your Space</h1>
          <p>Romantic rooms, proposal setups, and festival decorations delivered to your doorstep.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Home Decor Packages</p>
            <h2 className="headline-lg">Your home, our canvas</h2>
          </div>
          <div className="grid grid-2">
            {homeDecorPackages.map(p => <ServiceCard key={p.id} service={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
