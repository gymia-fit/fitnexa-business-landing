import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-1">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo1.png"
                  alt="Gymia"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">gymia.business</span>
            </Link>
            <p className="mt-4 text-sm text-white/50">
              Grow your gym with real demand. Capture leads, convert members, and build a stronger community.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-white/50 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-sm text-white/50 hover:text-white">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-white/50 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://gymia.fit" className="text-sm text-white/50 hover:text-white">
                  Main Site
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/50 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-white/50 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/50 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Gymia. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
