import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import { PackageProvider } from './context/PackageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Home from './pages/Home';
import Services from './pages/Services';
import Wedding from './pages/Wedding';
import Birthday from './pages/Birthday';
import Anniversary from './pages/Anniversary';
import BabyShower from './pages/BabyShower';
import Party from './pages/Party';
import CarDecor from './pages/CarDecor';
import HomeDecor from './pages/HomeDecor';
import CustomBuilder from './pages/CustomBuilder';
import AddOns from './pages/AddOns';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Wishlist from './pages/Wishlist';
import Meals from './pages/Meals';

function ScrollToTop() {
  const { pathname } = useLocation();
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/wedding" element={<PageWrapper><Wedding /></PageWrapper>} />
        <Route path="/birthday" element={<PageWrapper><Birthday /></PageWrapper>} />
        <Route path="/anniversary" element={<PageWrapper><Anniversary /></PageWrapper>} />
        <Route path="/baby-shower" element={<PageWrapper><BabyShower /></PageWrapper>} />
        <Route path="/party" element={<PageWrapper><Party /></PageWrapper>} />
        <Route path="/car-decor" element={<PageWrapper><CarDecor /></PageWrapper>} />
        <Route path="/home-decor" element={<PageWrapper><HomeDecor /></PageWrapper>} />
        <Route path="/custom-builder" element={<PageWrapper><CustomBuilder /></PageWrapper>} />
        <Route path="/add-ons" element={<PageWrapper><AddOns /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
        <Route path="/meals" element={<PageWrapper><Meals /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const noFooterPaths = ['/login', '/signup'];

function AppContent() {
  const location = useLocation();
  const showFooter = !noFooterPaths.includes(location.pathname);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      {showFooter && <Footer />}
      <LiveChat />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PackageProvider>
          <AppContent />
        </PackageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
