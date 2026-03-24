import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    // Demo login
    login({ name: email.split('@')[0], email }, 'demo-jwt-token-' + Date.now());
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <motion.div className="auth-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="auth-header">
          <Link to="/" className="auth-logo">✦ EventDhara<span style={{ color: 'var(--primary)' }}>Pro</span></Link>
          <h1 className="headline-md">Welcome Back</h1>
          <p style={{ color: 'var(--on-surface-variant)' }}>Sign in to manage your events</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input-wrap">
            <FiMail className="auth-input-icon" />
            <input type="email" className="input-field" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="auth-input-wrap">
            <FiLock className="auth-input-icon" />
            <input type="password" className="input-field" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Sign In <FiArrowRight /></button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}
