import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const categoryFilters = [
  { id: 'all', label: 'All Services' },
  { id: 'decoration', label: 'Decoration' },
  { id: 'catering', label: 'Catering' },
  { id: 'meals', label: 'Meals' },
  { id: 'photography', label: 'Photography' },
  { id: 'dj', label: 'DJ & Music' },
  { id: 'venue', label: 'Venue' },
];

export default function Services() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? services : services.filter(s => s.category === active);

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1492684223f8-e1f7e12e2f51?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Our Services</p>
          <h1 className="display-lg">Premium Event Services</h1>
          <p>From decoration to catering, we cover every detail of your celebration.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'var(--space-10)' }}>
            {categoryFilters.map(f => (
              <button key={f.id} className={`chip ${active === f.id ? 'chip-active' : 'chip-secondary'}`} onClick={() => setActive(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          <motion.div className="grid grid-3" layout>
            {filtered.map(s => <ServiceCard key={s.id} service={s} />)}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
