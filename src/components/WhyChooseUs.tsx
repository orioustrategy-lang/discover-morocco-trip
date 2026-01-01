import { Users, Globe, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "+20 Travel Experts",
    description: "Specialized advisors for custom luxury travel",
  },
  {
    icon: Globe,
    title: "50+ Destinations",
    description: "Handpicked locations tested by our experts",
  },
  {
    icon: Headphones,
    title: "24/7 Assistance",
    description: "Real support before, during, and after your trip",
  },
  {
    icon: Award,
    title: "100+ Local Guides",
    description: "Experienced guides across Morocco",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            Why Discover Morocco Trip?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            30+ years of creating luxury travel experiences
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
