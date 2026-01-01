import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

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
  price,
}: TourCardProps) => {
  const displayImage = images && images.length > 0 ? images[0] : image;

  return (
    <Link to={`/tours/${id}`} className="block group">
      <article className="h-full flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm">
        {/* Image Container */}
        <div className="relative aspect-[3/2] overflow-hidden">
          {displayImage ? (
            <img
              src={displayImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Morocco</div>
            {price && <div className="text-sm font-bold text-gray-900">{price}</div>}
          </div>

          <h3 className="font-serif font-bold text-xl text-gray-900 mb-6 group-hover:text-primary transition-colors duration-300 min-h-[56px] line-clamp-2">
            {title}
          </h3>

          <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-gray-500 font-medium">
                <Clock className="h-3 w-3" />
                {duration}
              </div>
            </div>

            <div className="h-10 w-10 bg-primary text-white flex items-center justify-center rounded-none group-hover:w-32 transition-all duration-500 overflow-hidden relative">
              <ArrowRight className="h-4 w-4 absolute" />
              <span className="opacity-0 group-hover:opacity-100 text-[10px] uppercase font-bold tracking-widest ml-2 whitespace-nowrap">Découvrir</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TourCard;
