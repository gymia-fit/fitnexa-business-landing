import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { blogPosts, getPostBySlug, getAllSlugs } from '@/assets/blogPosts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <article className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6 text-sm text-white/40">
                <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-white/60 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3 pb-8 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                </div>
              </div>
            </header>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-white/70 prose-ul:my-6
                prose-li:text-white/70
                prose-strong:text-white
                prose-a:text-brand-400 prose-a:no-underline hover:prose-a:text-brand-300
                prose-table:border-white/10
                prose-th:bg-white/5 prose-th:text-white prose-th:font-bold
                prose-td:border-white/10 prose-td:text-white/70
                prose-hr:border-white/10"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/## /g, '<h2>')
                  .replace(/### /g, '<h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/^- /gm, '<li>')
                  .replace(/^### /gm, '</li><h3>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/✅/g, '<span class="text-emerald-400">✅</span>')
                  .replace(/❌/g, '<span class="text-red-400">❌</span>')
              }} 
            />

            {/* CTA */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-600/20 to-brand-500/20 border border-brand-500/20 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Gym?
              </h2>
              <p className="text-white/60 mb-8">
                Join 50+ gyms using Gymia to automate operations and grow membership.
              </p>
              <Link
                href="https://app.gymia.fit/gym-signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold text-lg rounded-full hover:bg-brand-400 transition-all hover:scale-105"
              >
                Get 2 Months Free
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
