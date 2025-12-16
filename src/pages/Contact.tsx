import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/212623956727?text=Hello, I have a question about your tours!", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero - Split Layout */}
      <section className="min-h-[50vh] sm:min-h-[60vh] grid lg:grid-cols-2">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 xl:px-24 py-24 sm:py-32 lg:py-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-xs sm:text-sm uppercase">Contact Us</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">
              Let's Plan Your
              <span className="block text-primary">Adventure</span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              Ready to explore Morocco? Reach out and we'll help craft your perfect journey.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-3 sm:space-y-4">
              <a href="tel:+212623956727" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-gray-200 hover:border-primary transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500">Call us</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">+212 623-956727</div>
                </div>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 ml-auto group-hover:text-primary transition-colors" />
              </a>
              
              <a href="mailto:contact@discovermoroccotrip.com" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-gray-200 hover:border-primary transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm text-gray-500">Email us</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">contact@discovermoroccotrip.com</div>
                </div>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right - Image */}
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1548017871-6bc6dd93ea9a?w=1200&q=80"
            alt="Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-transparent to-transparent" />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-gray-900 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">Prefer WhatsApp?</h3>
                <p className="text-gray-400 text-sm sm:text-base">Get instant responses – we're online daily from 8AM to 9PM</p>
              </div>
            </div>
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-none bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Start Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Form */}
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">Send a Message</span>
              <h2 className="text-4xl font-bold text-gray-900 font-serif mb-6">
                Tell Us About Your Trip
              </h2>
              <p className="text-gray-600 mb-10">
                Share your travel dates, group size, and preferences. We'll create a customized itinerary just for you.
              </p>
              
            {/* Form */}
            <div>
              <span className="text-primary font-medium tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Send a Message</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">
                Tell Us About Your Trip
              </h2>
              <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
                Share your travel dates, group size, and preferences. We'll create a customized itinerary just for you.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Name</label>
                    <Input 
                      placeholder="Your name" 
                      required 
                      className="h-11 sm:h-12 rounded-none border-gray-300 focus:border-primary focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="h-11 sm:h-12 rounded-none border-gray-300 focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Phone</label>
                    <Input 
                      type="tel" 
                      placeholder="+1 234 567 8900" 
                      className="h-11 sm:h-12 rounded-none border-gray-300 focus:border-primary focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Travelers</label>
                    <Input 
                      type="number" 
                      placeholder="Number of travelers" 
                      min="1"
                      className="h-11 sm:h-12 rounded-none border-gray-300 focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your dream Morocco trip: preferred dates, destinations, interests..."
                    rows={5}
                    required
                    className="rounded-none border-gray-300 focus:border-primary focus:ring-0 resize-none text-sm sm:text-base"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-12 sm:h-14 rounded-none bg-primary hover:bg-primary/90 text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:pl-8">
              <div className="bg-white border border-gray-200 p-5 sm:p-8 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">Visit Us</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Location</div>
                      <div className="text-gray-600 text-sm sm:text-base">Morocco</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Business Hours</div>
                      <div className="text-gray-600 text-sm sm:text-base">Daily: 8:00 AM - 9:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-[250px] sm:h-[300px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7500000!2d-10.0!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sKingdom%20of%20Morocco!5e0!3m2!1sen!2sma!4v1702000000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Morocco Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
