import { ShoppingCart, Store, Package, Globe } from "lucide-react";

const integrations = [
  { name: "Shopify", icon: ShoppingCart, color: "bg-green-500" },
  { name: "WooCommerce", icon: Store, color: "bg-purple-500" },
  { name: "Magento", icon: Package, color: "bg-orange-500" },
  { name: "Squarespace", icon: Globe, color: "bg-gray-700" },
  { name: "Etsy", icon: Store, color: "bg-orange-600" },
  { name: "Amazon", icon: Package, color: "bg-yellow-600" },
  { name: "eBay", icon: ShoppingCart, color: "bg-blue-500" },
  { name: "BigCommerce", icon: Store, color: "bg-indigo-500" }
];

export function IntegrationsSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-4 border border-yellow-200">
            Integrations
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">Works With Your Platform</h2>
          <p className="text-xl text-slate-600">
            Seamlessly connect your existing e-commerce platform in minutes. 
            No technical expertise required.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200 hover:border-yellow-300"
            >
              <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center`}>
                <integration.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-center text-slate-700">{integration.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600">
            Don't see your platform? <a href="#contact" className="text-yellow-600 hover:text-yellow-700 hover:underline">Contact us</a> for custom integrations.
          </p>
        </div>
      </div>
    </section>
  );
}