'use client'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const statVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const productFloat = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section ref={sectionRef} className="py-20 md:py-44 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[9px] tracking-[0.48em] text-gray-400 uppercase mb-6"
        >
          Why CRISP
        </motion.p>

        {/* Asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch mb-4">

          {/* Product column */}
          <motion.div
            ref={productRef}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#F5F0F3] flex items-center justify-center min-h-[300px] md:min-h-[520px] overflow-hidden group"
          >
            <motion.div style={{ y: productFloat }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 60 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03 }}
                className="cursor-default"
              >
                <Image
                  src="/hero-transparent.png"
                  alt="CRISP Portable Garment Steamer"
                  width={1820}
                  height={2048}
                  className="w-[200px] md:w-[270px] lg:w-[310px] h-auto"
                  style={{
                    filter:
                      'drop-shadow(0 50px 90px rgba(0,0,0,0.18)) drop-shadow(0 8px 24px rgba(224,30,132,0.14))',
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Editorial text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center pl-0 lg:pl-12"
          >
            <h2 className="text-[clamp(2.4rem,5vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.86] text-[#0A0A0A] mb-10">
              Ready before
              <br />
              you are.
            </h2>
            <p className="text-[12px] text-gray-500 leading-[1.95] max-w-[280px] mb-16">
              Steam hanging dresses and coats vertically, or lay flat to perfect
              collars and cuffs. Professional results — no board, no setup,
              no waiting around.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-10">
              {[
                { val: '20s', label: 'Ready to use' },
                { val: '100ml', label: 'Tank Capacity' },
                { val: '1200W', label: 'Steam power' },
              ].map(({ val, label }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={statVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <p className="text-[2.2rem] font-black tracking-tight text-[#0A0A0A] leading-none">{val}</p>
                  <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mt-2">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Three-panel strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E0E4]">
          {/* Dark */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-between min-h-[160px] md:min-h-[280px] group"
          >
            <div>
              <p className="text-white text-[14px] font-light leading-[1.85]">
                Plug in. Twenty seconds.
                <br />
                Dressed and out the door.
              </p>
            </div>
          </motion.div>

          {/* Pink */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#E01E84] p-8 md:p-12 flex flex-col justify-between min-h-[160px] md:min-h-[280px]"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[4.5rem] font-black tracking-[-0.05em] leading-none mb-4"
              >
                360°
              </motion.p>
              <p className="text-pink-100 text-[12px] font-light leading-[1.85]">
                Steam from every angle.
                <br />
                Vertical or horizontal, any fabric.
              </p>
            </div>
          </motion.div>

          {/* Light */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#F5F0F3] p-8 md:p-12 flex flex-col justify-between min-h-[160px] md:min-h-[280px] group"
          >
            <div>
              <p className="text-gray-700 text-[14px] font-light leading-[1.85]">
                Folds flat. Fits in your carry-on.
                <br />
                Goes everywhere you do.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
