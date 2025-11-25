import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { servicesData, ServiceData } from "../data/servicesData";

export function ServicesPage({
  onNavigateHome,
}: {
  onNavigateHome?: () => void;
}) {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(
    null
  );

  if (selectedService) {
    return (
      <ServiceDetail
        service={selectedService}
        onBack={() => setSelectedService(null)}
        onNavigateHome={onNavigateHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-slate-200">
        <button onClick={onNavigateHome} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
            <span className="text-slate-900">S</span>
          </div>
          <span className="text-xl text-slate-900">Shedike</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onNavigateHome}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Home
          </button>
          <span className="text-yellow-500">Services</span>
          <a
            href="#pricing"
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            About
          </a>
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:border-yellow-500 hover:text-yellow-500"
          >
            Sign In
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
            Get a Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-6 border border-yellow-200">
              Our Services
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-slate-900">
              Complete Fulfillment & Logistics Solutions
            </h1>
            <p className="text-xl text-slate-600">
              From warehousing to last-mile delivery, we provide end-to-end
              logistics services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-yellow-300 hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-yellow-600 group-hover:text-yellow-500">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team can create a tailored fulfillment package that fits your
              unique requirements.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceDetail({
  service,
  onBack,
  onNavigateHome,
}: {
  service: ServiceData;
  onBack: () => void;
  onNavigateHome?: () => void;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-slate-200">
        <button onClick={onNavigateHome} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
            <span className="text-slate-900">S</span>
          </div>
          <span className="text-xl text-slate-900">Shedike</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onNavigateHome}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Home
          </button>
          <button onClick={onBack} className="text-yellow-500">
            Services
          </button>
          <a
            href="#pricing"
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            About
          </a>
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:border-yellow-500 hover:text-yellow-500"
          >
            Sign In
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
            Get a Quote
          </Button>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-yellow-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </button>
      </div>

      {/* Service Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                <service.icon className="w-10 h-10 text-yellow-400" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-2">
                  {service.category}
                </div>
                <h1 className="text-4xl lg:text-5xl text-slate-900">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-slate-600">{service.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-slate-900">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg"
                >
                  <Check className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-slate-900">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-slate-200"
                >
                  <h3 className="text-lg mb-2 text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-slate-900">How It Works</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-slate-900">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-slate-900">Pricing Structure</h2>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="mb-6">
                <div className="text-sm text-slate-600 mb-2">Starting from</div>
                <div className="text-4xl text-slate-900 mb-2">
                  {service.pricing.starting}
                </div>
                <div className="text-slate-600">{service.pricing.model}</div>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h3 className="mb-4 text-slate-900">What's Included:</h3>
                <div className="space-y-2">
                  {service.pricing.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a custom quote for {service.title.toLowerCase()} tailored to
              your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900"
              >
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
