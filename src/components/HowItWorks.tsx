import React from "react";
import { Package, Warehouse, ShoppingBag, Truck } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Send Inventory",
    description:
      "Ship your products to our secure warehouse facilities. We'll receive and catalog everything.",
  },
  {
    icon: Warehouse,
    title: "We Store & Track",
    description:
      "Your inventory is safely stored and tracked in real-time through our dashboard.",
  },
  {
    icon: ShoppingBag,
    title: "We Pick & Pack Orders",
    description:
      "When orders come in, our team picks, packs, and quality-checks each one.",
  },
  {
    icon: Truck,
    title: "We Ship Worldwide",
    description:
      "Fast, reliable shipping to customers anywhere in the world with full tracking.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-4 border border-yellow-200">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            How It Works
          </h2>
          <p className="text-xl text-slate-600">
            Get started in 4 simple steps. We make fulfillment easy so you can
            focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-yellow-200 to-transparent"></div>
              )}

              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-lg transition-all">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-900 rounded-full flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-yellow-600" />
                </div>

                <h3 className="text-xl mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
