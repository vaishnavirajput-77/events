import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiCheck, FiShoppingBag, FiArrowRight, FiTrash2, FiSave, FiX } from 'react-icons/fi';
import { usePackage } from '../context/PackageContext';
import { services, addOnServices, categories, FALLBACK_IMAGE } from '../data/services';
import confetti from 'canvas-confetti';
import './CustomBuilder.css';

const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

// Popular service IDs for "🔥 Popular choice" badge
const POPULAR_IDS = ['s1', 's2', 's4', 's7', 's9'];

// Theme colors per event type
const eventThemes = {
  birthday: { accent: '#e91e63', glow: 'rgba(233,30,99,0.20)', label: '🎂 Birthday Vibes' },
  wedding: { accent: '#c2185b', glow: 'rgba(194,24,91,0.18)', label: '💍 Wedding Elegance' },
  anniversary: { accent: '#ad1457', glow: 'rgba(173,20,87,0.18)', label: '💝 Anniversary Glow' },
  'baby-shower': { accent: '#e8a0bf', glow: 'rgba(232,160,191,0.22)', label: '👶 Baby Shower Pastels' },
  party: { accent: '#f50057', glow: 'rgba(245,0,87,0.18)', label: '🎉 Party Energy' },
};

export default function CustomBuilder() {
  const {
    eventType, setEventType, selectedServices, addService, removeService,
    selectedAddOns, toggleAddOn, totalPrice, savePackage, clearPackage
  } = usePackage();
  const [step, setStep] = useState(eventType ? 2 : 1);
  const [saved, setSaved] = useState(false);
  const [previewService, setPreviewService] = useState(null);
  const [toast, setToast] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [hoverPreview, setHoverPreview] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const theme = eventThemes[eventType] || eventThemes.birthday;

  // Show micro-feedback toast
  const showToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  }, []);

  const handleSave = () => {
    if (selectedServices.length === 0) return;
    savePackage({
      id: Date.now(),
      eventType,
      services: selectedServices,
      addOns: selectedAddOns,
      totalPrice,
      date: new Date().toISOString(),
    });
    setSaved(true);
    fireSaveConfetti();
    setShowSuccessPopup(true);
    setTimeout(() => { setSaved(false); setShowSuccessPopup(false); }, 3500);
  };

  // Small burst confetti for adding a service
  const fireAddConfetti = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 35,
      spread: 55,
      startVelocity: 20,
      origin: { x, y },
      colors: ['#e91e63', '#f8bbd0', '#ffd700', '#ffffff', '#ff6090'],
      ticks: 80,
      scalar: 0.8,
      gravity: 1.2,
      disableForReducedMotion: true,
    });
  }, []);

  // Grand confetti for Save Package
  const fireSaveConfetti = useCallback(() => {
    const duration = 1500;
    const end = Date.now() + duration;
    const colors = ['#e91e63', '#f8bbd0', '#ffd700', '#ffffff', '#ff6090', '#c2185b'];
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
        disableForReducedMotion: true,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  // Hover preview handlers
  const handleHoverEnter = useCallback((s, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverPreview({ ...s, x: rect.left - 180, y: rect.top - 40 });
    }, 400);
  }, []);

  const handleHoverLeave = useCallback(() => {
    clearTimeout(hoverTimeoutRef.current);
    setHoverPreview(null);
  }, []);

  const recommendations = services
    .filter(s => !selectedServices.find(sel => sel.id === s.id))
    .slice(0, 3);

  // Dynamic CSS variable for theme
  const themeStyle = eventType ? {
    '--theme-accent': theme.accent,
    '--theme-glow': theme.glow,
  } : {};

  return (
    <div className={`builder ${eventType ? `builder--theme-${eventType}` : ''}`} style={{ paddingTop: 72, ...themeStyle }}>
      <section className="page-hero" style={{ minHeight: 300 }}>
        <img src="https://images.unsplash.com/photo-1492684223f8-e1f7e12e2f51?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Custom Package Builder</p>
          <h1 className="display-lg">Build Your Dream Event</h1>
          <p>Select services, toggle add-ons, and watch your package come to life.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="builder-layout">
            {/* Main Panel */}
            <div className="builder-main">
              {/* Step Indicators */}
              <div className="builder-steps">
                {['Event Type', 'Services', 'Add-ons'].map((label, i) => (
                  <button
                    key={i}
                    className={`builder-step ${step >= i + 1 ? 'builder-step--active' : ''} ${step === i + 1 ? 'builder-step--current' : ''}`}
                    onClick={() => setStep(i + 1)}
                  >
                    <span className="builder-step-num">{i + 1}</span>
                    <span className="builder-step-label">{label}</span>
                  </button>
                ))}
              </div>

              {/* Step 1: Event Type */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                    <h2 className="headline-md" style={{ marginBottom: 'var(--space-6)' }}>What are you celebrating?</h2>
                    <div className="builder-event-grid">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          className={`builder-event-card ${eventType === cat.id ? 'builder-event-card--active' : ''}`}
                          onClick={() => { setEventType(cat.id); setStep(2); }}
                        >
                          <span className="builder-event-icon">{cat.icon}</span>
                          <span className="builder-event-name">{cat.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Services */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                    <h2 className="headline-md" style={{ marginBottom: 'var(--space-6)' }}>Choose your services</h2>
                    {eventType && <p className="builder-theme-label">{theme.label}</p>}
                    <div className="builder-services-grid">
                      {services.map(s => {
                        const isAdded = selectedServices.find(sel => sel.id === s.id);
                        const isPopular = POPULAR_IDS.includes(s.id);
                        return (
                          <motion.div
                            key={s.id}
                            className={`builder-service-item ${isAdded ? 'builder-service-item--active' : ''}`}
                            whileHover={{ scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          >
                            {isPopular && <span className="builder-popular-badge">🔥 Popular</span>}
                            <img src={s.image} alt={s.name} className="builder-service-img" onError={e => e.target.src = FALLBACK_IMAGE} onClick={() => setPreviewService(s)} style={{ cursor: 'pointer' }} />
                            <div className="builder-service-info" onClick={() => setPreviewService(s)} style={{ cursor: 'pointer' }}>
                              <h4>{s.name}</h4>
                              <p className="price">{formatPrice(s.price)}</p>
                            </div>
                            <button
                              className={`btn btn-sm ${isAdded ? 'btn-secondary' : 'btn-primary'}`}
                              onClick={(e) => {
                                if (isAdded) {
                                  removeService(s.id);
                                } else {
                                  addService(s);
                                  fireAddConfetti(e);
                                  showToast(`✨ ${s.name} added to your package`);
                                }
                              }}
                            >
                              {isAdded ? <FiMinus /> : <FiPlus />}
                            </button>
                          </motion.div>
                        );
                      })}
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
                      <button className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
                      <button className="btn btn-primary" onClick={() => setStep(3)}>Continue to Add-ons <FiArrowRight /></button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Add-ons */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                    <h2 className="headline-md" style={{ marginBottom: 'var(--space-6)' }}>Enhance with add-ons</h2>
                    <div className="builder-addons-grid">
                      {addOnServices.map(addon => {
                        const isOn = selectedAddOns.find(a => a.id === addon.id);
                        return (
                          <div key={addon.id} className={`builder-addon-card ${isOn ? 'builder-addon-card--active' : ''}`} onClick={() => toggleAddOn(addon)}>
                            <div className="builder-addon-header">
                              <span className="builder-addon-icon">{addon.icon}</span>
                              <label className="toggle">
                                <input type="checkbox" checked={!!isOn} onChange={() => toggleAddOn(addon)} />
                                <span className="toggle-slider" />
                              </label>
                            </div>
                            <h4>{addon.name}</h4>
                            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-2)' }}>{addon.description}</p>
                            <p className="price">{formatPrice(addon.price)}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
                      <button className="btn btn-secondary" onClick={() => setStep(2)}>Back</button>
                    </div>

                    {/* Recommendations */}
                    {recommendations.length > 0 && (
                      <div style={{ marginTop: 'var(--space-10)' }}>
                        <h3 className="title-lg" style={{ marginBottom: 'var(--space-4)' }}>✨ You may also like...</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
                          {recommendations.map(s => (
                            <div key={s.id} className="builder-service-item">
                              <img src={s.image} alt={s.name} className="builder-service-img" onError={e => e.target.src = FALLBACK_IMAGE} />
                              <div className="builder-service-info">
                                <h4>{s.name}</h4>
                                <p className="price">{formatPrice(s.price)}</p>
                              </div>
                              <button className="btn btn-primary btn-sm" onClick={() => addService(s)}><FiPlus /></button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Summary */}
            <div className="builder-sidebar">
              <div className="builder-summary">
                <h3 className="title-lg" style={{ marginBottom: 'var(--space-4)' }}>
                  <FiShoppingBag style={{ marginRight: 8 }} /> Package Summary
                </h3>
                {eventType && (
                  <div className="builder-summary-row">
                    <span className="label-md">Event Type</span>
                    <span className="chip chip-primary" style={{ textTransform: 'capitalize' }}>{eventType}</span>
                  </div>
                )}
                {selectedServices.length > 0 && (
                  <>
                    <p className="label-md" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>Services</p>
                    <AnimatePresence>
                      {selectedServices.map(s => (
                        <motion.div
                          key={s.id}
                          className="builder-summary-item"
                          initial={{ opacity: 0, x: -20, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: 'auto' }}
                          exit={{ opacity: 0, x: 20, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div
                            className="builder-summary-item-left"
                            onClick={() => setPreviewService(s)}
                            onMouseEnter={(e) => handleHoverEnter(s, e)}
                            onMouseLeave={handleHoverLeave}
                            style={{ cursor: 'pointer' }}
                          >
                            <img
                              src={s.image}
                              alt={s.name}
                              className="builder-summary-thumb"
                              onError={e => e.target.src = FALLBACK_IMAGE}
                            />
                            <span className="builder-summary-name">{s.name}</span>
                          </div>
                          <div className="builder-summary-item-right">
                            <span className="price">{formatPrice(s.price)}</span>
                            <button className="builder-remove" onClick={() => removeService(s.id)}><FiTrash2 /></button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </>
                )}
                {selectedAddOns.length > 0 && (
                  <>
                    <p className="label-md" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>Add-ons</p>
                    <AnimatePresence>
                      {selectedAddOns.map(a => (
                        <motion.div
                          key={a.id}
                          className="builder-summary-item"
                          initial={{ opacity: 0, x: -20, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: 'auto' }}
                          exit={{ opacity: 0, x: 20, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="builder-summary-item-left">
                            <span className="builder-summary-addon-icon">{a.icon}</span>
                            <span className="builder-summary-name">{a.name}</span>
                          </div>
                          <div className="builder-summary-item-right">
                            <span className="price">{formatPrice(a.price)}</span>
                            <button className="builder-remove" onClick={() => toggleAddOn(a)}><FiTrash2 /></button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </>
                )}
                <div className="builder-total">
                  <span className="title-lg">Total</span>
                  <span className="price price-lg">{formatPrice(totalPrice)}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
                  <button className="btn btn-primary" onClick={handleSave} disabled={selectedServices.length === 0}>
                    <FiSave /> {saved ? 'Saved!' : 'Save Package'}
                  </button>
                  <button className="btn btn-secondary" onClick={clearPackage}>Clear All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-feedback Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="builder-toast"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            className="builder-success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessPopup(false)}
          >
            <motion.div
              className="builder-success-popup"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', damping: 15, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="builder-success-check">
                <motion.svg
                  viewBox="0 0 52 52"
                  width="72"
                  height="72"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="26" cy="26" r="24"
                    fill="none"
                    stroke="#e91e63"
                    strokeWidth="3"
                    variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.path
                    fill="none"
                    stroke="#e91e63"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27 l8 8 l16-16"
                    variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  />
                </motion.svg>
              </div>
              <h3 className="headline-md">Package Saved!</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-2)' }}>
                Your custom event package has been saved successfully ✅
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Image Preview Tooltip */}
      <AnimatePresence>
        {hoverPreview && (
          <motion.div
            className="builder-hover-preview"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            style={{ top: hoverPreview.y, left: Math.max(8, hoverPreview.x) }}
          >
            <img src={hoverPreview.image} alt={hoverPreview.name} onError={e => e.target.src = FALLBACK_IMAGE} />
            <p>{hoverPreview.name}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {previewService && (
          <motion.div
            className="builder-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewService(null)}
          >
            <motion.div
              className="builder-modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="builder-modal-close" onClick={() => setPreviewService(null)}>
                <FiX />
              </button>
              <img
                src={previewService.image}
                alt={previewService.name}
                className="builder-modal-img"
                onError={e => e.target.src = FALLBACK_IMAGE}
              />
              <div className="builder-modal-body">
                <h3 className="headline-md">{previewService.name}</h3>
                {previewService.description && (
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-2)' }}>
                    {previewService.description}
                  </p>
                )}
                <p className="price price-lg" style={{ marginTop: 'var(--space-4)' }}>{formatPrice(previewService.price)}</p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
                  {selectedServices.find(sel => sel.id === previewService.id) ? (
                    <button className="btn btn-secondary" onClick={() => { removeService(previewService.id); setPreviewService(null); }}>
                      <FiMinus /> Remove from Package
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => { addService(previewService); setPreviewService(null); }}>
                      <FiPlus /> Add to Package
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
