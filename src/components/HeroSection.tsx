import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, CheckCircle2, Zap, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Header } from "./Header";

export function HeroSection({
  onNavigateServices,
  onNavigateBusiness,
  onNavigateContact,
  onNavigateHome,
}: {
  onNavigateServices?: () => void;
  onNavigateBusiness?: () => void;
  onNavigateContact?: () => void;
  onNavigateHome?: () => void;
}) {

  return (
    <div className="relative bg-gradient-to-br from-yellow-50 via-white to-slate-50 overflow-hidden">
      {/* Navigation */}
      {/* Navigation */}
      <Header
        onNavigateHome={onNavigateHome}
        onNavigateServices={onNavigateServices}
        onNavigateBusiness={onNavigateBusiness}
        onNavigateContact={onNavigateContact}
        activePage="home"
      />

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-slate-900 px-4 py-2 rounded-full border border-yellow-200">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="text-sm">Trusted by 500+ E-Commerce Brands</span>
            </div>

            <h1 className="text-5xl lg:text-6xl text-slate-900">
              Reliable, Fast & Affordable Fulfillment for Growing E-Commerce
              Brands
            </h1>

            <p className="text-xl text-slate-600">
              We store, pick, pack, and ship your orders so you can focus on
              selling. Get same-day fulfillment with 99.9% accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <PlayCircle className="w-5 h-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Order Accuracy</div>
                  <div className="text-slate-900">99.9%</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center border border-yellow-200">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    Average Fulfillment
                  </div>
                  <div className="text-slate-900">Same Day</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Countries Served</div>
                  <div className="text-slate-900">150+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzYzNjIwOTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern warehouse logistics"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
              <div className="text-sm text-slate-500">Orders Shipped</div>
              <div className="text-3xl text-slate-900">12,847</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
