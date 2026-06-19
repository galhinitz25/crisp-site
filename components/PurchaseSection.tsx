'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
const STORE_DOMAIN = 'shop4you-10000.myshopify.com'

const variants = [
  { id: 'us', label: 'US Plug',  shopifyId: '49857882095856', available: true },
  { id: 'eu', label: 'EU Plug',  shopifyId: '49857882063088', available: true },
  { id: 'uk', label: 'UK Plug',  shopifyId: '49857882128624', available: true },
]

function checkoutUrl(shopifyId: string): string {
  // Adds variant directly to cart and skips the cart page to go straight to checkout
  return `https://${STORE_DOMAIN}/cart/${shopifyId}:1`
}

export default function PurchaseSection() {
  const [selected, setSelected] = useState('us')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="purchase" className="bg-[#0A0A0A] px-6 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1C1C1E]">

          {/* ── Product image panel ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0A0A0A] flex items-center justify-center py-10 px-8 min-h-[300px] md:min-h-[540px] overflow-hidden"
          >
            {/* Subtle pink glow — depth, not decoration */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 70% 52% at 50% 56%, rgba(224,30,132,0.11) 0%, rgba(224,30,132,0.04) 45%, transparent 70%)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <Image
                src="/hero-transparent.png"
                alt="CRISP Portable Garment Steamer"
                width={1820}
                height={2048}
                className="w-[300px] md:w-[450px] lg:w-[510px] h-auto"
                style={{
                  filter:
                    'drop-shadow(0 48px 96px rgba(224,30,132,0.28)) drop-shadow(0 20px 48px rgba(0,0,0,0.60))',
                }}
              />
            </motion.div>
          </motion.div>

          {/* ── Details panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0A0A0A] flex flex-col justify-center px-0 lg:px-14 py-14 lg:py-16"
          >

            {/* Eyebrow */}
            <p className="text-[9px] tracking-[0.48em] text-gray-600 uppercase mb-7">
              The CRISP
            </p>

            {/* Headline */}
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-[-0.04em] leading-[0.86] text-white mb-5">
              Ready To Order?
            </h2>

            {/* Subheadline */}
            <p className="text-[12px] text-gray-500 leading-[1.85] mb-10 max-w-[280px]">
              Choose your plug type and get yours today.
            </p>

            {/* Price */}
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-3">
              <span className="text-[2.8rem] font-black text-white tracking-tight leading-none">
                $64.99
              </span>
              <span className="text-[14px] text-gray-600 line-through leading-none">
                $69.99
              </span>
              <span className="text-[8px] tracking-[0.24em] uppercase bg-[#E01E84] text-white px-3 py-1.5 whitespace-nowrap">
                Launch Offer
              </span>
            </div>

            {/* Trust row */}
            <p className="text-[9px] tracking-[0.2em] text-gray-600 uppercase mb-10 leading-[2]">
              Free Shipping&nbsp;·&nbsp;7–12 Day Delivery&nbsp;·&nbsp;30-Day Returns&nbsp;·&nbsp;1-Year Warranty
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="text-[9px] tracking-[0.35em] text-gray-600 uppercase mb-4">
                Plug Type
              </p>
              <div className="flex gap-2 flex-wrap">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelected(v.id)}
                    className={`px-5 py-3 text-[9px] tracking-[0.24em] uppercase transition-all duration-200 cursor-default ${
                      selected === v.id
                        ? 'bg-white text-[#0A0A0A]'
                        : 'bg-transparent text-gray-500 border border-[#2A2A2A] hover:border-[#555] hover:text-gray-300'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Buy button */}
            {(() => {
              const variant = variants.find(v => v.id === selected)!
              return variant.available ? (
                <motion.a
                  href={checkoutUrl(variant.shopifyId)}
                  whileHover={{ scale: 1.03, backgroundColor: '#E01E84' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-3 bg-white text-[#0A0A0A] py-[18px] text-[9px] tracking-[0.38em] uppercase transition-colors duration-300"
                >
                  Buy Now
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6H10M7 3L10 6L7 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              ) : (
                <div className="flex items-center justify-center py-[18px] text-[9px] tracking-[0.38em] uppercase bg-[#1A1A1A] text-gray-600 cursor-not-allowed">
                  Currently Unavailable
                </div>
              )
            })()}

            <p className="text-center text-[9px] tracking-[0.2em] text-gray-700 uppercase mt-4">
              Ships in 7–12 business days
            </p>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
