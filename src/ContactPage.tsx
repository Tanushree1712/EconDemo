import Logo from '@/Logo'

const WA_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ContactPage({ goHome }: { goHome: () => void }) {
  return (
    <div style={{ backgroundColor: '#fbf8f2', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #140d08 0%, #241710 50%, #3a2315 100%)', padding: '96px 28px 128px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 420, height: 420, borderRadius: '50%', border: '1px solid rgba(247,243,236,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(247,243,236,0.03)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -90, left: -90, width: 340, height: 340, borderRadius: '50%', border: '1px solid rgba(124,45,62,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 540, margin: '0 auto' }}>
          <Logo size={76} style={{ marginBottom: 28, border: "2px solid rgba(212,196,154,0.4)" }} />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 100, padding: '5px 16px', marginBottom: 20 }}>
            <div className="live-dot" />
            <span style={{ color: '#f59e0b', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>WE'RE HERE FOR YOU</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(38px, 6vw, 64px)', fontWeight: 700, color: '#fbf8f2', margin: '0 0 18px', lineHeight: 1.08, letterSpacing: '-0.01em' }}>
            Let's Connect ♡
          </h1>
          <p style={{ color: 'rgba(247,243,236,0.6)', fontSize: 15, lineHeight: 1.8, maxWidth: 380, margin: '0 auto', fontWeight: 300 }}>
            Order, ask questions, share feedback — we're always just a message away.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ maxWidth: 920, margin: '-60px auto 0', padding: '0 28px 80px', position: 'relative', zIndex: 2 }}>
        <div className="contact-cards-grid">

          {/* WhatsApp */}
          <a href="https://wa.me/15552345678" target="_blank" rel="noopener noreferrer"
            style={{ background: '#b85428', borderRadius: 20, padding: '28px 26px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 16px 56px rgba(184,84,40,0.25)', transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 72px rgba(37,211,102,0.32)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 16px 56px rgba(37,211,102,0.22)' }}
          >
            <div style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{WA_ICON}</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Instant Table Booking</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 1.65 }}>Message our maître d for reservations, chef specials, and private table bookings.</div>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.18)', borderRadius: 100, padding: '7px 16px', width: 'fit-content' }}>
              <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>Reserve via WhatsApp →</span>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+15552345678"
            style={{ background: '#fff', borderRadius: 20, padding: '28px 26px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 8px 36px rgba(37,24,17,0.07)', border: '1px solid #ebdccb', transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(37,24,17,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(37,24,17,0.07)' }}
          >
            <div style={{ width: 44, height: 44, background: '#f8ede3', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>📞</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#241710', marginBottom: 6 }}>Call Us</div>
              <div style={{ color: '#826955', fontSize: 13, lineHeight: 1.65 }}>Call or WhatsApp directly to place an order or ask anything at all.</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#826955', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 5 }}>Phone / WhatsApp</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#241710' }}>+1 (555) 234-5678</div>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:contact@theartisanbistro.com"
            style={{ background: '#fff', borderRadius: 20, padding: '28px 26px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 8px 36px rgba(37,24,17,0.07)', border: '1px solid #ebdccb', transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(37,24,17,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(37,24,17,0.07)' }}
          >
            <div style={{ width: 44, height: 44, background: '#f8ede3', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>✉️</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#241710', marginBottom: 6 }}>Email Us</div>
              <div style={{ color: '#826955', fontSize: 13, lineHeight: 1.65 }}>For bulk orders, catering, events, or any feedback — drop us a line.</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#826955', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 5 }}>Email Address</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: '#241710', wordBreak: 'break-all' }}>contact@theartisanbistro.com</div>
            </div>
          </a>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <section style={{ background: '#fff', padding: '72px 28px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="badge badge-green" style={{ marginBottom: 16 }}>Find Us</div>
            <div className="divider" style={{ marginBottom: 8 }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#241710', margin: 0, letterSpacing: '-0.01em' }}>More Ways to Reach Us</h2>
          </div>
          <div className="detail-strip-grid">
            {[
              { icon: '📍', label: 'Location', primary: '42 Culinary Way, Downtown District', secondary: 'Metro City' },
              { icon: '📸', label: 'Instagram', primary: '@theartisanbistro', secondary: 'DM to order' },
              { icon: '👩🏼‍💼', label: 'Founder', primary: 'Chef Julian Vance', secondary: 'Head Chef & Co-Founder' },
              { icon: '🕐', label: 'Availability', primary: 'Mon – Sat', secondary: 'Fresh meals every day' },
            ].map(({ icon, label, primary, secondary }) => (
              <div key={label} style={{ background: '#fbf8f2', borderRadius: 18, padding: '28px 22px', border: '1px solid #ebdccb', transition: 'transform 0.22s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#826955', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 7 }}>{label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#241710', marginBottom: 3, wordBreak: 'break-word' }}>{primary}</div>
                <div style={{ fontSize: 12, color: '#826955' }}>{secondary}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ maxWidth: 920, margin: '0 auto', padding: '56px 28px 88px' }}>
        <div style={{ background: 'linear-gradient(145deg, #180f0a 0%, #251811 55%, #3a2315 100%)', borderRadius: 24, padding: '60px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(124,45,62,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(74,222,128,0.04)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>🥗</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 700, color: '#fbf8f2', margin: '0 0 12px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              Hungry? Let's Fix That.
            </h3>
            <p style={{ color: 'rgba(247,243,236,0.6)', fontSize: 14, margin: '0 auto 36px', lineHeight: 1.8, maxWidth: 420 }}>
              Handcrafted dishes made from farm-fresh seasonal ingredients. Browse our menu or message us for reservations.
            </p>
            <div className="cta-btn-row">
              <button onClick={goHome} className="btn btn-maroon" style={{ padding: '13px 30px', fontSize: 14 }}>Browse Menu →</button>
              <a href="https://wa.me/15552345678" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '13px 30px', fontSize: 14 }}>
                {WA_ICON} WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
