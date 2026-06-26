import Script from 'next/script'
import Layout from '../components/Layout'
import '../styles.css' // optional if you prefer external css file

function MyApp({ Component, pageProps }) {
  // AdSense client from env (fallback to provided ID)
  const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-5413818328633857'

  return (
    <>
      {/* Load AdSense script after interactive */}
      <Script
        id="adsense-loader"
        strategy="afterInteractive"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
