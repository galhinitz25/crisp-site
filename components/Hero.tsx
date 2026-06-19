'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const productDrift   = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const textDrift      = useTransform(scrollYProgress, [0, 1], ['0%',  '5%'])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-white"
    >

      {/* ── PRODUCT — dominant left ─────────────────────────────── */}
      <motion.div
        style={{ x: productDrift, opacity: sectionOpacity }}
        className="absolute -top-10 -bottom-10 left-0 w-[63%] md:w-[61%] lg:w-[63%]"
      >
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(14px)' }}
          animate={{ opacity: 1, x: 0,   filter: 'blur(0px)'  }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'loop',
            }}
            className="relative w-full h-full"
          >
            <Image
              src="/hero-transparent.png"
              alt="CRISP Portable Garment Steamer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 63vw"
              className="object-contain object-center"
              style={{
                filter:
                  'drop-shadow(0 60px 120px rgba(224,30,132,0.18)) drop-shadow(0 24px 56px rgba(0,0,0,0.22))',
              }}
            />
          </motion.div>

          <div
            className="absolute bottom-[12%] left-[12%] right-[22%] h-5 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse, rgba(0,0,0,0.24) 0%, rgba(224,30,132,0.07) 55%, transparent 80%)',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── TEXT COLUMN — right ─────────────────────────────────── */}
      <motion.div
        style={{ x: textDrift, opacity: sectionOpacity }}
        className="absolute inset-y-0 right-0 flex flex-col justify-center
                   w-[50%] md:w-[40%] lg:w-[37%]
                   pr-6 md:pr-14 lg:pr-20 pl-2 md:pl-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[9px] tracking-[0.2em] md:tracking-[0.52em] text-gray-400 uppercase mb-6 md:mb-10 lg:mb-14"
        >
          Portable Garment Steamer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0,  filter: 'blur(0px)'  }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.3rem,3.6vw,5rem)] font-black tracking-[-0.04em] leading-[0.84] text-[#0A0A0A] mb-6"
        >
          LOOK
          <br />
          SHARP.
          <br />
          <span className="text-[#E01E84]">IN SECONDS.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] text-gray-500 leading-[1.85] mb-8 md:mb-12 max-w-[200px]"
        >
          Professional-looking clothes anywhere, without the hassle of a traditional iron.
        </motion.p>

        <motion.a
          href="#purchase"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04, backgroundColor: '#E01E84' }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white
                     px-5 md:px-8 py-[14px] text-[9px]
                     tracking-[0.15em] md:tracking-[0.38em]
                     uppercase w-fit whitespace-nowrap
                     transition-colors duration-300"
        >
          Get Yours
          <motion.svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M2 6H10M7 3L10 6L7 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[8px] tracking-[0.15em] text-gray-400 uppercase mt-5 leading-[1.9]"
        >
          Free Shipping&nbsp;·&nbsp;30-Day Returns&nbsp;·&nbsp;1-Year Warranty
        </motion.p>
      </motion.div>

      {/* Thin column rule — large screens only */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute top-[15%] bottom-[15%] right-[37%] w-px bg-gray-100 origin-top"
      />

    </section>
  )
}
