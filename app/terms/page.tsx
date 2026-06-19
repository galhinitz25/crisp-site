import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — CRISP',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[9px] tracking-[0.3em] text-gray-400 uppercase hover:text-[#0A0A0A] transition-colors">
          ← Back
        </Link>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] leading-[0.9] text-[#0A0A0A] mt-10 mb-4">
          Terms of
          <br />
          Service.
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-16">Last updated: June 2026</p>

        <div className="space-y-10 text-[13px] text-gray-600 leading-[1.9]">
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Orders & Payment</h2>
            <p>By placing an order you agree to provide accurate information and authorise payment for the products selected. We reserve the right to cancel any order at our discretion with a full refund.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Shipping</h2>
            <p>Orders ship within 1–3 business days. Estimated delivery is 7–12 business days. Tracking information is provided by email once your order has shipped. We are not responsible for delays caused by customs or courier services.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Returns & Refunds</h2>
            <p>We accept returns within 30 days of delivery for items in original, unused condition. Contact us to initiate a return. Refunds are processed within 5–10 business days of receiving the returned item.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Warranty</h2>
            <p>Every CRISP comes with a 12-month manufacturer's warranty covering defects in materials and workmanship. This warranty does not cover damage caused by misuse, accidents, or normal wear and tear.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Limitation of Liability</h2>
            <p>Our liability is limited to the purchase price of the product. We are not liable for indirect, incidental, or consequential damages of any kind.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Contact</h2>
            <p>Questions? Email <a href="mailto:zenscrubshop@gmail.com" className="text-[#E01E84] hover:underline">zenscrubshop@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
