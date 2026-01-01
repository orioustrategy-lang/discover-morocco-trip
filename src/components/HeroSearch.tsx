import { useState } from "react";
import { Search, Calendar, Users, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSearch = () => {
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState("2 Adults, 0 Children");

  const popularDestinations = [
    "Marrakech",
    "Sahara Desert", 
    "Fes",
    "Chefchaouen",
    "Atlas Mountains",
    "Essaouira"
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl p-2 md:p-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0">
        {/* Destination */}
        <div className="relative group md:border-r border-gray-200">
          <div className="px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg md:rounded-none transition-colors">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-sm font-medium text-gray-900 bg-transparent border-none outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="relative md:border-r border-gray-200">
          <div className="px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg md:rounded-none transition-colors">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">When</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Choose dates</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travelers */}
        <div className="relative md:border-r border-gray-200">
          <div className="px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg md:rounded-none transition-colors">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Travelers</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{travelers}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-center justify-center p-2">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Quick Destination Pills */}
      <div className="hidden md:flex items-center gap-2 px-4 py-3 border-t border-gray-100">
        <span className="text-xs text-gray-500">Popular:</span>
        {popularDestinations.slice(0, 5).map((dest) => (
          <button
            key={dest}
            onClick={() => setDestination(dest)}
            className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-colors"
          >
            {dest}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSearch;
