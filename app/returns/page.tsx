import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy — CRISP',
}

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[9px] tracking-[0.3em] text-gray-400 uppercase hover:text-[#0A0A0A] transition-colors">
          ← Back
        </Link>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] leading-[0.9] text-[#0A0A0A] mt-10 mb-4">
          Return
          <br />
          Policy.
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-16">Last updated: June 2026</p>

        <div className="space-y-10 text-[13px] text-gray-600 leading-[1.9]">
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">30-Day Returns</h2>
            <p>We accept returns within 30 days of delivery. If you are not completely satisfied with your CRISP, contact us and we will make it right.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Eligibility</h2>
            <p>To be eligible for a return, items must be unused and in their original packaging and condition. Items showing signs of use, damage, or modification may not qualify for a full refund.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">How to Start a Return</h2>
            <p>Email us at <a href="mailto:zenscrubshop@gmail.com" className="text-[#E01E84] hover:underline">zenscrubshop@gmail.com</a> with your order number and reason for return. We will respond within 24–48 hours with next steps.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Refunds</h2>
            <p>Once we receive and inspect your return, a full refund will be issued to your original payment method within 5–10 business days.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Defective or Damaged Items</h2>
            <p>If your order arrives damaged or defective, please contact us immediately with a photo. We will replace or refund the item at no additional cost to you.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
