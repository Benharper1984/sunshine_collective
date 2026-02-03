import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components';
import { client } from '../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface BlogPostProps {
  post: any;
  settings: any;
}

export default function BlogPost({ post, settings }: BlogPostProps) {
  if (!post) {
    return (
      <Layout showPlantInventory={settings?.showPlantInventory}>
        <div className="min-h-screen flex items-center justify-center">
          <p>Post not found</p>
        </div>
      </Layout>
    );
  }

  const categoryColors: Record<string, string> = {
    'Seasonal Tips': 'bg-sage-green',
    'Plant Profiles': 'bg-forest-green',
    'How-To': 'bg-turquoise',
    'Workshop': 'bg-earth-brown',
  };

  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>{post.title} | The Sunshine Collective</title>
        <meta name="description" content={post.excerpt || `Read ${post.title} on The Sunshine Collective blog.`} />
      </Head>

      {/* Hero */}
      <article>
        <header className="relative py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-sage-green hover:text-forest-green transition-colors mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-sage-green'}`}>
                {post.category}
              </span>
              <time className="text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600">{post.excerpt}</p>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose-sunshine">
              <TinaMarkdown content={post.body} />
            </div>
          </div>
        </div>

        {/* Share & Navigation */}
        <div className="border-t py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-sm text-gray-500 block mb-2">Share this post</span>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sage-green/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sage-green/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <Link href="/blog" className="btn-outline">
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const postsResponse = await client.queries.blogConnection();
    const posts = postsResponse.data.blogConnection.edges || [];
    
    return {
      paths: posts.map((post: any) => ({
        params: { slug: post?.node?._sys.filename },
      })),
      fallback: 'blocking',
    };
  } catch (e) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  let post = null;
  let settings = { showPlantInventory: false };

  try {
    const postResponse = await client.queries.blog({ relativePath: `${params.slug}.mdx` });
    post = postResponse.data.blog;
  } catch (e) {
    console.log('Post not found');
    return { notFound: true };
  }

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  return {
    props: {
      post,
      settings,
    },
  };
}
