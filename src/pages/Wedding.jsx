import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PackageCard from '../components/PackageCard'

const galleryItems = [
  {
    title: 'Royal Palace Wedding',
    category: 'Luxury Wedding',
    image: '/images/wedding-decor.png',
  },
  {
    title: 'Garden Ceremony',
    category: 'Outdoor Wedding',
    image: '/images/trending-events.png',
  },
  {
    title: 'Traditional Elegance',
    category: 'Classic Theme',
    image: '/images/services-collage.png',
  },
  {
    title: 'Modern Minimalist',
    category: 'Contemporary',
    image: '/images/hero-bg.png',
  },
  {
    title: 'Floral Paradise',
    category: 'Floral Theme',
    image: '/images/birthday-decor.png',
  },
  {
    title: 'Destination Dream',
    category: 'Destination Wedding',
    image: '/images/trending-events.png',
  },
]

const weddingPackages = [
  {
    title: 'The Essentials',
    price: '₹1,49,999',
    badge: 'Essential',
    image: '/images/wedding-decor.png',
    features: [
      'Day-of Coordination (10 hours)',
      'Vendor Logistics Management',
      'Essential Decor Setup',
      'Guest List Management',
    ],
  },
  {
    title: 'The Signature',
    price: '₹3,99,999',
    badge: 'Signature',
    popular: true,
    image: '/images/hero-bg.png',
    features: [
      'Full Partial Planning (6 Months)',
      'Venue Sourcing & Curation',
      'Floral & Aesthetic Design',
      'Pre-Wedding Photoshoot Styling',
      'Premium Vendor Lineup',
    ],
  },
  {
    title: 'The Legacy',
    price: '₹9,99,999',
    badge: 'Concierge',
    image: '/images/trending-events.png',
    features: [
      'End-to-End Concierge Planning',
      'Custom Decor Fabrication',
      'Global Artist Coordination',
      'Luxury Honeymoon Planning',
      'Full Editorial Coverage',
    ],
  },
]

function Wedding() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/wedding-decor.png"
            alt="Luxury wedding decoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-container/15" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 sm:mb-6"
          >
            Wedding Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Wedding{' '}
            <span className="italic text-inverse-primary">Elegance.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 sm:mt-8 max-w-xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed"
          >
            From intimate elopements to grand celebrations, we design bespoke
            wedding experiences with editorial precision and timeless elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 sm:mt-10"
          >
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_12px_40px_rgba(185,5,56,0.3)] hover:scale-[1.02]"
            >
              Plan Your Wedding
              <span className="material-icons-outlined text-lg transition-transform group-hover:translate-x-1">
                trending_flat
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-container-low to-transparent" />
      </section>

      {/* Wedding Gallery */}
      <section className="py-16 sm:py-20 lg:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-3 sm:mb-4">
              Inspiration
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
              Wedding{' '}
              <span className="italic text-primary">Gallery</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-on-surface-variant leading-relaxed text-sm sm:text-base px-2">
              Browse through our editorial gallery of past weddings, each
              uniquely crafted with love and timeless elegance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="font-label text-[10px] font-semibold tracking-[0.15em] uppercase text-white/60 mb-1.5">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-icons-outlined text-white text-lg">
                    zoom_in
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-16 sm:py-20 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-3 sm:mb-4">
              Pricing
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
              Wedding{' '}
              <span className="italic text-primary">Packages</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-on-surface-variant leading-relaxed text-sm sm:text-base px-2">
              Choose the perfect package for your dream wedding. Each package is
              fully customizable to match your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {weddingPackages.map((pkg, index) => (
              <PackageCard key={pkg.title} {...pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-3 sm:mb-4">
              Your Dream Wedding
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              Let's create your{' '}
              <span className="italic text-primary">forever.</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-lg mx-auto text-on-surface-variant text-sm leading-relaxed">
              Every love story is unique. Let our expert planners craft a
              celebration that's as special as your bond.
            </p>
            <Link
              to="/#contact"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_12px_40px_rgba(185,5,56,0.3)] hover:scale-[1.02]"
            >
              Start Planning
              <span className="material-icons-outlined text-lg">
                trending_flat
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Wedding
