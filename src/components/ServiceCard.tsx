import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  shortDescription?: string;
  price?: string;
  image?: string;
  slug: string;
}

export default function ServiceCard({
  title,
  shortDescription,
  price,
  image,
  slug,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="block">
      <article className="card group h-full flex flex-col">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-display font-bold text-forest-green group-hover:text-sage-green transition-colors">
            {title}
          </h3>
          {shortDescription && (
            <p className="text-gray-600 mt-3 flex-grow">{shortDescription}</p>
          )}
          <div className="mt-4 flex items-center justify-between">
            {price && (
              <span className="text-sage-green font-semibold">From {price}</span>
            )}
            <span className="text-turquoise font-medium text-sm flex items-center">
              Learn more
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
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
