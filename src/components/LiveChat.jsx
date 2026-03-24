import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import './LiveChat.css';

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Hi! 👋 Welcome to EventDhara Pro. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const replies = [
        'Thanks for reaching out! Our team will get back to you shortly. 🌸',
        'Great question! You can explore our Custom Package Builder to create your ideal event.',
        'We offer packages starting from ₹8,000. Would you like me to suggest something?',
        'I\'d recommend checking our Wedding or Birthday sections for inspiration!',
      ];
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        from: 'bot',
        text: replies[Math.floor(Math.random() * replies.length)]
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="chat-fab"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Live Chat"
      >
        {open ? <FiX /> : <FiMessageCircle />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">E</div>
                <div>
                  <p className="chat-name">EventDhara Pro</p>
                  <p className="chat-status">● Online</p>
                </div>
              </div>
              <button className="chat-close" onClick={() => setOpen(false)}><FiX /></button>
            </div>

            <div className="chat-messages">
              {messages.map(m => (
                <div key={m.id} className={`chat-msg chat-msg--${m.from}`}>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>

            <div className="chat-input-wrap">
              <input
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
              />
              <button className="chat-send" onClick={send}><FiSend /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
