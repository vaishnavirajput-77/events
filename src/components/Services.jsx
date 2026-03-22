import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Wedding Packages',
    description:
      'Elevating your special day with editorial precision and timeless elegance.',
    icon: 'favorite',
    image: '/images/wedding-decor.png',
  },
  {
    title: 'Birthday Packages',
    description:
      "Curated experiences for every age. From whimsical kids' themes to sophisticated adult soirées.",
    icon: 'cake',
    image: '/images/birthday-decor.png',
  },
  {
    title: 'Social Events',
    description:
      'Intimate dinners, anniversaries, and family reunions curated with an editorial touch.',
    icon: 'celebration',
    image: '/images/trending-events.png',
  },
  {
    title: 'Corporate Galas',
    description:
      'Polished branding and seamless logistics for product launches, seminars, and award ceremonies.',
    icon: 'business_center',
    image: '/images/services-collage.png',
  },
]

function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-3 sm:mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
            Bespoke Event{' '}
            <span className="italic text-primary">Services</span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-on-surface-variant leading-relaxed text-sm sm:text-base px-2">
            Explore our bespoke planning services tailored for life's most
            significant milestones.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
