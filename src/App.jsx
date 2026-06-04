import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <AboutUs />}
      {page === 'contact' && <ContactUs />}
    </div>
  )
}