import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: "Celebrate Life's Precious Moments",
    subtitle: 'Wedding Collection',
    description:
      'Everything you need for the perfect wedding — in one place. Ethereal celebrations designed with timeless elegance.',
    image: '/images/wedding-decor.png',
  },
  {
    id: 2,
    title: 'Curate Your Perfect Birthday',
    subtitle: 'Birthday Special',
    description:
      "From whimsical kids' parties to sophisticated adult soirées, every detail is handcrafted.",
    image: '/images/birthday-decor.png',
  },
  {
    id: 3,
    title: 'Corporate Excellence Redefined',
    subtitle: 'Corporate Events',
    description:
      'High-impact events that blend professional branding with sophisticated entertainment.',
    image: '/images/trending-events.png',
  },
]

function Banner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-32 bg-surface">
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
            Featured
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
            The Signature{' '}
            <span className="italic text-primary">Experience</span>
          </h2>
        </motion.div>

        {/* Banner Carousel */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] sm:aspect-[16/7] md:aspect-[16/6]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 sm:px-8 max-w-2xl">
                  <p className="font-label text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-3 sm:mb-4">
                    {slides[current].subtitle}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug tracking-tight">
                    {slides[current].title}
                  </h3>
                  <p className="mt-4 sm:mt-6 text-white/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                    {slides[current].description}
                  </p>
                  <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/15 backdrop-blur-sm text-white font-label text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white/25 hover:scale-105">
                    Explore
                    <span className="material-icons-outlined text-lg">
                      trending_flat
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-white'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
