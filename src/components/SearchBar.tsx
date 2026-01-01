import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Weekend");
    const [destination, setDestination] = useState("");
    const [departureCity, setDepartureCity] = useState("");
    const [dates, setDates] = useState("");
    const [travelers, setTravelers] = useState("2 Adultes, 0 Enfants");

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (destination) params.set("search", destination);
        if (activeTab) params.set("category", activeTab);
        navigate(`/tours${params.toString() ? `?${params.toString()}` : ""}`);
    };

    return (
        <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-0">
            {/* Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center md:justify-start -mb-[1px] md:pl-8 space-x-0 relative z-20"
            >
                {["Weekend", "Soleil & plages", "100% sur mesure"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 md:px-6 py-2 md:py-3 rounded-t-xl md:rounded-t-2xl text-xs md:text-sm font-bold transition-all border-b-0 ${activeTab === tab
                            ? "bg-[#f44336] text-white"
                            : "bg-white text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
            >
                <div className="bg-white rounded-2xl md:rounded-[2rem] p-3 md:p-4 shadow-2xl flex flex-col md:flex-row items-center gap-3 md:gap-4">
                    {/* Destination */}
                    <div className="flex-1 w-full bg-gray-50 rounded-xl md:rounded-2xl px-4 py-3 flex items-center gap-3 focus-within:ring-2 ring-primary/20 transition-all">
                        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Ville de destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                className="w-full text-sm font-medium outline-none bg-transparent placeholder:text-gray-400 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Departure City */}
                    <div className="flex-1 w-full bg-gray-50 rounded-xl md:rounded-2xl px-4 py-3 flex items-center gap-3 focus-within:ring-2 ring-primary/20 transition-all">
                        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Ville de départ"
                                value={departureCity}
                                onChange={(e) => setDepartureCity(e.target.value)}
                                className="w-full text-sm font-medium outline-none bg-transparent placeholder:text-gray-400 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="flex-1 w-full bg-gray-50 rounded-xl md:rounded-2xl px-4 py-3 flex items-center gap-3 focus-within:ring-2 ring-primary/20 transition-all">
                        <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Arrivée - Départ"
                                value={dates}
                                onChange={(e) => setDates(e.target.value)}
                                className="w-full text-sm font-medium outline-none bg-transparent placeholder:text-gray-400 text-gray-700"
                                onFocus={(e) => e.target.type = "date"}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = "text";
                                }}
                            />
                        </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex-1 w-full bg-gray-50 rounded-xl md:rounded-2xl px-4 py-3 flex items-center gap-3">
                        <Users className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div className="flex-1">
                            <select
                                value={travelers}
                                onChange={(e) => setTravelers(e.target.value)}
                                className="w-full text-sm font-medium outline-none bg-transparent text-gray-700 cursor-pointer appearance-none"
                            >
                                <option>2 Adultes, 0 Enfants</option>
                                <option>1 Adulte</option>
                                <option>2 Adultes</option>
                                <option>Family (2A + 2C)</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="w-full md:w-auto">
                        <Button
                            onClick={handleSearch}
                            className="w-full md:w-14 h-12 bg-[#f44336] hover:bg-[#d32f2f] text-white rounded-xl md:rounded-2xl flex items-center justify-center p-0 shadow-lg transition-transform active:scale-95"
                        >
                            <Search className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SearchBar;
