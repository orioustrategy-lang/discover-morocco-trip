import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Star, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 moroccan-pattern opacity-[0.02]" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6 group">
              <span className="text-3xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300">
                Discover<span className="text-accent">Morocco</span>
              </span>
            </Link>
            <p className="text-background/70 mb-8 max-w-md leading-relaxed text-base">
              Your trusted local partner for authentic Moroccan adventures. 
              From the Sahara Desert to the Atlas Mountains, discover Morocco's magic with our expert guides.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:-rotate-3"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tripadvisor.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300 hover:scale-110 hover:-rotate-3"
              >
                <Star className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 font-serif text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 font-serif text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-background/70 group-hover:text-background transition-colors pt-2">
                  <p>+212 600 000 000</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-background/70 group-hover:text-background transition-colors break-all pt-2">contact@discovermoroccotrip.com</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-background/70 group-hover:text-background transition-colors pt-2">Morocco</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>&copy; {currentYear} Discover Morocco Trip. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
