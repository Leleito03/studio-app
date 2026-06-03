import { useState } from 'react'

const contactInfo = [
  { icon: '✉️', title: 'Email', value: 'hello@studio.io' },
  { icon: '📍', title: 'Location', value: 'Nairobi, Kenya' },
  { icon: '⏱️', title: 'Response time', value: 'Within 24 hours' },
]

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactUs() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allFilled = Object.values(form).every((v) => v.trim() !== '')
    if (!allFilled) {
      setStatus('error')
      setTimeout(() => setStatus(null), 3500)
      return
    }
    setStatus('success')
    setForm(emptyForm)
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <div style={styles.page}>

      <p style={styles.eyebrow}>Get in touch</p>
      <h1 style={styles.title}>
        Let's start a <em style={styles.italic}>conversation</em>
      </h1>
      <p style={styles.lead}>
        Have a project in mind or just want to say hello? Fill in the form
        and we'll get back to you within one business day.
      </p>

      <div style={styles.infoGrid}>
        {contactInfo.map((item) => (
          <div key={item.title} style={styles.infoCard}>
            <span style={styles.infoIcon}>{item.icon}</span>
            <div>
              <p style={styles.infoTitle}>{item.title}</p>
              <p style={styles.infoValue}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={styles.formBox} noValidate>

        <div style={styles.row}>
          <div style={styles.group}>
            <label style={styles.label}>First name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Mitchell"
              style={styles.input}
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Last name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Leleito"
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Email address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={styles.input}
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            style={styles.input}
          />
        </div>

        <div style={{ ...styles.group, marginBottom: 20 }}>
          <label style={styles.label}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us what you're working on..."
            rows={4}
            style={{ ...styles.input, resize: 'vertical' }}
          />
        </div>

        <button type="submit" style={styles.submitBtn}>
          Send message →
        </button>

        {status === 'success' && (
          <p style={{ ...styles.toast, ...styles.toastSuccess }}>
            ✅ Message sent! We'll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p style={{ ...styles.toast, ...styles.toastError }}>
            ⚠️ Please fill in all fields before sending.
          </p>
        )}

      </form>
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
    marginBottom: '2rem',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 12,
    marginBottom: '2rem',
  },
  infoCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: 8,
  },
  infoIcon: { fontSize: 18, marginTop: 2 },
  infoTitle: { fontSize: 13, fontWeight: 600, color: '#111', margin: '0 0 2px' },
  infoValue: { fontSize: 13, color: '#888', margin: 0 },
  formBox: {
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: 12,
    padding: '1.5rem',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
    marginBottom: 0,
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: '#555',
  },
  input: {
    padding: '9px 12px',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    background: '#fff',
    color: '#111',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  submitBtn: {
    padding: '10px 24px',
    background: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  },
  toast: {
    marginTop: 12,
    padding: '10px 14px',
    borderRadius: 8,
    fontSize: 14,
  },
  toastSuccess: {
    background: '#EAF3DE',
    border: '1px solid #639922',
    color: '#3B6D11',
  },
  toastError: {
    background: '#FCEBEB',
    border: '1px solid #E24B4A',
    color: '#A32D2D',
  },
}