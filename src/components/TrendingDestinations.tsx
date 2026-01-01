import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Sahara Desert",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&q=80",
    slug: "sahara-desert",
  },
  {
    name: "Marrakech",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80",
    slug: "marrakech",
  },
  {
    name: "Chefchaouen",
    image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80",
    slug: "chefchaouen",
  },
  {
    name: "Fes",
    image: "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=600&q=80",
    slug: "fes",
  },
  {
    name: "Atlas Mountains",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80",
    slug: "atlas-mountains",
  },
  {
    name: "Essaouira",
    image: "https://images.unsplash.com/photo-1558370781-d6196949e317?w=600&q=80",
    slug: "essaouira",
  },
  {
    name: "Casablanca",
    image: "https://images.unsplash.com/photo-1577147443647-81856d5150a4?w=600&q=80",
    slug: "casablanca",
  },
  {
    name: "Tangier",
    image: "https://images.unsplash.com/photo-1553899017-91a3abfcbecd?w=600&q=80",
    slug: "tangier",
  },
];

const TrendingDestinations = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🔥</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            Trending Destinations
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                to={`/tours?search=${destination.name}`}
                className="flex-shrink-0 snap-start group"
              >
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm md:text-base text-center">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
