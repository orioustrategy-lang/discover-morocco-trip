import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        {/* Decorative background */}
        <div className="relative mb-8">
          <div className="text-[180px] font-bold text-muted/30 leading-none font-serif">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🏜️</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
          Lost in the Desert?
        </h1>
        
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off into the Sahara. 
          Don't worry, we'll help you find your way back!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="gap-2 rounded-full w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/tours">
            <Button size="lg" variant="outline" className="gap-2 rounded-full w-full sm:w-auto">
              <Search className="h-4 w-4" />
              Explore Tours
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Need help? <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat with us on WhatsApp</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
