// Centralized tours data for Discover Morocco Trip

export interface PriceTier {
  min: number;
  max?: number;
  price: number;
}

export interface Tour {
  id: string;
  title: string;
  category: "activity" | "day-trip" | "multi-day" | "desert" | "cultural" | "coastal" | "mountain";
  image?: string;
  images?: string[];
  duration: string;
  groupSize: string;
  price: string;
  priceTiers?: PriceTier[];
  rating?: number;
  reviews?: number;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded?: string[];
  itinerary?: string[];
}

export const tours: Tour[] = [
  // MULTI-DAY TOURS
  {
    id: "4-day-imperial-cities",
    title: "4-Day Imperial Cities Grand Tour",
    category: "multi-day",
    image: "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80",
      "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80",
      "https://images.unsplash.com/photo-1573816050632-c08b7ec0de07?w=800&q=80"
    ],
    duration: "4 days",
    groupSize: "2-12 people",
    price: "From 320€",
    priceTiers: [
      { min: 1, max: 1, price: 420 },
      { min: 2, max: 4, price: 380 },
      { min: 5, price: 320 }
    ],
    rating: 4.9,
    reviews: 156,
    description: "Embark on an epic journey through Morocco's legendary imperial cities. From the ancient medinas of Fes to the blue streets of Chefchaouen, experience centuries of royal heritage and vibrant culture.",
    highlights: [
      "Explore the world's oldest university in Fes",
      "Wander the blue-painted streets of Chefchaouen",
      "Discover the Roman ruins of Volubilis",
      "Visit the historic capital Rabat",
      "Experience traditional Moroccan hospitality"
    ],
    included: [
      "Private air-conditioned 4x4 vehicle",
      "3 nights in boutique riads",
      "Daily breakfast and 2 dinners",
      "Licensed English-speaking guide",
      "All entrance fees to monuments",
      "Airport/hotel pickup and drop-off"
    ],
    notIncluded: [
      "Lunches",
      "Tips and gratuities",
      "Travel insurance"
    ],
    itinerary: [
      "Day 1: Pickup - Drive to Rabat - Hassan Tower - Kasbah des Oudaias - Continue to Fes",
      "Day 2: Full day exploring Fes medina - Tanneries - Al-Qarawiyyin Mosque - Bou Inania Madrasa",
      "Day 3: Fes to Chefchaouen via Volubilis Roman ruins - Explore the Blue Pearl",
      "Day 4: Chefchaouen morning walk - Return journey with scenic stops"
    ]
  },
  {
    id: "5-day-desert-atlantic",
    title: "5-Day Desert to Atlantic Adventure",
    category: "multi-day",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
      "https://images.unsplash.com/photo-1558370781-d6196949e317?w=800&q=80"
    ],
    duration: "5 days",
    groupSize: "2-10 people",
    price: "From 450€",
    priceTiers: [
      { min: 1, max: 1, price: 580 },
      { min: 2, max: 4, price: 520 },
      { min: 5, price: 450 }
    ],
    rating: 5.0,
    reviews: 89,
    description: "The ultimate Moroccan experience - from the golden Sahara dunes to the windswept Atlantic coast. Trek through desert landscapes, camp under millions of stars, then rejuvenate by the ocean in Essaouira.",
    highlights: [
      "Sunrise camel trek in Erg Chebbi dunes",
      "Luxury desert camp under the stars",
      "Drive through the stunning Dades Gorge",
      "Surf town vibes in Essaouira",
      "Argan oil cooperative visit"
    ],
    included: [
      "Private 4x4 transportation throughout",
      "4 nights accommodation (riad + desert camp)",
      "All breakfasts and 3 dinners",
      "Camel trek and desert camp experience",
      "Professional guide",
      "Sandboarding equipment"
    ],
    notIncluded: [
      "Flights",
      "Lunches",
      "Optional activities",
      "Personal expenses"
    ]
  },
  {
    id: "northern-morocco-escape",
    title: "3-Day Northern Morocco Escape",
    category: "multi-day",
    image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80",
      "https://images.unsplash.com/photo-1573816050632-c08b7ec0de07?w=800&q=80"
    ],
    duration: "3 days",
    groupSize: "2-8 people",
    price: "From 240€",
    priceTiers: [
      { min: 1, max: 1, price: 320 },
      { min: 2, max: 4, price: 280 },
      { min: 5, price: 240 }
    ],
    rating: 4.8,
    reviews: 203,
    description: "Discover the hidden gems of Northern Morocco. From the striking Rif Mountains to the Mediterranean coast, experience a Morocco far from the tourist crowds.",
    highlights: [
      "Two nights in the magical Blue City",
      "Hike in the stunning Rif Mountains",
      "Visit Tetouan's UNESCO medina",
      "Explore Akchour waterfalls",
      "Taste authentic northern cuisine"
    ],
    included: [
      "Private transport from Tangier or Fes",
      "2 nights in traditional guesthouse",
      "Daily breakfast",
      "Local guide for medina tours",
      "Hiking guide for Akchour"
    ],
    notIncluded: [
      "Meals not mentioned",
      "Tips",
      "Travel insurance"
    ]
  },
  // COASTAL TOURS
  {
    id: "essaouira-coastal-day",
    title: "Essaouira Coastal Discovery",
    category: "coastal",
    image: "https://images.unsplash.com/photo-1558370781-d6196949e317?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558370781-d6196949e317?w=800&q=80",
      "https://images.unsplash.com/photo-1570478029589-73eae5c62e83?w=800&q=80"
    ],
    duration: "Full day",
    groupSize: "2-15 people",
    price: "From 35€",
    priceTiers: [
      { min: 1, max: 1, price: 55 },
      { min: 2, max: 4, price: 45 },
      { min: 5, price: 35 }
    ],
    rating: 4.7,
    reviews: 312,
    description: "Escape to the laid-back Atlantic port town of Essaouira. Wander through the historic medina, watch fishermen unload their catch, and feel the ocean breeze in this bohemian paradise.",
    highlights: [
      "Explore the UNESCO-listed medina",
      "Visit the historic fishing port",
      "Free time for shopping and beaches",
      "Stop at an Argan cooperative",
      "Optional camel ride on the beach"
    ],
    included: [
      "Round-trip transportation",
      "English-speaking driver",
      "Argan cooperative visit",
      "Free time for exploration"
    ],
    notIncluded: [
      "Meals",
      "Entrance fees",
      "Optional activities"
    ]
  },
  {
    id: "agadir-beach-tour",
    title: "Agadir Beach & Souk Experience",
    category: "coastal",
    image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&q=80"
    ],
    duration: "Full day",
    groupSize: "2-12 people",
    price: "From 40€",
    priceTiers: [
      { min: 1, max: 1, price: 60 },
      { min: 2, max: 4, price: 50 },
      { min: 5, price: 40 }
    ],
    rating: 4.6,
    reviews: 178,
    description: "Discover Morocco's premier beach resort town. Enjoy golden sands, explore the vibrant souk, and take in panoramic views from the ancient Kasbah ruins.",
    highlights: [
      "Relax on Agadir's famous beach",
      "Explore the colorful Souk El Had",
      "Visit the Kasbah ruins for sunset views",
      "See the marina and promenade",
      "Optional boat trip"
    ],
    included: [
      "Private transportation",
      "Guide service",
      "Beach time",
      "Souk tour"
    ],
    notIncluded: [
      "Meals",
      "Water sports",
      "Personal shopping"
    ]
  },
  // MOUNTAIN TOURS
  {
    id: "atlas-mountains-trek",
    title: "2-Day Atlas Mountains Trek",
    category: "mountain",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80"
    ],
    duration: "2 days",
    groupSize: "2-10 people",
    price: "From 120€",
    priceTiers: [
      { min: 1, max: 1, price: 180 },
      { min: 2, max: 4, price: 150 },
      { min: 5, price: 120 }
    ],
    rating: 4.9,
    reviews: 267,
    description: "Challenge yourself with a trek through the majestic High Atlas Mountains. Stay in a traditional Berber village, summit breathtaking viewpoints, and connect with authentic mountain culture.",
    highlights: [
      "Trek through stunning mountain scenery",
      "Stay overnight in a Berber village",
      "Experience authentic mountain hospitality",
      "Summit panoramic viewpoints",
      "Traditional tagine dinner by firelight"
    ],
    included: [
      "Professional mountain guide",
      "Mule for luggage transport",
      "1 night village guesthouse",
      "All meals during trek",
      "Transport to/from trailhead"
    ],
    notIncluded: [
      "Trekking gear",
      "Tips for guide and muleteer",
      "Travel insurance"
    ]
  },
  {
    id: "toubkal-summit-challenge",
    title: "Mount Toubkal Summit Challenge",
    category: "mountain",
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80"
    ],
    duration: "3 days",
    groupSize: "2-8 people",
    price: "From 220€",
    priceTiers: [
      { min: 1, max: 1, price: 320 },
      { min: 2, max: 4, price: 270 },
      { min: 5, price: 220 }
    ],
    rating: 4.9,
    reviews: 134,
    description: "Conquer North Africa's highest peak! This challenging trek takes you to the 4,167m summit of Mount Toubkal, offering incredible views and an unforgettable sense of achievement.",
    highlights: [
      "Summit North Africa's highest mountain",
      "Stay at the Toubkal Refuge",
      "Witness stunning sunrise from the peak",
      "Trek through Imlil Valley",
      "Experience Berber mountain culture"
    ],
    included: [
      "Certified mountain guide",
      "2 nights accommodation (refuge + village)",
      "All meals during trek",
      "Mule for equipment",
      "Crampons in winter"
    ],
    notIncluded: [
      "Technical gear rental",
      "Tips",
      "Travel insurance",
      "Transport to Imlil"
    ]
  },
  // CULTURAL TOURS
  {
    id: "fes-cultural-immersion",
    title: "Fes Medina Cultural Immersion",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80",
      "https://images.unsplash.com/photo-1558370781-d6196949e317?w=800&q=80"
    ],
    duration: "Full day",
    groupSize: "2-10 people",
    price: "From 45€",
    priceTiers: [
      { min: 1, max: 1, price: 70 },
      { min: 2, max: 4, price: 55 },
      { min: 5, price: 45 }
    ],
    rating: 4.8,
    reviews: 445,
    description: "Dive deep into the world's largest car-free urban area. Your expert guide reveals the hidden treasures of Fes el-Bali, from ancient tanneries to sacred monuments and artisan workshops.",
    highlights: [
      "Visit the famous Chouara Tannery",
      "Explore Al-Qarawiyyin University",
      "Discover hidden artisan workshops",
      "Traditional lunch in a riad",
      "Navigate the labyrinthine medina"
    ],
    included: [
      "Licensed local guide",
      "Traditional Moroccan lunch",
      "All entrance fees",
      "Artisan workshop visits",
      "Hotel pickup in Fes"
    ],
    notIncluded: [
      "Transport from other cities",
      "Tips",
      "Personal purchases"
    ]
  },
  {
    id: "moroccan-cooking-class",
    title: "Authentic Moroccan Cooking Experience",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=800&q=80"
    ],
    duration: "5 hours",
    groupSize: "2-8 people",
    price: "From 50€",
    priceTiers: [
      { min: 1, max: 1, price: 75 },
      { min: 2, max: 4, price: 60 },
      { min: 5, price: 50 }
    ],
    rating: 5.0,
    reviews: 189,
    description: "Learn the secrets of Moroccan cuisine from a local chef. Visit a traditional market, select fresh ingredients, and master the art of preparing tagine, couscous, and Moroccan salads.",
    highlights: [
      "Shop at a traditional souk for ingredients",
      "Learn to prepare authentic tagine",
      "Master Moroccan bread making",
      "Create traditional mint tea ceremony",
      "Enjoy the meal you prepared"
    ],
    included: [
      "All ingredients and materials",
      "Professional chef instruction",
      "Recipe cards to take home",
      "Full meal with beverages",
      "Apron as a souvenir"
    ],
    notIncluded: [
      "Transport",
      "Additional drinks"
    ]
  },
  {
    id: "berber-village-experience",
    title: "Authentic Berber Village Day",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80"
    ],
    duration: "Full day",
    groupSize: "2-10 people",
    price: "From 55€",
    priceTiers: [
      { min: 1, max: 1, price: 85 },
      { min: 2, max: 4, price: 70 },
      { min: 5, price: 55 }
    ],
    rating: 4.9,
    reviews: 234,
    description: "Experience genuine Berber hospitality in a traditional mountain village. Meet local families, participate in daily activities, and share a home-cooked meal with your hosts.",
    highlights: [
      "Visit a traditional Berber home",
      "Learn about Berber culture and traditions",
      "Participate in bread making",
      "Enjoy authentic home-cooked lunch",
      "Easy scenic hikes available"
    ],
    included: [
      "Round-trip transport",
      "Local guide/translator",
      "Traditional Berber lunch",
      "Mint tea ceremony",
      "Donation to village community"
    ],
    notIncluded: [
      "Tips",
      "Personal purchases"
    ]
  },
  // DESERT EXPERIENCES
  {
    id: "merzouga-luxury-camp",
    title: "2-Day Merzouga Luxury Desert Camp",
    category: "desert",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80"
    ],
    duration: "2 days",
    groupSize: "2-12 people",
    price: "From 150€",
    priceTiers: [
      { min: 1, max: 1, price: 220 },
      { min: 2, max: 4, price: 180 },
      { min: 5, price: 150 }
    ],
    rating: 4.9,
    reviews: 389,
    description: "Experience the Sahara in style with our luxury desert camp. Private tented suites, gourmet dining, and exclusive experiences create an unforgettable desert escape.",
    highlights: [
      "Private luxury tent with en-suite bathroom",
      "Sunset and sunrise camel treks",
      "Gourmet Moroccan dinner under stars",
      "Live Berber music and drumming",
      "Sandboarding on the dunes"
    ],
    included: [
      "Luxury tent accommodation",
      "All meals (dinner + breakfast)",
      "Camel trek (sunset + sunrise)",
      "Berber entertainment",
      "Sandboarding",
      "4x4 dune drive"
    ],
    notIncluded: [
      "Transport to Merzouga",
      "Alcoholic beverages",
      "Tips"
    ]
  },
  {
    id: "sahara-stargazing",
    title: "Sahara Stargazing Night Experience",
    category: "desert",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80"
    ],
    duration: "1 night",
    groupSize: "2-8 people",
    price: "From 80€",
    priceTiers: [
      { min: 1, max: 1, price: 120 },
      { min: 2, max: 4, price: 100 },
      { min: 5, price: 80 }
    ],
    rating: 5.0,
    reviews: 167,
    description: "Witness the most spectacular night sky on Earth. Far from city lights, the Sahara reveals millions of stars. Our expert astronomer guide introduces you to constellations, planets, and cosmic wonders.",
    highlights: [
      "Professional astronomy guide",
      "Telescope viewing session",
      "Learn desert navigation by stars",
      "Traditional dinner in nomad tent",
      "Sleeping under the Milky Way"
    ],
    included: [
      "Astronomy guide and equipment",
      "Desert camp accommodation",
      "Dinner and breakfast",
      "Blankets and mats for stargazing",
      "Camel trek to camp"
    ],
    notIncluded: [
      "Transport to starting point",
      "Personal photography equipment",
      "Tips"
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
