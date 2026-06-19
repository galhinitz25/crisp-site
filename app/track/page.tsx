import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Track Your Order — CRISP',
}

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[9px] tracking-[0.3em] text-gray-400 uppercase hover:text-[#0A0A0A] transition-colors">
          ← Back
        </Link>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] leading-[0.9] text-[#0A0A0A] mt-10 mb-4">
          Track Your
          <br />
          Order.
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-16">Real-time delivery updates</p>

        <div className="space-y-10 text-[13px] text-gray-600 leading-[1.9]">
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">How to Track</h2>
            <p>Enter the tracking number sent to your email to track your order. A tracking number is emailed to you within 1–3 business days of placing your order.</p>
          </section>

          <section>
            <a
              href="https://shop4you-10000.myshopify.com/apps/track123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-[14px] text-[9px] tracking-[0.38em] uppercase hover:bg-[#E01E84] transition-colors duration-300"
            >
              Open Tracking Portal
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">No Email Received?</h2>
            <p>Check your spam folder. If you still cannot find your tracking number, contact us at <a href="mailto:zenscrubshop@gmail.com" className="text-[#E01E84] hover:underline">zenscrubshop@gmail.com</a> with your order number and we will locate it for you.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
