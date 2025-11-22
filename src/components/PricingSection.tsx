import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pricingFeatures = [
  "No setup fees or hidden costs",
  "Pay only for what you use",
  "Volume discounts available",
  "Flexible month-to-month terms",
  "Free onboarding and training"
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-4">Transparent, Flexible Pricing</h2>
            <p className="text-xl text-slate-300">
              Designed for businesses of all sizes. No surprises, just straightforward fulfillment costs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl mb-6">What's Included</h3>
                <div className="space-y-3">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 text-slate-900">
                <div className="mb-6">
                  <div className="text-sm text-slate-500 mb-2">Starting from</div>
                  <div className="text-5xl mb-2">$0.50</div>
                  <div className="text-slate-600">per order picked & packed</div>
                </div>
                
                <div className="space-y-2 mb-8 text-sm text-slate-600">
                  <p>+ Storage fees based on space used</p>
                  <p>+ Actual shipping costs (discounted rates)</p>
                </div>

                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 gap-2">
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-center text-sm text-slate-500 mt-4">
                  Get a personalized quote in under 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}