import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';
import { usePackage } from '../context/PackageContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/meals', label: 'Meals' },
  { path: '/wedding', label: 'Wedding' },
  { path: '/birthday', label: 'Birthday' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/custom-builder', label: 'Build Package' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { selectedServices, selectedAddOns, wishlist } = usePackage();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const packageCount = selectedServices.length + selectedAddOns.length;

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">✦</span>
          <span className="navbar-logo-text">EventDhara<span className="navbar-logo-pro">Pro</span></span>
        </Link>

        <div className="navbar-links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'navbar-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <Link to="/custom-builder" className="navbar-action-btn" title="My Package">
            <FiShoppingBag />
            {packageCount > 0 && <span className="badge">{packageCount}</span>}
          </Link>
          <Link to="/wishlist" className="navbar-action-btn" title="Wishlist">
            <FiHeart />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </Link>
          <Link to={isAuthenticated ? '/dashboard' : '/login'} className="navbar-action-btn" title="Account">
            <FiUser />
          </Link>
          <button className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-mobile-link ${location.pathname === link.path ? 'navbar-mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="navbar-mobile-divider" />
            <Link to={isAuthenticated ? '/dashboard' : '/login'} className="navbar-mobile-link">
              {isAuthenticated ? 'Dashboard' : 'Login / Sign Up'}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
