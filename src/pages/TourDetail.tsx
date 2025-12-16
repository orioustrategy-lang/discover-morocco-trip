import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Users, MapPin, Star, Check, X, Plus, Minus, ChevronLeft, ChevronRight, ArrowLeft, Calendar, Shield, Heart, Share2 } from "lucide-react";
import { getTourById, tours } from "@/data/tours";
import TourCard from "@/components/TourCard";

const TourDetail = () => {
  const { id } = useParams();
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
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

  useEffect(() => {
    if (displayImages.length <= 1 || showAllImages) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [displayImages.length, showAllImages]);

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
          label = tier.min === tier.max ? `${tier.min} person` : `${tier.min}-${tier.max} people`;
        } else {
          label = `${tier.min}+ people`;
        }
        return { label, price: tier.price };
      });
    } else {
      const match = tour.price.match(/(\d+)/);
      const basePrice = match ? parseInt(match[1]) : 50;
      return [
        { label: '1 person', price: Math.round(basePrice * 1.5) },
        { label: '2 people', price: basePrice },
        { label: '3-4 people', price: Math.round(basePrice * 0.9) },
        { label: '5-7 people', price: Math.round(basePrice * 0.8) },
        { label: '8+ people', price: Math.round(basePrice * 0.7) },
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

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: tour.title,
        text: tour.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const incrementPeople = () => setNumberOfPeople(prev => Math.min(prev + 1, 20));
  const decrementPeople = () => setNumberOfPeople(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/tours" className="hover:text-primary transition-colors">Tours</Link>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{tour.title}</span>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 mb-6">
        <Link 
          to="/tours"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tours</span>
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 lg:px-8 mb-8">
        <div 
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-muted"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl">🏔</span>
            </div>
          )}
          
          {/* Navigation arrows */}
          {displayImages.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-lg transition-all z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % displayImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-lg transition-all z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-full shadow-lg transition-all ${
                isLiked ? "bg-red-500 text-white" : "bg-white/90 text-foreground hover:bg-white"
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-3 rounded-full bg-white/90 text-foreground hover:bg-white shadow-lg transition-all"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title and Meta */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{tour.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                {tour.rating && tour.reviews && (
                  <div className="flex items-center gap-1.5 text-foreground">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Morocco</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4 font-serif">About This Tour</h2>
              <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-semibold mb-4 font-serif">Highlights</h2>
              <ul className="grid gap-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 font-serif">What's Included</h2>
                <ul className="space-y-3">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {tour.notIncluded && tour.notIncluded.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 font-serif">Not Included</h2>
                  <ul className="space-y-3">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing Tiers */}
            <div>
              <h2 className="text-xl font-semibold mb-4 font-serif">Group Pricing</h2>
              <div className="bg-muted/50 rounded-2xl p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {pricingTiers.map((tier, index) => (
                    <div key={index} className="text-center p-3 rounded-xl bg-background">
                      <p className="text-sm text-muted-foreground mb-1">{tier.label}</p>
                      <p className="text-lg font-bold text-primary">€{tier.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-2xl border border-border/50 p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-primary">€{pricePerPerson}</span>
                  <span className="text-muted-foreground"> / person</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-semibold text-sm">{tour.rating}</span>
                </div>
              </div>
              
              {/* People selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Number of Travelers</label>
                <div className="flex items-center justify-between bg-muted/50 rounded-xl p-2">
                  <button
                    onClick={decrementPeople}
                    disabled={numberOfPeople <= 1}
                    className="w-10 h-10 rounded-lg bg-background flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="text-center">
                    <span className="text-2xl font-bold">{numberOfPeople}</span>
                    <span className="text-muted-foreground text-sm ml-1">people</span>
                  </div>
                  <button
                    onClick={incrementPeople}
                    disabled={numberOfPeople >= 20}
                    className="w-10 h-10 rounded-lg bg-background flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex items-center justify-between py-4 border-t border-b border-border mb-6">
                <span className="font-medium">Total Price</span>
                <span className="text-2xl font-bold text-primary">€{totalPrice}</span>
              </div>
              
              {/* Book Button */}
              <Button 
                onClick={handleWhatsApp}
                className="w-full h-12 rounded-xl gap-2 text-base"
                size="lg"
              >
                <Phone className="h-5 w-5" />
                Book via WhatsApp
              </Button>
              
              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Free cancellation up to 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Flexible booking dates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 font-serif">You Might Also Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((relatedTour) => (
                <TourCard key={relatedTour.id} {...relatedTour} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TourDetail;
