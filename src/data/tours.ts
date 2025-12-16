// Centralized tours data for Discover Morocco Trip

export interface PriceTier {
  min: number;
  max?: number;
  price: number;
}

export interface Tour {
  id: string;
  title: string;
  category: "activity" | "day-trip" | "multi-day" | "desert" | "cultural";
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
  // DESERT TOURS
  {
    id: "3-day-sahara-desert",
    title: "3-Day Sahara Desert Adventure from Marrakech",
    category: "desert",
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800",
    images: [
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800",
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800",
      "https://images.unsplash.com/photo-1455091834027-b4ddc96c0a9a?w=800"
    ],
    duration: "3 days",
    groupSize: "2-15 people",
    price: "From 180€",
    priceTiers: [
      { min: 1, max: 1, price: 250 },
      { min: 2, max: 4, price: 200 },
      { min: 5, price: 180 }
    ],
    rating: 4.9,
    reviews: 420,
    description: "Experience the magic of the Sahara Desert with an unforgettable 3-day journey from Marrakech to Merzouga. Ride camels through golden dunes, sleep under the stars in a traditional desert camp, and witness breathtaking sunrises.",
    highlights: [
      "Cross the High Atlas Mountains via Tizi n'Tichka Pass",
      "Visit the UNESCO World Heritage site Ait Ben Haddou",
      "Camel trek through Erg Chebbi dunes",
      "Overnight in a luxury desert camp",
      "Watch sunrise over the Sahara"
    ],
    included: [
      "Private air-conditioned transport",
      "2 nights accommodation (1 hotel, 1 desert camp)",
      "Breakfast and dinner daily",
      "Professional English-speaking guide",
      "Camel ride to and from camp",
      "Berber music entertainment"
    ],
    notIncluded: [
      "Lunches",
      "Tips and gratuities",
      "Personal expenses"
    ]
  },
  {
    id: "2-day-zagora-desert",
    title: "2-Day Zagora Desert Experience",
    category: "desert",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800",
    images: [
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800",
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800"
    ],
    duration: "2 days",
    groupSize: "2-12 people",
    price: "From 110€",
    priceTiers: [
      { min: 1, max: 1, price: 150 },
      { min: 2, max: 4, price: 130 },
      { min: 5, price: 110 }
    ],
    rating: 4.8,
    reviews: 280,
    description: "A shorter desert adventure perfect for those with limited time. Journey to Zagora, the gateway to the Sahara, and experience authentic desert culture with camel riding and overnight camping.",
    highlights: [
      "Drive through the stunning Draa Valley",
      "Visit ancient Kasbahs along the route",
      "Sunset camel ride in the desert",
      "Traditional Berber dinner under the stars",
      "Sleep in a comfortable desert camp"
    ],
    included: [
      "Transport from Marrakech",
      "1 night desert camp accommodation",
      "Dinner and breakfast",
      "Camel ride",
      "English-speaking driver/guide"
    ]
  },
  // DAY TRIPS
  {
    id: "atlas-mountains-valleys",
    title: "Atlas Mountains & Three Valleys Day Trip",
    category: "day-trip",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800",
    images: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
    ],
    duration: "Full day",
    groupSize: "2-15 people",
    price: "From 35€",
    priceTiers: [
      { min: 1, max: 1, price: 55 },
      { min: 2, max: 4, price: 45 },
      { min: 5, price: 35 }
    ],
    rating: 4.9,
    reviews: 560,
    description: "Discover the stunning beauty of the Atlas Mountains with visits to three picturesque valleys. Experience authentic Berber culture, enjoy traditional mint tea, and take in breathtaking mountain views.",
    highlights: [
      "Visit Ourika, Asni, and Imlil valleys",
      "Traditional Berber village experience",
      "Lunch at a mountain restaurant",
      "Optional waterfall hike",
      "Panoramic Atlas Mountain views"
    ],
    included: [
      "Hotel pickup and drop-off",
      "Air-conditioned transport",
      "English-speaking guide",
      "Berber tea welcome",
      "Visit to Argan cooperative"
    ]
  },
  {
    id: "essaouira-day-trip",
    title: "Essaouira Coastal City Day Trip",
    category: "day-trip",
    image: "https://images.unsplash.com/photo-1553899017-6c47bc4aa2cc?w=800",
    images: [
      "https://images.unsplash.com/photo-1553899017-6c47bc4aa2cc?w=800",
      "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800"
    ],
    duration: "Full day",
    groupSize: "2-15 people",
    price: "From 30€",
    priceTiers: [
      { min: 1, max: 1, price: 50 },
      { min: 2, max: 4, price: 40 },
      { min: 5, price: 30 }
    ],
    rating: 4.8,
    reviews: 380,
    description: "Escape to the charming coastal town of Essaouira. Explore the historic medina, walk along the beach, enjoy fresh seafood, and soak up the relaxed artistic atmosphere of this beautiful port city.",
    highlights: [
      "Explore the UNESCO World Heritage medina",
      "Walk along the windswept beach",
      "Visit the historic port and fish market",
      "Free time for shopping and exploration",
      "Stop at an Argan oil cooperative"
    ],
    included: [
      "Round-trip transport from Marrakech",
      "Air-conditioned vehicle",
      "English-speaking driver",
      "Free time in Essaouira",
      "Argan cooperative visit"
    ]
  },
  {
    id: "ouzoud-waterfalls",
    title: "Ouzoud Waterfalls Day Excursion",
    category: "day-trip",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800"
    ],
    duration: "Full day",
    groupSize: "2-15 people",
    price: "From 25€",
    priceTiers: [
      { min: 1, max: 1, price: 45 },
      { min: 2, max: 4, price: 35 },
      { min: 5, price: 25 }
    ],
    rating: 4.7,
    reviews: 290,
    description: "Visit Morocco's most spectacular waterfalls! The Ouzoud Falls cascade 110 meters down through olive groves, with opportunities to spot Barbary macaque monkeys and take a boat ride to the base.",
    highlights: [
      "See the 110-meter cascading waterfalls",
      "Spot wild Barbary macaque monkeys",
      "Optional boat ride to the falls base",
      "Traditional lunch by the river",
      "Scenic drive through Moroccan countryside"
    ],
    included: [
      "Transport from Marrakech",
      "English-speaking guide",
      "Guided walk to the falls",
      "Free time for exploration"
    ]
  },
  // ACTIVITIES
  {
    id: "agafay-desert-sunset",
    title: "Agafay Desert Sunset & Dinner Experience",
    category: "activity",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800",
    images: [
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800",
      "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800"
    ],
    duration: "5 hours",
    groupSize: "2-20 people",
    price: "From 35€",
    priceTiers: [
      { min: 1, max: 1, price: 50 },
      { min: 2, max: 4, price: 40 },
      { min: 5, price: 35 }
    ],
    rating: 4.9,
    reviews: 420,
    description: "Experience the magic of the Agafay Desert just outside Marrakech. Enjoy a sunset camel ride, traditional Moroccan dinner, and live entertainment under the stars.",
    highlights: [
      "Sunset camel ride through the desert",
      "Traditional Moroccan dinner",
      "Live Berber music and fire show",
      "Star gazing in the desert",
      "Stunning Atlas Mountain backdrop"
    ],
    included: [
      "Hotel pickup and drop-off",
      "Camel ride",
      "Moroccan dinner with tea",
      "Entertainment show",
      "Transport in air-conditioned vehicle"
    ]
  },
  {
    id: "quad-biking-agafay",
    title: "Quad Biking Adventure in Agafay Desert",
    category: "activity",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    duration: "Half day",
    groupSize: "2-12 people",
    price: "From 45€",
    priceTiers: [
      { min: 1, max: 1, price: 60 },
      { min: 2, max: 4, price: 50 },
      { min: 5, price: 45 }
    ],
    rating: 4.8,
    reviews: 310,
    description: "Feel the thrill of quad biking through the stunning Agafay Desert landscape. Navigate rocky terrain with panoramic views of the Atlas Mountains on this exciting adventure.",
    highlights: [
      "2-hour quad biking experience",
      "Scenic desert and mountain views",
      "Professional safety briefing",
      "Traditional mint tea break",
      "Photo opportunities"
    ],
    included: [
      "Hotel transfer",
      "Quad bike and equipment",
      "Safety gear",
      "Guide",
      "Mint tea and snacks"
    ]
  },
  {
    id: "hot-air-balloon",
    title: "Hot Air Balloon Ride at Sunrise",
    category: "activity",
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800",
    images: [
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800"
    ],
    duration: "4 hours",
    groupSize: "2-20 people",
    price: "From 150€",
    priceTiers: [
      { min: 1, max: 2, price: 180 },
      { min: 3, price: 150 }
    ],
    rating: 5.0,
    reviews: 180,
    description: "Soar above the Atlas Mountains and Moroccan countryside at sunrise in a hot air balloon. An unforgettable experience with stunning views and a traditional breakfast to finish.",
    highlights: [
      "1-hour hot air balloon flight",
      "Sunrise over the Atlas Mountains",
      "Panoramic views of Marrakech",
      "Traditional Berber breakfast",
      "Flight certificate"
    ],
    included: [
      "Early morning hotel pickup",
      "Hot air balloon flight",
      "Berber breakfast",
      "Flight certificate",
      "Return transfer"
    ]
  },
  // CULTURAL
  {
    id: "marrakech-city-tour",
    title: "Marrakech Medina & Souks Walking Tour",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800",
    images: [
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800",
      "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800"
    ],
    duration: "4 hours",
    groupSize: "2-10 people",
    price: "From 25€",
    priceTiers: [
      { min: 1, max: 1, price: 40 },
      { min: 2, max: 4, price: 30 },
      { min: 5, price: 25 }
    ],
    rating: 4.9,
    reviews: 620,
    description: "Explore the heart of Marrakech with an expert local guide. Discover the historic medina, vibrant souks, and hidden gems of this magical city.",
    highlights: [
      "Jemaa el-Fnaa square experience",
      "Explore the colorful souks",
      "Visit historic monuments",
      "Sample local street food",
      "Hidden gems and local tips"
    ],
    included: [
      "Professional local guide",
      "Walking tour of the medina",
      "Mint tea at a local café",
      "Entrance to Ben Youssef Madrasa"
    ]
  },
  {
    id: "moroccan-cooking-class",
    title: "Traditional Moroccan Cooking Class",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800",
    images: [
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800"
    ],
    duration: "4 hours",
    groupSize: "2-8 people",
    price: "From 40€",
    priceTiers: [
      { min: 1, max: 2, price: 55 },
      { min: 3, price: 40 }
    ],
    rating: 4.9,
    reviews: 220,
    description: "Learn to cook authentic Moroccan cuisine with a local chef. Visit the market to buy fresh ingredients and prepare a traditional tagine, couscous, and Moroccan salads.",
    highlights: [
      "Market visit for fresh ingredients",
      "Learn traditional cooking techniques",
      "Prepare tagine and couscous",
      "Enjoy the meal you created",
      "Take home recipes"
    ],
    included: [
      "Market visit",
      "All cooking ingredients",
      "Cooking instruction",
      "Full meal and drinks",
      "Recipe booklet"
    ]
  },
  // MULTI-DAY
  {
    id: "5-day-imperial-cities",
    title: "5-Day Imperial Cities Grand Tour",
    category: "multi-day",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",
    images: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800"
    ],
    duration: "5 days",
    groupSize: "2-12 people",
    price: "From 450€",
    priceTiers: [
      { min: 1, max: 1, price: 600 },
      { min: 2, max: 4, price: 500 },
      { min: 5, price: 450 }
    ],
    rating: 4.9,
    reviews: 150,
    description: "Explore Morocco's magnificent imperial cities on this comprehensive 5-day tour. Visit Fes, Meknes, Rabat, and Casablanca, discovering centuries of Moroccan history and culture.",
    highlights: [
      "Explore the ancient medina of Fes",
      "Visit the Roman ruins of Volubilis",
      "Discover the royal city of Meknes",
      "Tour the modern capital Rabat",
      "See the Hassan II Mosque in Casablanca"
    ],
    included: [
      "Private transportation",
      "4 nights hotel accommodation",
      "Daily breakfast",
      "English-speaking guide",
      "All entrance fees"
    ]
  },
  {
    id: "7-day-grand-morocco",
    title: "7-Day Grand Morocco Discovery",
    category: "multi-day",
    image: "https://images.unsplash.com/photo-1545041347-a8e5b3a37d04?w=800",
    images: [
      "https://images.unsplash.com/photo-1545041347-a8e5b3a37d04?w=800",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800"
    ],
    duration: "7 days",
    groupSize: "2-12 people",
    price: "From 750€",
    priceTiers: [
      { min: 1, max: 1, price: 950 },
      { min: 2, max: 4, price: 850 },
      { min: 5, price: 750 }
    ],
    rating: 5.0,
    reviews: 95,
    description: "The ultimate Morocco experience! This comprehensive 7-day journey covers the Sahara Desert, imperial cities, Atlas Mountains, and coastal towns for a complete Moroccan adventure.",
    highlights: [
      "Sahara Desert camping experience",
      "Imperial cities of Fes and Meknes",
      "Atlas Mountain scenic drives",
      "Chefchaouen blue city visit",
      "Coastal town of Essaouira"
    ],
    included: [
      "Private transportation throughout",
      "6 nights accommodation",
      "Daily breakfast and select dinners",
      "Professional English-speaking guide",
      "All entrance fees",
      "Desert camping with camel ride"
    ]
  }
];

export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};

export const getToursByCategory = (category: Tour["category"]): Tour[] => {
  return tours.filter(tour => tour.category === category);
};
