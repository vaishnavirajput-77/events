import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, FALLBACK_IMAGE } from '../data/services';
import './Gallery.css';

const cats = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'anniversary', label: 'Anniversary' },
  { id: 'baby-shower', label: 'Baby Shower' },
  { id: 'party', label: 'Party' },
  { id: 'haldi', label: 'Haldi' },
  { id: 'mehndi', label: 'Mehndi' },
  { id: 'mandap', label: 'Mandap' },
  { id: 'stage', label: 'Stage' },
  { id: 'car-decor', label: 'Car Decor' },
  { id: 'home-decor', label: 'Home Decor' },
  { id: 'entry-gate', label: 'Entry Gate' },
  { id: 'meals', label: 'Meals' },
];

export default function Gallery() {
  const [active, setActive] = useState('wedding');
  const [lightbox, setLightbox] = useState(null);

  const images = galleryImages[active] || [];

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero" style={{ minHeight: 300 }}>
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Our Portfolio</p>
          <h1 className="display-lg">Real Celebrations, Real Emotions</h1>
          <p>Browse our curated collection of events we've brought to life.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {cats.map(c => (
              <button key={c.id} className={`chip ${active === c.id ? 'chip-active' : 'chip-secondary'}`} onClick={() => setActive(c.id)}>
                {c.label}
              </button>
            ))}
          </div>

          <motion.div className="gallery-grid" layout>
            <AnimatePresence>
              {images.map((img, i) => (
                <motion.div
                  key={img}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setLightbox(img)}
                >
                  <img src={img} alt={`${active} event ${i + 1}`} onError={e => e.target.src = FALLBACK_IMAGE} loading="lazy" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <motion.img src={lightbox} alt="" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onError={e => e.target.src = FALLBACK_IMAGE} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
