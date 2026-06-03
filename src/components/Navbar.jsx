import { useState } from 'react'

export default function Navbar({ page, setPage }) {
  const [hovered, setHovered] = useState(null)

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>Studio</span>
      <div style={styles.links}>
        {['about', 'contact'].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            onMouseEnter={() => setHovered(p)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...styles.btn,
              ...(page === p ? styles.active : {}),
              ...(hovered === p && page !== p ? styles.hovered : {}),
            }}
          >
            {p === 'about' ? 'About us' : 'Contact us'}
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