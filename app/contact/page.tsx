import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — CRISP',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[9px] tracking-[0.3em] text-gray-400 uppercase hover:text-[#0A0A0A] transition-colors">
          ← Back
        </Link>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] leading-[0.9] text-[#0A0A0A] mt-10 mb-4">
          Get in
          <br />
          Touch.
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-16">We respond within 24–48 hours</p>

        <div className="space-y-10 text-[13px] text-gray-600 leading-[1.9]">
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Email</h2>
            <p>
              <a href="mailto:zenscrubshop@gmail.com" className="text-[#E01E84] hover:underline">
                zenscrubshop@gmail.com
              </a>
            </p>
            <p className="mt-2 text-gray-400">For order enquiries, returns, warranty claims, and general questions.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Response Time</h2>
            <p>Our support team responds to all enquiries within 24–48 hours, Monday through Friday.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase mb-3">Order Issues</h2>
            <p>If you have a question about an existing order, please include your order number in your email so we can help you faster.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
