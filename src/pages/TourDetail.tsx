import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Users, MapPin, Check, X, Plus, Minus, Shield, ArrowRight } from "lucide-react";
import { getTourById, tours } from "@/data/tours";
import TourCard from "@/components/TourCard";

const TourDetail = () => {
  const { id } = useParams();
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  const tour = getTourById(id || "");

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
      `https://wa.me/212623956727?text=Hello, I'm interested in the tour: ${tour.title} for ${numberOfPeople} people (€${totalPrice} total)`,
      "_blank"
    );
  };

  const incrementPeople = () => setNumberOfPeople(prev => Math.min(prev + 1, 20));
  const decrementPeople = () => setNumberOfPeople(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Image */}
      <section className="relative h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0">
          {hasImages ? (
            <img
              src={displayImages[currentImageIndex]}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-4 uppercase tracking-tighter">
              {tour.title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
        </div>
      </section>

      {/* Info Bar - Atlas Voyages Style */}
      <div className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-wrap justify-between items-center gap-8">
          <div className="flex gap-12">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Durée</div>
              <div className="text-sm font-bold uppercase">{tour.duration}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Catégorie</div>
              <div className="text-sm font-bold uppercase">{tour.category}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Participants</div>
              <div className="text-sm font-bold uppercase">{tour.groupSize}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">À partir de</div>
            <div className="text-2xl font-bold text-primary">{tour.price}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500">Duration</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{tour.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500">Group Size</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{tour.groupSize}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Morocco</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-serif mb-3 sm:mb-4">About This Journey</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white border border-gray-100">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Not Included */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-white border border-gray-100 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">What's Included</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tour.notIncluded && tour.notIncluded.length > 0 && (
                <div className="bg-white border border-gray-100 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">Not Included</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing Table */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">Group Pricing</h2>
              <div className="bg-white border border-gray-100 p-4 sm:p-6 overflow-x-auto">
                <div className="grid grid-cols-5 gap-2 sm:gap-4 min-w-[280px]">
                  {pricingTiers.map((tier, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{tier.label} pax</div>
                      <div className="text-base sm:text-xl font-bold text-primary">€{tier.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 sm:top-28 bg-white border border-gray-200 p-5 sm:p-8">
              <div className="mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-1">From</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">€{pricePerPerson}</span>
                  <span className="text-gray-500 text-sm sm:text-base">/ person</span>
                </div>
              </div>

              {/* People Selector */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Travelers</label>
                <div className="flex items-center justify-between border border-gray-200 p-2 sm:p-3">
                  <button
                    onClick={decrementPeople}
                    disabled={numberOfPeople <= 1}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30"
                  >
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  <span className="text-xl sm:text-2xl font-bold">{numberOfPeople}</span>
                  <button
                    onClick={incrementPeople}
                    disabled={numberOfPeople >= 20}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30"
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between py-3 sm:py-4 border-t border-b border-gray-200 mb-4 sm:mb-6">
                <span className="font-medium text-gray-700 text-sm sm:text-base">Total</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">€{totalPrice}</span>
              </div>

              {/* Book Button */}
              <Button
                onClick={handleWhatsApp}
                className="w-full h-12 sm:h-14 rounded-none bg-primary hover:bg-primary/90 text-sm sm:text-base"
                size="lg"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Book Now
              </Button>

              {/* Trust */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                  <span>Free cancellation up to 48h</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                  <span>Instant confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">Similar Journeys</h2>
            <Link to="/tours" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm sm:text-base">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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
