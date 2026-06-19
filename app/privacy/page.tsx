import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — CRISP',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[9px] tracking-[0.3em] text-gray-400 uppercase hover:text-[#0A0A0A] transition-colors">
          ← Back
        </Link>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] leading-[0.9] text-[#0A0A0A] mt-10 mb-4">
          Privacy
          <br />
          Policy.
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-16">Last updated: June 2026</p>

        <div className="space-y-10 text-[13px] text-gray-600 leading-[1.9]">
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Information We Collect</h2>
            <p>When you place an order, we collect your name, email address, shipping address, and payment information. Payment details are processed securely by our payment provider and are never stored on our servers.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">How We Use Your Information</h2>
            <p>We use your information solely to process and fulfil your order, send shipping and order confirmation emails, and provide customer support. We do not sell or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Cookies</h2>
            <p>This site uses minimal functional cookies required for the shopping experience. We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at the address below.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:zenscrubshop@gmail.com" className="text-[#E01E84] hover:underline">zenscrubshop@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
