'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    name: 'Garment Steamer Unit',
    desc: 'The complete portable steam and ironing system for home, travel, and everyday use.',
  },
  {
    name: '100ml Detachable Water Tank',
    desc: 'Easy to remove, refill, and reattach for quick steaming sessions.',
  },
  {
    name: 'Power Cable',
    desc: 'Plug in and start steaming in as little as 20 seconds.',
  },
  {
    name: 'User Guide',
    desc: 'Simple setup instructions and care recommendations.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function WhatsInTheBox() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-44 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] font-black tracking-[-0.04em] leading-[0.86] text-white mb-6">
            Everything
            <br />
            Included.
          </h2>
          <p className="text-[12px] text-gray-500 leading-[1.85] max-w-[320px]">
            Everything you need for crisp, professional results at home, at work, or while traveling.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]"
        >
          {items.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariant}
              whileHover={{ borderColor: 'rgba(224,30,132,0.35)' }}
              className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[300px] transition-colors duration-500 cursor-default"
            >
              <motion.div
                initial={{ width: '2rem' }}
                whileHover={{ width: '4rem' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#E01E84] opacity-60"
              />

              <div>
                <h3 className="text-[13px] font-bold text-white tracking-tight mb-3">{item.name}</h3>
                <p className="text-[12px] text-gray-500 leading-[1.85]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
