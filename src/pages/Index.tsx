import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, Users, Shield, Clock, Award, ArrowRight, Quote } from "lucide-react";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

const Index = () => {
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

  const destinations = [
    { name: "Fes", image: "https://images.unsplash.com/photo-1548017871-6bc6dd93ea9a?w=600&q=80", tours: 8 },
    { name: "Sahara Desert", image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=600&q=80", tours: 12 },
    { name: "Chefchaouen", image: "https://images.unsplash.com/photo-1560095633-6803d6f4de2c?w=600&q=80", tours: 5 },
    { name: "Atlas Mountains", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80", tours: 7 },
    { name: "Essaouira", image: "https://images.unsplash.com/photo-1528657249085-893fe000cbe5?w=600&q=80", tours: 4 },
    { name: "Marrakech", image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80", tours: 10 },
  ];

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
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero - Split Design */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 xl:px-24 py-24 sm:py-32 lg:py-20 order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-px w-8 sm:w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-xs sm:text-sm uppercase">Welcome to Morocco</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-[1.1] font-serif">
              Where Ancient
              <span className="block text-primary">Meets Adventure</span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              Curated journeys through imperial cities, golden deserts, and mountain peaks. 
              Experience Morocco beyond the ordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
              <Link to="/tours" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-none bg-primary hover:bg-primary/90">
                  View All Journeys
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-none border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Get in Touch
              </Button>
            </div>
            
            {/* Mini Stats */}
            <div className="flex items-center justify-between sm:justify-start sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">10+</div>
                <div className="text-xs sm:text-sm text-gray-500">Years</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-gray-200" />
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">20K+</div>
                <div className="text-xs sm:text-sm text-gray-500">Travelers</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-gray-200" />
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-xs sm:text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative order-1 lg:order-2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1548017871-6bc6dd93ea9a?w=1200&q=80"
            alt="Morocco Architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#faf9f7] lg:via-transparent lg:to-transparent" />
          
          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-12 lg:left-12 lg:right-auto lg:max-w-xs bg-white p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border-2 border-white" />
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-semibold">500+</span> travelers this month
              </div>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <span className="text-primary font-medium tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Destinations</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
                Explore Morocco's Treasures
              </h2>
            </div>
            <Link to="/tours" className="text-primary font-medium flex items-center gap-2 hover:gap-4 transition-all text-sm sm:text-base">
              View all destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {destinations.map((dest, index) => (
              <Link 
                key={dest.name}
                to={`/tours?search=${dest.name}`}
                className={`group relative overflow-hidden ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                style={{ aspectRatio: index === 0 ? '1' : '4/3' }}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                  <h3 className={`font-serif font-bold text-white mb-1 ${index === 0 ? 'text-xl sm:text-3xl' : 'text-base sm:text-xl'}`}>
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm">{dest.tours} experiences</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-medium tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Curated Experiences</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-3 sm:mb-4">
              Popular Journeys
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Hand-picked adventures designed to immerse you in Morocco's rich culture and breathtaking landscapes.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {featuredTours.map((tour) => (
              tour && <TourCard key={tour.id} {...tour} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/tours" className="inline-block w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-none border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-sm sm:text-base">
                Explore All Tours
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <span className="text-primary font-medium tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Why Choose Us</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 sm:mb-6">
                Travel with the Experts
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
                We're not just tour operators – we're storytellers, culture enthusiasts, and adventure seekers who call Morocco home.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Users, title: "Local Expertise", desc: "Guides born and raised in Morocco" },
                  { icon: Shield, title: "Trusted & Safe", desc: "Licensed operator with 24/7 support" },
                  { icon: Award, title: "Award Winning", desc: "Top-rated on TripAdvisor & Google" },
                  { icon: Clock, title: "Flexible Booking", desc: "Free cancellation up to 48 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=800&q=80"
                alt="Morocco Guide"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-primary p-4 sm:p-8 text-white max-w-[200px] sm:max-w-xs hidden md:block">
                <div className="text-2xl sm:text-4xl font-bold mb-2">10+</div>
                <div className="text-xs sm:text-sm opacity-80">Years of creating unforgettable memories across Morocco</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-medium tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Testimonials</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              Stories from Our Travelers
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-5 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/20 mb-4 sm:mb-6" />
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 px-5 sm:px-8">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920&q=80"
            alt="Morocco Desert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6">
            Ready to Discover Morocco?
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10">
            Let us craft your perfect Moroccan adventure. Contact us today for a personalized itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 text-sm sm:text-base rounded-none bg-primary hover:bg-primary/90"
            >
              <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              WhatsApp Us
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 text-sm sm:text-base rounded-none border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Contact Form
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
