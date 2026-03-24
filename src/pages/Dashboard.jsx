import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLogOut, FiPackage, FiCalendar, FiHeart, FiUser, FiClock } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { usePackage } from '../context/PackageContext';
import './Dashboard.css';

const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { bookings, wishlist } = usePackage();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/'); };

  if (!user) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: 'center' }}>
          <h2 className="headline-md">Please log in</h2>
          <p style={{ color: 'var(--on-surface-variant)', margin: 'var(--space-4) 0 var(--space-6)' }}>You need to sign in to view your dashboard.</p>
          <Link to="/login" className="btn btn-primary btn-lg">Sign In</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="section">
        <div className="container">
          <div className="dash-header">
            <div>
              <h1 className="headline-lg">Welcome, {user.name} 👋</h1>
              <p style={{ color: 'var(--on-surface-variant)' }}>{user.email}</p>
            </div>
            <button className="btn btn-secondary" onClick={handleLogout}><FiLogOut /> Logout</button>
          </div>

          <div className="dash-stats">
            <motion.div className="dash-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <FiPackage className="dash-stat-icon" />
              <div>
                <p className="dash-stat-num">{bookings.length}</p>
                <p className="dash-stat-label">Saved Packages</p>
              </div>
            </motion.div>
            <motion.div className="dash-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <FiHeart className="dash-stat-icon" />
              <div>
                <p className="dash-stat-num">{wishlist.length}</p>
                <p className="dash-stat-label">Wishlist Items</p>
              </div>
            </motion.div>
            <motion.div className="dash-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <FiCalendar className="dash-stat-icon" />
              <div>
                <p className="dash-stat-num">0</p>
                <p className="dash-stat-label">Upcoming Events</p>
              </div>
            </motion.div>
          </div>

          {/* Saved Packages */}
          <div className="dash-section">
            <h2 className="headline-md"><FiPackage style={{ marginRight: 8 }} /> Saved Packages</h2>
            {bookings.length === 0 ? (
              <div className="dash-empty">
                <p>No packages saved yet.</p>
                <Link to="/custom-builder" className="btn btn-primary">Build Your First Package</Link>
              </div>
            ) : (
              <div className="dash-packages">
                {bookings.map((pkg, i) => (
                  <motion.div key={pkg.id} className="dash-package" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <div className="dash-package-header">
                      <span className="chip chip-primary" style={{ textTransform: 'capitalize' }}>{pkg.eventType || 'Custom'}</span>
                      <span className="price price-md">{formatPrice(pkg.totalPrice)}</span>
                    </div>
                    <div style={{ margin: 'var(--space-3) 0' }}>
                      <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                        {pkg.services.length} services · {pkg.addOns.length} add-ons
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                      {pkg.services.slice(0, 4).map(s => (
                        <span key={s.id} className="chip chip-secondary" style={{ fontSize: '0.6875rem' }}>{s.name}</span>
                      ))}
                      {pkg.services.length > 4 && <span className="chip chip-secondary" style={{ fontSize: '0.6875rem' }}>+{pkg.services.length - 4} more</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-3)', fontSize: '0.75rem', color: 'var(--outline)' }}>
                      <FiClock /> {new Date(pkg.date).toLocaleDateString()}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Wishlist */}
          {wishlist.length > 0 && (
            <div className="dash-section">
              <h2 className="headline-md"><FiHeart style={{ marginRight: 8 }} /> Wishlist</h2>
              <div className="dash-packages">
                {wishlist.map((item, i) => (
                  <motion.div key={item.id} className="dash-package" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <h4>{item.name}</h4>
                    <p className="price" style={{ marginTop: 'var(--space-2)' }}>{formatPrice(item.price)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
