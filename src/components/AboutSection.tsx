import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "50,000+",
    label: "sq ft of warehouse space"
  },
  {
    icon: Users,
    value: "500+",
    label: "merchants served"
  },
  {
    icon: Award,
    value: "99.9%",
    label: "accuracy rate"
  },
  {
    icon: TrendingUp,
    value: "5M+",
    label: "orders fulfilled"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-6 border border-yellow-200">
              About Shedike
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Your Trusted Fulfillment Partner
            </h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p>
                Founded in 2018, Shedike Logistics has grown from a small warehouse 
                operation to a full-service 3PL provider trusted by hundreds of 
                e-commerce brands across the country.
              </p>
              <p>
                Our mission is simple: make professional fulfillment accessible to 
                businesses of all sizes. Whether you're shipping 10 orders a day or 
                10,000, we provide the same level of care and attention to detail.
              </p>
              <p>
                With state-of-the-art facilities, cutting-edge technology, and a 
                dedicated team of fulfillment experts, we help you scale your business 
                without the overhead of managing your own warehouse.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632858265907-961f1454ccf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjM2NTQ1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Shedike team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-slate-900" />
              </div>
              <div className="text-3xl lg:text-4xl mb-2 text-slate-900">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}