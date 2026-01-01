import { Link } from "react-router-dom";

const categories = [
  {
    name: "Desert Adventures",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&q=80",
    description: "Sahara camping & camel treks",
    link: "/tours?category=desert",
  },
  {
    name: "Family Tours",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80",
    description: "Kid-friendly adventures",
    link: "/tours?category=family",
  },
  {
    name: "Cultural Immersion",
    image: "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=600&q=80",
    description: "Authentic local experiences",
    link: "/tours?category=cultural",
  },
  {
    name: "Mountain Treks",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80",
    description: "Atlas Mountains hiking",
    link: "/tours?category=mountain",
  },
  {
    name: "Honeymoon",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    description: "Romantic getaways",
    link: "/tours?category=honeymoon",
  },
  {
    name: "Beach & Coast",
    image: "https://images.unsplash.com/photo-1558370781-d6196949e317?w=600&q=80",
    description: "Atlantic coast escapes",
    link: "/tours?category=coastal",
  },
];

const TravelCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🌍</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            The World According to Your Desires
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {category.name}
                </h3>
                <p className="text-white/70 text-xs">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
