import { useEffect, useState } from 'react'
import AboutPage from '@/AboutPage'
import { submitOrder } from '@/lib/orders'
import ContactPage from '@/ContactPage'
import AuthPage from '@/AuthPage'
import GridMotion from '@/GridMotion'
import Logo from '@/Logo'
import dish_01_platter from '@/assets/dishes/dish_01_platter.jpg'
import dish_02_pasta from '@/assets/dishes/dish_02_pasta.jpg'
import dish_03_paneer from '@/assets/dishes/dish_03_paneer.jpg'
import dish_04_crunch_bowl from '@/assets/dishes/dish_04_crunch_bowl.jpg'
import dish_05_mezze from '@/assets/dishes/dish_05_mezze.jpg'
import dish_06_hearth_pot from '@/assets/dishes/dish_06_hearth_pot.jpg'
import dish_07_wrap from '@/assets/dishes/dish_07_wrap.jpg'
import dish_08_mango_parfait from '@/assets/dishes/dish_08_mango_parfait.jpg'
import dish_09_quinoa from '@/assets/dishes/dish_09_quinoa.jpg'
import dish_10_soba from '@/assets/dishes/dish_10_soba.jpg'
import dish_11_curry from '@/assets/dishes/dish_11_curry.jpg'
import dish_12_roasted_bowl from '@/assets/dishes/dish_12_roasted_bowl.jpg'
import dish_13_porridge from '@/assets/dishes/dish_13_porridge.jpg'
import dish_14_fritters from '@/assets/dishes/dish_14_fritters.jpg'
import dish_15_rice_cakes from '@/assets/dishes/dish_15_rice_cakes.jpg'
import dish_16_panna_cotta from '@/assets/dishes/dish_16_panna_cotta.jpg'
import dish_17_tiramisu from '@/assets/dishes/dish_17_tiramisu.jpg'
import dish_18_citrus_tonic from '@/assets/dishes/dish_18_citrus_tonic.jpg'
import dish_19_pomegranate_salad from '@/assets/dishes/dish_19_pomegranate_salad.jpg'
import dish_20_croquettes from '@/assets/dishes/dish_20_croquettes.jpg'
import dish_21_lunch_duo from '@/assets/dishes/dish_21_lunch_duo.jpg'
import dish_22_feast from '@/assets/dishes/dish_22_feast.jpg'
import dish_23_sweet_pairing from '@/assets/dishes/dish_23_sweet_pairing.jpg'

const gridItems = [
  dish_01_platter,
  dish_02_pasta,
  dish_03_paneer,
  dish_04_crunch_bowl,
  dish_05_mezze,
  dish_07_wrap,
  dish_09_quinoa,
  dish_10_soba,
  dish_11_curry,
  dish_16_panna_cotta,
  dish_22_feast,
]

type Category = 'All' | 'Starters' | 'Main Course' | 'Artisan Bowls' | 'Pasta & Wraps' | 'Breakfast' | 'Desserts & Drinks' | 'Tasting Combos'

interface Product {
  id: number
  name: string
  tagline: string
  price: number
  subscriptionPrice?: number
  category: Category
  image: string
  badges: string[]
  description: string
  isPopular?: boolean
}

