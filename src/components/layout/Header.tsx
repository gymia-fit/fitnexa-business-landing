import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <div className="relative h-14 w-14">
            <Image
              src="/images/logo1.png"
              alt="Gymia"
              fill
              className="object-contain"
              sizes="60px"
            />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-white">gymia.business</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://app.gymia.fit/gym-signup"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-colors hover:bg-white/90"
          >
            Get Started
          </Link>
        </div>
      </Container>
    </header>
  );
}
