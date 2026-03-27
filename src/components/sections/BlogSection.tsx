'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, TrendingUp, Users, DollarSign, Zap } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'paper-workouts-vs-digital',
    title: 'Still Using Paper Workout Sheets? Here\'s Why Your Gym is Losing Members',
    excerpt: 'Paper workout sheets are costing you more than you think. Discover how going digital increases member retention by 40% and saves your staff 10+ hours per week.',
    category: 'Member Retention',
    readTime: '5 min read',
    date: 'March 25, 2026',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    slug: 'gym-member-retention-2026',
    title: 'The #1 Reason Members Quit (And How to Stop It)',
    excerpt: '80% of gym members quit within the first 3 months. Learn the digital engagement strategies that keep members coming back for years.',
    category: 'Retention',
    readTime: '7 min read',
    date: 'March 20, 2026',
    icon: Users,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    slug: 'automate-gym-billing',
    title: 'Stop Chasing Payments: Automate Your Gym Billing in 2026',
    excerpt: 'Manual billing is killing your cash flow. See how automated payments reduce late fees by 95% and save 15 hours of admin work monthly.',
    category: 'Operations',
    readTime: '6 min read',
    date: 'March 15, 2026',
    icon: DollarSign,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    slug: 'branded-app-roi',
    title: 'ROI of a Branded Gym App: Real Numbers from 50+ Gyms',
    excerpt: 'We analyzed 50+ gyms that launched branded apps. Here\'s the exact ROI: 3x lead increase, 40% better retention, and $12K+ monthly revenue.',
    category: 'Growth',
    readTime: '8 min read',
    date: 'March 10, 2026',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'gym-marketing-2026',
    title: 'Gym Marketing in 2026: What Actually Works',
    excerpt: 'Forget expensive ads. Learn the 5 marketing strategies that brought 150+ new members to our partner gyms in Q1 2026.',
    category: 'Marketing',
    readTime: '6 min read',
    date: 'March 5, 2026',
    icon: TrendingUp,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'class-booking-system',
    title: 'Why Your Class Booking System is Frustrating Members',
    excerpt: 'Clunky booking systems cause 30% of members to skip classes. Here\'s how to fix it and increase class attendance by 65%.',
    category: 'Member Experience',
    readTime: '5 min read',
    date: 'March 1, 2026',
    icon: Calendar,
    gradient: 'from-rose-500 to-red-500',
  },
];

export function BlogSection(): React.JSX.Element {
  return (
    <section id="blog" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            Gym Owner Resources
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Insights for <span className="text-brand-400">Gym Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Tips, strategies, and real data from 50+ gyms growing with Gymia.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, i) => {
            const Icon = post.icon;
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center gap-3 mb-3 text-xs text-white/40">
                  <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-brand-400 font-bold text-sm hover:text-brand-300 transition-colors group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
