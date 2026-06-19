'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function VideoCard({
  src,
  className = '',
  radius = 'rounded-3xl',
  preload = 'metadata',
  delay = 0,
  inView = false,
}: {
  src: string
  className?: string
  radius?: string
  preload?: string
  delay?: number
  inView?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden ${radius} ${className} shadow-[0_8px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.04]`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload={preload as 'auto' | 'metadata' | 'none'}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export default function DemoVideos() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[9px] tracking-[0.48em] text-gray-400 uppercase mb-5">
            See It In Action
          </p>
          <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] font-black tracking-[-0.04em] leading-[0.86] text-[#0A0A0A]">
            Professional-looking
            <br />
            clothes in seconds.
          </h2>
        </motion.div>

        {/* ── DESKTOP: asymmetric grid ── */}
        <div className="hidden md:grid md:grid-cols-[5fr_3fr] gap-3 h-[78vh] max-h-[820px]">
          {/* Featured — left, full height */}
          <VideoCard
            src="/demos/demo-1.mp4"
            radius="rounded-3xl"
            preload="auto"
            delay={0.1}
            inView={inView}
          />

          {/* Two smaller — right column, stacked */}
          <div className="grid grid-rows-2 gap-3">
            <VideoCard
              src="/demos/newvid1.mp4"
              radius="rounded-2xl"
              preload="none"
              delay={0.2}
              inView={inView}
            />
            <VideoCard
              src="/demos/newvid2.mp4"
              radius="rounded-2xl"
              preload="none"
              delay={0.3}
              inView={inView}
            />
          </div>
        </div>

        {/* ── MOBILE: stacked portrait cards ── */}
        <div className="md:hidden flex flex-col gap-4">
          {[
            { src: '/demos/demo-1.mp4', delay: 0.1 },
            { src: '/demos/newvid1.mp4', delay: 0.2 },
            { src: '/demos/newvid2.mp4', delay: 0.3 },
          ].map(({ src, delay }) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden
                         shadow-[0_8px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.04]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
