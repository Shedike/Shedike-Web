import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";

export function ActiveRegionsMap() {
  const regions = [
    {
      country: "Nigeria",
      cities: ["Nationwide"],
      color: "from-yellow-400 to-yellow-500",
    },
    {
      country: "Ghana",
      cities: ["Nationwide"],
      color: "from-yellow-300 to-yellow-400",
    },
    {
      country: "Togo",
      cities: ["Nationwide"],
      color: "from-yellow-300 to-yellow-400",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-yellow-100 text-slate-900 px-6 py-2.5 rounded-full mb-6 border border-yellow-200 shadow-sm">
            <MapPin className="w-4 h-4 text-yellow-600" />
            <span>Active Regions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
            Serving West Africa
          </h2>
          <p className="text-xl text-slate-600">
            Currently operating fulfillment centers in Nigeria and Ghana, with
            expansion plans across Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Visual Element */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-slate-50 to-slate-100 rounded-3xl overflow-hidden">
              {/* Grid pattern */}

              {/* Floating decorative elements */}
              <div className="absolute top-12 left-12 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            </div>

            {/* Central graphic element */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl mb-6 rotate-6 hover:rotate-0 transition-transform duration-500">
                <MapPin className="w-16 h-16 text-slate-900" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                  <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
                </div>
                <p className="text-slate-600">
                  Strategic Locations Across
                  <br />
                  West Africa
                </p>
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div className="space-y-5">
            {regions.map((region, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${region.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <MapPin className="w-7 h-7 text-slate-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-slate-900">
                      {region.country}
                    </h3>
                    <div className="space-y-2.5">
                      {region.cities.map((city, cityIndex) => (
                        <div
                          key={cityIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="text-slate-600">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 text-white border border-slate-700 shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  <h3 className="text-lg">Expanding Soon</h3>
                </div>
                <p className="text-slate-300 mb-5">
                  We're actively expanding to more countries across West Africa.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    Senegal
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    Mali
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    Benin
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    Burkina Faso
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    Côte d'Ivoire
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    Kenya
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    South Africa
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                    Egypt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          <div className="group text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 mb-2">
              3
            </div>
            <div className="text-slate-600">Active Countries</div>
          </div>
          <div className="group text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 mb-2">
              6
            </div>
            <div className="text-slate-600">Fulfillment Centers</div>
          </div>
          <div className="group text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 mb-2">
              50K+
            </div>
            <div className="text-slate-600">Orders Monthly</div>
          </div>
          <div className="group text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 mb-2">
              24/7
            </div>
            <div className="text-slate-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