const products: Product[] = [
  { id: 1, name: 'Chef’s Heritage Tasting Platter', tagline: 'Artisan Cheeses · Warm Breads · House Dips', price: 320, category: 'Starters', image: dish_01_platter, badges: ['Chef Favorite', 'Handcrafted', 'Seasonal'], description: 'A curated selection of roasted root vegetables, artisan dips, marinated olives, warm sourdough crisps, and spiced herb cream.', isPopular: true },
  { id: 2, name: 'Tuscan Truffle & Herb Cavatappi', tagline: 'Aromatic · Creamy · Farm Herb Pesto', price: 290, subscriptionPrice: 250, category: 'Pasta & Wraps', image: dish_02_pasta, badges: ['Handmade Pasta', 'Truffle Essence', 'Rich & Savory'], description: 'Artisan twisted pasta tossed in roasted walnut and basil pesto, shaved aged parmesan, sun-dried tomatoes, and cracked black pepper.' },
  { id: 3, name: 'Charred Spiced Paneer Skewers', tagline: 'Smoky · Tender · Fresh Mint Glaze', price: 280, subscriptionPrice: 240, category: 'Starters', image: dish_03_paneer, badges: ['Clay Oven Grilled', 'High Protein', 'Gluten-Free'], description: 'Farm-fresh cottage cheese cubes marinated in stone-ground spices and Greek yogurt, charred to perfection with peppers and sweet shallots.', isPopular: true },
  { id: 4, name: 'Garden Harvest Crunch Bowl', tagline: 'Vibrant · Crisp · Zesty Citrus Dressing', price: 240, subscriptionPrice: 210, category: 'Artisan Bowls', image: dish_04_crunch_bowl, badges: ['Farm to Table', 'Crisp Greens', 'Immunity Boost'], description: 'Crisp baby greens, shredded purple cabbage, avocado slices, roasted seeds, and seasonal berries drizzled with honey-lime vinaigrette.' },
  { id: 5, name: 'Mediterranean Mezze Bowl', tagline: 'Sun-Drenched · Nutritious · Balanced', price: 260, subscriptionPrice: 220, category: 'Artisan Bowls', image: dish_05_mezze, badges: ['Plant Protein', 'Heart Healthy', 'Signature'], description: 'Organic grains, creamy garlic tahini, spiced chickpeas, pickled cucumbers, heirloom cherry tomatoes, and warm pita wedges.' },
  { id: 6, name: 'Rustic Hearth Vegetable Pot', tagline: 'Simmered Slow · Rich Aroma · Comforting', price: 310, category: 'Main Course', image: dish_06_hearth_pot, badges: ['Slow Cooked', 'Wholesome', 'House Specialty'], description: 'Golden simmered ancient grains cooked in aromatic herb broth with tender caramelized leeks, squash, and herb-infused whipped yogurt.' },
  { id: 7, name: 'Roasted Halloumi & Herb Wrap', tagline: 'Flaky Flatbread · Garlic Aioli · Fresh Herbs', price: 260, category: 'Pasta & Wraps', image: dish_07_wrap, badges: ['Hand-Rolled', 'Vegetarian', 'Quick Bite'], description: 'Golden grilled halloumi rolled in toasted flatbread with baby arugula, roasted bell peppers, pickled red onions, and lemon herb aioli.' },
  { id: 8, name: 'Tropical Mango Chia Parfait', tagline: 'Velvety · Naturally Sweet · Coconut Cream', price: 180, category: 'Desserts & Drinks', image: dish_08_mango_parfait, badges: ['Dairy-Free Option', 'Omega-3s', 'No Refined Sugar'], description: 'Slow-steeped chia seeds in coconut milk layered with ripe Alphonso puree, toasted almond flakes, and fresh mint.' },
  { id: 9, name: 'Golden Saffron Quinoa Bowl', tagline: 'Fragrant · Colorful · Nutrient-Dense', price: 290, category: 'Artisan Bowls', image: dish_09_quinoa, badges: ['Super Grains', 'Antioxidant Rich', 'Chef Selection'], description: 'Infused tricolor quinoa with sweet charred corn, edamame, pomegranate arils, and citrus vinaigrette topped with toasted pumpkin seeds.', isPopular: true },
  { id: 10, name: 'Tokyo Sesame Soba Bowl', tagline: 'Umami Rich · Silky Noodles · Crisp Veggies', price: 320, category: 'Artisan Bowls', image: dish_10_soba, badges: ['Toasted Sesame', 'Plant Based', 'Umami Fusion'], description: 'Chilled buckwheat soba noodles tossed in dark sesame oil and ginger glaze, accompanied by seared organic tofu, scallions, and wakame.', isPopular: true },
  { id: 11, name: 'Fragrant Lemongrass Coconut Curry', tagline: 'Silky Broth · Fresh Herbs · Jasmine Rice', price: 340, category: 'Main Course', image: dish_11_curry, badges: ['Aromatic Spice', 'Creamy Coconut', 'Guest Favorite'], description: 'Steamed jasmine rice paired with a velvety green curry simmered with galangal, kaffir lime, baby bamboo shoots, and crushed peanuts.' },
  { id: 12, name: 'Fire-Roasted Harvest Bowl', tagline: 'Smoky Sweet · Caramelized · Earthy', price: 250, category: 'Artisan Bowls', image: dish_12_roasted_bowl, badges: ['Charred Seasonal', 'Fiber Rich', 'Light & Fresh'], description: 'Oven-roasted baby carrots, caramelized beets, zucchini spears, and hemp heart crunch finished with aged balsamic drizzle.' },
  { id: 13, name: 'Stone-Ground Warm Grain Porridge', tagline: 'Comforting · Cinnamon Spiced · Toasted Nuts', price: 210, category: 'Breakfast', image: dish_13_porridge, badges: ['Morning Energy', 'Natural Honey', 'Warm & Cozy'], description: 'Milled grains simmered in almond milk, scented with vanilla bean and cinnamon, finished with medjool dates and crushed pistachios.' },
  { id: 14, name: 'Savory Herb & Zucchini Fritters', tagline: 'Golden Crust · Tender Inside · House Tzatziki', price: 260, category: 'Breakfast', image: dish_14_fritters, badges: ['Fresh Herbs', 'Pan-Seared', 'High Protein'], description: 'Three pan-crisped zucchini and herb patties served warm alongside creamy mint tzatziki and sweet roasted tomato relish.' },
  { id: 15, name: 'Steamed Coastal Rice Cakes', tagline: 'Cloud-Soft · Coconut Chutney · Spiced Lentil Dip', price: 240, category: 'Breakfast', image: dish_15_rice_cakes, badges: ['Steamed Fresh', 'Fermented Culture', 'Traditional'], description: 'Pillowy steamed artisan cakes served piping hot with freshly grated coconut relish and aromatic slow-simmered lentil stew.', isPopular: true },
  { id: 16, name: 'Artisan Mango Panna Cotta', tagline: 'Silky Smooth · Vanilla Infused · Alphonso Gelée', price: 160, category: 'Desserts & Drinks', image: dish_16_panna_cotta, badges: ['House Recipe', 'Velvety', 'Sweet Indulgence'], description: 'Chilled cream infused with Madagascar vanilla bean, crowned with luscious fresh mango purée and mint blossom.' },
  { id: 17, name: 'Espresso Bean Tiramisu Jar', tagline: 'Dark Roast · Mascarpone · Cocoa Dust', price: 190, category: 'Desserts & Drinks', image: dish_17_tiramisu, badges: ['Italian Classic', 'Single Origin', 'Decadent'], description: 'Layered house-baked biscuits steeped in rich espresso, whipped velvety mascarpone, and dark Dutch cocoa powder.' },
  { id: 18, name: 'Sunshine Citrus Tonic', tagline: 'Zesty · Cold-Pressed · Revitalizing', price: 140, category: 'Desserts & Drinks', image: dish_18_citrus_tonic, badges: ['Cold Pressed', 'Vitamin C Boost', 'Refreshing'], description: 'Fresh Valencia oranges, cold-pressed turmeric root, ginger spark, and sparkling mineral water poured over crushed ice.', isPopular: true },
  { id: 19, name: 'Pomegranate & Walnut Crisp Salad', tagline: 'Tart Sweet · Earthy Crunch · Herb Oil', price: 170, category: 'Starters', image: dish_19_pomegranate_salad, badges: ['Antioxidant Rich', 'Light Starter', 'Crisp'], description: 'Crisp watercress, ruby red pomegranate jewels, and candled walnuts tossed in our house champagne vinaigrette.' },
  { id: 20, name: 'Crisp Fava Bean Croquettes', tagline: 'Golden Panko · Garlic Aioli · Lemon Wedge', price: 220, category: 'Starters', image: dish_20_croquettes, badges: ['Crispy Outside', 'Tender Center', 'Popular Tapas'], description: 'Crispy herb-crusted fava bean croquettes paired with smoked paprika garlic aioli and pickled red peppers.', isPopular: true },
  { id: 21, name: 'Bistro Lunch Duo', tagline: 'Signature Bowl + Cold-Pressed Tonic', price: 360, category: 'Tasting Combos', image: dish_21_lunch_duo, badges: ['Best Value', 'Complete Meal', 'Midday Favorite'], description: 'Pair any Artisan Harvest Bowl with our signature cold-pressed Sunshine Citrus Tonic for the ultimate revitalizing lunch.' },
  { id: 22, name: 'The Epicurean Feast', tagline: 'Starter + Artisanal Main + Dessert', price: 520, category: 'Tasting Combos', image: dish_22_feast, badges: ['Three Courses', 'Chef Recommended', 'Dinner Special'], description: 'A complete three-course tasting experience: choose any warm starter, handcrafted main entrée, and house-made dessert jar.', isPopular: true },
  { id: 23, name: 'Sweet Harmony Pairing', tagline: 'Parfait + Artisanal Brew', price: 280, category: 'Tasting Combos', image: dish_23_sweet_pairing, badges: ['Afternoon Tea', 'Indulgent', 'Sweet Treat'], description: 'Your choice of our chilled mango or espresso dessert jars paired with pour-over single-origin coffee or botanical tea.' },
]

