import Hero from '../components/Hero'
import Services from '../components/Services'
import Banner from '../components/Banner'
import PackageCard from '../components/PackageCard'
import Trending from '../components/Trending'
import { motion } from 'framer-motion'

const birthdayPackages = [
  {
    title: 'Classic Celebration',
    price: '₹9,999',
    badge: 'Classic',
    image: '/images/birthday-decor.png',
    features: [
      'Basic Balloon Decoration',
      'Birthday Banner Setup',
      'Photo Corner Arrangement',
      'Table & Chair Decoration',
    ],
  },
  {
    title: 'Premium Party',
    price: '₹24,999',
    badge: 'Most Popular',
    popular: true,
    image: '/images/hero-bg.png',
    features: [
      'Theme-Based Full Decoration',
      'LED Lighting & Backdrops',
      'Flower & Balloon Arches',
      'Photography Setup',
      'Cake Table Styling',
    ],
  },
  {
    title: 'Grand Gala',
    price: '₹49,999',
    badge: 'Luxury',
    image: '/images/trending-events.png',
    features: [
      'End-to-End Event Management',
      'Custom Fabrication & Decor',
      'Live Entertainment Coordination',
      'Premium Florals & Props',
      'Full Photography & Videography',
    ],
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
    image: '/images/services-collage.png',
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

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Banner />

      {/* Birthday Packages */}
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
              Celebrations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
              Birthday{' '}
              <span className="italic text-primary">Packages</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-on-surface-variant leading-relaxed text-sm sm:text-base px-2">
              Curated experiences for every age. From whimsical kids' themes to
              sophisticated adult soirées.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {birthdayPackages.map((pkg, index) => (
              <PackageCard key={pkg.title} {...pkg} index={index} />
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
              Weddings
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
              Wedding{' '}
              <span className="italic text-primary">Packages</span>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-on-surface-variant leading-relaxed text-sm sm:text-base px-2">
              Bespoke wedding experiences designed with editorial precision. From
              intimate elopements to grand celebrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {weddingPackages.map((pkg, index) => (
              <PackageCard key={pkg.title} {...pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Trending />
    </>
  )
}

export default Home
