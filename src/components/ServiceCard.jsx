import { motion } from 'framer-motion'

function ServiceCard({ title, description, icon, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_60px_rgba(30,27,25,0.1)] hover:-translate-y-1"
    >
      {/* Image */}
      {image && (
        <div className="relative h-44 sm:h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-container/10 flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary-container/20 group-hover:scale-110">
          <span className="material-icons-outlined text-xl sm:text-2xl text-primary">
            {icon}
          </span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-semibold text-on-surface mb-2 sm:mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {description}
        </p>

        {/* Arrow */}
        <div className="mt-4 sm:mt-6 flex items-center gap-1 text-primary font-label text-xs font-semibold tracking-wide uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Explore
          <span className="material-icons-outlined text-base transition-transform group-hover:translate-x-1">
            trending_flat
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
