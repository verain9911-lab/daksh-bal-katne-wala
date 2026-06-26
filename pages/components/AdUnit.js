import { useEffect } from 'react'

export default function AdUnit({ adSlot, adTest = true, style = { margin: '18px 0', textAlign: 'center' } }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // ignore if Ads script isn't ready yet
    }
  }, [adSlot])

  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-5413818328633857'
  const dataAdTest = adTest ? 'on' : undefined

  return (
    <div style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        {...(dataAdTest ? { 'data-adtest': dataAdTest } : {})}
      />
    </div>
  )
}
