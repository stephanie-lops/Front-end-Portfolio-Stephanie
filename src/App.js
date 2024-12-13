
import InitialPage from './pages/InitialPage'
import PortfolioPage from './pages/PortfolioPage'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import AlbumDetails from './pages/AlbumDetails'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element = {<InitialPage />} />
          <Route path="/portfolio-page" element = {<PortfolioPage />} />
          {/* <Route path="/products" element = {<PortfolioPage />} /> */}
          <Route path="/products/:id" element = {<AlbumDetails />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact-page" element = {<ContactPage />} />
        </Routes>
    </div>
  )
}