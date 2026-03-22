import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const quickLinks = [
  { label: 'About Us', path: '/' },
  { label: 'Contact', path: '/#contact' },
  { label: 'Privacy Policy', path: '/' },
  { label: 'Terms of Service', path: '/' },
]

const socialLinks = [
  { label: 'Instagram', icon: 'photo_camera', url: '#' },
  { label: 'Pinterest', icon: 'push_pin', url: '#' },
  { label: 'LinkedIn', icon: 'business_center', url: '#' },
  { label: 'YouTube', icon: 'play_circle', url: '#' },
]

const experiences = [
  { label: 'Weddings', path: '/wedding' },
  { label: 'Corporate', path: '/' },
  { label: 'Gala Events', path: '/' },
  { label: 'Birthdays', path: '/birthday' },
]

function Footer() {
  const [formOpen, setFormOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const recipient = 'vaishnavirajput089@gmail.com'
    const subject = `New Event Inquiry: ${formData.eventType || 'General'} — from ${formData.name}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Event Type: ${formData.eventType || 'Not specified'}`,
      ``,
      `Message:`,
      formData.message,
    ].join('\n')

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          'Event Type': formData.eventType,
          message: formData.message,
          _subject: subject,
        }),
      })

      const result = await response.json()

      if (result.success === true || result.success === 'true') {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormOpen(false)
          setFormData({ name: '', email: '', phone: '', eventType: '', message: '' })
        }, 5000)
      } else if (result.message && result.message.includes('Activation')) {
        // FormSubmit needs activation — fallback to mailto
        window.location.href = mailtoUrl
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormOpen(false)
        }, 5000)
      } else {
        // Other error — fallback to mailto
        window.location.href = mailtoUrl
        setError('API delivery pending activation. Opening your mail app instead...')
        setTimeout(() => setError(''), 5000)
      }
    } catch (err) {
      // Network error — fallback to mailto
      window.location.href = mailtoUrl
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <footer id="contact" className="bg-inverse-surface text-inverse-on-surface">
      {/* CTA + Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <AnimatePresence mode="wait">
          {!formOpen ? (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/50 mb-3 sm:mb-4">
                Let's Begin
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-inverse-on-surface">
                Ready to start your next{' '}
                <span className="italic text-inverse-primary">story?</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-lg mx-auto text-inverse-on-surface/70 text-sm leading-relaxed px-2">
                Our consultants are ready to bring your imagination to life. Let's
                create something extraordinary together.
              </p>
              <button
                onClick={() => setFormOpen(true)}
                className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_12px_40px_rgba(185,5,56,0.3)] hover:scale-[1.02]"
              >
                Get in Touch
                <span className="material-icons-outlined text-lg">
                  trending_flat
                </span>
              </button>
            </motion.div>
          ) : !submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-8 sm:mb-10">
                <p className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/50 mb-3 sm:mb-4">
                  Contact Us
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-inverse-on-surface">
                  Tell us about your{' '}
                  <span className="italic text-inverse-primary">event</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block font-label text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/50 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-inverse-on-surface/10 border border-inverse-on-surface/10 text-inverse-on-surface text-sm placeholder:text-inverse-on-surface/30 focus:outline-none focus:border-inverse-primary/50 focus:ring-1 focus:ring-inverse-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-label text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/50 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-inverse-on-surface/10 border border-inverse-on-surface/10 text-inverse-on-surface text-sm placeholder:text-inverse-on-surface/30 focus:outline-none focus:border-inverse-primary/50 focus:ring-1 focus:ring-inverse-primary/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block font-label text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/50 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-inverse-on-surface/10 border border-inverse-on-surface/10 text-inverse-on-surface text-sm placeholder:text-inverse-on-surface/30 focus:outline-none focus:border-inverse-primary/50 focus:ring-1 focus:ring-inverse-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-label text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/50 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-inverse-on-surface/10 border border-inverse-on-surface/10 text-inverse-on-surface text-sm focus:outline-none focus:border-inverse-primary/50 focus:ring-1 focus:ring-inverse-primary/30 transition-all duration-200 appearance-none"
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" className="bg-inverse-surface text-inverse-on-surface/50">Select event type</option>
                      <option value="wedding" className="bg-inverse-surface text-inverse-on-surface">Wedding</option>
                      <option value="birthday" className="bg-inverse-surface text-inverse-on-surface">Birthday</option>
                      <option value="corporate" className="bg-inverse-surface text-inverse-on-surface">Corporate Event</option>
                      <option value="social" className="bg-inverse-surface text-inverse-on-surface">Social Gathering</option>
                      <option value="other" className="bg-inverse-surface text-inverse-on-surface">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/50 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your dream event — date, venue preferences, guest count, special requests..."
                    className="w-full px-4 py-3 rounded-xl bg-inverse-on-surface/10 border border-inverse-on-surface/10 text-inverse-on-surface text-sm placeholder:text-inverse-on-surface/30 focus:outline-none focus:border-inverse-primary/50 focus:ring-1 focus:ring-inverse-primary/30 transition-all duration-200 resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                    <span className="material-icons-outlined text-lg">error_outline</span>
                    {error}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_12px_40px_rgba(185,5,56,0.3)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-icons-outlined text-lg">send</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setFormOpen(false); setError(''); }}
                    disabled={sending}
                    className="text-inverse-on-surface/50 font-label text-xs font-semibold tracking-wide uppercase hover:text-inverse-on-surface/80 transition-colors duration-200 disabled:opacity-40"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="text-center py-8 sm:py-12"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary-container/20 flex items-center justify-center mb-5 sm:mb-6">
                <span className="material-icons-outlined text-3xl sm:text-4xl text-inverse-primary">
                  check_circle
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-inverse-on-surface">
                Message Sent!
              </h2>
              <p className="mt-3 sm:mt-4 max-w-md mx-auto text-inverse-on-surface/70 text-sm leading-relaxed">
                Thank you, {formData.name}! Our team will get back to you within
                24 hours to start planning your event.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Links */}
      <div className="border-t border-inverse-on-surface/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1.5 mb-4">
              <span className="font-serif text-xl font-bold text-inverse-primary">
                Event
              </span>
              <span className="font-serif text-xl font-bold text-inverse-on-surface">
                Dhara
              </span>
            </Link>
            <p className="text-inverse-on-surface/60 text-sm leading-relaxed">
              Setting the gold standard for high-end celebrations across the
              globe. Each event is a curated masterpiece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label text-xs font-semibold tracking-[0.15em] uppercase text-inverse-on-surface/50 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-inverse-on-surface/70 text-sm hover:text-inverse-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-label text-xs font-semibold tracking-[0.15em] uppercase text-inverse-on-surface/50 mb-5">
              Experience
            </h4>
            <ul className="flex flex-col gap-3">
              {experiences.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-inverse-on-surface/70 text-sm hover:text-inverse-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-label text-xs font-semibold tracking-[0.15em] uppercase text-inverse-on-surface/50 mb-5">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map(({ label, icon, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-inverse-on-surface/70 text-sm hover:text-inverse-primary transition-colors duration-200"
                  >
                    <span className="material-icons-outlined text-base">
                      {icon}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-inverse-on-surface/50 text-xs">
              <p>studio@eventdhara.com</p>
              <p className="mt-1">+1 (555) 234-5678</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-inverse-on-surface/10 py-6">
        <p className="text-center font-label text-xs text-inverse-on-surface/40 tracking-wide">
          © 2024 EventDhara. Crafted for The Editorial Occasion.
        </p>
      </div>
    </footer>
  )
}

export default Footer
