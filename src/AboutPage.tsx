import Logo from '@/Logo'

export default function AboutPage({ goHome }: { goHome: () => void }) {
  return (
    <div style={{ backgroundColor: '#fbf8f2', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #180f0a 0%, #26170e 55%, #3a2315 100%)', padding: '88px 28px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', background: 'rgba(200,100,50,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(232,180,114,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          <Logo size={84} style={{ marginBottom: 28, border: "2px solid rgba(212,196,154,0.4)" }} />
          <div className="badge badge-cream animate-fade-up" style={{ marginBottom: 20 }}>Our Story</div>
          <h1 className="animate-fade-up delay-100" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(34px, 5.5vw, 60px)', fontWeight: 700, color: '#fbf8f2', margin: '0 0 18px', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Welcome to<br /><em style={{ color: '#d4c49a' }}>The Artisan Bistro</em>
          </h1>
          <p className="animate-fade-up delay-200" style={{ color: 'rgba(247,243,236,0.65)', fontSize: 16, lineHeight: 1.8, maxWidth: 460, margin: '0 auto 32px', fontWeight: 300 }}>
            Nourishing. Wholesome. Made for you. ♡
          </p>
          <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['No Gluten', 'No Refined Sugar', 'No Palm Oil', 'No Preservatives', 'AI Powered 🤖'].map(t => (
              <span key={t} className="badge badge-cream">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CARDS — overlap hero */}
      <section style={{ maxWidth: 1060, margin: '-52px auto 0', padding: '0 28px 80px', position: 'relative', zIndex: 2 }}>
        <div className="contact-cards-grid">
          {/* Contact info card */}
          <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid #ebdccb', boxShadow: '0 12px 48px rgba(37,24,17,0.08)' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#241710', margin: '0 0 24px' }}>Get in Touch</h2>
            {([
              { icon: '📞', label: 'Call / WhatsApp', value: '+1 (555) 234-5678', href: 'tel:+15552345678' },
              { icon: '✉️', label: 'Email', value: 'contact@theartisanbistro.com', href: 'mailto:contact@theartisanbistro.com' },
              { icon: '📍', label: 'Location', value: '42 Culinary Way, Downtown District', href: null },
              { icon: '📸', label: 'Instagram', value: '@theartisanbistro', href: null },
              { icon: '👩🏼‍💼', label: 'Founder', value: 'Chef Julian Vance (Head Chef)', href: null },
            ] as { icon: string; label: string; value: string; href: string | null }[]).map(({ icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 0', borderBottom: '1px solid #f2e7db' }}>
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#826955', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 3 }}>{label}</div>
                  {href
                    ? <a href={href} style={{ color: '#241710', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#b85428')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#241710')}
                      >{value}</a>
                    : <div style={{ color: '#241710', fontWeight: 600, fontSize: 14 }}>{value}</div>
                  }
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'linear-gradient(145deg, #251811, #3b251a)', borderRadius: 20, padding: '32px 28px', color: '#fbf8f2', flex: 1 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>🏡</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, marginBottom: 10 }}>Small Batch. Made Fresh.</div>
              <p style={{ color: 'rgba(247,243,236,0.65)', fontSize: 14, lineHeight: 1.8, margin: '0 0 20px' }}>
                Every meal is prepared in small batches daily — no bulk cooking, no shortcuts. Just real food made with intention.
              </p>
              {['Made fresh every day', 'Delivered to your door', 'Clean & conscious nutrition'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(247,243,236,0.65)', marginBottom: 8 }}>
                  <span style={{ color: '#b85428', fontWeight: 700, fontSize: 16 }}>·</span> {item}
                </div>
              ))}
            </div>
            <a href="https://wa.me/15552345678" target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp" style={{ borderRadius: 14, padding: '17px', fontSize: 14, justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Reserve a Table via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ background: '#fff', padding: '80px 28px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div className="badge badge-green" style={{ marginBottom: 20 }}>Who We Are</div>
          <div className="divider" style={{ marginBottom: 20 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#241710', margin: '0 0 48px', letterSpacing: '-0.01em' }}>
            Our Mission &amp; Vision
          </h2>
          <div className="about-cards-row">
            <div style={{ background: '#fbf8f2', borderRadius: 20, padding: '36px 32px', border: '1px solid #ebdccb' }}>
              <div style={{ width: 46, height: 46, background: '#180f0a', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 20 }}>🌿</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#241710', marginBottom: 12 }}>Our Vision</div>
              <p style={{ color: '#725c4e', fontSize: 14, lineHeight: 1.85, margin: 0 }}>To deliver culinary excellence through honest ingredients, seasonal harvests, and handcrafted dishes that celebrate the joy of mindful dining.</p>
            </div>
            <div style={{ background: '#180f0a', borderRadius: 20, padding: '36px 32px' }}>
              <div style={{ width: 46, height: 46, background: 'rgba(232,180,114,0.15)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 20 }}>✨</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#fbf8f2', marginBottom: 12 }}>Our Mission</div>
              <p style={{ color: 'rgba(247,243,236,0.65)', fontSize: 14, lineHeight: 1.85, margin: 0 }}>To cook with heart, honoring traditional culinary technique alongside contemporary flavor pairings in an inviting and vibrant bistro atmosphere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTISAN vs INDUSTRIAL */}
      <section style={{ padding: '80px 28px', background: '#fbf8f2' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div className="badge badge-green" style={{ marginBottom: 20 }}>Why It Matters</div>
          <div className="divider" style={{ marginBottom: 12 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#241710', margin: '0 0 8px', letterSpacing: '-0.01em' }}>Artisan Sourcing ≠ Fast Dining</h2>
          <p style={{ color: '#826955', fontSize: 14, marginBottom: 40 }}>We believe great dining starts in the soil. Fresh, seasonal, and passionately prepared.</p>
          <div className="about-cards-row">
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px 28px', border: '1.5px solid #eed8c5', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 28 }}>🌱</span>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#241710' }}>The Bistro Way</div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#8a421e', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 14 }}>Farm-to-Table Craft</div>
              {['Naturally rich in vitamins & minerals', 'Boosts immunity & energy', 'Supports holistic health & balance'].map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: '#5f4b3d', marginBottom: 10 }}>
                  <span style={{ color: '#b85428', fontWeight: 700, flexShrink: 0 }}>✓</span>{p}
                </div>
              ))}
            </div>
            <div style={{ background: '#faf5ed', borderRadius: 20, padding: '36px 28px', border: '1.5px solid #ebdccb', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 28 }}>🍞</span>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#241710' }}>Industrial Fast Food</div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#8a421e', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 14 }}>Basic Fuel</div>
              {['Fills you up but low in nutrients', 'Often refined / processed', 'Quick energy, no lasting benefits'].map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: '#a8b8ae', marginBottom: 10 }}>
                  <span style={{ flexShrink: 0 }}>–</span>{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#180f0a', padding: '64px 28px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 700, color: '#fbf8f2', marginBottom: 36 }}>
            Clean Ingredients · Conscious Nutrition · Real Results
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {[
              { title: 'No Gluten', desc: 'Gentle on the gut' },
              { title: 'No Refined Sugar', desc: 'Natural sweetness only' },
              { title: 'No Palm Oil', desc: 'Heart-healthy fats' },
              { title: 'No Preservatives', desc: 'Made fresh, always' },
              { title: 'AI Powered Nutrition', desc: 'Smarter meal planning' },
              { title: 'Small Batch', desc: 'Made with love' },
            ].map(v => (
              <div key={v.title} style={{ background: 'rgba(247,243,236,0.06)', borderRadius: 100, padding: '10px 22px', border: '1px solid rgba(247,243,236,0.1)' }}>
                <div style={{ fontWeight: 700, color: '#fbf8f2', fontSize: 12 }}>{v.title}</div>
                <div style={{ color: 'rgba(247,243,236,0.45)', fontSize: 10, marginTop: 1 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 28px', textAlign: 'center', background: '#fbf8f2' }}>
        <div className="divider" />
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, color: '#241710', marginBottom: 10, letterSpacing: '-0.01em' }}>
          Ready to Nourish Yourself?
        </h3>
        <p style={{ color: '#826955', fontSize: 15, marginBottom: 32 }}>Real food. Real nutrition. Real you.</p>
        <button onClick={goHome} className="btn btn-primary" style={{ padding: '14px 36px', fontSize: 15 }}>
          Explore Our Menu →
        </button>
      </section>

    </div>
  )
}
