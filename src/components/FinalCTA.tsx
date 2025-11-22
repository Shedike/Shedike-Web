import { Button } from "./ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Ready to Scale Your Fulfillment?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join hundreds of successful e-commerce brands who trust Shedike with their fulfillment. 
            Get started today with a custom quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 gap-2">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 gap-2">
              <Phone className="w-5 h-5" />
              Talk to Our Team
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>1-800-SHEDIKE</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}