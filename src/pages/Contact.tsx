import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram, Star, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/212600000000?text=Hello, I have a question about your tours!", "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+212 600 000 000"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@discovermoroccotrip.com"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Morocco"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Daily: 8:00 AM - 9:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Get in Touch
            </h1>
            <p className="text-lg text-white/80">
              We're here to help plan your perfect Moroccan adventure. Reach out anytime!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-primary rounded-2xl p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-serif">Quick Response</h3>
                <p className="text-white/80 mb-6">
                  Get instant answers to your questions via WhatsApp. We typically respond within minutes!
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-semibold"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Contact Details */}
              <div className="bg-card rounded-2xl border border-border/50 p-8">
                <h3 className="text-xl font-bold mb-6 font-sans">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">{item.title}</p>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.instagram.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.tripadvisor.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Star className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-2 font-serif">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 234 567 8900" 
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="Tour inquiry" 
                        required 
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your travel plans, dates, number of travelers, and any special requests..."
                      rows={6}
                      required
                      className="rounded-xl border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 rounded-xl gap-2 text-base">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">Find Us in Morocco</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're located in the heart of Morocco, ready to welcome you and help plan your Moroccan adventure.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7500000!2d-10.0!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sKingdom%20of%20Morocco!5e0!3m2!1sen!2sma!4v1702000000000!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Discover Morocco Trip Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
