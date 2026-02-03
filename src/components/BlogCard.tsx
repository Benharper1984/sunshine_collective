import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  excerpt?: string;
  image?: string;
  slug: string;
  featured?: boolean;
}

export default function BlogCard({
  title,
  date,
  category,
  excerpt,
  image,
  slug,
  featured = false,
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    'Seasonal Tips': 'bg-sage-green',
    'Plant Profiles': 'bg-forest-green',
    'How-To': 'bg-turquoise',
    'Workshop': 'bg-earth-brown',
  };

  return (
    <Link href={`/blog/${slug}`} className="block">
      <article className={`card group ${featured ? 'ring-2 ring-turquoise' : ''}`}>
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {featured && (
              <div className="absolute top-4 right-4 bg-turquoise text-white text-xs font-bold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${
                categoryColors[category] || 'bg-sage-green'
              }`}
            >
              {category}
            </span>
            <time className="text-sm text-gray-500">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
          <h3 className="text-xl font-display font-bold text-forest-green mb-2 group-hover:text-sage-green transition-colors">
            {title}
          </h3>
          {excerpt && (
            <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
          )}
          <div className="mt-4 flex items-center text-sage-green font-medium text-sm">
            Read more
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
