"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1]">
                <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
                Latest News & Tips
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050c14] tracking-tight">
                Insights from our Blog.
              </h2>
            </div>
            <p className="text-[#47697b] max-w-md text-sm sm:text-base leading-relaxed">
              Expert advice, dental care guides, and preventive oral hygiene tips written by our certified dental clinicians.
            </p>
          </div>
        </RevealOnScroll>

        {/* Blog Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <RevealOnScroll
              key={post.slug}
              direction="up"
              delay={idx * 120}
              className="h-full"
            >
              <article className="group bg-[#f5f7fa] hover:bg-white rounded-3xl overflow-hidden border border-[#d8dde1] hover:border-[#33a9b1] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full card-hover-lift">
                {/* Image Container */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-[#33a9b1] text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-xs">
                    {post.category}
                  </span>
                </Link>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-[#47697b] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#33a9b1]" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#33a9b1]" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors leading-snug mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-[#47697b] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-[#d8dde1]/60 flex items-center justify-between">
                    <span className="text-xs text-[#47697b] font-medium flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#33a9b1]" />
                      {post.author.name}
                    </span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#33a9b1] group-hover:text-[#288c93] hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