const categories: Category[] = ['All', 'Starters', 'Main Course', 'Artisan Bowls', 'Pasta & Wraps', 'Breakfast', 'Desserts & Drinks', 'Tasting Combos']

const WA_LINK = 'https://wa.me/15552345678'

export default function App() {
  const [page, setPage] = useState<'home' | 'menu' | 'about' | 'contact'>('home')
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | null>(null)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState({ customerName: '', email: '', phone: '', address: '', bookingDate: '', notes: '' })
  const [submittingOrder, setSubmittingOrder] = useState(false)
  const [orderFeedback, setOrderFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const goTo = (p: 'home' | 'menu' | 'about' | 'contact') => { setPage(p); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const handleAuth = (name: string, email: string) => { setUser({ name, email }); setAuthMode(null) }
  const handleSignOut = () => { setUser(null); setUserMenuOpen(false) }

  useEffect(() => {
    if (user) setCheckoutForm(prev => ({ ...prev, customerName: user.name, email: user.email }))
  }, [user])

  const handleOrderSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (cart.length === 0) { setOrderFeedback({ type: 'error', message: 'Add at least one item before placing your order.' }); return }
    if (!checkoutForm.customerName.trim() || !checkoutForm.email.trim() || !checkoutForm.phone.trim() || !checkoutForm.address.trim()) {
      setOrderFeedback({ type: 'error', message: 'Please fill in your name, email, phone, and address.' }); return
    }
    setSubmittingOrder(true); setOrderFeedback(null)
    try {
      const payload = {
        customerName: checkoutForm.customerName.trim(), email: checkoutForm.email.trim(),
        phone: checkoutForm.phone.trim(), address: checkoutForm.address.trim(),
        bookingDate: checkoutForm.bookingDate, notes: checkoutForm.notes.trim(),
        items: cart.map(item => ({ id: item.product.id, name: item.product.name, qty: item.qty, price: item.product.price })),
        totalPrice: cartTotal, submittedAt: new Date().toISOString(),
      }
      const result = await submitOrder(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || '', payload)
      setCart([])
      setCheckoutForm({ customerName: user?.name || '', email: user?.email || '', phone: '', address: '', bookingDate: '', notes: '' })
      setOrderFeedback({ type: 'success', message: result.message || 'Order submitted successfully.' })
    } catch (error) {
      setOrderFeedback({ type: 'error', message: error instanceof Error ? error.message : 'Something went wrong. Please try again.' })
    } finally { setSubmittingOrder(false) }
  }

  const filtered = products.filter(p =>
    (activeCategory === 'All' || p.category === activeCategory) &&
    (search.trim() === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
  )
  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0)

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id)
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { product, qty: 1 }]
    })
  }
  const removeFromCart = (id: number) => setCart(prev => prev.filter(i => i.product.id !== id))
  const updateQty = (id: number, delta: number) => setCart(prev => prev.map(i => i.product.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0))

  // ── NAV ──────────────────────────────────────────────────────────────────
  const navLinks = [
    { label: 'Home',    action: () => goTo('home') },
    { label: 'Menu',    action: () => goTo('menu') },
    { label: 'About',   action: () => goTo('about') },
    { label: 'Contact', action: () => goTo('contact') },
  ]

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fbf8f2', minHeight: '100vh', color: '#241710' }}>

      {/* ── NAVBAR ── */}
      <nav style={{ backgroundColor: '#180f0a', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Logo */}
          <button onClick={() => goTo('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <Logo size={40} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#fbf8f2', lineHeight: 1.15 }}>The Artisan</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: '#e8b472', lineHeight: 1.15 }}>Bistro</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden-mobile" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {navLinks.map(({ label, action }) => {
              const active = page === label.toLowerCase()
              return (
                <button key={label} onClick={action} className={`nav-link${active ? ' active' : ''}`}
                  style={{ color: active ? '#fbf6ee' : '#d9a873' }}>
                  {label}
                </button>
              )
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Auth */}
            {user ? (
              <div style={{ position: 'relative' }}>
                <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(247,243,236,0.08)', border: '1px solid rgba(247,243,236,0.16)', borderRadius: 100, padding: '5px 14px 5px 6px', cursor: 'pointer', color: '#fbf8f2', fontSize: 13, fontWeight: 600, transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(247,243,236,0.15)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(247,243,236,0.08)')}
                >
                  <div style={{ width: 28, height: 28, background: '#b85428', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>
                    {user.name[0].toUpperCase()}
                  </div>
                  {user.name.split(' ')[0]}
                </button>
                {userMenuOpen && (
                  <div className="animate-scale-in" style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: '#fff', borderRadius: 16, boxShadow: '0 12px 48px rgba(0,0,0,0.14)', border: '1px solid #ede7d9', minWidth: 190, overflow: 'hidden', zIndex: 100 }}>
                    <div style={{ padding: '14px 18px', borderBottom: '1px solid #f0ebe0' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#241710' }}>{user.name}</div>
                      <div style={{ fontSize: 11, color: '#826955', marginTop: 2 }}>{user.email}</div>
                    </div>
                    <button onClick={handleSignOut} style={{ width: '100%', padding: '12px 18px', background: 'none', border: 'none', textAlign: 'left', fontSize: 13, color: '#b85428', fontWeight: 600, cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#faefe8')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                    >Sign Out</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden-mobile" style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setAuthMode('signin')} className="btn btn-outline" style={{ padding: '7px 18px', fontSize: 13, borderRadius: 100 }}>Sign In</button>
                <button onClick={() => setAuthMode('signup')} style={{ background: '#f5ede1', border: 'none', color: '#251811', borderRadius: 100, padding: '7px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#ede7d9')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#fbf8f2')}
                >Sign Up</button>
              </div>
            )}

            {/* Cart */}
            <button onClick={() => setCartOpen(true)} style={{ position: 'relative', background: '#b85428', border: 'none', borderRadius: 100, padding: '8px 18px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, transition: 'background 0.2s, transform 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#cf6232'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#b85428'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              Cart
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: -5, right: -5, background: '#140d08', color: '#fbf6ee', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{cartCount}</span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="show-mobile" style={{ background: 'none', border: 'none', color: '#fbf8f2', cursor: 'pointer', padding: 4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="animate-fade-in" style={{ background: '#180f0a', padding: '12px 28px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {navLinks.map(({ label, action }) => (
              <button key={label} onClick={action} style={{ display: 'block', background: 'none', border: 'none', color: page === label.toLowerCase() ? '#fbf6ee' : '#d9a873', textAlign: 'left', fontSize: 15, fontWeight: 500, cursor: 'pointer', padding: '10px 0', width: '100%', fontFamily: "'Inter', sans-serif" }}>{label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ── PAGES ── */}
      {page === 'about'   && <AboutPage goHome={() => goTo('home')} />}
      {page === 'contact' && <ContactPage goHome={() => goTo('home')} />}

      {/* ── HOME ── */}
      {page === 'home' && (
        <>
          {/* HERO */}
          <GridMotion items={gridItems} gradientColor="#140d08">
            <div style={{ position: 'absolute', zIndex: 10, inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 28px', textAlign: 'center', background: 'radial-gradient(ellipse at center, rgba(24,15,10,0.88) 0%, rgba(24,15,10,0.65) 50%, rgba(24,15,10,0.2) 85%)' }}>
              <div style={{ maxWidth: 680, margin: '0 auto' }}>
                <div className="animate-fade-up badge badge-cream" style={{ marginBottom: 24 }}>
                  Handcrafted Cuisine · Farm-to-Table · Fresh Daily
                </div>
                <h1 className="animate-fade-up delay-100" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6.5vw, 76px)', fontWeight: 700, color: '#fbf8f2', lineHeight: 1.08, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
                  Welcome to<br />
                  <em style={{ color: '#d4c49a', fontStyle: 'italic' }}>The Artisan Bistro</em>
                </h1>
                <p className="animate-fade-up delay-200" style={{ fontSize: 17, color: 'rgba(247,243,236,0.78)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.75, fontWeight: 300 }}>
                  Wholesome seasonal dishes crafted with honest ingredients, aromatic herbs, and culinary passion. Fresh daily.
                </p>
                <div className="hero-cta-row animate-fade-up delay-300" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => goTo('menu')} className="btn btn-maroon" style={{ padding: '14px 32px', fontSize: 15 }}>
                    Explore Menu
                  </button>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '14px 28px', fontSize: 15 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Reserve Table
                  </a>
                </div>
                <div className="animate-fade-up delay-400" style={{ display: 'flex', justifyContent: 'center', gap: 28, marginTop: 52, flexWrap: 'wrap' }}>
                  {[['🌿', 'Gluten-Free'], ['🥗', 'Vegetarian'], ['✓', 'No Preservatives'], ['🌴', 'No Palm Oil']].map(([icon, label]) => (
                    <div key={label} style={{ textAlign: 'center', color: 'rgba(251,246,238,0.7)', fontSize: 12, letterSpacing: '0.04em' }}>
                      <div style={{ fontSize: 18, marginBottom: 5 }}>{icon}</div>
                      <div style={{ fontWeight: 500 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GridMotion>

          {/* WHY US STRIP */}
          <section style={{ backgroundColor: '#fffdfa', borderBottom: '1px solid #ebdccb' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }} className="why-strip">
              {[
                ['👨‍🍳', 'Master Craft', 'Culinary precision in every dish'],
                ['🌱', 'Clean Ingredients', 'Natural, minimally processed'],
                ['✨', 'Artisanal Flavors', 'Stone-ground spices & fresh herbs'],
                ['🍷', 'Thoughtful Pairings', 'Carefully balanced textures & tastes'],
                ['🏡', 'Made Fresh Daily', 'Prepared & delivered same day'],
              ].map(([icon, title, desc], i) => (
                <div key={title} style={{ textAlign: 'center', padding: '28px 16px', borderRight: i < 4 ? '1px solid #ebdccb' : 'none' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#241710', marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: 11, color: '#826955', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer style={{ background: '#180f0a', padding: '60px 28px 36px' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <div className="footer-grid">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
                    <Logo size={42} />
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#fbf8f2', lineHeight: 1.2 }}>The Artisan<br/>Bistro</div>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(247,243,236,0.5)', lineHeight: 1.85, margin: '0 0 18px', maxWidth: 240 }}>Handcrafted cuisine. Seasonal ingredients. An unforgettable dining experience in the Downtown District.</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 100, padding: '5px 14px' }}>
                    <div className="live-dot" />
                    <span style={{ fontSize: 10, color: '#f59e0b', fontWeight: 700, letterSpacing: '0.08em' }}>OPEN FOR ORDERS</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#df9858', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Get in Touch</div>
                  {[
                    { href: 'tel:+15552345678', label: '+1 (555) 234-5678', icon: '📞' },
                    { href: 'mailto:contact@theartisanbistro.com', label: 'contact@theartisanbistro.com', icon: '✉️' },
                  ].map(({ href, label, icon }) => (
                    <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(247,243,236,0.5)', fontSize: 13, textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fbf8f2')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,243,236,0.5)')}
                    >{icon} {label}</a>
                  ))}
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#f59e0b', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >💬 Table Reservations & Inquiries</a>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#df9858', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Our Promise</div>
                  {['Locally Sourced Produce', 'Zero Additives', 'Organic Farm Dairy', 'Handcrafted Daily', 'Mindful Hospitality'].map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 13, color: 'rgba(247,243,236,0.5)' }}>
                      <span style={{ color: '#c86432', fontWeight: 700, fontSize: 14 }}>·</span>{p}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(247,243,236,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <div style={{ fontSize: 11, color: 'rgba(247,243,236,0.28)', letterSpacing: '0.03em' }}>© 2026 The Artisan Bistro · Downtown District · Founded by Chef Julian Vance</div>
                <div style={{ fontSize: 11, color: 'rgba(247,243,236,0.28)' }}>Made with love ♡</div>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* ── MENU PAGE ── */}
      {page === 'menu' && (
        <>
          <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 28px' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="divider" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 700, color: '#241710', margin: '0 0 12px', letterSpacing: '-0.01em' }}>
                Our Menu
              </h2>
              <p style={{ color: '#826955', fontSize: 15, maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
                Handcrafted dishes made with seasonal harvests, aromatic herbs, and culinary passion.
              </p>
            </div>

            {/* Search */}
            <div style={{ maxWidth: 460, margin: '0 auto 32px', position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#826955" strokeWidth="2" style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search dishes, ingredients…" className="field-input"
                style={{ paddingLeft: 46, borderRadius: 100 }}
              />
              {search && (
                <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#826955', display: 'flex', padding: 4 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              )}
            </div>

            {/* Category filter */}
            <div className="category-filter">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`cat-btn${activeCategory === cat ? ' active' : ''}`}>{cat}</button>
              ))}
            </div>

            {/* Grid */}
            <div className="product-grid">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} onAdd={addToCart} />
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer style={{ background: '#180f0a', padding: '60px 28px 36px' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <div className="footer-grid">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
                    <Logo size={42} />
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#fbf8f2', lineHeight: 1.2 }}>The Artisan<br/>Bistro</div>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(247,243,236,0.5)', lineHeight: 1.85, margin: '0 0 18px', maxWidth: 240 }}>Handcrafted cuisine. Seasonal ingredients. An unforgettable dining experience in the Downtown District.</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 100, padding: '5px 14px' }}>
                    <div className="live-dot" />
                    <span style={{ fontSize: 10, color: '#f59e0b', fontWeight: 700, letterSpacing: '0.08em' }}>OPEN FOR ORDERS</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#df9858', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Get in Touch</div>
                  {[{ href: 'tel:+15552345678', label: '+1 (555) 234-5678', icon: '📞' }, { href: 'mailto:contact@theartisanbistro.com', label: 'contact@theartisanbistro.com', icon: '✉️' }].map(({ href, label, icon }) => (
                    <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(247,243,236,0.5)', fontSize: 13, textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fbf8f2')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,243,236,0.5)')}
                    >{icon} {label}</a>
                  ))}
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#f59e0b', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >💬 Table Reservations & Inquiries</a>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#df9858', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Our Promise</div>
                  {['Locally Sourced Produce', 'Zero Additives', 'Organic Farm Dairy', 'Handcrafted Daily', 'Mindful Hospitality'].map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 13, color: 'rgba(247,243,236,0.5)' }}>
                      <span style={{ color: '#c86432', fontWeight: 700 }}>·</span>{p}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(247,243,236,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <div style={{ fontSize: 11, color: 'rgba(247,243,236,0.28)' }}>© 2026 The Artisan Bistro · Downtown District · Founded by Chef Julian Vance</div>
                <div style={{ fontSize: 11, color: 'rgba(247,243,236,0.28)' }}>Made with love ♡</div>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* ── AUTH MODAL ── */}
      {authMode && <AuthPage mode={authMode} onClose={() => setAuthMode(null)} onAuth={handleAuth} />}

      {/* ── CART DRAWER ── */}
      {cartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
          <div onClick={() => setCartOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(14,24,18,0.55)', backdropFilter: 'blur(6px)' }} />
          <div className="cart-drawer animate-slide-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100%', maxWidth: 420, background: '#f5ede1', display: 'flex', flexDirection: 'column', boxShadow: '-12px 0 48px rgba(0,0,0,0.18)' }}>

            {/* Header */}
            <div style={{ padding: '22px 24px', borderBottom: '1px solid #ebdccb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, margin: 0, color: '#241710' }}>Your Order</h3>
                {cartCount > 0 && <div style={{ fontSize: 12, color: '#826955', marginTop: 2 }}>{cartCount} item{cartCount !== 1 ? 's' : ''}</div>}
              </div>
              <button onClick={() => setCartOpen(false)} style={{ background: '#f5ede1', border: 'none', cursor: 'pointer', color: '#725c4e', padding: 8, borderRadius: 10, display: 'flex', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#ede7d9')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fbf8f2')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '64px 0', color: '#826955' }}>
                  <div style={{ fontSize: 44, marginBottom: 14 }}>🥗</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#241710', marginBottom: 6 }}>Your bowl is empty</div>
                  <div style={{ fontSize: 13, color: '#826955' }}>Add some delicious dishes to get started.</div>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} style={{ display: 'flex', gap: 14, marginBottom: 16, padding: 14, background: '#fff', borderRadius: 14, border: '1px solid #ede7d9' }}>
                    <img src={item.product.image} alt={item.product.name} style={{ width: 68, height: 68, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: '#241710', lineHeight: 1.3, marginBottom: 4 }}>{item.product.name}</div>
                      <div style={{ fontWeight: 700, color: '#c86432', fontSize: 14 }}>₹{item.product.price}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
                        <button onClick={() => updateQty(item.product.id, -1)} style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #c8bfad', background: '#f5ede1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#241710', fontWeight: 700, fontSize: 14, transition: 'border-color 0.2s' }}>−</button>
                        <span style={{ fontWeight: 700, color: '#241710', minWidth: 20, textAlign: 'center', fontSize: 14 }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.product.id, 1)} style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #c8bfad', background: '#f5ede1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#241710', fontWeight: 700, fontSize: 14, transition: 'border-color 0.2s' }}>+</button>
                        <button onClick={() => removeFromCart(item.product.id)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#c8bfad', fontSize: 11, fontWeight: 600, transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#b85428')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#c8bfad')}
                        >Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Checkout form */}
            {cart.length > 0 && (
              <div style={{ borderTop: '1px solid #ede7d9', background: '#fff', padding: '20px 24px', maxHeight: '60vh', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                  <span style={{ fontWeight: 600, color: '#725c4e', fontSize: 13 }}>Order Total</span>
                  <span style={{ fontWeight: 800, fontSize: 22, color: '#241710', fontFamily: "'Playfair Display', serif" }}>₹{cartTotal}</span>
                </div>

                <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {orderFeedback && (
                    <div style={{ padding: '11px 14px', borderRadius: 10, fontSize: 13, lineHeight: 1.5, background: orderFeedback.type === 'success' ? '#f0faf3' : '#fdf2f4', color: orderFeedback.type === 'success' ? '#1c6136' : '#b85428', border: `1px solid ${orderFeedback.type === 'success' ? '#b8e4c4' : '#e8b4be'}` }}>
                      {orderFeedback.message}
                    </div>
                  )}

                  {[
                    { key: 'customerName', label: 'Full Name', type: 'text', required: true },
                    { key: 'email', label: 'Email', type: 'email', required: true },
                    { key: 'phone', label: 'Phone', type: 'tel', required: true },
                  ].map(({ key, label, type, required }) => (
                    <div key={key}>
                      <label className="field-label">{label}</label>
                      <input type={type} required={required} value={checkoutForm[key as keyof typeof checkoutForm]}
                        onChange={e => setCheckoutForm(prev => ({ ...prev, [key]: e.target.value }))}
                        className="field-input" />
                    </div>
                  ))}

                  <div>
                    <label className="field-label">Delivery Address</label>
                    <textarea rows={2} required value={checkoutForm.address}
                      onChange={e => setCheckoutForm(prev => ({ ...prev, address: e.target.value }))}
                      className="field-input" style={{ resize: 'vertical' }} />
                  </div>

                  <div>
                    <label className="field-label">Booking Date</label>
                    <input type="date" required value={checkoutForm.bookingDate}
                      onChange={e => setCheckoutForm(prev => ({ ...prev, bookingDate: e.target.value }))}
                      className="field-input" />
                  </div>

                  <div>
                    <label className="field-label">Notes <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#aaa' }}>(optional)</span></label>
                    <textarea rows={2} value={checkoutForm.notes}
                      onChange={e => setCheckoutForm(prev => ({ ...prev, notes: e.target.value }))}
                      className="field-input" style={{ resize: 'vertical' }} />
                  </div>

                  <button type="submit" disabled={submittingOrder}
                    style={{ width: '100%', background: submittingOrder ? '#b8a89b' : '#251811', color: '#fbf8f2', border: 'none', borderRadius: 100, padding: '14px', fontSize: 15, fontWeight: 700, cursor: submittingOrder ? 'wait' : 'pointer', transition: 'background 0.2s, transform 0.15s', marginTop: 4, fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => !submittingOrder && (e.currentTarget.style.background = '#3b251a')}
                    onMouseLeave={e => !submittingOrder && (e.currentTarget.style.background = '#251811')}
                  >
                    {submittingOrder ? 'Placing order…' : `Place Order · ₹${cartTotal}`}
                  </button>
                </form>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12, color: '#b85428', fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Or reserve & order via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="product-card">
      {product.isPopular && <div className="popular-badge">Popular</div>}

      <div className="product-card-img">
        {product.image
          ? <img src={product.image} alt={product.name} onError={e => { e.currentTarget.style.display = 'none' }} />
          : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>🥗</div>
        }
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,40,28,0.3) 0%, transparent 55%)' }} />
      </div>

      <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 10, color: '#c86432', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{product.category}</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#241710', margin: '0 0 4px', lineHeight: 1.25 }}>{product.name}</h3>
        <div style={{ fontSize: 12, color: '#826955', fontStyle: 'italic', marginBottom: 10 }}>{product.tagline}</div>
        <p style={{ fontSize: 13, color: '#6b7f72', lineHeight: 1.65, flex: 1, margin: '0 0 14px' }}>{product.description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {product.badges.map(b => (
            <span key={b} style={{ background: '#f8ede3', color: '#8a421e', borderRadius: 100, padding: '3px 10px', fontSize: 10, fontWeight: 600, letterSpacing: '0.03em' }}>{b}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#241710', fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>₹{product.price}</div>
            {product.subscriptionPrice && (
              <div style={{ fontSize: 11, color: '#826955', marginTop: 3 }}>₹{product.subscriptionPrice} with subscription</div>
            )}
          </div>
          <button onClick={handleAdd}
            style={{ background: added ? '#3b251a' : '#251811', color: '#fbf8f2', border: 'none', borderRadius: 100, padding: '10px 18px', fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, transition: 'background 0.2s, transform 0.15s', minWidth: 106, justifyContent: 'center' }}
            onMouseEnter={e => !added && (e.currentTarget.style.background = '#3b251a')}
            onMouseLeave={e => !added && (e.currentTarget.style.background = '#251811')}
          >
            {added
              ? <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> Added!</>
              : <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to Cart</>
            }
          </button>
        </div>
      </div>
    </div>
  )
}
