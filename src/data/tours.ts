// Centralized tours data for Discover Morocco Trip

export interface PriceTier {
  min: number;
  max?: number;
  price: number;
}

export interface TreatmentOption {
  name: string;
  price: number;
  duration: string;
}

export interface TransportRoute {
  destination: string;
  oneWay: number;
  roundTrip: number;
}

export interface Tour {
  id: string;
  title: string;
  category: "activity" | "day-trip" | "multi-day" | "desert" | "cultural" | "coastal" | "mountain" | "transport" | "wellness" | "dining";
  image?: string;
  images?: string[];
  duration: string;
  groupSize: string;
  price: string;
  priceTiers?: PriceTier[];
  treatmentOptions?: TreatmentOption[];
  transportRoutes?: TransportRoute[];
  rating?: number;
  reviews?: number;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded?: string[];
  itinerary?: string[];
  location?: string;
  accessibility?: string[];
  menu?: string[];
}

export const tours: Tour[] = [
  // 8-DAY MOROCCO DISCOVERY TOUR
  {
    id: "8-day-morocco-discovery",
    title: "8-Day Morocco Discovery Tour",
    category: "multi-day",
    image: "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80",
      "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80",
      "https://images.unsplash.com/photo-1573816050632-c08b7ec0de07?w=800&q=80",
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80"
    ],
    duration: "8 days",
    groupSize: "Private Tour",
    price: "Contact for pricing",
    rating: 5.0,
    reviews: 127,
    description: "Experience the ultimate Morocco adventure from Casablanca to the Sahara Desert. This comprehensive 8-day private tour takes you through Morocco's most iconic destinations including Casablanca, Rabat, Fes, Marrakech, and the magical Sahara Desert with luxury accommodations throughout.",
    highlights: [
      "Private airport/hotel pick-up & drop-off",
      "Explore Casablanca: Hassan II Mosque, Old Medina, Corniche",
      "Discover Rabat: Kasbah des Oudayas, Medina, historic gates",
      "Wander Fes' ancient streets, Chouara Tannery & Al Quaraouiyine",
      "Stay in top-quality hotels & traditional riads (breakfast included)",
      "Visit Marrakech: Koutoubia Mosque, Ben Youssef Medersa, Bahia Palace & Souks",
      "3-day Sahara Desert adventure: camel ride, luxury desert camp, Berber music",
      "Scenic drives through Atlas Mountains, Valley of Roses & Todra Gorges",
      "Private, air-conditioned land transport throughout"
    ],
    included: [
      "Private air-conditioned transport throughout",
      "4★ hotel & traditional riad accommodations",
      "All breakfasts included",
      "Desert camp dinner & breakfast",
      "Sunset camel trekking",
      "Sandboarding & Berber drumming",
      "Professional English-speaking driver/guide"
    ],
    notIncluded: [
      "Lunches and dinners (except desert camp)",
      "Entrance fees to monuments",
      "Tips and gratuities",
      "Travel insurance",
      "Personal expenses"
    ],
    itinerary: [
      "Day 1: Casablanca city tour - Hassan II Mosque, Old Medina, Corniche | Overnight: 4★ hotel in Casablanca",
      "Day 2: Casablanca → Rabat (Medina, Kasbah des Oudayas, Remparts) → Fes | Overnight: Hotel in Fes",
      "Day 3: Fes city tour - Fes El Bali, Chouara Tannery, Al Quaraouiyine | Overnight: Hotel in Fes",
      "Day 4: Fes → Sahara Desert via Middle Atlas & Ziz Valley, sunset camel ride | Overnight: Luxury desert camp",
      "Day 5: Merzouga → Todra Gorges → Dades Valley | Overnight: Traditional hotel in Dades",
      "Day 6: Dades → Valley of Roses → Ait Ben Haddou → Marrakech via Tichka Pass | Overnight: Traditional riad",
      "Day 7: Marrakech city tour - Koutoubia, Ben Youssef Medersa, Bahia Palace, Souks, free evening at Jemaa El-Fnaa | Overnight: Riad in Marrakech",
      "Day 8: Marrakech → Casablanca Airport | End of tour"
    ]
  },

  // PRIVATE TRANSPORT SERVICE
  {
    id: "private-transport-morocco",
    title: "Private Transport for Tours & Trips Across Morocco 24/7",
    category: "transport",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
    ],
    duration: "Up to 12 hours",
    groupSize: "1-7 passengers",
    price: "From 800 MAD",
    rating: 4.9,
    reviews: 256,
    description: "Private transport service from Casablanca to all destinations in Morocco. Available 24/7 with fair pricing, full reliability, and respect for time. Travel comfortably in a modern, air-conditioned vehicle with a professional driver.",
    highlights: [
      "24/7 availability for all your travel needs",
      "Fair and transparent pricing",
      "Professional English or French speaking drivers",
      "Comfortable air-conditioned vehicles",
      "Door-to-door service",
      "Flexible scheduling"
    ],
    transportRoutes: [
      { destination: "Casablanca → Rabat", oneWay: 800, roundTrip: 1600 },
      { destination: "Casablanca → Marrakech", oneWay: 1600, roundTrip: 2500 },
      { destination: "Casablanca → Fes", oneWay: 2500, roundTrip: 4500 },
      { destination: "Casablanca → Chefchaouen", oneWay: 2700, roundTrip: 5200 },
      { destination: "Casablanca → Tangier", oneWay: 2300, roundTrip: 4400 },
      { destination: "Casablanca → Meknes", oneWay: 2200, roundTrip: 4000 },
      { destination: "Casablanca → Tetouan", oneWay: 2500, roundTrip: 4900 },
      { destination: "Casablanca → Merzouga (Sahara)", oneWay: 3500, roundTrip: 6800 }
    ],
    included: [
      "Hotel pickup and drop-off (within Casablanca city center)",
      "Private air-conditioned vehicle",
      "Professional and friendly driver (English or French speaking)",
      "Bottled water during the tour",
      "Parking fees and tolls",
      "Door-to-door pickup and drop-off"
    ],
    notIncluded: [
      "Personal expenses (shopping, etc.)"
    ],
    accessibility: [
      "Wheelchair accessible",
      "Stroller accessible",
      "Service animals allowed",
      "Near public transportation"
    ]
  },

  // RELAXING HAMMAM AND MASSAGE
  {
    id: "hammam-massage-casablanca",
    title: "Relaxing Hammam and Massage at Casablanca",
    category: "wellness",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
    ],
    duration: "1 - 1.5 hours",
    groupSize: "Individual or couples",
    price: "From $100",
    rating: 4.8,
    reviews: 189,
    location: "H2O Center - Spa & Hammam, 31 Rue Abou El Hassan Es-Séghir, Casablanca",
    description: "Indulge in an authentic Moroccan spa experience at one of Casablanca's finest hammams. Choose from a variety of traditional treatments including Oriental Hammam, relaxing massages, and luxurious VIP packages. Experience the centuries-old tradition of Moroccan bathing rituals.",
    highlights: [
      "Authentic Moroccan hammam experience",
      "Multiple treatment options available",
      "Professional spa therapists",
      "Private access to spa facilities",
      "Relaxing atmosphere",
      "Traditional Moroccan products used"
    ],
    treatmentOptions: [
      { name: "Oriental Hammam", price: 100, duration: "1 hour" },
      { name: "Candle Massage", price: 110, duration: "1 hour" },
      { name: "Tonic Massage", price: 110, duration: "1 hour" },
      { name: "Traditional Hammam", price: 110, duration: "1 hour" },
      { name: "Relaxing Hammam & Massage (Boutique Hotel)", price: 110, duration: "1 hour" },
      { name: "Californian Massage", price: 130, duration: "1 hour" },
      { name: "Hot Stone Massage", price: 150, duration: "1 hour" },
      { name: "VIP Hammam", price: 200, duration: "1.5 hours" },
      { name: "Royal Hammam", price: 250, duration: "1.5 hours" }
    ],
    included: [
      "Reception assistance in English",
      "Traditional Moroccan Hammam treatment",
      "Full-body relaxing massage (for massage packages)",
      "Private access to the spa facilities",
      "Traditional Moroccan products (black soap, ghassoul, argan oil)"
    ],
    notIncluded: [
      "Hotel pickup and drop-off",
      "Personal expenses or additional spa treatments not listed"
    ]
  },

  // DINNER AND DJ NIGHT
  {
    id: "dinner-dj-james-rooftop",
    title: "Dinner and DJ Night on The James Rooftop",
    category: "dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
    ],
    duration: "5 hours",
    groupSize: "Max 30 travelers (shared experience)",
    price: "$180",
    priceTiers: [
      { min: 1, price: 180 }
    ],
    rating: 4.9,
    reviews: 94,
    location: "JM Suites Hotel, 161 Angle Bd Rachidi, Casablanca 20070",
    description: "Experience an elevated evening in Casablanca at The James Rooftop. Enjoy a delicious 3-course dinner with panoramic city views while listening to live DJ sets (Thursday-Saturday) or curated background music. The perfect way to spend an evening in the vibrant city of Casablanca.",
    highlights: [
      "Panoramic rooftop city views",
      "Live DJ entertainment (Thu-Sat)",
      "Gourmet 3-course dinner",
      "Signature cocktails",
      "Elegant rooftop atmosphere",
      "Perfect for special occasions"
    ],
    menu: [
      "The Jame's Rooftop Signature Salad - Fresh seasonal greens with house dressing",
      "Pasta Bolognese - Rich meat sauce with perfectly cooked pasta",
      "The Jame's Tiramisu - Homemade creamy signature dessert",
      "Dream Cocktail (Non-Alcoholic) - Strawberries, basil, brown sugar, apple juice, 7Up"
    ],
    included: [
      "3-course dinner (salad, pasta, tiramisu)",
      "Dream Cocktail (Non-Alcoholic)",
      "Live DJ (Thursday-Saturday) or curated background music (Sunday-Wednesday)",
      "Panoramic city views",
      "Table reservation"
    ],
    notIncluded: [
      "Private transportation",
      "Personal expenses",
      "Additional drinks or menu items"
    ]
  }
];

export const getToursByCategory = (category: Tour["category"]): Tour[] => {
  return tours.filter((tour) => tour.category === category);
};

export const getTourById = (id: string): Tour | undefined => {
  return tours.find((tour) => tour.id === id);
};

export const getFeaturedTours = (): Tour[] => {
  return tours.filter((tour) => tour.rating && tour.rating >= 4.8).slice(0, 6);
};

export const searchTours = (query: string): Tour[] => {
  const lowercaseQuery = query.toLowerCase();
  return tours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(lowercaseQuery) ||
      tour.description.toLowerCase().includes(lowercaseQuery) ||
      tour.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getAllCategories = (): Tour["category"][] => {
  return [...new Set(tours.map(tour => tour.category))];
};
