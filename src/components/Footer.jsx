import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">✦</span>
              EventDhara<span className="footer-logo-pro">Pro</span>
            </Link>
            <p className="footer-tagline">The Digital Curator — crafting timeless experiences across India.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" className="footer-social" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" className="footer-social" aria-label="Facebook"><FiFacebook /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <Link to="/wedding" className="footer-link">Wedding</Link>
            <Link to="/birthday" className="footer-link">Birthday</Link>
            <Link to="/anniversary" className="footer-link">Anniversary</Link>
            <Link to="/baby-shower" className="footer-link">Baby Shower</Link>
            <Link to="/party" className="footer-link">Party</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">More</h4>
            <Link to="/car-decor" className="footer-link">Car Decor</Link>
            <Link to="/home-decor" className="footer-link">Home Decor</Link>
            <Link to="/custom-builder" className="footer-link">Custom Builder</Link>
            <Link to="/add-ons" className="footer-link">Add-ons</Link>
            <Link to="/gallery" className="footer-link">Gallery</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <a href="mailto:hello@eventdhara.pro" className="footer-link"><FiMail style={{marginRight:6}} /> hello@eventdhara.pro</a>
            <a href="tel:+919876543210" className="footer-link"><FiPhone style={{marginRight:6}} /> +91 98765 43210</a>
            <span className="footer-link"><FiMapPin style={{marginRight:6}} /> Mumbai, India</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EventDhara Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
