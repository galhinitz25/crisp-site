'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Fast Heating',
    desc: '1200W drives steam to 105°C in under 20 seconds.',
  },
  {
    title: 'Premium Build',
    desc: 'Die-cast aluminum soleplate. Precision engineering in a compact form.',
  },
  {
    title: 'Lightweight',
    desc: 'Under 500g. You\'ll forget it\'s there.',
  },
  {
    title: 'Detachable Tank',
    desc: 'Snap out the 100ml tank, fill it, snap it back. Ready in moments.',
  },
  {
    title: 'Wrinkle-Free Anywhere',
    desc: 'From weekend getaways to international travel, look sharp without relying on hotel irons.',
  },
  {
    title: 'Safe On All Fabrics',
    desc: 'Silk, wool, linen, cotton, synthetics — one tool handles everything.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="py-20 md:py-44 px-6 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-24"
        >
          <p className="text-[9px] tracking-[0.48em] text-gray-400 uppercase mb-6">Specifications</p>
          <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] font-black tracking-[-0.04em] leading-[0.86] text-[#0A0A0A]">
            Built to
            <br />
            perform.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F0EAED]"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariant}
              whileHover={{ backgroundColor: '#FDF2F7' }}
              className="bg-white p-8 md:p-10 group transition-colors duration-300 cursor-default"
            >
              <motion.div
                initial={{ width: '2rem' }}
                whileHover={{ width: '4rem' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#E01E84] opacity-50 mb-8"
              />
              <h3 className="text-[12px] font-bold text-[#0A0A0A] tracking-tight mb-2">{f.title}</h3>
              <p className="text-[12px] text-gray-500 leading-[1.85]">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
