import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/212623956727?text=Hello, I'm interested in your Morocco tours!", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-lg py-3" 
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="font-serif font-bold text-xl text-white">D</span>
            </div>
            <div className="hidden sm:block text-gray-900">
              <span className="font-serif font-bold text-lg tracking-tight">Discover</span>
              <span className="font-light text-lg ml-1">Morocco</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium text-sm tracking-wide uppercase transition-colors ${
                  location.pathname === link.path 
                    ? "text-primary" 
                    : "text-gray-600 hover:text-primary"
                } ${
                  location.pathname === link.path 
                    ? "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-primary" 
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleWhatsApp}
              className="h-12 px-6 rounded-none bg-primary hover:bg-primary/90 text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-t shadow-xl">
            <div className="py-6 px-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-lg font-medium ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  handleWhatsApp();
                  setIsOpen(false);
                }}
                className="w-full h-14 mt-4 rounded-none bg-primary hover:bg-primary/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
