import { motion } from 'framer-motion';
import { FiPlus, FiCheck, FiHeart } from 'react-icons/fi';
import { usePackage } from '../context/PackageContext';
import { FALLBACK_IMAGE } from '../data/services';
import './ServiceCard.css';

export default function ServiceCard({ service, showPrice = true, showAdd = true }) {
  const { selectedServices, addService, removeService, toggleWishlist, wishlist } = usePackage();
  const isAdded = selectedServices.find(s => s.id === service.id);
  const isWished = wishlist.find(w => w.id === service.id);

  const handleImgError = (e) => { e.target.src = FALLBACK_IMAGE; };

  const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

  return (
    <motion.div
      className="scard"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="scard-img-wrap">
        <img src={service.image} alt={service.name} className="scard-img" onError={handleImgError} loading="lazy" />
        <button
          className={`scard-wish ${isWished ? 'scard-wish--active' : ''}`}
          onClick={() => toggleWishlist(service)}
          aria-label="Toggle wishlist"
        >
          <FiHeart />
        </button>
      </div>
      <div className="scard-body">
        <h3 className="scard-name">{service.name}</h3>
        {service.description && <p className="scard-desc">{service.description}</p>}
        {service.items && (
          <ul className="scard-items">
            {service.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}
        <div className="scard-footer">
          {showPrice && <span className="scard-price price price-md">{formatPrice(service.price)}</span>}
          {showAdd && (
            <button
              className={`btn ${isAdded ? 'btn-secondary' : 'btn-primary'} btn-sm`}
              onClick={() => isAdded ? removeService(service.id) : addService(service)}
            >
              {isAdded ? <><FiCheck /> Added</> : <><FiPlus /> Add to Package</>}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
