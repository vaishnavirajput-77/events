import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PackageCard from '../components/PackageCard'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'kids', label: 'Kids' },
  { id: 'adults', label: 'Adults' },
  { id: 'first', label: '1st Birthday' },
  { id: 'theme', label: 'Theme Party' },
]

const galleryItems = [
  {
    title: 'Enchanted Garden Party',
    category: 'kids',
    image: '/images/birthday-decor.png',
  },
  {
    title: 'Golden Milestone',
    category: 'adults',
    image: '/images/trending-events.png',
  },
  {
    title: 'Balloon Fantasy',
    category: 'kids',
    image: '/images/hero-bg.png',
  },
  {
    title: 'Neon Glow Night',
    category: 'theme',
    image: '/images/services-collage.png',
  },
  {
    title: 'Royal Celebration',
    category: 'adults',
    image: '/images/wedding-decor.png',
  },
  {
    title: 'Pastel Dreams',
    category: 'first',
    image: '/images/birthday-decor.png',
  },
  {
    title: 'Superhero Bash',
    category: 'kids',
    image: '/images/trending-events.png',
  },
  {
    title: 'First Steps Celebration',
    category: 'first',
    image: '/images/hero-bg.png',
  },
  {
    title: 'Retro Disco Night',
    category: 'theme',
    image: '/images/services-collage.png',
  },
]

const birthdayPackages = [
  {
    title: 'Birthday Basics',
    price: '₹7,999',
    badge: 'Starter',
    image: '/images/birthday-decor.png',
    features: [
      'Standard Balloon Setup',
      'Birthday Banner',
      'Table Centerpiece',
      '2-Hour Setup',
    ],
  },
  {
    title: 'Party Pro',
    price: '₹19,999',
    badge: 'Best Value',
    popular: true,
    image: '/images/hero-bg.png',
    features: [
      'Full Theme Decoration',
      'LED Backdrop & Lighting',
      'Balloon Arch & Garlands',
      'Photo Booth Corner',
      'Cake Table Styling',
    ],
  },
  {
    title: 'Grand Birthday Gala',
    price: '₹44,999',
    badge: 'Premium',
    image: '/images/trending-events.png',
    features: [
      'Complete Event Management',
      'Custom Theme Fabrication',
      'Entertainment Coordination',
      'Photography & Video',
      'Guest Favors & Styling',
    ],
  },
]

function Birthday() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredGallery =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/birthday-decor.png"
            alt="Birthday celebration decoration"
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
            Birthday Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Birthday{' '}
            <span className="italic text-inverse-primary">Artistry.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 sm:mt-8 max-w-xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed"
          >
            We don't just plan parties; we curate editorial experiences that
            celebrate life's most beautiful milestones.
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
              Book a Birthday
              <span className="material-icons-outlined text-lg transition-transform group-hover:translate-x-1">
                trending_flat
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-container-low to-transparent" />
      </section>

      {/* Gallery Section with Tabs */}
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
              Past{' '}
              <span className="italic text-primary">Celebrations</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-on-surface-variant leading-relaxed text-sm sm:text-base px-2">
              Browse through our editorial gallery of past birthday events, each
              uniquely crafted to tell a personal story of joy.
            </p>
          </motion.div>

          {/* Birthday Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-label text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_4px_20px_rgba(185,5,56,0.2)]'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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
                      {tabs.find((t) => t.id === item.category)?.label || item.category}
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
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Birthday Packages */}
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
              Birthday{' '}
              <span className="italic text-primary">Packages</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {birthdayPackages.map((pkg, index) => (
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
              Let's Begin
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              Ready to create{' '}
              <span className="italic text-primary">magic?</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-lg mx-auto text-on-surface-variant text-sm leading-relaxed">
              Let's design a birthday event that reflects your personality.
              Contact our planning team today.
            </p>
            <Link
              to="/#contact"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_12px_40px_rgba(185,5,56,0.3)] hover:scale-[1.02]"
            >
              Contact Our Team
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

export default Birthday
