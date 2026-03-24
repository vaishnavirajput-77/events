import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiCheck, FiInfo } from 'react-icons/fi';
import { usePackage } from '../context/PackageContext';
import { mealPackages, FALLBACK_IMAGE } from '../data/services';
import './Meals.css';

const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

const filters = [
  { id: 'all', label: 'All Meals' },
  { id: 'plate', label: 'Per Plate' },
  { id: 'counter', label: 'Live Counters' },
];

export default function Meals() {
  const [active, setActive] = useState('all');
  const { selectedServices, addService, removeService } = usePackage();

  const filtered = active === 'all'
    ? mealPackages
    : active === 'plate'
      ? mealPackages.filter(m => m.perPlate)
      : mealPackages.filter(m => !m.perPlate);

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Meals & Catering</p>
          <h1 className="display-lg">Delicious Food for Every Occasion</h1>
          <p>From authentic Indian thalis to live counters — feed your guests like royalty.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Info Banner */}
          <motion.div className="meals-info" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <FiInfo style={{ fontSize: '1.25rem', color: 'var(--primary)', flexShrink: 0 }} />
            <div>
              <p><strong>Per Plate</strong> items have a minimum order of 50 plates. <strong>Live Counters</strong> are flat-rate for up to 100 guests.</p>
            </div>
          </motion.div>

          {/* Filters */}
          <div className="meals-filters">
            {filters.map(f => (
              <button key={f.id} className={`chip ${active === f.id ? 'chip-active' : 'chip-secondary'}`} onClick={() => setActive(f.id)}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Meal Cards */}
          <div className="meals-grid">
            {filtered.map((meal, i) => {
              const isAdded = selectedServices.find(s => s.id === meal.id);
              return (
                <motion.div
                  key={meal.id}
                  className="meal-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="meal-card-img-wrap">
                    <img src={meal.image} alt={meal.name} className="meal-card-img" onError={e => e.target.src = FALLBACK_IMAGE} loading="lazy" />
                    {meal.perPlate && <span className="meal-badge">Per Plate</span>}
                    {!meal.perPlate && <span className="meal-badge meal-badge--counter">Live Counter</span>}
                  </div>
                  <div className="meal-card-body">
                    <h3 className="meal-card-name">{meal.name}</h3>
                    <p className="meal-card-desc">{meal.description}</p>

                    <div className="meal-card-items">
                      {meal.items.map((item, j) => <span key={j} className="meal-item-chip">{item}</span>)}
                    </div>

                    <div className="meal-card-footer">
                      <div className="meal-price-wrap">
                        <span className="price price-lg">{formatPrice(meal.price)}</span>
                        {meal.perPlate && <span className="meal-price-label">/ plate</span>}
                      </div>
                      <button
                        className={`btn ${isAdded ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                        onClick={() => isAdded ? removeService(meal.id) : addService(meal)}
                      >
                        {isAdded ? <><FiCheck /> Added</> : <><FiPlus /> Add to Package</>}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
