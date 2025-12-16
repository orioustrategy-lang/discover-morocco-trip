import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand - Takes more space */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="font-serif font-bold text-xl text-white">D</span>
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white">Discover</span>
                <span className="font-light text-xl ml-1 text-white/80">Morocco</span>
              </div>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed mb-8">
              Your trusted local partner for authentic Moroccan adventures. 
              From the Sahara Desert to the Atlas Mountains, we craft journeys that inspire.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-6 text-white/40">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Journeys", path: "/tours" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-6 text-white/40">Experiences</h3>
            <ul className="space-y-4">
              {["Desert Tours", "Mountain Treks", "Cultural Visits", "Coastal Escapes"].map((item) => (
                <li key={item}>
                  <Link 
                    to="/tours" 
                    className="text-white/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-6 text-white/40">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white/60">+212 623-956727</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white/60 text-sm">contact@discovermoroccotrip.com</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white/60">Morocco</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>&copy; {currentYear} Discover Morocco Trip. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
