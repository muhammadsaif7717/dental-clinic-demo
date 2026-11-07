import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import { getPostBySlug, getAllPosts, BLOG_POSTS } from "@/data/blog";
import BlogPostClient from "./BlogPostClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Dentique Dental Clinic`,
      description: post.excerpt,
      siteName: "Dentique Dental Clinic",
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Dentique Dental Clinic`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

async function BlogPostContent({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}

export default function BlogPostPage(props: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#33a9b1] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <BlogPostContent {...props} />
    </Suspense>
  );
}
