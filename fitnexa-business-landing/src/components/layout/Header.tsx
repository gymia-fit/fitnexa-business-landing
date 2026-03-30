import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '/blog' },
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
          <span className="font-heading text-xl font-bold tracking-tight text-white">gymia.fit</span>
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
            href="https://business.gymia.fit"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
          >
            For Gyms
          </Link>
          <Link
            href="https://app.gymia.fit/register"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-400 hover:scale-105"
          >
            Join Free
          </Link>
        </div>
      </Container>
    </header>
  );
}
