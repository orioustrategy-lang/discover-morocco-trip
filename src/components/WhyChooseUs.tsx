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
              className="text-center p-4"
            >
              <div className="flex flex-col items-center justify-center mb-4">
                <feature.icon className="h-10 w-10 text-gray-900 pb-1" strokeWidth={1.5} />
                <div className="w-12 h-6 bg-black rounded-b-full" />
              </div>
              <h3 className="font-serif text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
