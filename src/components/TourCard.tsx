import { Link } from "react-router-dom";
import { Clock, Users, ArrowUpRight } from "lucide-react";

interface TourCardProps {
  id: string;
  title: string;
  image?: string;
  images?: string[];
  duration: string;
  groupSize: string;
  price: string;
  rating?: number;
  reviews?: number;
  description: string;
}

const TourCard = ({
  id,
  title,
  image,
  images,
  duration,
  groupSize,
  price,
  description,
}: TourCardProps) => {
  const displayImage = images && images.length > 0 ? images[0] : image;

  return (
    <Link to={`/tours/${id}`} className="block group">
      <article className="h-full flex flex-col bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {displayImage ? (
            <img
              src={displayImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-4xl">🏔</span>
            </div>
          )}
          
          {/* Price Tag */}
          <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 font-bold">
            {price}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-serif font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
            {description}
          </p>
          
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>{groupSize}</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">{price}</span>
            <span className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
              View Details
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TourCard;
