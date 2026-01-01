// Centralized tours data for Discover Morocco Trip
// Generated from experiences_rows.json

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
  {
    "id": "8911d793-70da-4d46-80ef-aec28eb72706",
    "title": "Dinner and DJ Night on The James Rooftop An Elevated Casablanca ",
    "category": "dining",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767024331289-9ymds.jpg",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767024331289-9ymds.jpg"
    ],
    "duration": "5",
    "groupSize": "Max 39 travelers",
    "price": "180.00 USD",
    "rating": 5,
    "reviews": 161,
    "description": "Upon arrival at JM Suites Hotel, simply check in at the hotel reception. Show your Viator reservation (either printed or on your phone), and the team will guide you to the elevator that takes you directly to The Jame’s Rooftop.\n\nAs you step onto the rooftop, you’ll be welcomed with a refreshing signature cocktail while enjoying breathtaking 360° views over Casablanca, including the city's most iconic church right in front of you.\n\nThe evening unfolds with:\n\nA delicious 3-course dinner, featuring:\n• Starter: The Jame’s Rooftop Signature Salad\n• Main Course: Pasta Bolognese\n• Dessert: The Jame’s Tiramisu\n\nLive DJ music and entertainment to set the mood.\n\nTime to relax, enjoy the city lights, take pictures, and enjoy a vibrant rooftop vibe.\n\nThe experience lasts about 4 hours, and it's ideal for couples, friends, or solo travelers looking for something unique to do in Casablanca at night.\n\nJust come hungry, bring your camera, and enjoy one of the best rooftop nights in the city.\n\nShow less\nSample Menu\n1. The Jame’s rooftop signature salad, A fresh and vibrant mix of seasonal greens, crunchy vegetables, and our special house dressing – light and flavorful to start your evening.\n2. Pasta Bolognese, A hearty Italian classic prepared with rich meat sauce and perfectly cooked pasta – a warm and satisfying main dish.\n3. The Jame’s Tiramisu, Our homemade signature tiramisu – creamy, airy, and deliciously sweet, offering the perfect end to your meal.\n4. Dream Cocktail (Non-Alcoholic), A refreshing mocktail crafted with fresh strawberries, basil, brown sugar, apple juice, and a splash of 7Up",
    "highlights": [
      "Starter: The Jame’s Rooftop Signature Salad",
      "Main Course: Pasta Bolognese",
      "Dessert: The Jame’s Tiramisu"
    ],
    "included": [],
    "location": "https://www.google.com/maps/place/JM+Suites+Hotel/@33.592192,-7.6280423,17z/data=!4m9!3m8!1s0xda4e2027da8aedf:0x432162896d0a7a34!5m2!4m1!1i2!8m2!3d33.5921876!4d-7.6254674!16s%2Fg%2F1tdsl45f?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    "id": "82c1bba9-85c2-4a51-ab9e-894f2e01e031",
    "title": "Relaxing Hammam and Massage at Casablanca",
    "category": "wellness",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767024078890-5dk4wj.jpg",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767024078890-5dk4wj.jpg"
    ],
    "duration": "1 hour",
    "groupSize": "Max 25 travelers",
    "price": "110.00 USD",
    "rating": 5,
    "reviews": 88,
    "description": "Step out of your daily routine and come recharge in an environment designed for relaxation and well-being. Located in the heart of the Ghandi- district in Casablanca, H2O Center - Spa & Hammam offers a variety of massages, luxurious private hammams, a hair and beauty salon using top-quality products — all provided by attentive and professional staff. All these elements have been brought together to offer your body a special moment of relaxation, helping you clear your mind and release all mental and muscular tension.\n\nStep away from the busy city life and treat yourself to a deeply relaxing and rejuvenating experience in one of Casablanca’s most elegant wellness spaces — H2O Center - Spa & Hammam .\n\nLocated in the vibrant Ghandi district, this hidden gem offers a luxurious private hammam, a wide variety of professional massages, and a modern beauty and hair salon using only the finest products.\n\nLet yourself be pampered by our experienced and attentive team. Whether you're visiting Casablanca for the first time or a returning traveler, this is your chance to experience authentic Moroccan wellness with a modern touch.\n",
    "highlights": [],
    "included": [],
    "location": "https://www.google.com/maps/place/H2O+Center+-+Spa+%26+Hammam+Casablanca/@33.5750614,-7.6511316,17z/data=!3m1!4b1!4m6!3m5!1s0xda7d3ba5d3a355f:0xc394b58541f70c35!8m2!3d33.575057!4d-7.6485567!16s%2Fg%2F11w36q9g77?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    "id": "426d7b48-7836-457e-ab84-95a70ed69d87",
    "title": "8 Day Morocco Casablanca with Sahara Desert and More",
    "category": "multi-day",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767023505942-phmi9p.jpg",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767023505942-phmi9p.jpg"
    ],
    "duration": "8 days",
    "groupSize": "Max 100 travelers",
    "price": "2950.00 USD",
    "rating": 5,
    "reviews": 76,
    "description": "Total Duration: 8 days\nDay 1 : Day 1 Casablanca city tour (Hassan II Mosque, Medina, Corniche)\nItinerary steps: 1\nMeals not included\nAccommodation not included\nDay 2 : Day 2 Casablanca Rabat (Medina, Kasbah des Oudayas, Remparts) drive to Fes\nItinerary steps: 1\nMeals not included\nAccommodation not included\nDay 3 : Day 3 Fes city tour (Fes El Bali, Chouara Tannery, Al Quaraouiyine) – Overnight hotel\nItinerary steps: 1\nMeals not included\nAccommodation included: Stay in a comfortable 4 star hotel in Fes with breakfast, modern rooms, and central location.\nDay 4 : Day 4: Fes Sahara Desert via Middle Atlas and Ziz Valley Sunset camel ride, overnight luxury desert camp.\nItinerary steps: 1\nMeals included: dinner\nAccommodation included: Overnight in a luxury Sahara desert camp\nDay 5 : Day 5 Merzouga Todra Gorges Dades Valley Overnight traditional hotel\nItinerary steps: 1\nMeals included: dinner\nAccommodation included: Overnight in a traditional hotel in Dades\nDay 6 : Day 6: Dades Valley of Roses Ait Ben Haddou Marrakech via Tichka Pass Overnight riad\nItinerary steps: 1\nMeals included: breakfast\nAccommodation included: Overnight in a traditional Moroccan riad (breakfast included)\nDay 7 : Day 7 Marrakech city tour (Koutoubia, Ben Youssef Medersa, Bahia Palace, Souks)\nItinerary steps: 1\nMeals included: breakfast\nAccommodation included: Overnight in your riad in Marrakech (breakfast included)\nDay 8 : Day 8 Marrakech Casablanca Airport .\nItinerary steps: 1\nMeals not included\nAccommodation not included",
    "highlights": [],
    "included": [],
    "location": "https://www.google.com/maps/place/Casablanca/@33.5724032,-7.6693946,12z/data=!3m1!4b1!4m6!3m5!1s0xda7cd4778aa113b:0xb06c1d84f310fd3!8m2!3d33.5731104!4d-7.5898434!16zL20vMDIyYl8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    "id": "0fc260f6-82c3-4e01-9254-0e6cea68d4a6",
    "title": "Private Transport for Tours & Trips Across Morocco 24/7",
    "category": "transport",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767023368870-9yugnh.jpg",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767023368870-9yugnh.jpg"
    ],
    "duration": "24 hours",
    "groupSize": "Max 96 travelers",
    "price": "87.00 USD",
    "rating": 5,
    "reviews": 124,
    "description": "What truly sets us apart is our fair pricing, our full reliability, and our strong respect for time. We are available 24/7 to assist you, ensuring comfort, trust, and a seamless travel experience wherever you go in Morocco.\nWe offer flexible pickup from any location in Casablanca and take you to the most popular cities in Morocco at competitive rates:\n\nRoute One Way ---------- Round Trip.\nCasablanca → Rabat 800 MAD 1,600 MAD\nCasablanca → Marrakech 1,600 MAD 2,500 MAD\nCasablanca → Fes 2,500 MAD 4,500 MAD\nCasablanca → Chefchaouen 2,700 MAD 5,200 MAD\nCasablanca → Tangier 2,300 MAD 4,400 MAD\nCasablanca → Meknes 2,200 MAD 4,000 MAD\nCasablanca → Tetouan 2,500 MAD 4,900 MAD\nCasablanca → Merzouga (Sahara) 3,500 MAD 6,800 MAD \n\nFor any other city in Morocco, we can arrange the trip and agree on the price together once you contact us. Your comfort and satisfaction are always our priority.",
    "highlights": [],
    "included": [],
    "location": "https://www.google.com/maps/place/Casablanca/@33.5724032,-7.6693946,12z/data=!3m1!4b1!4m6!3m5!1s0xda7cd4778aa113b:0xb06c1d84f310fd3!8m2!3d33.5731104!4d-7.5898434!16zL20vMDIyYl8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
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
