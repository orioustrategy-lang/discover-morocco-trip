import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, Users, Shield, Clock, Award, ArrowRight, MapPin, Compass, Mountain, Sun, Tent } from "lucide-react";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/212600000000?text=Hello, I'm interested in your Morocco tours!", "_blank");
  };

  // Get featured tours
  const featuredTours = [
    tours.find(t => t.id === "3-day-sahara-desert"),
    tours.find(t => t.id === "atlas-mountains-valleys"),
    tours.find(t => t.id === "agafay-desert-sunset"),
    tours.find(t => t.id === "essaouira-day-trip"),
    tours.find(t => t.id === "marrakech-city-tour"),
    tours.find(t => t.id === "5-day-imperial-cities"),
  ].filter(Boolean).slice(0, 6);

  const reviews = [
    {
      name: "Emily Thompson",
      country: "Canada",
      rating: 5,
      text: "The Sahara desert tour was absolutely magical! Sleeping under the stars in the desert camp was a once-in-a-lifetime experience.",
      tour: "3-Day Sahara Desert",
      avatar: "E",
    },
    {
      name: "Thomas Mueller",
      country: "Germany",
      rating: 5,
      text: "Professional team, excellent organization. The Atlas Mountains trip exceeded all expectations. Highly recommended!",
      tour: "Atlas Mountains Tour",
      avatar: "T",
    },
    {
      name: "Sophie Laurent",
      country: "France",
      rating: 5,
      text: "An authentic Moroccan experience! Our guide was knowledgeable and passionate. The cooking class was a highlight.",
      tour: "Cooking Class",
      avatar: "S",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Local Guides",
      description: "Born and raised in Morocco, our guides share authentic stories and hidden gems.",
    },
    {
      icon: Shield,
      title: "Best Price Guarantee",
      description: "Competitive rates with no hidden costs. Full transparency in all our pricing.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available on WhatsApp for your questions and assistance.",
    },
    {
      icon: Award,
      title: "Top Rated Tours",
      description: "Excellent reviews on TripAdvisor and Google from happy travelers worldwide.",
    },
  ];

  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "15K+", label: "Happy Travelers" },
    { value: "60+", label: "Unique Tours" },
    { value: "4.9", label: "Average Rating" },
  ];

  const categories = [
    { icon: Tent, title: "Desert Tours", description: "Sahara adventures & camping", link: "/tours?category=desert" },
    { icon: Mountain, title: "Day Trips", description: "Mountains, valleys & waterfalls", link: "/tours?category=day-trip" },
    { icon: Sun, title: "Activities", description: "Quad biking, balloons & more", link: "/tours?category=activity" },
    { icon: Compass, title: "Multi-Day", description: "Complete Morocco discovery", link: "/tours?category=multi-day" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920"
            alt="Morocco Desert"
            className="w-full h-full object-cover scale-110 animate-[scale_20s_ease-in-out_infinite_alternate]"
            style={{ animation: 'scale 20s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/25 rounded-full blur-[120px] animate-float-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        
        {/* Moroccan Pattern Overlay */}
        <div className="absolute inset-0 moroccan-pattern opacity-20" />
        
        <div className="relative z-10 w-full px-4 py-32 animate-fade-in">
          <div className="container mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark text-white/90 text-sm mb-8 animate-slide-down">
              <Compass className="h-4 w-4 text-accent animate-pulse" />
              <span className="tracking-wider">Authentic Moroccan Adventures</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1] font-serif text-shadow-hero">
              Discover the <br />
              <span className="text-gradient-gold">Soul of Morocco</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Unforgettable journeys through ancient cities, endless deserts, and majestic mountains. 
              Your Moroccan adventure starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/tours">
                <Button size="lg" className="gap-2 h-14 px-10 text-base rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 btn-shine bg-gradient-to-r from-primary to-primary/90">
                  Explore Tours
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWhatsApp} 
                className="gap-2 h-14 px-10 text-base rounded-full glass-dark border-white/20 text-white hover:bg-white hover:text-foreground hover:border-white transition-all duration-500"
              >
                <Phone className="h-5 w-5" />
                Book via WhatsApp
              </Button>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl glass-dark hover:bg-white/10 transition-all duration-500 group cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{stat.value}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-7 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gradient-to-b from-accent to-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-radial" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4 tracking-widest uppercase text-sm">
              <span className="w-8 h-px bg-primary/50" />
              Explore
              <span className="w-8 h-px bg-primary/50" />
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Choose Your <span className="text-gradient">Adventure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From desert camping to mountain trekking, we offer experiences for every type of traveler.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <Link 
                key={index} 
                to={cat.link}
                className="group p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl card-glow relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <cat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-serif group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
                  
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-gradient-sand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="inline-flex items-center gap-2 text-primary font-medium mb-4 tracking-widest uppercase text-sm">
                <span className="w-8 h-px bg-primary/50" />
                About Us
                <span className="w-8 h-px bg-primary/50" />
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif">
                Your Gateway to <br />
                <span className="text-gradient">Authentic Morocco</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">Discover Morocco Trip</strong> is your trusted partner for unforgettable Moroccan adventures. With over 8 years of experience, we specialize in creating personalized journeys that showcase the true essence of Morocco.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of passionate local guides brings deep cultural knowledge and authentic experiences to every tour. From the golden dunes of the Sahara to the vibrant streets of Marrakech, we'll help you discover Morocco's hidden treasures.
              </p>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-5 py-3 bg-background rounded-full border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Licensed Operator</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-background rounded-full border border-border/50 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-default">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="text-sm font-medium">Top Rated</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-background rounded-full border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Local Experts</span>
                </div>
              </div>
              
              <Button onClick={handleWhatsApp} size="lg" className="gap-2 rounded-full h-14 px-8 btn-shine bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="h-5 w-5" />
                Start Planning Your Trip
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group img-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=800" 
                  alt="Morocco Adventure" 
                  className="w-full h-[500px] object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-[2rem] -z-10" />
              <div className="absolute -inset-8 border border-accent/10 rounded-[2.5rem] -z-10" />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-2xl border border-border/50 max-w-[280px] backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center text-sm font-semibold shadow-md">E</div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/80 text-foreground flex items-center justify-center text-sm font-semibold shadow-md">T</div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-foreground flex items-center justify-center text-sm font-semibold shadow-md">S</div>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-foreground">15,000+</span>
                    <span className="text-muted-foreground"> happy travelers</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-accent text-accent drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">Average rating from our guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-28 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-medium mb-4 tracking-widest uppercase text-sm">
                <span className="w-8 h-px bg-primary/50" />
                Featured Tours
                <span className="w-8 h-px bg-primary/50" />
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                Most Popular <span className="text-gradient">Experiences</span>
              </h2>
            </div>
            <Link to="/tours">
              <Button variant="outline" className="gap-2 rounded-full h-12 px-6 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group">
                View All Tours
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              tour && (
                <div 
                  key={tour.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <TourCard {...tour} />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 moroccan-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-white/80 font-medium mb-4 tracking-widest uppercase text-sm">
              <span className="w-8 h-px bg-white/30" />
              Why Choose Us
              <span className="w-8 h-px bg-white/30" />
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Excellence in Every Journey
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              We're committed to providing exceptional experiences that create lasting memories.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-serif">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4 tracking-widest uppercase text-sm">
              <span className="w-8 h-px bg-primary/50" />
              Testimonials
              <span className="w-8 h-px bg-primary/50" />
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
              What Our <span className="text-gradient">Travelers Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 text-8xl font-serif text-primary/5 group-hover:text-primary/10 transition-colors duration-500">"</div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center text-xl font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute inset-0 moroccan-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-8">
                <Compass className="h-4 w-4 animate-pulse" />
                <span className="tracking-wider">Start Your Journey Today</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-shadow-hero">
                Ready for Your Moroccan Adventure?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Contact us today and let's plan your perfect trip to Morocco. 
                Custom itineraries available for any budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg" 
                  className="gap-2 bg-white text-primary hover:bg-white/95 rounded-full h-16 px-10 text-base font-semibold shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="gap-2 border-2 border-white text-white hover:bg-white hover:text-primary rounded-full h-16 px-10 text-base font-semibold transition-all duration-300 group"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
