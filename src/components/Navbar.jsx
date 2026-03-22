import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/#services' },
  { label: 'Birthday', path: '/birthday' },
  { label: 'Wedding', path: '/wedding' },
  { label: 'Trending', path: '/#trending' },
  { label: 'Gallery', path: '/#gallery' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_4px_60px_rgba(30,27,25,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
          <span className={`text-xl sm:text-2xl font-bold font-serif tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}>
            Event
          </span>
          <span className={`text-xl sm:text-2xl font-bold font-serif tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-on-surface' : 'text-white'
          }`}>
            Dhara
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`font-label text-xs sm:text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  location.pathname === path
                    ? scrolled ? 'text-primary' : 'text-inverse-primary'
                    : scrolled ? 'text-on-surface-variant hover:text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_8px_40px_rgba(185,5,56,0.25)] hover:scale-105"
        >
          Book Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
            scrolled ? 'text-on-surface' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          <span className="material-icons-outlined text-2xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[56px] bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[56px] left-0 right-0 bg-surface-container-lowest shadow-[0_20px_60px_rgba(30,27,25,0.15)] z-50 transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 sm:px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`block py-3 px-4 rounded-xl font-label text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                    location.pathname === path
                      ? 'text-primary bg-primary/5'
                      : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/#contact"
            className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_8px_40px_rgba(185,5,56,0.25)]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
