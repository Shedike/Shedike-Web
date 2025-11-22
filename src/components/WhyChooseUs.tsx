import { CheckCircle2, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  "99.9% order accuracy guarantee",
  "Same-day pick & pack service",
  "Affordable, transparent shipping rates",
  "Real-time tracking dashboard",
  "Secure and organized warehouse",
  "Easy onboarding and integrations",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Luna Cosmetics",
    text: "Shedike transformed our fulfillment process. Orders are shipped faster, and our customers love the professional packaging.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    company: "TechGear Store",
    text: "The real-time inventory tracking and Shopify integration saved us countless hours. Best decision we made for our business.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    company: "Artisan Home Goods",
    text: "Switching to Shedike cut our shipping costs by 30% while improving delivery times. Their team is incredibly responsive.",
    rating: 5,
  },
];

const clientLogos = [
  "Shopify",
  "Amazon",
  "Etsy",
  "WooCommerce",
  "Magento",
  "eBay",
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-4 border border-yellow-200">
            Why Shedike
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-600">
            Join hundreds of brands that trust us with their fulfillment
            operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBmdWxmaWxsbWVudCUyMGJveGVzfGVufDF8fHx8MTc2MzcwNzg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Warehouse fulfillment"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl text-slate-900">
              Our Competitive Advantage
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl text-center mb-12 text-slate-900">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-yellow-300 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <p className="text-center text-slate-500 mb-8">
            Trusted by merchants nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-2xl text-slate-400 px-6">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
