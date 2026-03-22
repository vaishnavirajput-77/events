import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import Birthday from './pages/Birthday'
import Wedding from './pages/Wedding'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <ScrollToHash />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/wedding" element={<Wedding />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App