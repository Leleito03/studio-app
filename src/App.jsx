import { useState } from 'react'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

export default function App() {
  const [page, setPage] = useState('about')

  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {page === 'about' && <AboutUs />}
      {page === 'contact' && <ContactUs />}
    </div>
  )
}