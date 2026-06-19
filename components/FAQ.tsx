'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    q: 'How quickly does it heat up?',
    a: 'CRISP reaches steaming temperature in approximately 20 seconds from a cold start. Adjustable steam levels mean you control the intensity — whether you\'re refreshing a delicate silk or attacking a stubborn linen crease.',
  },
  {
    q: 'Which fabrics can I use it on?',
    a: 'CRISP works on silk, wool, linen, cotton, and synthetic blends. For delicate materials, hold it a centimetre or two away rather than pressing directly — the steam does the work.',
  },
  {
    q: 'Can I use it abroad?',
    a: 'Yes. CRISP runs on universal 110–240V power, so it works anywhere in the world without a voltage converter. Compact enough for any carry-on — just empty the water tank before flying.',
  },
  {
    q: 'How long does a full tank last?',
    a: 'The detachable 100ml tank provides approximately 10–15 minutes of continuous steaming — enough for a full outfit. Refilling takes seconds: snap it out, fill it at any tap, snap it back in.',
  },
  {
    q: 'Can it replace a traditional iron?',
    a: 'For most people, yes. Use it vertically for hanging garments — dresses, shirts, coats, curtains. Lay flat on any surface for detail work like collars and cuffs. Dry iron or steam iron, your choice.',
  },
  {
    q: 'Does it come with a warranty?',
    a: 'Yes. Every CRISP comes with a 12-month warranty covering manufacturing defects. Our support team responds within 24 hours.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Orders are typically delivered within 7–12 business days. Tracking information is provided as soon as your order ships.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-40 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-20"
        >
          <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase mb-6">FAQ</p>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[0.88] text-[#0A0A0A]">
            Questions
            <br />
            answered.
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-gray-100"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between py-7 text-left gap-6 group"
              >
                <span className="text-sm font-medium text-[#0A0A0A] group-hover:text-[#E01E84] transition-colors leading-snug">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gray-400 text-2xl leading-none flex-shrink-0 mt-0.5"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-500 leading-[1.9] pb-7 pr-10">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </section>
  )
}
