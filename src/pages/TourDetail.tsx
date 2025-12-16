import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Users, MapPin, Star, Check, X, Plus, Minus, ChevronLeft, ChevronRight, ArrowLeft, Shield, ArrowRight } from "lucide-react";
import { getTourById, tours } from "@/data/tours";
import TourCard from "@/components/TourCard";

const TourDetail = () => {
  const { id } = useParams();
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);
  
  const tour = getTourById(id || "");
  
  if (!tour) {
    return <Navigate to="/tours" replace />;
  }

  const displayImages = tour.images && tour.images.length > 0 ? tour.images : (tour.image ? [tour.image] : []);
  const hasImages = displayImages.length > 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
      } else {
        setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
      }
    }
  };

  const relatedTours = tours
    .filter(t => t.category === tour.category && t.id !== tour.id)
    .slice(0, 3);

  const getPricePerPerson = (people: number) => {
    if (tour.priceTiers && tour.priceTiers.length > 0) {
      for (const tier of tour.priceTiers) {
        if (tier.max !== undefined) {
          if (people >= tier.min && people <= tier.max) {
            return tier.price;
          }
        } else {
          if (people >= tier.min) {
            return tier.price;
          }
        }
      }
      return tour.priceTiers[tour.priceTiers.length - 1].price;
    } else {
      const match = tour.price.match(/(\d+)/);
      const basePrice = match ? parseInt(match[1]) : 50;
      
      if (people === 1) return basePrice * 1.5;
      if (people === 2) return basePrice;
      if (people >= 3 && people <= 4) return basePrice * 0.9;
      if (people >= 5 && people <= 7) return basePrice * 0.8;
      if (people >= 8) return basePrice * 0.7;
      return basePrice;
    }
  };

  const pricePerPerson = Math.round(getPricePerPerson(numberOfPeople));
  const totalPrice = pricePerPerson * numberOfPeople;
  
  const getPricingTiersDisplay = () => {
    if (tour.priceTiers && tour.priceTiers.length > 0) {
      return tour.priceTiers.map(tier => {
        let label = '';
        if (tier.max !== undefined) {
          label = tier.min === tier.max ? `${tier.min}` : `${tier.min}-${tier.max}`;
        } else {
          label = `${tier.min}+`;
        }
        return { label, price: tier.price };
      });
    } else {
      const match = tour.price.match(/(\d+)/);
      const basePrice = match ? parseInt(match[1]) : 50;
      return [
        { label: '1', price: Math.round(basePrice * 1.5) },
        { label: '2', price: basePrice },
        { label: '3-4', price: Math.round(basePrice * 0.9) },
        { label: '5-7', price: Math.round(basePrice * 0.8) },
        { label: '8+', price: Math.round(basePrice * 0.7) },
      ];
    }
  };

  const pricingTiers = getPricingTiersDisplay();

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/212600000000?text=Hello, I'm interested in the tour: ${tour.title} for ${numberOfPeople} people (€${totalPrice} total)`,
      "_blank"
    );
  };

  const incrementPeople = () => setNumberOfPeople(prev => Math.min(prev + 1, 20));
  const decrementPeople = () => setNumberOfPeople(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Image */}
      <section className="relative h-[60vh] lg:h-[70vh]">
        <div 
          className="absolute inset-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {hasImages ? (
            <>
              {displayImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${tour.title} - Image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-8xl">🏔</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        {/* Back Button */}
        <Link 
          to="/tours"
          className="absolute top-28 left-8 lg:left-16 z-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Back to Tours</span>
        </Link>
        
        {/* Image Navigation */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 backdrop-blur-sm transition-all z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % displayImages.length)}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 backdrop-blur-sm transition-all z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {displayImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 transition-all ${
                    index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary text-white text-sm font-medium uppercase tracking-wider">
                {tour.category}
              </span>
              {tour.rating && (
                <div className="flex items-center gap-1 text-white">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{tour.rating}</span>
                  <span className="text-white/70">({tour.reviews} reviews)</span>
                </div>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              {tour.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold text-gray-900">{tour.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Group Size</div>
                  <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900">Morocco</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">About This Journey</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-100">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Not Included */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {tour.notIncluded && tour.notIncluded.length > 0 && (
                <div className="bg-white border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 font-serif mb-6">Not Included</h3>
                  <ul className="space-y-4">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing Table */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Group Pricing</h2>
              <div className="bg-white border border-gray-100 p-6">
                <div className="grid grid-cols-5 gap-4">
                  {pricingTiers.map((tier, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm text-gray-500 mb-2">{tier.label} pax</div>
                      <div className="text-xl font-bold text-primary">€{tier.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-gray-200 p-8">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">From</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">€{pricePerPerson}</span>
                  <span className="text-gray-500">/ person</span>
                </div>
              </div>
              
              {/* People Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Travelers</label>
                <div className="flex items-center justify-between border border-gray-200 p-3">
                  <button
                    onClick={decrementPeople}
                    disabled={numberOfPeople <= 1}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-2xl font-bold">{numberOfPeople}</span>
                  <button
                    onClick={incrementPeople}
                    disabled={numberOfPeople >= 20}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 mb-6">
                <span className="font-medium text-gray-700">Total</span>
                <span className="text-2xl font-bold text-gray-900">€{totalPrice}</span>
              </div>
              
              {/* Book Button */}
              <Button 
                onClick={handleWhatsApp}
                className="w-full h-14 rounded-none bg-primary hover:bg-primary/90 text-base"
                size="lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Book Now
              </Button>
              
              {/* Trust */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Free cancellation up to 48h</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Instant confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 lg:px-16 py-16 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Similar Journeys</h2>
            <Link to="/tours" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTours.map((relatedTour) => (
              <TourCard key={relatedTour.id} {...relatedTour} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TourDetail;
