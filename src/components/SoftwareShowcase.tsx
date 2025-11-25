import React from "react";
import {
  Package,
  TrendingUp,
  Bell,
  RotateCcw,
  Eye,
  FileText,
  MapPin,
  ShoppingCart,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const softwareFeatures = [
  {
    icon: Eye,
    title: "Monitor 24/7",
    description: "Monitor inventory, orders and shipments around the clock",
  },
  {
    icon: TrendingUp,
    title: "Forecast Inventory",
    description: "Predict inventory needs with smart analytics",
  },
  {
    icon: Bell,
    title: "Inventory Alerts",
    description: "Receive real-time alerts for low stock levels",
  },
  {
    icon: RotateCcw,
    title: "Manage Returns",
    description: "Streamline the returns process efficiently",
  },
  {
    icon: Package,
    title: "View Backorders",
    description: "Track and manage backorder status",
  },
  {
    icon: FileText,
    title: "View Invoices",
    description: "Access all invoices in one place",
  },
  {
    icon: MapPin,
    title: "Track Shipments",
    description: "View real-time tracking information",
  },
  {
    icon: ShoppingCart,
    title: "Cart Integration",
    description: "Seamless shopping cart integration",
  },
];

const userFlowSteps = [
  {
    step: 1,
    title: "Register",
    description: "Create your account and set up your profile in minutes",
    icon: ShoppingCart,
  },
  {
    step: 2,
    title: "Monitor Inventory",
    description: "Real-time dashboard shows all inventory levels and alerts",
    icon: LineChart,
  },
  {
    step: 3,
    title: "Process Orders",
    description: "Orders automatically sync and are ready for fulfillment",
    icon: Package,
  },
  {
    step: 4,
    title: "Track & Deliver",
    description: "Monitor shipments and provide customers with tracking info",
    icon: MapPin,
  },
];

export function SoftwareShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-6 border border-yellow-200">
            Shedike Software
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
            Our Order Fulfillment Software
          </h2>
          <p className="text-xl text-slate-600">
            Powerful tools to manage your entire fulfillment operation from one
            intuitive dashboard
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {softwareFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-yellow-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* User Flow Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl mb-4 text-slate-900">
              How It Works
            </h3>
            <p className="text-lg text-slate-600">
              Get started in 4 simple steps
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userFlowSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full text-slate-900 font-bold text-xl mb-4 relative z-10">
                  {step.step}
                </div>

                {/* Connector Arrow */}
                {index < userFlowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[50%] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 z-0">
                    <ArrowRight className="absolute -right-2 -top-2.5 w-6 h-6 text-yellow-400" />
                  </div>
                )}

                {/* Icon */}
                <div className="w-20 h-20 bg-slate-50 rounded-xl flex items-center justify-center mb-4 border border-slate-200">
                  <step.icon className="w-10 h-10 text-slate-700" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors cursor-pointer group">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">
                Ready to streamline your fulfillment?
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
