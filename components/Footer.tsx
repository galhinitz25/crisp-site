import Link from 'next/link'

const policies = [
  { label: 'Shipping Policy', href: '/shipping' },
  { label: 'Return Policy',   href: '/returns'  },
  { label: 'Privacy Policy',  href: '/privacy'  },
  { label: 'Terms of Service', href: '/terms'   },
]

const support = [
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto border-t border-[#161616] pt-12">

        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="flex-shrink-0">
            <p className="text-sm font-black tracking-[0.25em] uppercase text-white mb-3">Crisp</p>
            <p className="text-[10px] text-gray-600 leading-[1.8] max-w-[140px]">
              Professional results.<br />Anywhere.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-12 md:gap-20">
            <div>
              <p className="text-[8px] tracking-[0.35em] text-gray-600 uppercase mb-5">Policies</p>
              <ul className="space-y-3">
                {policies.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[10px] tracking-[0.18em] text-gray-500 hover:text-white transition-colors duration-200 uppercase"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[8px] tracking-[0.35em] text-gray-600 uppercase mb-5">Support</p>
              <ul className="space-y-3">
                {support.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith('http') ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] tracking-[0.18em] text-gray-500 hover:text-white transition-colors duration-200 uppercase"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[10px] tracking-[0.18em] text-gray-500 hover:text-white transition-colors duration-200 uppercase"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p className="text-[10px] text-gray-700 tracking-wider">
          © 2026 Crisp. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
