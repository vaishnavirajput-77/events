import ServiceCard from '../components/ServiceCard';
import { babyShowerPackages } from '../data/services';

export default function BabyShower() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Baby Shower Collection</p>
          <h1 className="display-lg">Welcome New Beginnings</h1>
          <p>Adorable themed decorations for the sweetest celebration of new life.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Baby Shower Themes</p>
            <h2 className="headline-lg">Pick the perfect theme</h2>
          </div>
          <div className="grid grid-3">
            {babyShowerPackages.map(p => <ServiceCard key={p.id} service={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
