import { BlogSection } from '@/components/sections/BlogSection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function BlogPage(): React.JSX.Element {
  return (
    <>
      <Header />
      <main>
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
