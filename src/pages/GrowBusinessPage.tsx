import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  Rocket,
  ShoppingCart,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface BusinessGrowthData {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  pricing: {
    starting: string;
    model: string;
    includes: string[];
  };
  successStory?: {
    quote: string;
    author: string;
    credentials: string;
  };
  whyChoose?: string;
  integrations?: string[];
  integrationInfo?: string;
  costAdvantage?: string;
}

const businessGrowthData: BusinessGrowthData[] = [
  {
    id: "content-creator-fulfillment",
    title: "Content Creator and Influencer Merch Fulfillment",
    category: "Fulfillment Services",
    icon: Users,
    shortDescription:
      "Specialized merch fulfillment services designed specifically for content creators, influencers, and gamers.",
    fullDescription:
      "Shedike Fulfilment specializes in merch fulfillment services designed specifically for content creators, influencers, and gamers. We understand that creating engaging content is demanding enough—selling and shipping merchandise shouldn't add to that burden. Our tailored solutions handle all aspects of merch fulfillment so you can focus on what you do best: creating content and building your community. Content creator and influencer merch fulfillment refers to the comprehensive process of producing, storing, packing, and shipping merchandise branded with a creator's unique designs or logos. This specialized service is outsourced to experts who manage all logistical details, allowing influencers to offer products to their audience without handling physical operations. The service encompasses inventory management, order processing, shipping, and customer support, creating a seamless experience for both creators and their fans.",
    features: [
      "Picking & Packing: Meticulous attention to detail ensuring accurate order fulfillment",
      "Warehousing & Storage: Climate-controlled, secure facilities optimized for merchandise storage",
      "Custom Packaging: Branded solutions that enhance the unboxing experience for your fans",
      "Inventory Management: Real-time tracking with automated low-stock alerts",
      "Returns Management: Streamlined process that protects your brand reputation",
      "Design Integration: We incorporate your branding into custom packaging solutions",
    ],
    benefits: [
      {
        title: "No Set-Up Fees",
        description:
          "Launch your merch line without upfront investment. Perfect for creators at any stage of growth.",
      },
      {
        title: "Increased Efficiency & Scale",
        description:
          "Grow your merch business without operational headaches. Professional logistics reduce overhead.",
      },
      {
        title: "Enhanced Customer Satisfaction",
        description:
          "Professional packaging and timely delivery create memorable unboxing experiences for your fans.",
      },
    ],
    process: [
      {
        title: "Design Integration",
        description:
          "We incorporate your branding into custom packaging solutions that reflect your unique style.",
      },
      {
        title: "Secure Storage",
        description:
          "Your merchandise is safely stored in our strategically located facilities with climate-controlled conditions.",
      },
      {
        title: "Automatic Order Processing",
        description:
          "Orders flow directly from your store to our fulfillment system for seamless processing.",
      },
      {
        title: "Professional Fulfillment",
        description:
          "Our team carefully picks, packs, and ships each order with brand-consistent packaging.",
      },
      {
        title: "Returns Management",
        description:
          "We handle any returns or exchanges, maintaining customer satisfaction and protecting your brand reputation.",
      },
    ],
    pricing: {
      starting: "No Set-Up Fees",
      model: "Pay-As-You-Go Pricing - Only pay for what you sell",
      includes: [
        "No minimum order requirements",
        "Award-winning service excellence",
        "Real-time inventory tracking",
        "Professional branded packaging",
        "Comprehensive returns management",
      ],
    },
    successStory: {
      quote:
        "When I first started selling merch, I kept all the inventory in my closet and shipped everything from the same room I edit from. As my audience grew, so did the workload. I'd be up late shipping t-shirts and realized this wouldn't be viable long-term. I'd need to hire help, get warehouse space, and do all sorts of things that would cut into my profit. Shedike Fulfilment solved all these problems for me.",
      author: "Seth",
      credentials: "Seth's Bike Hacks",
    },
    whyChoose:
      "We've helped content creators fulfill their merch for years, working with everyone from growing influencers to major online personalities. Our specialized understanding of the creator economy means we recognize the unique needs of content businesses. We help transform your audience engagement into a sustainable revenue stream without adding operational complexity to your creative process.",
  },
  {
    id: "marketplace-fulfillment",
    title: "Marketplace Fulfillment",
    category: "Fulfillment Services",
    icon: ShoppingCart,
    shortDescription:
      "Specialized marketplace fulfillment services designed for merchants selling on major platforms like Amazon, eBay, Target, WooCommerce, and more.",
    fullDescription:
      "Shedike Fulfilment provides specialized marketplace fulfillment services designed for merchants selling on major platforms like Amazon, eBay, Target, WooCommerce, and more. Our comprehensive solution handles all logistics from warehousing to final delivery, empowering you to focus on growing your marketplace presence and sales. Marketplace fulfillment refers to third-party services that handle the storage, packing, and shipping of products for sellers on online marketplaces. By leveraging our expertise, sellers can efficiently manage inventory and ensure timely customer delivery without the complexities of handling logistics internally. These services also provide additional benefits like return management and customer support, enabling sellers to concentrate on product sourcing, listing optimization, and marketing strategies.",
    features: [
      "Picking & Packing: Marketplace-compliant packaging and preparation",
      "Warehousing & Storage: Secure storage with organized inventory management",
      "Custom Packaging: Branded unboxing experiences that stand out in marketplace deliveries",
      "Inventory Management: Centralized control across all your marketplace channels",
      "Returns Management: Marketplace-specific returns processing and customer support",
      "Multi-Platform Integration: Seamless integration with Amazon, eBay, Target, WooCommerce, and more",
    ],
    benefits: [
      {
        title: "No Set-Up Fees",
        description:
          "Start selling immediately without upfront investment. Perfect for growing marketplace sellers.",
      },
      {
        title: "Increased Efficiency & Scale",
        description:
          "Handle marketplace order spikes with ease. Optimized logistics reduce operational expenses.",
      },
      {
        title: "Enhanced Customer Satisfaction",
        description:
          "Meet marketplace delivery expectations consistently. Maintain high seller ratings and qualify for premium programs.",
      },
    ],
    process: [
      {
        title: "Integration",
        description:
          "Connect your marketplace accounts with our fulfillment system for seamless order management.",
      },
      {
        title: "Inventory Storage",
        description:
          "We securely store your products in our strategically located facilities with organized inventory management.",
      },
      {
        title: "Order Notification",
        description:
          "Automatic order import when marketplace sales occur, ensuring no delays in processing.",
      },
      {
        title: "Fulfillment Execution",
        description:
          "Our team picks, packs, and ships orders according to marketplace requirements and compliance standards.",
      },
      {
        title: "Tracking Sync",
        description:
          "Automatic tracking updates sent to marketplaces, keeping customers informed and maintaining seller performance metrics.",
      },
    ],
    pricing: {
      starting: "No Set-Up Fees",
      model: "Pay-As-You-Go Pricing - Only pay for the services you use",
      includes: [
        "No minimum order requirements",
        "Award-winning service recognized excellence",
        "Real-time visibility across all marketplaces",
        "Marketplace-compliant packaging",
        "Multi-platform integration support",
      ],
    },
    whyChoose:
      "Our specialized marketplace fulfillment service understands the unique requirements of each platform, ensuring compliance with their specific policies and performance metrics. With our expertise, you can maintain high seller ratings, avoid penalties, and qualify for premium marketplace programs like Amazon Prime, Walmart Free 2-Day Shipping, and other seller benefits.",
    integrations: [
      "Amazon",
      "eBay",
      "Target",
      "WooCommerce",
      "And many other platforms",
    ],
  },
  {
    id: "high-volume-fulfillment",
    title: "High Volume Order Fulfillment",
    category: "Fulfillment Services",
    icon: Rocket,
    shortDescription:
      "High-volume order fulfillment services designed to help ecommerce businesses scale across West Africa without operational growing pains.",
    fullDescription:
      "Shedike Fulfilment specializes in high-volume order fulfillment services designed to help ecommerce businesses scale across West Africa without operational growing pains. Our comprehensive solution handles everything from warehousing and inventory management to picking, packing, and shipping, allowing you to focus on growing your business. High-volume fulfillment is a specialized logistics service that manages the storage, packing, and shipping of large quantities of products. This service is essential for businesses with significant product output that need to efficiently handle bulk orders for their online retail operations. Our systems streamline the distribution process, ensuring rapid processing and delivery while incorporating advanced inventory management and tracking capabilities.",
    features: [
      "Picking & Packing: Efficient systems ensure accurate and fast order processing",
      "Warehousing & Storage: Secure, strategically located facilities with optimal storage conditions",
      "Custom Packaging: Branded solutions that enhance the unboxing experience",
      "Inventory Management: Real-time tracking and reporting with automated alerts",
      "Returns Management: Streamlined process that maintains customer satisfaction",
      "Integration Capabilities: Seamless integration with over 40 leading e-commerce platforms",
    ],
    benefits: [
      {
        title: "No Set-Up Fees",
        description:
          "Get started without upfront costs. Scale at your own pace with no minimum order requirements.",
      },
      {
        title: "Cost Savings",
        description:
          "Reduce operational costs through economies of scale. Average savings of $1.44 per package compared to standard providers.",
      },
      {
        title: "Enhanced Customer Satisfaction",
        description:
          "Faster delivery times and accurate orders. Real-time visibility across multiple locations ensures optimal service.",
      },
    ],
    process: [
      {
        title: "Sign Up & Onboard",
        description:
          "Create your account in minutes. There are no setup fees or complicated contracts. Our team will guide you through the simple onboarding process.",
      },
      {
        title: "Store",
        description:
          "We securely store your inventory in our strategically located fulfillment centers across West Africa including Nigeria and Ghana.",
      },
      {
        title: "Notify",
        description:
          "Our system automatically receives orders from your sales channels, ensuring seamless integration with over 40 e-commerce platforms.",
      },
      {
        title: "Fulfill",
        description:
          "Our team picks, packs, and ships orders directly to your customers with professional efficiency and accuracy.",
      },
    ],
    pricing: {
      starting: "No Set-Up Fees",
      model: "Pay-As-You-Go Pricing - Only pay for what you use",
      includes: [
        "No minimum order requirements",
        "Significant shipping cost savings through optimized dimensional weight calculations",
        "Integration with over 40 e-commerce platforms without expensive implementation costs",
        "Real-time tracking and reporting",
        "Regional expertise across West Africa",
      ],
    },
    whyChoose:
      "With operations across West Africa including Nigeria and Ghana, we offer regional expertise combined with international standards. Our award-winning service ensures that as you grow from hundreds to thousands of orders daily, your fulfillment operations scale smoothly without compromising on quality or customer experience.",
    integrationInfo:
      "Our system seamlessly integrates with over 40 leading e-commerce platforms, shopping carts, and systems, providing unrivaled compatibility without expensive implementation costs.",
    costAdvantage:
      "We offer significant shipping cost savings through optimized dimensional weight calculations. Our comparison shows average savings of $1.44 per package compared to standard fulfillment providers.",
  },
];

