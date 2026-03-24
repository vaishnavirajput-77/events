import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';
import { weddingPackages, weddingTierPackages, FALLBACK_IMAGE } from '../data/services';

const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

export default function Wedding() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Wedding Collection</p>
          <h1 className="display-lg">Your Dream Wedding, Curated</h1>
          <p>From engagement to reception, every ceremony deserves perfection.</p>
        </div>
      </section>

      {/* Ceremony Packages */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Ceremony Packages</p>
            <h2 className="headline-lg">Every ritual, perfectly planned</h2>
          </div>
          <div className="grid grid-3">
            {weddingPackages.map(p => <ServiceCard key={p.id} service={p} />)}
          </div>
        </div>
      </section>

      {/* Tier Packages */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Complete Packages</p>
            <h2 className="headline-lg">Choose your perfect wedding package</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)', alignItems: 'start' }}>
            {weddingTierPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: 'var(--surface-container-lowest)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-8)',
                  boxShadow: pkg.popular ? 'var(--shadow-glow)' : 'var(--shadow-card)',
                  border: pkg.popular ? '2px solid var(--primary)' : 'none',
                  position: 'relative',
                }}
              >
                {pkg.popular && (
                  <span style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--gradient-primary)', color: 'white', padding: '4px 20px',
                    borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700,
                  }}>
                    Most Popular
                  </span>
                )}
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                  <p className="label-lg" style={{ color: pkg.color, marginBottom: 'var(--space-2)' }}>{pkg.tier}</p>
                  <p className="price price-lg">{formatPrice(pkg.price)}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)' }}>Full wedding package</p>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                  {pkg.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.9375rem', color: 'var(--on-surface-variant)' }}>
                      <FiCheck style={{ color: 'var(--primary)', flexShrink: 0 }} /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/custom-builder" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                  Customize <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
