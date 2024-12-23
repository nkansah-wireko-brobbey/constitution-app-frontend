import Link from 'next/link'
// import { MobileMenuToggle } from './mobile-menu-toggle'
import { ModeToggle } from './dark-theme-switch';

const navItems: { name: string, href: string }[] = [
]

export default function Navbar() {
  return (
    <nav className=" bg-background/25 backdrop-blur-xl border-b opacity-90 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Chat</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* <div className="flex items-center sm:hidden">
            <MobileMenuToggle />
          </div> */}
          <div className=' flex items-center'>
            <ModeToggle />

          </div>
        </div>
      </div>
      {/* <MobileMenu navItems={navItems} /> */}
    </nav>
  )
}

export function MobileMenu({ navItems }: { navItems: Array<{ name: string; href: string }> }) {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

