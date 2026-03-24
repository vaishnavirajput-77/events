import { motion } from 'framer-motion';
import { usePackage } from '../context/PackageContext';
import { addOnServices } from '../data/services';
import './AddOns.css';

const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

export default function AddOns() {
  const { selectedAddOns, toggleAddOn, totalPrice } = usePackage();

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero" style={{ minHeight: 300 }}>
        <img src="https://images.unsplash.com/photo-1492684223f8-e1f7e12e2f51?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Add-on Services</p>
          <h1 className="display-lg">Enhance Your Event</h1>
          <p>Toggle premium add-ons to make your celebration truly extraordinary.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="addons-layout">
            <div className="addons-grid">
              {addOnServices.map((addon, i) => {
                const isOn = selectedAddOns.find(a => a.id === addon.id);
                return (
                  <motion.div
                    key={addon.id}
                    className={`addon-card ${isOn ? 'addon-card--active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => toggleAddOn(addon)}
                  >
                    <div className="addon-header">
                      <span className="addon-icon">{addon.icon}</span>
                      <label className="toggle" onClick={e => e.stopPropagation()}>
                        <input type="checkbox" checked={!!isOn} onChange={() => toggleAddOn(addon)} />
                        <span className="toggle-slider" />
                      </label>
                    </div>
                    <h3 className="title-md">{addon.name}</h3>
                    <p className="body-md" style={{ color: 'var(--on-surface-variant)', margin: 'var(--space-2) 0 var(--space-4)' }}>{addon.description}</p>
                    <p className="price price-md">{formatPrice(addon.price)}</p>
                  </motion.div>
                );
              })}
            </div>

            {selectedAddOns.length > 0 && (
              <motion.div className="addons-summary" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 className="title-lg">Selected Add-ons</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', margin: 'var(--space-4) 0' }}>
                  {selectedAddOns.map(a => (
                    <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem' }}>
                      <span>{a.icon} {a.name}</span>
                      <span className="price">{formatPrice(a.price)}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(227,189,191,0.2)', paddingTop: 'var(--space-4)', display: 'flex', justifyContent: 'space-between' }}>
                  <span className="title-lg">Add-ons Total</span>
                  <span className="price price-lg">{formatPrice(selectedAddOns.reduce((s, a) => s + a.price, 0))}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
