'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function Nav() {
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.92)'])
  const blur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(20px)'])
  const border = useTransform(scrollY, [0, 80], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.06)'])

  return (
    <motion.nav
      style={{ background: bg, backdropFilter: blur, borderColor: border }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between border-b"
    >
      <Link href="/" className="text-sm font-black tracking-[0.25em] uppercase text-[#0A0A0A]">
        Crisp
      </Link>

      <div className="hidden md:flex items-center gap-10">
        <Link
          href="#features"
          className="text-[10px] tracking-[0.3em] text-gray-500 hover:text-[#0A0A0A] transition-colors uppercase"
        >
          Features
        </Link>
        <Link
          href="#faq"
          className="text-[10px] tracking-[0.3em] text-gray-500 hover:text-[#0A0A0A] transition-colors uppercase"
        >
          FAQ
        </Link>
        <a
          href="#purchase"
          className="text-[10px] tracking-[0.3em] bg-[#0A0A0A] text-white px-6 py-3 hover:bg-[#E01E84] transition-colors duration-300 uppercase"
        >
          Get Yours
        </a>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <a
          href="#how-it-works"
          className="text-[9px] tracking-[0.22em] text-gray-500 border border-gray-200 px-4 py-2.5 uppercase whitespace-nowrap hover:text-[#0A0A0A] hover:border-gray-400 transition-colors duration-200"
        >
          How It Works
        </a>
        <a
          href="#purchase"
          className="text-[9px] tracking-[0.22em] bg-[#0A0A0A] text-white px-5 py-2.5 uppercase whitespace-nowrap hover:bg-[#E01E84] transition-colors duration-300"
        >
          Get Yours
        </a>
      </div>
    </motion.nav>
  )
}
