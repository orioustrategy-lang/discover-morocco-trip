import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Star, ArrowRight, Quote } from "lucide-react";
import TourCard from "@/components/TourCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrendingDestinations from "@/components/TrendingDestinations";
import CustomTravelSection from "@/components/CustomTravelSection";
import TravelCategories from "@/components/TravelCategories";
import Newsletter from "@/components/Newsletter";
import SearchBar from "@/components/SearchBar";
import { tours } from "@/data/tours";
// Video paths
const heroVideos = [
  "/videos/1224 (1)(1).mp4",
  "/videos/hero-casablanca.mp4",
  "/videos/hero-intro.mp4",
  "/videos/hero-marrakech.mp4",
  "/videos/hero-rabat.mp4",
  "/videos/rabat.mp4"
];

const Index = () => {
  const [currentVideo, setCurrentVideo] = useState(heroVideos[0]);

  useEffect(() => {
    // Randomly select a video on mount
    const randomVideo = heroVideos[Math.floor(Math.random() * heroVideos.length)];
    setCurrentVideo(randomVideo);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/212623956727?text=Hello, I'm interested in your Morocco tours!", "_blank");
  };

  const featuredTours = [
    tours.find(t => t.id === "4-day-imperial-cities"),
    tours.find(t => t.id === "5-day-desert-atlantic"),
    tours.find(t => t.id === "fes-cultural-immersion"),
    tours.find(t => t.id === "merzouga-luxury-camp"),
    tours.find(t => t.id === "atlas-mountains-trek"),
    tours.find(t => t.id === "essaouira-coastal-day"),
  ].filter(Boolean).slice(0, 6);

  const testimonials = [
    {
      name: "James Wilson",
      location: "London, UK",
      text: "The Imperial Cities tour completely changed how I see travel. Every detail was perfect, from the riads to the guides. An absolute masterpiece of a journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
    },
    {
      name: "Anna Bergström",
      location: "Stockholm, Sweden",
      text: "Five days from desert to coast - I've never experienced anything like it. Waking up to sunrise over the dunes was worth the entire trip.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    },
    {
      name: "Marco Rossi",
      location: "Milan, Italy",
      text: "Summiting Toubkal was a dream come true. The team's expertise and care made what could be challenging into pure adventure.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Atlas Voyages Style */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video */}
        {/* Background Video */}
        <div className="absolute inset-0 bg-black">
          <AnimatePresence mode="popLayout">
            <motion.video
              key={currentVideo}
              src={currentVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => {
                // Play next video in sequence
                const currentIndex = heroVideos.indexOf(currentVideo);
                const nextIndex = (currentIndex + 1) % heroVideos.length;
                setCurrentVideo(heroVideos[nextIndex]);
              }}
              poster="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1920&q=80"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-left mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-none drop-shadow-lg font-serif italic tracking-tighter">
              Des voyages signature
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-light italic opacity-90">
              depuis 1994
            </p>
          </motion.div>

          {/* Tabs */}
          <SearchBar />
        </div>
      </section >

      {/* 30+ Years of Luxury (About Us) */}
      < motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80"
                alt="Morocco Experience"
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </div>
            <div>
              <p className="text-primary font-medium uppercase tracking-wide mb-4">About Us</p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mb-6 leading-tight">
                30+ Years of Luxury Travel Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Since our establishment in 1994, we have built a strong reputation for delivering refined and high-quality travel experiences, driven by a genuine passion for exploration and a deep commitment to our guests.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each experience is thoughtfully crafted to reflect the unique preferences of our travelers, while ensuring authenticity, comfort, and lasting memories. Our approach to luxury is defined by attention to detail, privacy, and elegant simplicity—creating meaningful and unforgettable moments.
              </p>
              <Link to="/tours">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8">
                  Explore Our Tours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section >

      {/* Why Choose Us */}
      < motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <WhyChooseUs />
      </motion.div >

      {/* Trending Destinations */}
      < motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <TrendingDestinations />
      </motion.div >

      {/* Featured Tours */}
      < section className="py-16 md:py-24 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wide mb-4">Our Selection</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
              Popular Journeys
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked adventures designed to immerse you in Morocco's rich culture and breathtaking landscapes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredTours.map((tour) => (
              tour && <TourCard key={tour.id} {...tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tours">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg px-10">
                View All Tours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Custom Travel Section */}
      < CustomTravelSection />

      {/* Travel Categories */}
      < TravelCategories />

      {/* Testimonials */}
      < section className="py-16 md:py-24" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wide mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Stories from Our Travelers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <Quote className="h-10 w-10 text-primary/20 mb-6" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Newsletter */}
      < Newsletter />

      {/* CTA */}
      < section className="relative py-24 md:py-32" >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80"
            alt="Morocco Desert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Ready to Discover Morocco?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let us craft your perfect Moroccan adventure. Contact us today for a personalized itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold"
              >
                Contact Form
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Index;
