'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const BlurWord = ({ word, delay }: { word: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 48, filter: 'blur(16px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    className="inline-block"
  >
    {word}
  </motion.span>
)

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="order" ref={sectionRef} className="relative py-28 md:py-52 px-6 overflow-hidden bg-[#0A0A0A]">

      {/* Full-bleed background photo with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-10%] pointer-events-none">
        <Image
          src="/cta-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-10 md:left-16 top-0 bottom-0 w-px bg-white/15 origin-top"
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[9px] tracking-[0.5em] text-white/50 uppercase mb-10"
        >
          The CRISP
        </motion.p>

        <div className="flex flex-wrap gap-x-[0.22em] text-[clamp(3rem,8.5vw,8.5rem)] font-black tracking-[-0.04em] leading-[0.84] text-white mb-4">
          <BlurWord word="Stop" delay={0.1} />
          <BlurWord word="Wearing" delay={0.2} />
        </div>
        <div className="flex flex-wrap gap-x-[0.22em] text-[clamp(3rem,8.5vw,8.5rem)] font-black tracking-[-0.04em] leading-[0.84] text-white mb-12">
          <BlurWord word="Wrinkled" delay={0.32} />
          <BlurWord word="Clothes." delay={0.44} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/60 text-[12px] mb-14 leading-relaxed tracking-wide"
        >
          Look your best anywhere.
        </motion.p>

        <motion.a
          href="#purchase"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04, backgroundColor: '#E01E84', borderColor: '#E01E84' }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-11 py-[17px] text-[9px] tracking-[0.38em] uppercase transition-colors duration-300 whitespace-nowrap"
        >
          Get Yours
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>

      </div>
    </section>
  )
}
