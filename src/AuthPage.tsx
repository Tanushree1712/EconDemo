import { useState } from 'react'
import Logo from '@/Logo'

const EyeOpen = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)
const EyeOff = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)
const GoogleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.5-2.9-11.3-7.1l-6.5 5C9.6 39.7 16.3 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.5-2.6 4.6-4.8 6l6.2 5.2C40.6 35.7 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
  </svg>
)

interface Props { mode: 'signin' | 'signup'; onClose: () => void; onAuth: (name: string, email: string) => void }
interface FieldProps { label: string; type: string; value: string; onChange: (v: string) => void; placeholder: string; suffix?: React.ReactNode }

function Field({ label, type, value, onChange, placeholder, suffix }: FieldProps) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label className="field-label">{label}</label>
      <div style={{ position: 'relative' }}>
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: '100%', padding: suffix ? '12px 44px 12px 16px' : '12px 16px',
            borderRadius: 12, border: `1.5px solid ${focused ? '#c86432' : '#e0d8c8'}`,
            fontSize: 14, color: '#241710', outline: 'none', boxSizing: 'border-box',
            background: focused ? '#fff' : '#faf8f4',
            transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
            fontFamily: "'Inter', sans-serif",
            boxShadow: focused ? '0 0 0 3px rgba(46,92,62,0.08)' : 'none',
          }}
        />
        {suffix && <div style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)' }}>{suffix}</div>}
      </div>
    </div>
  )
}

export default function AuthPage({ mode: initialMode, onClose, onAuth }: Props) {
  const [mode, setMode] = useState(initialMode)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const switchMode = (m: 'signin' | 'signup') => { setMode(m); setError('') }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setError('')
    if (!email || !password) { setError('Please fill in all required fields.'); return }
    if (mode === 'signup' && !name) { setError('Please enter your name.'); return }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onAuth(mode === 'signup' ? name : email.split('@')[0], email) }, 900)
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(20,13,8,0.75)', backdropFilter: 'blur(10px)' }} />

      <div className="auth-modal animate-scale-in" style={{ position: 'relative', zIndex: 1, background: '#fff', boxShadow: '0 48px 120px rgba(0,0,0,0.28)' }}>

        {/* Header */}
        <div className="auth-header" style={{ background: '#180f0a', padding: '36px 36px 32px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(200,100,50,0.08)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 140, height: 140, borderRadius: '50%', background: 'rgba(232,180,114,0.05)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 13, marginBottom: 28 }}>
            <Logo size={42} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: '#fbf8f2', lineHeight: 1.15 }}>The Artisan Bistro</div>
              <div style={{ fontSize: 11, color: 'rgba(247,243,236,0.5)', marginTop: 2 }}>Handcrafted Cuisine · Fresh Daily</div>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 25, fontWeight: 700, color: '#fbf8f2', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
              {mode === 'signin' ? 'Welcome back' : 'Create account'}
            </h2>
            <p style={{ color: 'rgba(247,243,236,0.5)', fontSize: 13, margin: '0 0 22px', lineHeight: 1.5 }}>
              {mode === 'signin' ? 'Sign in to explore your dining reservations' : 'Create your account for reservations and online dining'}
            </p>
            {/* Tab switcher */}
            <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', borderRadius: 12, padding: 3 }}>
              {(['signin', 'signup'] as const).map(m => (
                <button key={m} onClick={() => switchMode(m)}
                  style={{ flex: 1, padding: '8px 0', borderRadius: 10, border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', background: mode === m ? '#fbf8f2' : 'transparent', color: mode === m ? '#241710' : 'rgba(251,246,238,0.45)', fontFamily: "'Inter', sans-serif" }}
                >{m === 'signin' ? 'Sign In' : 'Sign Up'}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="auth-body" style={{ padding: '28px 36px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {mode === 'signup' && <Field label="Full Name" type="text" value={name} onChange={setName} placeholder="Your name" />}
          <Field label="Email Address" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
          {mode === 'signup' && <Field label="Phone Number" type="tel" value={phone} onChange={setPhone} placeholder="+91 90000 00000" />}
          <Field label="Password" type={showPass ? 'text' : 'password'} value={password} onChange={setPassword} placeholder="Min. 6 characters"
            suffix={
              <button type="button" onClick={() => setShowPass(!showPass)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a8b8ae', display: 'flex', alignItems: 'center', padding: 0, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c86432')}
                onMouseLeave={e => (e.currentTarget.style.color = '#a8b8ae')}
              >{showPass ? <EyeOff /> : <EyeOpen />}</button>
            }
          />
          {mode === 'signin' && (
            <div style={{ textAlign: 'right', marginTop: -6 }}>
              <button type="button" style={{ background: 'none', border: 'none', color: '#b85428', fontSize: 12, fontWeight: 600, cursor: 'pointer', padding: 0 }}>Forgot password?</button>
            </div>
          )}
          {error && (
            <div style={{ background: '#fdf2f4', border: '1px solid #e8b4be', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#b85428', lineHeight: 1.5 }}>{error}</div>
          )}
          <button type="submit" disabled={loading}
            style={{ background: loading ? '#b8a89b' : '#251811', color: '#fbf8f2', border: 'none', borderRadius: 100, padding: '13px', fontSize: 14, fontWeight: 700, cursor: loading ? 'default' : 'pointer', transition: 'background 0.2s', marginTop: 4, letterSpacing: '0.02em', opacity: loading ? 0.8 : 1, fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => !loading && (e.currentTarget.style.background = '#3b251a')}
            onMouseLeave={e => !loading && (e.currentTarget.style.background = '#251811')}
          >{loading ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}</button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '2px 0' }}>
            <div style={{ flex: 1, height: 1, background: '#ede7d9' }} />
            <span style={{ fontSize: 11, color: '#c8bfad', letterSpacing: '0.05em', textTransform: 'uppercase' }}>or</span>
            <div style={{ flex: 1, height: 1, background: '#ede7d9' }} />
          </div>

          <button type="button"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#faf8f4', border: '1.5px solid #dfcdb9', borderRadius: 100, padding: '12px', fontSize: 13, fontWeight: 600, color: '#2d2d2d', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s', fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c86432'; e.currentTarget.style.background = '#faf5ed' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0d8c8'; e.currentTarget.style.background = '#faf8f4' }}
          ><GoogleIcon /> Continue with Google</button>

          <p style={{ textAlign: 'center', fontSize: 12, color: '#a8b8ae', margin: '2px 0 0', lineHeight: 1.7 }}>
            {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
            <button type="button" onClick={() => switchMode(mode === 'signin' ? 'signup' : 'signin')}
              style={{ background: 'none', border: 'none', color: '#b85428', fontWeight: 700, cursor: 'pointer', fontSize: 12, padding: 0, fontFamily: "'Inter', sans-serif" }}>
              {mode === 'signin' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
