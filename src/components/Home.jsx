export default function Home({ setPage }) {
  return (
    <div style={styles.page}>

      <div style={styles.badge}>✦ Available for projects</div>

      <h1 style={styles.title}>
        We design and build <em style={styles.italic}>digital products</em> people love
      </h1>

      <p style={styles.lead}>
        Studio is a small team of engineers and designers based in Nairobi.
        We help startups and businesses turn ideas into fast, beautiful software.
      </p>

      <div style={styles.btnRow}>
        <button onClick={() => setPage('about')} style={styles.primaryBtn}>
          Meet the team →
        </button>
        <button onClick={() => setPage('contact')} style={styles.secondaryBtn}>
          Get in touch
        </button>
      </div>

      <div style={styles.statsRow}>
        <div style={styles.stat}>
          <span style={styles.statNumber}>12+</span>
          <span style={styles.statLabel}>Projects shipped</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.stat}>
          <span style={styles.statNumber}>3</span>
          <span style={styles.statLabel}>Countries served</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.stat}>
          <span style={styles.statNumber}>100%</span>
          <span style={styles.statLabel}>Client satisfaction</span>
        </div>
      </div>

    </div>
  )
}

const styles = {
  page: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '5rem 2rem 3rem',
    animation: 'fadeIn 0.35s ease',
  },
  badge: {
    display: 'inline-block',
    fontSize: 13,
    fontWeight: 500,
    color: '#3B6D11',
    background: '#EAF3DE',
    border: '1px solid #c2e08a',
    borderRadius: 999,
    padding: '4px 14px',
    marginBottom: '1.5rem',
  },
  title: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(36px, 6vw, 56px)',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    color: '#111',
    maxWidth: 600,
  },
  italic: {
    fontStyle: 'italic',
    color: '#888',
  },
  lead: {
    fontSize: 18,
    color: '#555',
    lineHeight: 1.8,
    fontWeight: 300,
    maxWidth: 520,
    marginBottom: '2.5rem',
  },
  btnRow: {
    display: 'flex',
    gap: 12,
    marginBottom: '4rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '12px 28px',
    background: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  },
  secondaryBtn: {
    padding: '12px 28px',
    background: 'transparent',
    color: '#111',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  },
  statsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    flexWrap: 'wrap',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statNumber: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 32,
    color: '#111',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 13,
    color: '#888',
    fontWeight: 400,
  },
  divider: {
    width: 1,
    height: 40,
    background: '#eee',
  },
}