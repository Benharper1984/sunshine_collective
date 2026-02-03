import Image from 'next/image';

interface PlantCardProps {
  name: string;
  scientificName?: string;
  category: string;
  price?: string;
  available?: boolean;
  image?: string;
  description?: string;
}

export default function PlantCard({
  name,
  scientificName,
  category,
  price,
  available = true,
  image,
  description,
}: PlantCardProps) {
  return (
    <article className="card group">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {!available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Currently Unavailable</span>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <span className="text-xs font-semibold text-sage-green uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-display font-bold text-forest-green mt-1">
          {name}
        </h3>
        {scientificName && (
          <p className="text-sm text-gray-500 italic">{scientificName}</p>
        )}
        {description && (
          <p className="text-gray-600 text-sm mt-3 line-clamp-3">{description}</p>
        )}
        <div className="mt-4 flex items-center justify-between">
          {price && (
            <span className="text-lg font-bold text-forest-green">{price}</span>
          )}
          {available ? (
            <span className="text-sm text-sage-green font-medium flex items-center">
              <span className="w-2 h-2 bg-sage-green rounded-full mr-2" />
              In Stock
            </span>
          ) : (
            <span className="text-sm text-earth-brown font-medium flex items-center">
              <span className="w-2 h-2 bg-earth-brown rounded-full mr-2" />
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
