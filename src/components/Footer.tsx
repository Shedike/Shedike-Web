import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {

  "Kumasi Office (Head office)": [
    "2nd floor Gyamaras centre, opp Jofel restaurant airport roundabout, Kumasi",
    "Whatsapp +233 262 51 6656",
    "Office +233 32 239 6561",
  ],
  // "Accra office": [
  //   " GD 119 after church Street behind shell filing station near melcom Mallam Gbawe accra",
  //   "Whats-app +233 50 189 6753",
  //   "Office +233 32 239 6561 ",
  //   "Shedikelagosops@gmail.com",
  // ],
  // "Lagos Office": [
  //   "Ige Bdejo Estate, 2 Solomon Ige Street, Beside Abadek Filling Station, Agbenaje, ikola ipaja, Lagos",
  //   "+2349130230883, +2348158634707",
  //   "Shedikelagosops@gmail.com",
  // ],
  Company: ["About Us", "Contact Us"],

  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/s-logo.png"
                alt="Shedike Logo"
                className="w-32 h-auto"
              />
            </div>
            <p className="text-slate-400 mb-6">
              Professional fulfillment services for growing e-commerce brands.
              Fast, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/16TFZafQTC/"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Shedikeghana?t=l4Ob-UJZer6M_SVUvtBwMA&s=09"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/shedike-fulfillment-logistics/"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shedike_group/"
                target="_blank"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-yellow-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 Shedike Logistics & Fulfillment. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-yellow-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-yellow-400 transition-colors"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-yellow-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
