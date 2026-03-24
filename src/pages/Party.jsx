import ServiceCard from '../components/ServiceCard';
import { partyPackages } from '../data/services';

export default function Party() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Party Collection</p>
          <h1 className="display-lg">Electric Nights Await</h1>
          <p>Bachelor parties, surprise setups, and house party transformations.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Party Packages</p>
            <h2 className="headline-lg">Let's get the party started</h2>
          </div>
          <div className="grid grid-2">
            {partyPackages.map(p => <ServiceCard key={p.id} service={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
