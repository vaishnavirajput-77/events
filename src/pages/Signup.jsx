import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiPhone, FiArrowRight } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.password) { setError('Please fill in all required fields.'); return; }
    signup({ name: form.name, email: form.email, phone: form.phone }, 'demo-jwt-token-' + Date.now());
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <motion.div className="auth-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="auth-header">
          <Link to="/" className="auth-logo">✦ EventDhara<span style={{ color: 'var(--primary)' }}>Pro</span></Link>
          <h1 className="headline-md">Create Account</h1>
          <p style={{ color: 'var(--on-surface-variant)' }}>Join EventDhara Pro to start planning</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input-wrap">
            <FiUser className="auth-input-icon" />
            <input type="text" className="input-field" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
          </div>
          <div className="auth-input-wrap">
            <FiMail className="auth-input-icon" />
            <input type="email" className="input-field" placeholder="Email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
          </div>
          <div className="auth-input-wrap">
            <FiPhone className="auth-input-icon" />
            <input type="tel" className="input-field" placeholder="Phone (optional)" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          </div>
          <div className="auth-input-wrap">
            <FiLock className="auth-input-icon" />
            <input type="password" className="input-field" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Create Account <FiArrowRight /></button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
}
