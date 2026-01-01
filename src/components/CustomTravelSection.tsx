import { Headphones, Settings, Shield } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Headphones,
    title: "Listen",
    description:
      "Our travel specialists help you create a trip tailored to your desires and budget.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Personalization",
    description:
      "Based on your advisor's suggestions and your ideas, we build an ultra-personalized experience: cities, hotels, activities, encounters...",
  },
  {
    number: "3",
    icon: Shield,
    title: "Services",
    description:
      "With our 24/7 customer service, you benefit from round-the-clock assistance and a range of services at your disposal.",
  },
];

const CustomTravelSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a1628] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium mb-4 tracking-wide">
              BESPOKE TRAVEL DESIGNERS
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              Your Custom Journey
              <br />
              <span className="text-primary">Starts Here…</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our travel designers, specialists in luxury tailor-made travel, have been
              fine connoisseurs of travel for over 10 years. They manage their clients'
              requests from quote creation to the technical design of the trip, with a
              100% personalized service.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-lg">{step.number}</span>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80"
                alt="Morocco Travel Experience"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTravelSection;
