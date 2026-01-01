import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Check } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
          Luxury Escape
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe and participate in our private sales reserved exclusively for our registered members.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white text-gray-900 border-0 rounded-lg placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-white"
              required
            />
            <Button
              type="submit"
              className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-semibold rounded-lg"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>
        </form>

        <p className="text-white/60 text-xs mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
