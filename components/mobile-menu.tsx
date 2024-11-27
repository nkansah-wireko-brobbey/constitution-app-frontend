import Link from 'next/link'

interface NavItem {
  name: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  navItems: NavItem[]
}

export function MobileMenu({ isOpen, navItems }: MobileMenuProps) {
  if (!isOpen) return null

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

