import { useState } from 'react'

export default function Navbar({ page, setPage }) {
  const [hovered, setHovered] = useState(null)

  const links = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About us' },
    { key: 'contact', label: 'Contact us' },
  ]

  return (
    <nav style={styles.nav}>
      <span
        onClick={() => setPage('home')}
        style={styles.logo}
      >
        Studio
      </span>
      <div style={styles.links}>
        {links.map((link) => (
          <button
            key={link.key}
            onClick={() => setPage(link.key)}
            onMouseEnter={() => setHovered(link.key)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...styles.btn,
              ...(page === link.key ? styles.active : {}),
              ...(hovered === link.key && page !== link.key ? styles.hovered : {}),
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    borderBottom: '1px solid #eee',
    position: 'sticky',
    top: 0,
    background: '#fff',
    zIndex: 10,
  },
  logo: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 20,
    letterSpacing: '-0.5px',
    color: '#111',
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    gap: 4,
  },
  btn: {
    padding: '8px 18px',
    border: '1px solid transparent',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 400,
    cursor: 'pointer',
    background: 'transparent',
    color: '#888',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'all 0.15s ease',
  },
  hovered: {
    color: '#111',
    background: '#f9f9f9',
    borderColor: '#eee',
  },
  active: {
    color: '#111',
    background: '#f4f4f4',
    borderColor: '#ddd',
    fontWeight: 600,
  },
}