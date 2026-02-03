import Image from 'next/image';
import Link from 'next/link';

interface GalleryCardProps {
  title: string;
  category: string;
  beforeImage?: string;
  afterImage?: string;
  slug: string;
  client?: string;
}

export default function GalleryCard({
  title,
  category,
  beforeImage,
  afterImage,
  slug,
  client,
}: GalleryCardProps) {
  return (
    <Link href={`/gallery/${slug}`} className="block">
      <article className="card group">
        <div className="before-after-container p-4">
          {beforeImage && (
            <div className="before relative h-40 overflow-hidden rounded-lg">
              <Image
                src={beforeImage}
                alt={`${title} - Before`}
                fill
                className="object-cover"
              />
              <span className="label">Before</span>
            </div>
          )}
          {afterImage && (
            <div className="after relative h-40 overflow-hidden rounded-lg">
              <Image
                src={afterImage}
                alt={`${title} - After`}
                fill
                className="object-cover"
              />
              <span className="label">After</span>
            </div>
          )}
        </div>
        <div className="px-6 pb-6">
          <span className="text-xs font-semibold text-sage-green uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-lg font-display font-bold text-forest-green mt-1 group-hover:text-sage-green transition-colors">
            {title}
          </h3>
          {client && (
            <p className="text-sm text-gray-500 mt-1">Client: {client}</p>
          )}
        </div>
      </article>
    </Link>
  );
}
