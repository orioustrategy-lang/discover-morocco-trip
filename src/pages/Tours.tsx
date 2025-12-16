import { useState } from "react";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import { Search } from "lucide-react";

const Tours = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All" },
    { id: "multi-day", label: "Multi-Day" },
    { id: "desert", label: "Desert" },
    { id: "mountain", label: "Mountain" },
    { id: "coastal", label: "Coastal" },
    { id: "cultural", label: "Cultural" },
  ];

  const filteredTours = tours.filter(tour => {
    const matchesCategory = activeTab === "all" || tour.category === activeTab;
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-medium tracking-widest text-sm uppercase">Our Journeys</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-6">
                Curated Moroccan 
                <span className="block text-primary">Experiences</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From imperial cities to desert camps, discover our collection of 
                handcrafted journeys through Morocco's most captivating destinations.
              </p>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10" />
              <img 
                src="https://images.unsplash.com/photo-1548017871-6bc6dd93ea9a?w=600&q=80"
                alt="Morocco"
                className="relative z-10 w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-20 z-30 bg-white border-y border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Category Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === cat.id
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-11 pr-4 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <section className="max-w-7xl mx-auto px-8 lg:px-16 pt-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-900">{filteredTours.length}</span> journeys found
            {activeTab !== "all" && ` in ${categories.find(c => c.id === activeTab)?.label}`}
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-8 lg:px-16 py-12 pb-24">
        {filteredTours.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-100">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2 font-serif">No journeys found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => { setActiveTab("all"); setSearchQuery(""); }}
              className="text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Tours;
