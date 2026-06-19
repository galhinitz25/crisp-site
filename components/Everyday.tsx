'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const scenes = [
  {
    label: 'Business Trips',
    sub: 'Arrive looking sharp, every time.',
    text: 'text-white',
    lifestyle: '/lifestyle-hotel.png',
  },
  {
    label: 'Vacations',
    sub: 'Pack light. Look perfect.',
    text: 'text-white',
    lifestyle: '/lifestyle-vacation.jpg',
  },
  {
    label: 'Daily Outfits',
    sub: 'Your best look, every morning.',
    text: 'text-white',
    lifestyle: '/lifestyle-daily.jpg',
  },
]

function SceneCard({ s, i }: { s: typeof scenes[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden group cursor-default min-h-[500px] flex flex-col justify-between p-10"
    >
      {/* Full-bleed lifestyle photo with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-12%] pointer-events-none"
      >
        <Image
          src={s.lifestyle}
          alt={s.label}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/32 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-2xl font-black tracking-[-0.025em] ${s.text} mb-2`}
        >
          {s.label}
        </motion.h3>
        <p className="text-[11px] tracking-wider text-white/70">{s.sub}</p>
      </div>
    </motion.div>
  )
}

export default function Everyday() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16"
        >
          <p className="text-[9px] tracking-[0.48em] text-gray-400 uppercase mb-5">Perfect For</p>
          <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] font-black tracking-[-0.04em] leading-[0.86] text-[#0A0A0A]">
            Every day.
            <br />
            Every occasion.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {scenes.map((s, i) => <SceneCard key={s.label} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