export function GrowBusinessPage({
  onNavigateHome,
  onNavigateContact,
  onNavigateServices,
}: {
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
  onNavigateServices?: () => void;
}) {
  const [selectedStrategy, setSelectedStrategy] =
    useState<BusinessGrowthData | null>(null);

  if (selectedStrategy) {
    return (
      <StrategyDetail
        strategy={selectedStrategy}
        onBack={() => setSelectedStrategy(null)}
        onNavigateHome={onNavigateHome}
        onNavigateContact={onNavigateContact}
        onNavigateServices={onNavigateServices}
      />
    );
  }

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
          <span className="text-yellow-500">Grow Your Audience</span>
          <button
            onClick={onNavigateContact}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
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
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-100 text-slate-900 px-4 py-2 rounded-full mb-6 border border-yellow-200">
              Fulfillment Services
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-slate-900">
              Grow Your Audience with Professional Fulfillment
            </h1>
            <p className="text-xl text-slate-600">
              Discover comprehensive fulfillment services designed to scale your
              business, streamline operations, and deliver exceptional customer
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessGrowthData.map((strategy) => (
              <div
                key={strategy.id}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-yellow-300 hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setSelectedStrategy(strategy)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <strategy.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">
                  {strategy.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {strategy.shortDescription}
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
            <h2 className="text-4xl mb-6">
              Ready to Streamline Your Fulfillment?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team can create a customized fulfillment solution that fits
              your unique business needs and helps you scale efficiently.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900"
            >
              Talk to a Fulfillment Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StrategyDetail({
  strategy,
  onBack,
  onNavigateHome,
  onNavigateContact,
  onNavigateServices,
}: {
  strategy: BusinessGrowthData;
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
  onNavigateServices?: () => void;
}) {
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
          <button onClick={onBack} className="text-yellow-500">
            Grow Your Audience
          </button>
          <button
            onClick={onNavigateContact}
            className="text-slate-700 hover:text-yellow-500 transition-colors"
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
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-yellow-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Fulfillment Services
        </button>
      </div>

      {/* Strategy Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                <strategy.icon className="w-10 h-10 text-yellow-400" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-2">
                  {strategy.category}
                </div>
                <h1 className="text-4xl lg:text-5xl text-slate-900">
                  {strategy.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-slate-600">{strategy.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-slate-900">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {strategy.features.map((feature, index) => (
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
              {strategy.benefits.map((benefit, index) => (
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

      {/* Success Story */}
      {strategy.successStory && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl mb-8 text-slate-900">
                Creator Success Story
              </h2>
              <div className="bg-gradient-to-br from-yellow-50 to-slate-50 p-8 rounded-xl border border-yellow-200">
                <p className="text-lg text-slate-700 mb-6 italic">
                  "{strategy.successStory.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 font-semibold">
                      {strategy.successStory.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {strategy.successStory.author}
                    </div>
                    <div className="text-sm text-slate-600">
                      {strategy.successStory.credentials}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-slate-900">Our Process</h2>
            <div className="space-y-6">
              {strategy.process.map((step, index) => (
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

      {/* Why Choose */}
      {strategy.whyChoose && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl mb-8 text-slate-900">
                Why Choose Shedike Fulfilment?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {strategy.whyChoose}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Marketplace Integrations */}
      {strategy.integrations && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl mb-8 text-slate-900">
                Marketplace Integrations
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                We seamlessly integrate with all major marketplaces including:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {strategy.integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center"
                  >
                    <span className="text-slate-900 font-medium">
                      {integration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Integration Capabilities */}
      {strategy.integrationInfo && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl mb-8 text-slate-900">
                Integration Capabilities
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {strategy.integrationInfo}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Cost Advantage */}
      {strategy.costAdvantage && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl mb-8 text-slate-900">Cost Advantage</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {strategy.costAdvantage}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-slate-900">Pricing Structure</h2>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="mb-6">
                <div className="text-sm text-slate-600 mb-2">Starting from</div>
                <div className="text-4xl text-slate-900 mb-2">
                  {strategy.pricing.starting}
                </div>
                <div className="text-slate-600">{strategy.pricing.model}</div>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h3 className="mb-4 text-slate-900">What's Included:</h3>
                <div className="space-y-2">
                  {strategy.pricing.includes.map((item, index) => (
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
              Get a custom fulfillment solution for{" "}
              {strategy.title.toLowerCase()} tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900"
              >
                Request a Consultation
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
