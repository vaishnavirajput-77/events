import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Luxury event decoration"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Pink tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-container/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-32 text-center">
        {/* Subtitle Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 sm:mb-6"
        >
          The Editorial Occasion
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
        >
          Crafting{' '}
          <span className="italic text-inverse-primary">Unforgettable</span>
          <br />
          Moments
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 leading-relaxed px-2"
        >
          From intimate gatherings to grand celebrations, we transform your
          vision into an editorial-grade occasion that resonates for a lifetime.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/#services"
            className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_12px_40px_rgba(185,5,56,0.4)] hover:scale-105"
          >
            Explore Services
            <span className="material-icons-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              trending_flat
            </span>
          </Link>

          <Link
            to="/#contact"
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/15 backdrop-blur-md text-white font-label text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white/25 hover:scale-105"
          >
            Start Planning
          </Link>
        </motion.div>

        {/* Decorative Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-14 sm:mt-20 flex items-center justify-center gap-8 sm:gap-12 md:gap-20"
        >
          {[
            { number: '500+', label: 'Events Curated' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Expert Planners' },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-inverse-primary">
                {number}
              </p>
              <p className="mt-1 font-label text-[10px] sm:text-xs font-medium tracking-wide uppercase text-white/60">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-container-low to-transparent" />
    </section>
  )
}

export default Hero
