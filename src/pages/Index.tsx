import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, Users, Shield, Clock, Award, ArrowRight, Quote } from "lucide-react";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/212600000000?text=Hello, I'm interested in your Morocco tours!", "_blank");
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
    { name: "Fes", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600", tours: 8 },
    { name: "Sahara Desert", image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600", tours: 12 },
    { name: "Chefchaouen", image: "https://images.unsplash.com/photo-1553522991-71439aa49cc4?w=600", tours: 5 },
    { name: "Atlas Mountains", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600", tours: 7 },
    { name: "Essaouira", image: "https://images.unsplash.com/photo-1507501336603-6e31db2be093?w=600", tours: 4 },
    { name: "Rabat", image: "https://images.unsplash.com/photo-1570303278224-4c4e7a5b1d3f?w=600", tours: 3 },
  ];

  const testimonials = [
    {
      name: "James Wilson",
      location: "London, UK",
      text: "The Imperial Cities tour completely changed how I see travel. Every detail was perfect, from the riads to the guides. An absolute masterpiece of a journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      name: "Anna Bergström",
      location: "Stockholm, Sweden", 
      text: "Five days from desert to coast - I've never experienced anything like it. Waking up to sunrise over the dunes was worth the entire trip.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    },
    {
      name: "Marco Rossi",
      location: "Milan, Italy",
      text: "Summiting Toubkal was a dream come true. The team's expertise and care made what could be challenging into pure adventure.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero - Split Design */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-32 lg:py-20 order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">Welcome to Morocco</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] font-serif">
              Where Ancient
              <span className="block text-primary">Meets Adventure</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Curated journeys through imperial cities, golden deserts, and mountain peaks. 
              Experience Morocco beyond the ordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/tours">
                <Button size="lg" className="h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90">
                  View All Journeys
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWhatsApp}
                className="h-14 px-8 text-base rounded-none border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
            
            {/* Mini Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">20K+</div>
                <div className="text-sm text-gray-500">Travelers</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200"
            alt="Morocco Architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#faf9f7] lg:via-transparent lg:to-transparent" />
          
          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto lg:max-w-xs bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">500+</span> travelers this month
              </div>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">Destinations</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
                Explore Morocco's Treasures
              </h2>
            </div>
            <Link to="/tours" className="text-primary font-medium flex items-center gap-2 hover:gap-4 transition-all">
              View all destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-serif font-bold text-white mb-1 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-sm">{dest.tours} experiences</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">Curated Experiences</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
              Popular Journeys
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked adventures designed to immerse you in Morocco's rich culture and breathtaking landscapes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              tour && <TourCard key={tour.id} {...tour} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/tours">
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-none border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                Explore All Tours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                Travel with the Experts
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We're not just tour operators – we're storytellers, culture enthusiasts, and adventure seekers who call Morocco home.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Users, title: "Local Expertise", desc: "Guides born and raised in Morocco" },
                  { icon: Shield, title: "Trusted & Safe", desc: "Licensed operator with 24/7 support" },
                  { icon: Award, title: "Award Winning", desc: "Top-rated on TripAdvisor & Google" },
                  { icon: Clock, title: "Flexible Booking", desc: "Free cancellation up to 48 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=800"
                alt="Morocco Guide"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 text-white max-w-xs hidden lg:block">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-80">Years of creating unforgettable memories across Morocco</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              Stories from Our Travelers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-8">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920"
            alt="Morocco Desert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Ready to Discover Morocco?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Let us craft your perfect Moroccan adventure. Contact us today for a personalized itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="h-14 px-10 text-base rounded-none bg-primary hover:bg-primary/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-10 text-base rounded-none border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Contact Form
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
