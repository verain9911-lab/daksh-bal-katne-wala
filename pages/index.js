import { useState } from 'react'
import AdUnit from '../components/AdUnit'

export default function Home() {
  const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210' // set in Vercel env
  // Example ad slots (set in Vercel env or change here)
  const AD_SLOT_1 = process.env.NEXT_PUBLIC_AD_SLOT_1 || '1234567890'
  const AD_SLOT_2 = process.env.NEXT_PUBLIC_AD_SLOT_2 || '0987654321'

  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', note: '' })

  function quickWhatsApp(item) {
    const msg = `Hello, I want to book: ${item}. Please let me know available slots.`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  function buyWhatsApp(item) {
    const msg = `Hello, I want to buy: ${item}. Please confirm price & delivery/pickup details.`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  function sendBooking(e) {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service) {
      alert('Please enter name, phone and select a service.')
      return
    }
    let msg = `Booking request from ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}`
    if (form.date) msg += `%0APreferred date: ${form.date}`
    if (form.note) msg += `%0ANotes: ${form.note}`
    msg += `%0A%0APlease confirm available slots.`
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank')
  }

  return (
    <>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, alignItems: 'center', padding: '36px 0' }}>
        <div>
          <h1 style={{ fontSize: 28, margin: 0 }}>Professional Hair, Beauty & Spa Services in [City]</h1>
          <p style={{ color: '#666' }}>Experienced stylists, premium products, and relaxing spa treatments. Walk-ins welcome — book online or via WhatsApp.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello, I want to book an appointment')}`} style={{ background: '#c04a7b', color: '#fff', padding: '10px 14px', borderRadius: 8, textDecoration: 'none' }} target="_blank" rel="noreferrer">Book on WhatsApp</a>
            <a href="#services" style={{ padding: '10px 14px', background: '#fff', borderRadius: 8, border: '1px solid #eee', textDecoration: 'none', color: '#333' }}>View Services</a>
          </div>
        </div>
        <div style={{ borderRadius: 12, overflow: 'hidden', minHeight: 220, background: '#ddd' }}>
          <img src="https://source.unsplash.com/1600x900/?salon,spa" alt="Salon cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <section id="services" style={{ padding: '28px 0' }}>
        <h2>Our Services</h2>
        <p style={{ fontSize: 13, color: '#888' }}>Quality services with hygienic practices. Prices listed are indicative (INR).</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <div style={{ fontWeight: 700 }}>Women's Haircut</div>
            <div style={{ fontSize: 13, color: '#888' }}>Includes wash and styling</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>₹499</div>
            <div style={{ marginTop: 10 }}><button onClick={() => quickWhatsApp("Women's Haircut (₹499)")}>Book</button></div>
          </div>

          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <div style={{ fontWeight: 700 }}>Men's Haircut</div>
            <div style={{ fontSize: 13, color: '#888' }}>Classic barber services</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>₹299</div>
            <div style={{ marginTop: 10 }}><button onClick={() => quickWhatsApp("Men's Haircut (₹299)")}>Book</button></div>
          </div>

          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <div style={{ fontWeight: 700 }}>Hair Coloring</div>
            <div style={{ fontSize: 13, color: '#888' }}>Tints, highlights & balayage</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>From ₹1200</div>
            <div style={{ marginTop: 10 }}><button onClick={() => quickWhatsApp('Hair Coloring (From ₹1200)')}>Book</button></div>
          </div>

          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <div style={{ fontWeight: 700 }}>Facial & Skin Care</div>
            <div style={{ fontSize: 13, color: '#888' }}>Cleanse, exfoliation & mask</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>From ₹799</div>
            <div style={{ marginTop: 10 }}><button onClick={() => quickWhatsApp('Facial & Skin Care (From ₹799)')}>Book</button></div>
          </div>

          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <div style={{ fontWeight: 700 }}>Bridal Packages</div>
            <div style={{ fontSize: 13, color: '#888' }}>Personalized trial & wedding day</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>Custom pricing</div>
            <div style={{ marginTop: 10 }}><button onClick={() => quickWhatsApp('Bridal Package - Inquiry')}>Enquire</button></div>
          </div>
        </div>
      </section>

      {/* Example ad unit between Services and Products */}
      <AdUnit adSlot={AD_SLOT_1} adTest={true} />

      <section id="products" style={{ padding: '28px 0' }}>
        <h2>Products</h2>
        <p style={{ fontSize: 13, color: '#888' }}>Genuine, salon-grade products available for purchase (INR).</p>

        {/* Example ad unit inside products */}
        <AdUnit adSlot={AD_SLOT_2} adTest={true} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <img src="https://source.unsplash.com/400x400/?shampoo" alt="Salon Luxe Shampoo" style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }} />
            <div style={{ fontWeight: 700 }}>Salon Luxe Shampoo 500ml</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>₹599</div>
            <div style={{ marginTop: 10 }}><button onClick={() => buyWhatsApp('Salon Luxe Shampoo 500ml (₹599)')}>Buy on WhatsApp</button></div>
          </div>

          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <img src="https://source.unsplash.com/400x400/?hair-oil" alt="Herbal Hair Oil" style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }} />
            <div style={{ fontWeight: 700 }}>Herbal Hair Oil 200ml</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>₹299</div>
            <div style={{ marginTop: 10 }}><button onClick={() => buyWhatsApp('Herbal Hair Oil 200ml (₹299)')}>Buy on WhatsApp</button></div>
          </div>

          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <img src="https://source.unsplash.com/400x400/?spa,product" alt="Glow Facial Kit" style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }} />
            <div style={{ fontWeight: 700 }}>Glow Facial Kit</div>
            <div style={{ fontWeight: 700, color: '#9a3560' }}>₹799</div>
            <div style={{ marginTop: 10 }}><button onClick={() => buyWhatsApp('Glow Facial Kit (₹799)')}>Buy on WhatsApp</button></div>
          </div>
        </div>
      </section>

      <section id="gallery" style={{ padding: '28px 0' }}>
        <h2>Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 10 }}>
          <img src="https://source.unsplash.com/400x400/?salon,haircut" alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
          <img src="https://source.unsplash.com/400x400/?spa,massage" alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
          <img src="https://source.unsplash.com/400x400/?manicure" alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
          <img src="https://source.unsplash.com/400x400/?hair-color" alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
          <img src="https://source.unsplash.com/400x400/?bridal-makeup" alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
          <img src="https://source.unsplash.com/400x400/?beauty-spa" alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
        </div>
      </section>

      <section id="book" style={{ padding: '28px 0' }}>
        <h2>Book an Appointment</h2>
        <p style={{ fontSize: 13, color: '#888' }}>Fill the form and we'll open WhatsApp with your booking details.</p>

        <form onSubmit={sendBooking} style={{ display: 'grid', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" required style={{ flex: 1, padding: 10, border: '1px solid #e6e6e6', borderRadius: 8 }} />
            <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone number (e.g., 9876543210)" required style={{ flex: 1, padding: 10, border: '1px solid #e6e6e6', borderRadius: 8 }} />
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required style={{ flex: 1, padding: 10, border: '1px solid #e6e6e6', borderRadius: 8 }}>
              <option value="">Choose service</option>
              <option>Women's Haircut</option>
              <option>Men's Haircut</option>
              <option>Hair Coloring</option>
              <option>Facial & Skin Care</option>
              <option>Bridal Package</option>
            </select>
            <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} style={{ flex: 1, padding: 10, border: '1px solid #e6e6e6', borderRadius: 8 }} />
          </div>

          <textarea value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} placeholder="Any notes (allergies, preferences)" style={{ padding: 10, border: '1px solid #e6e6e6', borderRadius: 8 }} />

          <button type="submit" style={{ background: '#c04a7b', color: '#fff', border: 'none', padding: '10px 14px', borderRadius: 8 }}>Send to WhatsApp</button>
        </form>
      </section>

      <section id="contact" style={{ padding: '28px 0' }}>
        <h2>Contact & Location</h2>
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <div style={{ fontWeight: 700 }}>Your Salon Name</div>
            <div style={{ fontSize: 13, color: '#888' }}>123 Example Street, [Locality], [City], India</div>
            <div style={{ marginTop: 8 }}>Phone: <a href={`tel:+${WHATSAPP}`} id="phoneLink">+{WHATSAPP.replace(/^91/, '91 ')}</a></div>
            <div style={{ marginTop: 8 }}>Email: <a href="mailto:hello@yoursalon.com">hello@yoursalon.com</a></div>
          </div>

          <div style={{ background: '#fff', padding: 16, borderRadius: 10 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Find us on the map</div>
            <iframe src="https://www.google.com/maps?q=New+Delhi&output=embed" style={{ width: '100%', height: 220, border: 0, borderRadius: 8 }} />
          </div>
        </div>
      </section>
    </>
  )
}
