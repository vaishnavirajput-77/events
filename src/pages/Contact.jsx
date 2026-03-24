import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMessageCircle, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', eventType: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', eventType: '', budget: '', message: '' });
  };

  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent('Hi! I\'m interested in EventDhara Pro services.')}`;

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="page-hero" style={{ minHeight: 300 }}>
        <img src="https://images.unsplash.com/photo-1492684223f8-e1f7e12e2f51?w=1400&q=80" alt="" className="page-hero-bg" />
        <div className="page-hero-content">
          <p className="label-md">Get in Touch</p>
          <h1 className="display-lg">Let's Create Something Beautiful</h1>
          <p>Reach out to us and let's start planning your dream event.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <motion.div className="contact-form-wrap" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="headline-md" style={{ marginBottom: 'var(--space-6)' }}>Send us a message</h2>
              {sent && <div className="contact-success">✅ Message sent successfully! We'll get back to you soon.</div>}
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label className="input-label">Full Name</label>
                  <input type="text" className="input-field" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div>
                  <label className="input-label">Email</label>
                  <input type="email" className="input-field" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                </div>
                <div>
                  <label className="input-label">Event Type</label>
                  <select className="input-field" value={form.eventType} onChange={e => setForm({...form, eventType: e.target.value})} required>
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="party">Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="input-label">Budget Range</label>
                  <select className="input-field" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                    <option value="">Select budget</option>
                    <option value="under-25k">Under ₹25,000</option>
                    <option value="25k-50k">₹25,000 — ₹50,000</option>
                    <option value="50k-1l">₹50,000 — ₹1,00,000</option>
                    <option value="1l-5l">₹1,00,000 — ₹5,00,000</option>
                    <option value="5l+">Above ₹5,00,000</option>
                  </select>
                </div>
                <div>
                  <label className="input-label">Message</label>
                  <textarea className="input-field" rows="4" placeholder="Tell us about your event..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}><FiSend /> Send Message</button>
              </form>
            </motion.div>

            <motion.div className="contact-info" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="contact-info-card">
                <FiPhone className="contact-info-icon" />
                <h3 className="title-md">Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
              <div className="contact-info-card">
                <FiMail className="contact-info-icon" />
                <h3 className="title-md">Email</h3>
                <p>hello@eventdhara.pro</p>
              </div>
              <div className="contact-info-card">
                <FiMapPin className="contact-info-icon" />
                <h3 className="title-md">Location</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-lg contact-whatsapp">
                <FiMessageCircle /> Chat on WhatsApp
              </a>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984904!2d72.74109999999999!3d19.08219999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679900000000"
                  width="100%" height="250" style={{ border: 0, borderRadius: 'var(--radius-xl)' }} allowFullScreen="" loading="lazy"
                  title="EventDhara Pro Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
