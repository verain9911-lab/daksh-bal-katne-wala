import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Your Salon Name — Salon & Spa</title>
        <meta name="description" content="Your Salon Name — Professional hair, beauty & spa services in [City], India. Book via WhatsApp." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <header style={{
        background: '#fff',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{
              width: 44, height: 44, borderRadius: 8,
              background: 'linear-gradient(135deg,#c04a7b,#9a3560)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700
            }}>S</div>
            <div>
              <div style={{ fontWeight: 700 }}>Your Salon Name</div>
              <div style={{ fontSize: 13, color: '#888' }}>Salon & Spa • [City], India</div>
            </div>
          </div>
          <nav>
            <a href="#services" style={{ marginLeft: 16, color: '#333', textDecoration: 'none', fontWeight: 600 }}>Services</a>
            <a href="#products" style={{ marginLeft: 16, color: '#333', textDecoration: 'none', fontWeight: 600 }}>Products</a>
            <a href="#gallery" style={{ marginLeft: 16, color: '#333', textDecoration: 'none', fontWeight: 600 }}>Gallery</a>
            <a href="#contact" style={{ marginLeft: 16, color: '#333', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
            <a href="#book" style={{ marginLeft: 16, background: '#c04a7b', color: '#fff', padding: '10px 14px', borderRadius: 8, textDecoration: 'none' }}>Book</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: 20 }}>
        {children}
      </main>

      <footer style={{ padding: 24, color: '#666' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 700 }}>Your Salon Name</div>
            <div style={{ fontSize: 13, color: '#888' }}>Open: Mon-Sun • 10:00 AM — 8:00 PM</div>
          </div>
          <div style={{ fontSize: 13, color: '#888' }}>© {new Date().getFullYear()} Your Salon Name — All rights reserved</div>
        </div>
      </footer>
    </>
  )
}
