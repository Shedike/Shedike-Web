import { 
  Package, 
  Warehouse, 
  BarChart3, 
  Tag, 
  RefreshCw, 
  Zap, 
  Globe,
  Link2
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Order Fulfillment",
    description: "Complete end-to-end order processing from pick to pack to ship with same-day capability."
  },
  {
    icon: Warehouse,
    title: "Warehousing & Storage",
    description: "Secure, climate-controlled storage facilities with flexible space options."
  },
  {
    icon: BarChart3,
    title: "Inventory Management",
    description: "Real-time inventory tracking with automated alerts and detailed analytics."
  },
  {
    icon: Tag,
    title: "Custom Packaging & Labels",
    description: "Branded packaging, custom inserts, and personalized shipping labels."
  },
  {
    icon: RefreshCw,
    title: "Returns Handling",
    description: "Streamlined returns processing with inspection and restocking services."
  },
  {
    icon: Zap,
    title: "Same-Day Shipping",
    description: "Orders received by 2 PM ship the same day for faster delivery times."
  },
  {
    icon: Link2,
    title: "E-Commerce Integrations",
    description: "Seamless integration with Shopify, WooCommerce, Amazon, and more."
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Global fulfillment to 150+ countries with customs documentation support."
  }
];

export function ServicesGrid({ onNavigateServices }: { onNavigateServices?: () => void }) {
  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-4 border border-yellow-200">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">Complete Fulfillment Solutions</h2>
          <p className="text-xl text-slate-600">
            Everything you need to scale your e-commerce business, from storage to delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={onNavigateServices}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200 hover:border-yellow-300 text-left w-full"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-lg mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
