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
    "duration": "5 hours",
    "groupSize": "Max 39 travelers",
    "price": "180.00 USD",
    "rating": 5,
    "reviews": 161,
    "description": "Upon arrival at JM Suites Hotel, simply check in at the hotel reception. Show your Viator reservation (either printed or on your phone), and the team will guide you to the elevator that takes you directly to The Jame’s Rooftop.\n\nAs you step onto the rooftop, you’ll be welcomed with a refreshing signature cocktail while enjoying breathtaking 360° views over Casablanca, including the city's most iconic church right in front of you.\n\nThe evening unfolds with:\n\nA delicious 3-course dinner, featuring:\n• Starter: The Jame’s Rooftop Signature Salad\n• Main Course: Pasta Bolognese\n• Dessert: The Jame’s Tiramisu\n\nLive DJ music and entertainment to set the mood.\n\nTime to relax, enjoy the city lights, take pictures, and enjoy a vibrant rooftop vibe.\n\nThe experience lasts about 4 hours, and it's ideal for couples, friends, or solo travelers looking for something unique to do in Casablanca at night.\n\nJust come hungry, bring your camera, and enjoy one of the best rooftop nights in the city.\n\nShow less\nSample Menu\n1. The Jame’s rooftop signature salad, A fresh and vibrant mix of seasonal greens, crunchy vegetables, and our special house dressing – light and flavorful to start your evening.\n2. Pasta Bolognese, A hearty Italian classic prepared with rich meat sauce and perfectly cooked pasta – a warm and satisfying main dish.\n3. The Jame’s Tiramisu, Our homemade signature tiramisu – creamy, airy, and deliciously sweet, offering the perfect end to your meal.\n4. Dream Cocktail (Non-Alcoholic), A refreshing mocktail crafted with fresh strawberries, basil, brown sugar, apple juice, and a splash of 7Up",
    "highlights": [
      "Access to The James Rooftop with 360° views",
      "3-Course Dinner (Salad, Pasta, Tiramisu)",
      "Welcome Signature Cocktail",
      "Live DJ Entertainment"
    ],
    "included": [
      "Access to The James Rooftop",
      "Welcome Cocktail",
      "3-Course Dinner (Starter, Main, Dessert)",
      "Live DJ Entertainment"
    ],
    "notIncluded": [
      "Hotel pickup and drop-off",
      "Extra drinks beyond the welcome cocktail"
    ],
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
    "highlights": [
      "Luxurious Private Hammam Experience",
      "Professional Massage",
      "Premium Beauty Products",
      "Relaxing Atmosphere"
    ],
    "included": [
      "Private Hammam Access",
      "Professional Massage Service",
      "Towels and Bathrobe",
      "Welcome Tea"
    ],
    "notIncluded": [
      "Hotel pickup and drop-off",
      "Extra beauty treatments (hair, nails)"
    ],
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
    "highlights": [
      "Casablanca City Tour (Hassan II Mosque)",
      "Fes Guided Tour (Old Medina)",
      "Sahara Desert Camel Trek & Luxury Camp",
      "Todra Gorges & Dades Valley",
      "Ait Ben Haddou & Atlas Mountains",
      "Marrakech City Tour"
    ],
    "included": [
      "4-Star or Riad Accommodation (Fes, Marrakech)",
      "Luxury Desert Camp (Merzouga)",
      "Dinner in Desert & Dades Valley",
      "Breakfasts (where accommodation included)",
      "Camel Trek in Sahara",
      "Professional Driver/Guide",
      "Transport in A/C Vehicle"
    ],
    "notIncluded": [
      "Meals not listed (Lunch & some Dinners)",
      "Accommodation on Day 1, 2 & 8",
      "Monument Entrance Fees",
      "Tips and Personal Expenses"
    ],
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
    "highlights": [
      "24/7 Availability",
      "Door-to-Door Pickup",
      "Professional Drivers",
      "Competitive Fixed Rates"
    ],
    "included": [
      "Private Vehicle with A/C",
      "Professional Driver",
      "Fuel and Tolls",
      "Pickup and Drop-off"
    ],
    "notIncluded": [
      "Food and Drinks",
      "Entrance Fees to Monuments",
      "Accommodation"
    ],
    "location": "https://www.google.com/maps/place/Casablanca/@33.5724032,-7.6693946,12z/data=!3m1!4b1!4m6!3m5!1s0xda7cd4778aa113b:0xb06c1d84f310fd3!8m2!3d33.5731104!4d-7.5898434!16zL20vMDIyYl8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    "id": "0d688efc-6b91-4601-b119-0fcc8e19671f",
    "title": "Horseback Riding Experience at Casablanca Beach",
    "category": "activity",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767387153212-ln2z5.webp",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767387153212-ln2z5.webp",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767387153879-fohl2g.webp"
    ],
    "duration": "3 hours",
    "groupSize": "Max 25 travelers",
    "price": "120.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "This experience offers travelers the flexibility to choose between two unique horseback riding options: a peaceful countryside ride at the equestrian farm or a scenic ride along the Atlantic beach.\n\nCombined with professional guides, well-trained horses, and personalized service from pickup to drop-off, this activity delivers a safe, authentic, and unforgettable experience in Casablanca.\n\nEnjoy a unique horseback riding experience along Dar Bouazza beach with scenic countryside views.\n\nRide well-trained horses suitable for beginners and experienced riders alike.\n\nPrivate or small group experience with a professional local guide to ensure safety and personalized attention.\n\nIncludes pick-up from Casablanca and a stop for traditional Moroccan tea, making it a convenient and authentic Moroccan adventure.\n\nPerfect for couples, families, and travelers seeking a memorable outdoor activity close to the city.",
    "highlights": [
      "Horseback riding along Dar Bouazza beach",
      "Scenic countryside views",
      "Professional local guide",
      "Traditional Moroccan tea break"
    ],
    "included": [
      "Hotel pickup and drop-off",
      "Professional guide",
      "Safety equipment",
      "Moroccan tea"
    ],
    "notIncluded": [
      "Food and drinks not mentioned",
      "Tips"
    ],
    "location": "https://www.google.com/maps/place/Casablanca"
  },
  {
    "id": "1f3d25c6-a826-45a2-a190-529e4dfbb3a2",
    "title": "Marrakech: Agafay Desert Quad & Camel Rides with Dinner Show",
    "category": "desert",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767995599483-jic278.jpg",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767995599483-jic278.jpg",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1767995600916-8q4kf3.JPG"
    ],
    "duration": "5 hours",
    "groupSize": "Max 30 travelers",
    "price": "110.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Day 1: Adrenaline & Serenity in the Agafay\nBegin your adventure with a convenient pickup from your Marrakech city center hotel. As you journey towards the Agafay Desert in a comfortable air-conditioned minibus, feel the anticipation build. Upon arrival, gear up for an exhilarating 40-minute quad bike tour, where you and your partner will navigate the thrilling rocky dunes of this mesmerizing landscape. As the sun begins its descent, transition from adrenaline to tranquility with a 15-minute camel ride. Feel the gentle sway of the camel beneath you, as the golden hues of sunset paint the desert in a magical light.\nAfterward, settle into a traditional desert camp for an authentic Moroccan dinner. The aroma of local spices will tantalize your senses as you indulge in a meal that captures the essence of Moroccan cuisine, complete with refreshing water. As the evening unfolds, enjoy the rhythm of live Moroccan music, creating an enchanting atmosphere. The night concludes with a spectacular fire show under the vast, starry desert sky—a perfect end to an unforgettable experience.\nMeals included: Dinner\nAccommodation included: Not applicable",
    "highlights": [
      "40-minute quad bike tour",
      "Sunset camel ride",
      "Authentic Moroccan dinner with live music",
      "Spectacular fire show"
    ],
    "included": [
      "Hotel pickup and drop-off",
      "Quad bike and equipment",
      "Camel ride",
      "Dinner and show",
      "Water"
    ],
    "location": "https://www.google.com/maps/place/Medina,+Marrakesh+40000"
  },
  {
    "id": "cde42221-9768-4f6c-b4c9-eab442edec05",
    "title": "From Marrakech: Private 3-Day Luxury Merzouga Desert Tour",
    "category": "multi-day",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003391529-feqqfb.JPG",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003391529-feqqfb.JPG",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003392246-hlqtei.jpg",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003392680-4gpl7.jpg"
    ],
    "duration": "3 days",
    "groupSize": "Max 30 travelers",
    "price": "849.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Day 1: Journey Through the Heart of Morocco\nEmbark on your adventure as you depart from the vibrant streets of Marrakech in a private, air-conditioned vehicle. Ascend the majestic Atlas Mountains, where the landscape transforms from bustling city life to serene mountain vistas. Your first stop is the UNESCO World Heritage site of Ait Ben Haddou. Wander through this ancient fortified village, famed for its stunning kasbahs and as a backdrop to countless films. Continue to Ouarzazate, known as the Hollywood of Africa, and explore its renowned film studios. As the day winds down, travel through the captivating Valley of Roses, arriving in the Dades Gorges where you'll settle into a comfortable hotel/riad. Enjoy a delightful dinner as you soak in the breathtaking views of the rugged terrain.\nMeals included: Dinner\nAccommodation included: Comfortable hotel/riad in Dades\n\nDay 2: Into the Sands of Time\nAfter a hearty breakfast, journey through the dramatic Todra Gorges, where you'll hike along the Todra River, marveling at the towering cliffs surrounding you. Continue your adventure as you head towards the golden sands of Merzouga. Upon arrival, mount your camel for an unforgettable trek across the iconic Erg Chebbi dunes, timing your ride with the magical desert sunset. As the stars begin to twinkle, arrive at your luxury desert camp where a warm Berber welcome awaits. Savor a traditional dinner under the vast Sahara sky, followed by an enthralling Berber drumming and music experience around the campfire.\nMeals included: Breakfast, Dinner\nAccommodation included: Luxury desert camp in Merzouga\n\nDay 3: From Dunes to Draa - The Road Back to Marrakech\nRise early for a spectacular 4WD transfer to witness the desert sunrise, painting the dunes in a kaleidoscope of colors. After breakfast at the camp, make your way back towards Marrakech. Travel through the scenic Draa Valley, dotted with lush oases and quaint Berber villages. Experience the rich cultural tapestry of these communities as you make your way back to the city. Your journey concludes with a drop-off at your chosen location in Marrakech, leaving you with memories of the desert's captivating allure.\nMeals included: Breakfast\nAccommodation included: Not applicable",
    "highlights": [
      "Ait Ben Haddou & Ouarzazate Film Studios",
      "Luxury desert camp in Merzouga",
      "Sunset camel trek in Erg Chebbi",
      "Scenic drive through Draa Valley & Atlas Mountains"
    ],
    "included": [
      "Private transportation",
      "Accommodation (Hotel/Riad & Luxury Camp)",
      "Meals as specified (Breakfasts, Dinners)",
      "Camel trek",
      "Local guides"
    ],
    "notIncluded": [
      "Lunches",
      "Drinks",
      "Tips"
    ],
    "location": "https://maps.app.goo.gl/QRxuLUwFWXDDhY7b9"
  },
  {
    "id": "ce4b9cd5-58b7-47b1-8066-37e5028c001e",
    "title": "From Marrakech: Private Atlas Mountains Full-Day Hiking Trip w Lunch",
    "category": "mountain",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003838709-tjwtp.jpg",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003838709-tjwtp.jpg",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003840202-l7ytos.jpg",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768003841015-3ubcq.jpg"
    ],
    "duration": "8 hours",
    "groupSize": "Max 30 travelers",
    "price": "99.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Experience Overview\n\nEscape the hustle of Marrakech and enjoy a refreshing day trip to the Ourika Valley, nestled in the heart of the Atlas Mountains. This experience offers a perfect blend of nature, culture, and relaxation. Discover traditional Berber villages, learn about the authentic production of argan oil, and explore lush green landscapes leading to the beautiful waterfalls of Setti Fatma.\n\nHighlights\n\nDiscover the rich culture of traditional Berber villages\n\nVisit a local Argan Oil cooperative and learn about the artisanal process\n\nAdmire majestic waterfalls flowing through the Ourika Valley\n\nExplore lush green landscapes on scenic hiking trails\n\nEnjoy breathtaking views of the Atlas Mountains\n\nEscape the city and relax in a peaceful natural environment",
    "highlights": [
      "Ourika Valley & Setti Fatma Waterfalls",
      "Traditional Berber villages",
      "Argan Oil cooperative visit",
      "Scenic hiking trails"
    ],
    "included": [
      "Hotel pickup and drop-off",
      "Lunch (If option selected)",
      "Guided hike",
      "Visit to Argan cooperative",
      "Bottled water"
    ],
    "location": "https://maps.app.goo.gl/QRxuLUwFWXDDhY7b9"
  },
  {
    "id": "aadc66d2-5cb0-4d27-a8a8-50360809906b",
    "title": "Marrakech: Dunes of the Palmeraie Quad Bike Ride with Tea",
    "category": "activity",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768004529326-kea4oa.png",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768004529326-kea4oa.png",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768004530432-4ikky8.jpg",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768004530875-5n12jf.jpg"
    ],
    "duration": "3 hours",
    "groupSize": "Max 12 travelers",
    "price": "79.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Enjoy an exciting quad biking adventure through the Jbilet Desert, just outside Marrakech. This immersive experience takes you across wild desert landscapes, lush palm groves, and authentic rural Berber villages, offering a perfect mix of adventure and cultural discovery.\n\nHighlights\n\nRide through the stunning Palmeraie of Marrakech\n\nExplore the wild desert landscapes of the Jbilet region by quad\n\nDiscover traditional Berber villages off the beaten path\n\nEnjoy a relaxing break with authentic Moroccan mint tea in the desert",
    "highlights": [
      "Quad biking in Jbilet Desert",
      "See Marrakech Palmeraie",
      "Traditional Berber villages",
      "Moroccan mint tea break"
    ],
    "included": [
      "Hotel pickup and drop-off",
      "2 hours of quad biking",
      "Helmet & goggles",
      "Mint tea"
    ],
    "location": "https://maps.app.goo.gl/QRxuLUwFWXDDhY7b9"
  },
  {
    "id": "28f7fa17-b8ef-46f4-b256-1146aad55f6c",
    "title": "Marrakech: Camel Ride in the Oasis Palmeraie",
    "category": "activity",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768005103877-gwiko.jpg",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768005103877-gwiko.jpg",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768005104794-f0pmko.jpg"
    ],
    "duration": "2 hours",
    "groupSize": "Max 15 travelers",
    "price": "99.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Enjoy a relaxing shared camel ride through the lush palm groves of the Oasis Palmeraie of Marrakech. This peaceful experience takes you beyond the city center to discover traditional villages, scenic palm and orange tree landscapes, and authentic Moroccan hospitality. A perfect cultural escape for first-time visitors and families alike.\n\nHighlights\n\nRide a camel through the Palmeraie of Marrakech\n\nAdmire stunning views of palm groves and orange trees\n\nExperience traditional Moroccan village life outside the city\n\nEnjoy a refreshing mint tea in a nomadic-style setting",
    "highlights": [
      "Camel ride in Palmeraie oasis",
      "Scenic palm and orange tree landscapes",
      "Traditional Moroccan village life",
      "Mint tea in nomadic setting"
    ],
    "included": [
      "Hotel pickup and drop-off",
      "1-hour camel ride",
      "Traditional attire",
      "Mint tea"
    ],
    "location": "https://maps.app.goo.gl/QRxuLUwFWXDDhY7b9"
  },
  {
    "id": "4d6bc38b-7943-4119-8668-2a55ee8bfdd4",
    "title": "Marrakech: Paragliding over Agafay Desert & Atlas Mnt Views",
    "category": "activity",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768005387776-bf449j.JPG",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768005387776-bf449j.JPG",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768005388567-lxvxrt.JPG",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768005389112-rcg9do.JPG"
    ],
    "duration": "5.5 hours",
    "groupSize": "Max 8 travelers",
    "price": "139.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Live an unforgettable adventure with tandem paragliding over the Atlas Mountains, guided by a certified and experienced instructor. Take off from an altitude of over 1,000 meters, soaring above the breathtaking landscapes of the Agafay Desert and surrounding valleys. This unique experience perfectly combines adrenaline, discovery, and cultural immersion.\n\nHighlights\n\nSoar through the sky and experience the thrill of paragliding above the clouds\n\nAdmire panoramic views of the Atlas Mountains and Agafay Desert\n\nVisit a local Argan Oil cooperative and learn about traditional production methods\n\nEnjoy a 15-minute camel ride through the desert landscape (optional)\n\nCapture unforgettable moments with GoPro video footage",
    "highlights": [
      "Tandem paragliding flight",
      "Panoramas of Atlas Mountains & Agafay Desert",
      "GoPro video footage",
      "Optional camel ride"
    ],
    "included": [
      "Hotel pickup and drop-off",
      "Certified paragliding pilot & equipment",
      "GoPro footage",
      "Camel ride",
      "Breakfast & Tea"
    ],
    "location": "https://maps.app.goo.gl/QRxuLUwFWXDDhY7b9"
  },
  {
    "id": "3e876e9d-b3cc-4d79-baea-166f829036a6",
    "title": "Trekking through Berber Villages of Atlas Mountains (3 Days)",
    "category": "multi-day",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768320578499-f9c98b.JPG",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768320578499-f9c98b.JPG",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768320579412-sh5xg.jpg"
    ],
    "duration": "3 days",
    "groupSize": "Max 25 travelers",
    "price": "180.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Day 1: Into the Heart of the Ouirgane National Park\nBegin your adventure with a scenic drive from Marrakech to the picturesque village of Ouirgane. Trek through verdant pastures and pine forests to the charming Berber village of Tinzert. Arrive where you will be welcomed with warm Berber hospitality. Enjoy a traditional meal as you settle into the village's gentle pace.\nMeals included: Lunch, Dinner\nAccommodation included: Berber guest house in Tinzert\n\nDay 2: Crossing the Spectacular Tizi n Mzik Pass\nEmbark on a challenging yet rewarding trek across the Tizi n Mzik pass (2489 meters). Marvel at views of the Azzaden Valley. Descend to explore the vibrant village of Ait Aissa, renowned for its welcoming residents. Spend the night enjoying local delicacies.\nMeals included: Breakfast, Lunch, Dinner\nAccommodation included: Berber guest house in Ait Aissa\n\nDay 3: Embracing Berber Culture in Azzaden Valley\nImmerse yourself in daily life of the Azzaden Valley, visiting local homes. As you trek through the valley, take in the stunning scenery, with its dramatic red cliffs and lush green terraces. Conclude your adventure with a return trek to Ouirgane and transport back to Marrakech.\nMeals included: Breakfast, Lunch\nAccommodation included: None",
    "highlights": [
      "Trek in Ouirgane National Park",
      "Cross Tizi n Mzik pass (2489m)",
      "Stay in authentic Berber guest houses",
      "Cultural immersion in Azzaden Valley"
    ],
    "included": [
      "Transportation from/to Marrakech",
      "Berber guest house accommodation",
      "All meals during trek",
      "Guide"
    ],
    "location": "https://www.google.com/maps/place/Marrakesh"
  },
  {
    "id": "f15f6823-262b-4cd5-9248-06b9ecb27d10",
    "title": "Big Tour Around Toubkal (12 Days)",
    "category": "multi-day",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768320928910-vgy8s.JPG",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768320928910-vgy8s.JPG",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768320929523-wyh4pe.jpg"
    ],
    "duration": "12 days",
    "groupSize": "Max 20 travelers",
    "price": "1500.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Comprehensive 12-day trekking adventure around Mount Toubkal.\nHighlights include:\nDay 1: Arrival Marrakech\nDay 2: Trek to Tacheddirt\nDay 3: Tizi n'Tamatert Pass & Amsouzart\nDay 4: Lac d'Ifni\nDay 5: Tizi n'Ouanoums Pass & Toubkal Base\nDay 6: Summit Mount Toubkal (4167m)\nDay 7: Rest day in Imlil\nDay 8: Trek to Aremd\nDay 9: Tizi n'Tzikert Pass & Tizi Oussem\nDay 10: Azib Tamsoult\nDay 11: Descend to Imlil\nDay 12: Return to Marrakech\nIncludes almost all meals and accommodation in camps/guest houses.",
    "highlights": [
      "Summit Mount Toubkal (4167m)",
      "Lac d'Ifni & Tizi n'Ouanoums Pass",
      "Deep Atlas valleys exploration",
      "Comprehensive 12-day itinerary"
    ],
    "included": [
      "Accommodation (Guest houses/Camps)",
      "Meals (Breakfast, Lunch, Dinner mostly)",
      "Professional Guide",
      "Muleteers & Cook"
    ],
    "location": "https://www.google.com/maps/place/Marrakesh"
  },
  {
    "id": "b1850a0e-e732-4000-b187-bfac56782a28",
    "title": "Mount Toubkal Trek & Sahara Desert Trip (5 Days)",
    "category": "multi-day",
    "image": "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768321388365-vtkrdg.JPG",
    "images": [
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768321388365-vtkrdg.JPG",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768321388988-t4mcxi.JPG",
      "https://pccjdwxoeutgwqhmekfe.supabase.co/storage/v1/object/public/agency-images/7a6af9a7-5949-4150-a269-05a8a323e0fc/1768321470786-ieeaml.JPG"
    ],
    "duration": "5 days",
    "groupSize": "Max 13 travelers",
    "price": "650.00 USD",
    "rating": 5,
    "reviews": 0,
    "description": "Day 1: Ascend to the Atlas\nScenic drive from Marrakech to Imlil. Trek through lush valleys and villages. Overnight in mountain refuge. \nDay 2: Conquer Mount Toubkal\nSummit North Africa's highest peak (4167m). Return to Imlil. \nDay 3: From Peaks to Palms\nDrive to Sahara Desert via Ait Ben Haddou and Dades Gorge.\nDay 4: Journey Through Gorges and Dunes\nVisit Todra Gorge. Camel trek into Merzouga dunes. Night in desert camp.\nDay 5: Sunrise and Return\nDesert sunrise, camel ride back, and return drive to Marrakech.",
    "highlights": [
      "Summit Mount Toubkal",
      "Sahara Desert Camel Trek",
      "Ait Ben Haddou & Todra Gorge",
      "Mountain Refuge & Desert Camp"
    ],
    "included": [
      "Transport",
      "Accommodation",
      "Meals (Breakfast, Dinner + some lunches)",
      "Guide",
      "Camel ride"
    ],
    "location": "https://www.google.com/maps/place/Marrakesh"
  },
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
