import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';
import { categories, trendingPackages, services, testimonials, FALLBACK_IMAGE } from '../data/services';
import './Home.css';

const heroSlides = [
  { image: 'https://lh3.googleusercontent.com/d/19Dnot_BIIFsZ6bEIevPfzl67Qtt271Q3=w1400', title: 'Make Your Events Magical', subtitle: 'Curating high-end digital experiences for life\'s most precious celebrations.' },
  { image: 'https://lh3.googleusercontent.com/d/12y2Fe5RkMvmlqBCp_bWYmdGuaVWE7TSw=w1400', title: 'Luxury Celebrations', subtitle: 'From intimate anniversaries to grand weddings, we craft every detail.' },
  { image: 'https://lh3.googleusercontent.com/d/1BnbKauymyDE2CYHXyy6a_-zeh0nFg9gJ=w1400', title: 'Unforgettable Moments', subtitle: 'Transform your vision into stunning reality with EventDhara Pro.' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(s => (s + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide(s => (s - 1 + heroSlides.length) % heroSlides.length);

  const artisticServices = services.filter((_, i) => i < 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={heroSlides[currentSlide].image} alt="" className="hero-bg" onError={e => e.target.src = FALLBACK_IMAGE} />
            <div className="hero-overlay" />
            <div className="hero-content container">
              <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="label-md hero-label">✦ The Digital Curator</motion.p>
              <motion.h1 initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4}} className="display-lg hero-title">{heroSlides[currentSlide].title}</motion.h1>
              <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.6}} className="hero-subtitle">{heroSlides[currentSlide].subtitle}</motion.p>
              <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.8}} className="hero-actions">
                <Link to="/custom-builder" className="btn btn-primary btn-lg">Book Now <FiArrowRight /></Link>
                <Link to="/services" className="btn btn-outline btn-lg" style={{color:'white', borderColor:'rgba(255,255,255,0.3)'}}>Explore Services</Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button className="hero-nav hero-nav--prev" onClick={prevSlide} aria-label="Previous"><FiChevronLeft /></button>
        <button className="hero-nav hero-nav--next" onClick={nextSlide} aria-label="Next"><FiChevronRight /></button>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button key={i} className={`hero-dot ${i === currentSlide ? 'hero-dot--active' : ''}`} onClick={() => setCurrentSlide(i)} aria-label={`Slide ${i+1}`} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Curated Categories</p>
            <h2 className="headline-lg">Every celebration deserves a unique aesthetic</h2>
            <p>Explore our bespoke event themes crafted for perfection.</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}>
                <Link to={`/${cat.id}`} className="cat-card">
                  <img src={cat.image} alt={cat.name} className="cat-card-img" onError={e => e.target.src = FALLBACK_IMAGE} />
                  <div className="cat-card-overlay" />
                  <div className="cat-card-content">
                    <span className="cat-card-icon">{cat.icon}</span>
                    <h3 className="cat-card-name">{cat.name}</h3>
                    <p className="cat-card-tagline">{cat.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Packages */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Trending Packages</p>
            <h2 className="headline-lg">Highly coveted collections</h2>
            <p>Curated by our top stylists for unforgettable celebrations.</p>
          </div>
          <div className="trending-grid">
            {trendingPackages.map((pkg, i) => (
              <motion.div key={pkg.id} className="trending-card" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}}>
                <div className="trending-card-img-wrap">
                  <img src={pkg.image} alt={pkg.name} className="trending-card-img" onError={e => e.target.src = FALLBACK_IMAGE} />
                </div>
                <div className="trending-card-body">
                  <h3 className="headline-md">{pkg.name}</h3>
                  <p className="body-md" style={{color:'var(--on-surface-variant)', marginBottom:'var(--space-4)'}}>{pkg.description}</p>
                  <div className="trending-card-footer">
                    <div>
                      <p className="label-md" style={{color:'var(--on-surface-variant)'}}>Starting at</p>
                      <p className="price price-lg">{formatPrice(pkg.price)}</p>
                    </div>
                    <Link to="/custom-builder" className="btn btn-primary btn-sm">Customize <FiArrowRight /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Collective (Services Preview) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label-md">The Artistic Collective</p>
            <h2 className="headline-lg">Premium services at your fingertips</h2>
          </div>
          <div className="grid grid-3">
            {artisticServices.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
          <div style={{textAlign:'center', marginTop:'var(--space-10)'}}>
            <Link to="/services" className="btn btn-secondary btn-lg">View All Services <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <p className="label-md">Loved by Our Customers</p>
            <h2 className="headline-lg">Real celebrations, real emotions</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} className="testimonial-card" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => <FiStar key={j} className="star-filled" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-event">{t.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-card" initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}>
            <h2 className="headline-lg" style={{color:'white'}}>Ready to curate your next gala?</h2>
            <p style={{color:'rgba(255,255,255,0.85)', maxWidth:500, margin:'var(--space-4) auto var(--space-8)'}}>
              Join 500+ couples and companies who trust EventDhara Pro for their most important moments.
            </p>
            <div style={{display:'flex', gap:'var(--space-4)', justifyContent:'center', flexWrap:'wrap'}}>
              <Link to="/custom-builder" className="btn btn-lg" style={{background:'white', color:'var(--primary)'}}>Start Building <FiArrowRight /></Link>
              <Link to="/contact" className="btn btn-lg" style={{background:'transparent', color:'white', border:'1.5px solid rgba(255,255,255,0.4)'}}>Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
