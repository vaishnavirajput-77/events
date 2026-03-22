import { motion } from 'framer-motion'

function PackageCard({ title, price, features, badge, popular = false, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        popular
          ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_12px_60px_rgba(185,5,56,0.2)]'
          : 'bg-surface-container-lowest hover:shadow-[0_12px_60px_rgba(30,27,25,0.1)]'
      }`}
    >
      {/* Image */}
      {image && (
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 ${
            popular
              ? 'bg-gradient-to-t from-primary/80 via-primary/20 to-transparent'
              : 'bg-gradient-to-t from-black/20 via-transparent to-transparent'
          }`} />
          {/* Badge on image */}
          {badge && (
            <span
              className={`absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1 px-3 sm:px-4 py-1 rounded-full font-label text-[10px] sm:text-xs font-semibold tracking-wide ${
                popular
                  ? 'bg-white text-primary'
                  : 'bg-white/90 backdrop-blur-sm text-primary'
              }`}
            >
              <span className="material-icons-outlined text-xs sm:text-sm">
                {popular ? 'verified' : 'star'}
              </span>
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-8">
        {/* Badge (only if no image) */}
        {badge && !image && (
          <span
            className={`self-start inline-flex items-center gap-1 px-3 sm:px-4 py-1 rounded-full font-label text-[10px] sm:text-xs font-semibold tracking-wide mb-3 ${
              popular
                ? 'bg-white/20 text-on-primary'
                : 'bg-primary/10 text-primary'
            }`}
          >
            <span className="material-icons-outlined text-xs sm:text-sm">
              {popular ? 'verified' : 'star'}
            </span>
            {badge}
          </span>
        )}

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-semibold tracking-tight">
          {title}
        </h3>

        {/* Price */}
        <p className="mt-3 sm:mt-4 font-serif text-2xl sm:text-3xl font-bold tracking-tight">
          {price}
        </p>
        <p
          className={`text-[10px] sm:text-xs font-label tracking-wide mt-1 ${
            popular ? 'text-on-primary/70' : 'text-on-surface-variant'
          }`}
        >
          Starting price
        </p>

        {/* Spacer */}
        <div className="mt-5 sm:mt-8 mb-4 sm:mb-6" />

        {/* Features */}
        <ul className="flex-1 flex flex-col gap-3 sm:gap-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 sm:gap-3">
              <span
                className={`material-icons-outlined text-base sm:text-lg flex-shrink-0 mt-0.5 ${
                  popular ? 'text-on-primary/80' : 'text-primary'
                }`}
              >
                check_circle
              </span>
              <span
                className={`text-xs sm:text-sm leading-relaxed ${
                  popular ? 'text-on-primary/90' : 'text-on-surface-variant'
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`mt-6 sm:mt-8 w-full py-2.5 sm:py-3 rounded-full font-label text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] ${
            popular
              ? 'bg-white text-primary hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]'
              : 'bg-gradient-to-br from-primary to-primary-container text-on-primary hover:shadow-[0_8px_40px_rgba(185,5,56,0.25)]'
          }`}
        >
          Book This Package
        </button>
      </div>
    </motion.div>
  )
}

export default PackageCard
