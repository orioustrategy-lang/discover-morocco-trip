import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, HelpCircle, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/212623956727?text=Hello, I'm interested in your Morocco tours!", "_blank");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left side - nos destinations */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="group relative">
                <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">
                  Nos destinations
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Simple dropdown placeholder */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl py-2 rounded-sm">
                  <Link to="/tours?search=Marrakech" className="block px-4 py-2 hover:bg-gray-100">Marrakech</Link>
                  <Link to="/tours?search=Casablanca" className="block px-4 py-2 hover:bg-gray-100">Casablanca</Link>
                  <Link to="/tours?search=Fes" className="block px-4 py-2 hover:bg-gray-100">Fes</Link>
                </div>
              </div>
            </div>

            {/* Logo - Centered */}
            <Link to="/" className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
              <div className="flex flex-col items-center">
                <span className="font-serif font-bold text-2xl tracking-tighter">DISCOVER</span>
                <span className="text-[10px] tracking-[0.4em] font-light -mt-1 opacity-80 uppercase">Morocco Trip</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <a href="tel:+212623956727" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +212 623-956727
              </a>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
                <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Aide
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-black/90" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-full bg-black text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="font-serif font-bold text-xl uppercase tracking-widest">Menu</span>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 py-12 px-8 flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif font-bold hover:text-primary transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-white/10" />
              <button
                onClick={handleWhatsApp}
                className="text-xl font-medium hover:text-primary transition-colors flex items-center gap-3"
              >
                <Phone className="h-5 w-5" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
