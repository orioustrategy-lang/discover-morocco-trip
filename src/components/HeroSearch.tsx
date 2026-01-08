import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Calendar, Users, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSearch = () => {
  const navigate = useNavigate();
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

  const handleSearch = () => {
    if (destination.trim()) {
      navigate(`/tours?search=${encodeURIComponent(destination)}`);
    } else {
      navigate('/tours');
    }
  };

  const handleDestinationClick = (dest: string) => {
    setDestination(dest);
    // Optional: Auto search on pill click? The user said "when I click on marrakech... it should filter".
    // It's safer to just fill the input, but user might expect immediate action.
    // Let's just fill for now, user needs to click Search. NO, user said "When I click... it should filter".
    // So for the pills/links, it should probably navigate or filter immediately.
    // However, for the "pills" in HeroSearch, typically they fill the input.
    // But the user mentioned "click on marrakech... filter experience".
    // The previous code just set state.
    // I will make the pills navigate immediately to behave as requested filters.
    navigate(`/tours?search=${encodeURIComponent(dest)}`);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-2 md:p-3 border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0">
        {/* Destination */}
        <div className="relative group md:border-r border-gray-200/50">
          <div className="px-4 py-3 cursor-pointer hover:bg-white/50 rounded-lg md:rounded-none transition-colors">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full text-sm font-medium text-gray-900 bg-transparent border-none outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="relative md:border-r border-gray-200/50">
          <div className="px-4 py-3 cursor-pointer hover:bg-white/50 rounded-lg md:rounded-none transition-colors">
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
        <div className="relative md:border-r border-gray-200/50">
          <div className="px-4 py-3 cursor-pointer hover:bg-white/50 rounded-lg md:rounded-none transition-colors">
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
          <Button
            onClick={handleSearch}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg"
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Quick Destination Pills */}
      <div className="hidden md:flex items-center gap-2 px-4 py-3 border-t border-gray-200/50">
        <span className="text-xs text-gray-500">Popular:</span>
        {popularDestinations.slice(0, 5).map((dest) => (
          <button
            key={dest}
            onClick={() => handleDestinationClick(dest)}
            className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100/80 hover:bg-primary hover:text-white rounded-full transition-colors"
          >
            {dest}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSearch;
