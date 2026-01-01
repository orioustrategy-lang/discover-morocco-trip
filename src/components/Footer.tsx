import { Link } from "react-router-dom";
import { Phone, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const destinations = [
    "Marrakech", "Fes", "Sahara Desert", "Chefchaouen",
    "Atlas Mountains", "Essaouira", "Casablanca", "Tangier"
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="font-serif font-bold text-3xl tracking-tighter">DISCOVER</span>
              <span className="text-xs tracking-[0.4em] font-light opacity-80 uppercase -mt-1">Morocco Trip</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Signature journeys since 1994. We create authentic experiences that connect you to the heart of Morocco.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold uppercase tracking-[0.2em] text-xs mb-8">Nos Destinations</h3>
            <ul className="grid grid-cols-1 gap-4">
              {destinations.map((dest) => (
                <li key={dest}>
                  <Link to={`/tours?search=${dest}`} className="text-white/40 hover:text-white text-sm transition-colors">
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase tracking-[0.2em] text-xs mb-8">Informations</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-white/40 hover:text-white text-sm transition-colors">Conditions générales</Link></li>
              <li><Link to="/contact" className="text-white/40 hover:text-white text-sm transition-colors">Professionnel</Link></li>
              <li><Link to="/contact" className="text-white/40 hover:text-white text-sm transition-colors">Qui sommes-nous</Link></li>
              <li><Link to="/contact" className="text-white/40 hover:text-white text-sm transition-colors">Nos Agences</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="font-bold uppercase tracking-[0.2em] text-xs mb-8">Newsletter</h3>
            <div className="flex bg-white/5 p-1 mb-8">
              <input type="email" placeholder="Votre email" className="bg-transparent border-none outline-none flex-1 px-4 py-3 text-sm" />
              <button className="bg-primary p-3">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Call center</div>
                  <div className="text-sm font-bold">+212 623-956727</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/20 uppercase tracking-widest">
          <p>&copy; {currentYear} Discover Morocco Trip. Luxury Travel.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white">IATA Verified</span>
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
