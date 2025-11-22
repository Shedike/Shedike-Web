import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Services: ["Order Fulfillment", "Warehousing", "Inventory Management", "Returns Handling"],
  Company: ["About Us", "Careers", "Contact", "Blog"],
  Resources: ["Help Center", "Documentation", "API", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-900">S</span>
              </div>
              <span className="text-xl text-white">Shedike</span>
            </div>
            <p className="text-slate-400 mb-6">
              Professional fulfillment services for growing e-commerce brands. 
              Fast, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
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
                    <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
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
            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}