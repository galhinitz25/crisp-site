import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Policy — CRISP',
}

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[9px] tracking-[0.3em] text-gray-400 uppercase hover:text-[#0A0A0A] transition-colors">
          ← Back
        </Link>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] leading-[0.9] text-[#0A0A0A] mt-10 mb-4">
          Shipping
          <br />
          Policy.
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-16">Last updated: June 2026</p>

        <div className="space-y-10 text-[13px] text-gray-600 leading-[1.9]">
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Free Shipping</h2>
            <p>We offer free standard shipping on all orders worldwide. No minimum order value required.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Delivery Times</h2>
            <p>Orders are processed within 1–3 business days. Once dispatched, estimated delivery is 7–12 business days depending on your location. International orders may take slightly longer due to customs processing.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Order Tracking</h2>
            <p>A tracking number will be sent to your email address once your order has been dispatched. You can use this number to monitor your delivery in real time.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Delays & Customs</h2>
            <p>While we aim to meet all estimated delivery windows, delays caused by customs, courier services, or circumstances outside our control may occasionally occur. If your order has not arrived within 15 business days, please contact us and we will investigate.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Questions</h2>
            <p>For shipping enquiries, email <a href="mailto:zenscrubshop@gmail.com" className="text-[#E01E84] hover:underline">zenscrubshop@gmail.com</a>. We respond within 24–48 hours.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
