import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const trendingServices = [
  {
    title: 'Celestial Wedding Galas',
    description:
      'A celestial-inspired theme featuring bespoke lighting and ethereal floral arrangements that redefine luxury weddings.',
    icon: 'auto_awesome',
    badge: 'Trending',
    image: '/images/wedding-decor.png',
  },
  {
    title: 'Artisanal Dining',
    description:
      'Farm-to-table curated menus served with editorial precision for intimate gatherings.',
    icon: 'restaurant',
    badge: 'New',
    image: '/images/trending-events.png',
  },
  {
    title: 'Corporate Excellence',
    description:
      'High-impact corporate events that blend professional branding with sophisticated entertainment.',
    icon: 'workspace_premium',
    badge: 'Popular',
    image: '/images/services-collage.png',
  },
  {
    title: 'Signature Birthdays',
    description:
      'Tailored celebrations that capture personal milestones with curated themes and immersive decor.',
    icon: 'cake',
    badge: 'Hot',
    image: '/images/birthday-decor.png',
  },
]

function Trending() {
  return (
    <section id="trending" className="py-16 sm:py-20 lg:py-32 bg-surface">
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
            What's Hot
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
            Trending{' '}
            <span className="italic text-primary">Services</span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-on-surface-variant leading-relaxed text-sm sm:text-base px-2">
            Discover the most sought-after event arrangements currently defining
            the editorial standard of celebrations.
          </p>
        </motion.div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {trendingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_60px_rgba(30,27,25,0.1)] hover:-translate-y-1"
            >
              {/* Top Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Badge */}
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm font-label text-[10px] font-semibold tracking-wider uppercase text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {service.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 flex gap-4 sm:gap-6">
                {/* Icon */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-container/10 flex items-center justify-center transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary-container/20 group-hover:scale-110">
                  <span className="material-icons-outlined text-xl sm:text-2xl text-primary">
                    {service.icon}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-on-surface tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/#contact"
                    className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-primary font-label text-[10px] sm:text-xs font-semibold tracking-wide uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View Details
                    <span className="material-icons-outlined text-sm sm:text-base transition-transform group-hover:translate-x-1">
                      trending_flat
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending
