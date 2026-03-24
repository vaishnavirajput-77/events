import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { usePackage } from '../context/PackageContext';
import { FALLBACK_IMAGE } from '../data/services';

const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

export default function Wishlist() {
  const { wishlist, toggleWishlist, addService, selectedServices } = usePackage();

  if (wishlist.length === 0) {
    return (
      <div style={{ paddingTop: 72 }}>
        <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <FiHeart style={{ fontSize: '3rem', color: 'var(--outline-variant)', marginBottom: 'var(--space-4)' }} />
            <h2 className="headline-md">Your wishlist is empty</h2>
            <p style={{ color: 'var(--on-surface-variant)', margin: 'var(--space-4) 0 var(--space-6)' }}>Start exploring and save your favorites!</p>
            <Link to="/services" className="btn btn-primary">Browse Services</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <h1 className="headline-lg"><FiHeart style={{ marginRight: 8, color: 'var(--primary)' }} /> Your Wishlist</h1>
            <p>{wishlist.length} items saved</p>
          </div>
          <div className="grid grid-3">
            {wishlist.map((item, i) => (
              <motion.div key={item.id} className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                {item.image && <img src={item.image} alt={item.name} className="card-image" onError={e => e.target.src = FALLBACK_IMAGE} />}
                <div className="card-body">
                  <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: 'var(--space-2)' }}>{item.name}</h3>
                  <p className="price price-md" style={{ marginBottom: 'var(--space-4)' }}>{formatPrice(item.price)}</p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {!selectedServices.find(s => s.id === item.id) && (
                      <button className="btn btn-primary btn-sm" onClick={() => addService(item)}><FiShoppingBag /> Add to Package</button>
                    )}
                    <button className="btn btn-outline btn-sm" onClick={() => toggleWishlist(item)} style={{ color: 'var(--error)' }}><FiTrash2 /> Remove</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
