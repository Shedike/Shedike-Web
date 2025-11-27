import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateServices?: () => void;
  onNavigateBusiness?: () => void;
  onNavigateContact?: () => void;
  activePage?: "home" | "services" | "business" | "contact";
  className?: string;
}

export function Header({
  onNavigateHome,
  onNavigateServices,
  onNavigateBusiness,
  onNavigateContact,
  activePage = "home",
  className = "",
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClass = (page: string) => {
    const baseClass = "text-slate-700 hover:text-yellow-500 transition-colors";
    const activeClass = "text-yellow-500 font-medium";
    return activePage === page ? activeClass : baseClass;
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigateHome?.();
    setMobileMenuOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (activePage !== "home") {
      onNavigateHome?.();
      // We can't easily scroll to the section immediately because the home page isn't mounted yet.
      // In a real router setup we would use hash routing.
      // For now, just going to home is the safe bet.
      // If we are already on home, we can scroll.
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`container mx-auto px-4 py-6 ${className}`}>
      <div className="flex items-center justify-between">
        <button onClick={onNavigateHome} className="flex items-center gap-2">
          <img src="/s-logo.png" alt="Shedike Logo" className="w-24 h-auto" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onNavigateHome}
            className={getLinkClass("home")}
          >
            Home
          </button>
          <button
            onClick={onNavigateServices}
            className={getLinkClass("services")}
          >
            Services
          </button>

          <button
            onClick={onNavigateBusiness}
            className={getLinkClass("business")}
          >
            Grow Your Business
          </button>

          <a
            href="#how-it-works"
            onClick={(e) => handleAnchorClick(e, "how-it-works")}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleAnchorClick(e, "pricing")}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            onClick={(e) => handleAnchorClick(e, "about")}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
          >
            About
          </a>
          <button
            onClick={onNavigateContact}
            className={getLinkClass("contact")}
          >
            Contact Us
          </button>

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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-slate-200">
          <div className="flex flex-col gap-4">
            <button
              onClick={handleHomeClick}
              className={`${getLinkClass("home")} py-2 text-left`}
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigateServices?.();
                setMobileMenuOpen(false);
              }}
              className={`${getLinkClass("services")} py-2 text-left`}
            >
              Services
            </button>
            <button
              onClick={() => {
                onNavigateBusiness?.();
                setMobileMenuOpen(false);
              }}
              className={`${getLinkClass("business")} py-2 text-left`}
            >
              Grow Your Business
            </button>
            <a
              href="#how-it-works"
              className="text-slate-700 hover:text-yellow-500 transition-colors py-2"
              onClick={(e) => handleAnchorClick(e, "how-it-works")}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-slate-700 hover:text-yellow-500 transition-colors py-2"
              onClick={(e) => handleAnchorClick(e, "pricing")}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-yellow-500 transition-colors py-2"
              onClick={(e) => handleAnchorClick(e, "about")}
            >
              About
            </a>
            <button
              onClick={() => {
                onNavigateContact?.();
                setMobileMenuOpen(false);
              }}
              className={`${getLinkClass("contact")} py-2 text-left`}
            >
              Contact Us
            </button>
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:border-yellow-500 hover:text-yellow-500 w-full"
              >
                Sign In
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
