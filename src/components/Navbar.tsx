import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages that have dark hero backgrounds where white logo should be used
  const darkHeroPages = ["/"];
  const hasDarkHero = darkHeroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/212600000000?text=Hello, I'm interested in your Morocco tours!", "_blank");
  };

  const isActive = (path: string) => location.pathname === path;

  // Determine if we should use light theme (dark logo, dark text)
  const useLightTheme = scrolled || !hasDarkHero;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-light border-b border-border/50 shadow-lg backdrop-blur-xl" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className={`text-2xl font-serif font-bold transition-all duration-500 group-hover:scale-105 ${
              useLightTheme ? "text-primary" : "text-white drop-shadow-lg"
            }`}>
              Discover<span className="text-accent">Morocco</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-6 py-2.5 rounded-full font-medium text-[15px] transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-white bg-primary shadow-lg"
                    : useLightTheme 
                      ? "text-foreground hover:text-primary hover:bg-muted" 
                      : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              onClick={handleWhatsApp} 
              className="gap-2 rounded-full px-7 h-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 btn-shine bg-gradient-to-r from-primary to-primary/90"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
              useLightTheme 
                ? "text-foreground hover:bg-muted" 
                : "text-white hover:bg-white/15 backdrop-blur-sm"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 glass-light border-b border-border/50 shadow-2xl transition-all duration-500 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between p-4 rounded-2xl font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground hover:bg-muted/80"
                }`}
              >
                {link.name}
                <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isActive(link.path) ? "opacity-100" : "opacity-50"}`} />
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border/50">
              <Button onClick={handleWhatsApp} className="gap-2 w-full rounded-2xl h-14 text-base shadow-lg btn-shine">
                <Phone className="h-5 w-5" />
                Book via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
