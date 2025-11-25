import React from "react";
import { Button } from "../components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactPage({
  onNavigateHome,
  onNavigateServices,
  onNavigateBusiness,
}: {
  onNavigateHome?: () => void;
  onNavigateServices?: () => void;
  onNavigateBusiness?: () => void;
}) {
  const branches = [
    {
      city: "Kumasi",
      type: "Head Office",
      address:
        "2nd floor gyamaras centre opp jofel restaurant airport airport about Kumasi",
      phones: [
        { label: "Office", number: "+233 32 239 6561" },
        { label: "WhatsApp", number: "+233 262 51 6656" },
      ],
      email: null,
    },
    {
      city: "Lagos",
      type: "Office",
      address:
        "Ige Bdejo Estate, 2 Solomon Ige Street, Beside Abadek Filling Station, Agbenaje, ikola ipaja, Lagos",
      phones: [
        { label: "Office", number: "+234 913 023 0883" },
        { label: "Mobile", number: "+234 815 863 4707" },
      ],
      email: "Shedikelagosops@gmail.com",
    },
    {
      city: "Accra",
      type: "Office",
      address:
        "GD 119 after church Street behind shell filing station near melcom Mallam Gbawe accra",
      phones: [
        { label: "Office", number: "+233 32 239 6561" },
        { label: "WhatsApp", number: "+233 50 189 6753" },
      ],
      email: "Shedikelagosops@gmail.com",
    },
    {
      city: "Togo",
      type: "Office",
      address: "Hedzranawoe, Cito Aéropore Lomé togo",
      phones: [{ label: "Tel", number: "+228 79073154" }],
      email: "Shedikelomeops@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-slate-200">
        <button onClick={onNavigateHome} className="flex items-center gap-2">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
            <span className="text-slate-900">S</span>
          </div>
          <span className="text-xl text-slate-900">Shedike</span> */}
           <img src="/s-logo.png" alt="Shedike Logo" className="w-32 h-auto" />
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onNavigateHome}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={onNavigateServices}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Services
          </button>
          <button
            onClick={onNavigateBusiness}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Grow Your Business
          </button>
          <span className="text-yellow-500">Contact Us</span>
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:border-yellow-500 hover:text-yellow-500"
          >
            Sign In
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-6 border border-yellow-200">
              Get in Touch
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-slate-900">
              Visit Our Offices
            </h1>
            <p className="text-xl text-slate-600">
              We have branches across West Africa to serve you better. Find the
              location nearest to you.
            </p>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-yellow-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl text-slate-900 font-semibold">
                    {branch.city}
                  </h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                    {branch.type}
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-yellow-600" />
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {branch.phones.map((phone, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          {phone.label.toLowerCase().includes("whatsapp") ? (
                            <MessageCircle className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Phone className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm text-slate-500">
                            {phone.label}
                          </div>
                          <div className="text-slate-900 font-medium">
                            {phone.number}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {branch.email && (
                    <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Email</div>
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-slate-900 font-medium hover:text-yellow-600 transition-colors"
                        >
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-8 text-slate-900">
            Can't find what you're looking for?
          </h2>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900"
          >
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
}
