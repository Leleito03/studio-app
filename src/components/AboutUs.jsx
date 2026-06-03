const team = [
  { initials: 'AL', name: 'Amara Lee', role: 'Co-founder & CEO', bg: '#EEEDFE', color: '#3C3489' },
  { initials: 'JO', name: 'Jonas Osei', role: 'Head of Engineering', bg: '#E1F5EE', color: '#085041' },
  { initials: 'SR', name: 'Sofia Reyes', role: 'Lead Designer', bg: '#FAECE7', color: '#712B13' },
]

const values = [
  { icon: '💻', label: 'Clean code', desc: 'We write for the next person, not the deadline.' },
  { icon: '👥', label: 'People first', desc: 'Great products start with listening.' },
  { icon: '🚀', label: 'Ship often', desc: 'Small iterations beat big launches.' },
]

export default function AboutUs() {
  return (
    <div style={styles.page}>

      <p style={styles.eyebrow}>Who we are</p>
      <h1 style={styles.title}>
        Building software that <em style={styles.italic}>actually</em> works
      </h1>
      <p style={styles.lead}>
        We're a small, tight-knit team of engineers and designers who care
        deeply about the craft of building clean, useful products — from the
        first line of code to the last pixel.
      </p>

      <div style={styles.teamGrid}>
        {team.map((member) => (
          <div key={member.initials} style={styles.card}>
            <div style={{ ...styles.avatar, background: member.bg, color: member.color }}>
              {member.initials}
            </div>
            <p style={styles.name}>{member.name}</p>
            <p style={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>

      <hr style={styles.divider} />

      <p style={styles.eyebrow}>Our values</p>
      <div style={styles.valuesGrid}>
        {values.map((v) => (
          <div key={v.label} style={styles.valueCard}>
            <span style={styles.icon}>{v.icon}</span>
            <p style={styles.valueLabel}>{v.label}</p>
            <p style={styles.valueDesc}>{v.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

const styles = {
  page: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '3rem 2rem',
    animation: 'fadeIn 0.35s ease',
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#888',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(32px, 5vw, 44px)',
    lineHeight: 1.1,
    marginBottom: '1.25rem',
    color: '#111',
  },
  italic: {
    fontStyle: 'italic',
    color: '#888',
  },
  lead: {
    fontSize: 17,
    color: '#555',
    lineHeight: 1.8,
    fontWeight: 300,
    maxWidth: 540,
    marginBottom: '2.5rem',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 16,
    marginBottom: '2.5rem',
  },
  card: {
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: 12,
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: 600,
    color: '#111',
    margin: 0,
  },
  role: {
    fontSize: 13,
    color: '#888',
    margin: 0,
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #eee',
    margin: '2.5rem 0',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 12,
  },
  valueCard: {
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: 8,
  },
  icon: {
    fontSize: 20,
    display: 'block',
    marginBottom: 8,
  },
  valueLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: '#111',
    margin: '0 0 4px',
  },
  valueDesc: {
    fontSize: 13,
    color: '#888',
    lineHeight: 1.6,
    margin: 0,
  },
}