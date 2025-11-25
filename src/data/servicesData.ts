import {
  Package,
  Warehouse,
  BarChart3,
  Tag,
  RefreshCw,
  Zap,
  Globe,
  Boxes,
  Truck,
  Container,
  PackageCheck,
  Camera,
  ShoppingBag,
  PackageOpen,
  Combine,
  FileCheck,
  Ship,
  LucideIcon,
  User,
} from "lucide-react";

export interface ServiceData {
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
}

export const servicesData: ServiceData[] = [
  {
    id: "order-fulfillment",
    title: "Order Fulfillment",
    category: "Core Service",
    icon: Package,
    shortDescription:
      "Complete end-to-end order processing from pick to pack to ship with same-day capability.",
    fullDescription:
      "Our comprehensive order fulfillment service handles every aspect of getting your products to your customers. From the moment an order is placed to final delivery, we manage the entire process with precision and speed.",
    features: [
      "Same-day order processing for orders received by 2 PM",
      "99.9% order accuracy guarantee",
      "Real-time order tracking and updates",
      "Multi-channel order integration",
      "Automated inventory allocation",
      "Quality control at every step",
      "Gift wrapping and special packaging options",
      "Branded packing slips and inserts",
    ],
    benefits: [
      {
        title: "Faster Shipping",
        description:
          "Same-day processing means your customers receive orders faster, improving satisfaction and loyalty.",
      },
      {
        title: "Reduce Errors",
        description:
          "Our systematic approach and quality checks ensure 99.9% accuracy on all orders.",
      },
      {
        title: "Scale Easily",
        description:
          "Handle peak seasons and growth without hiring additional staff or warehouse space.",
      },
    ],
    process: [
      {
        title: "Order Received",
        description:
          "Orders automatically sync from your e-commerce platform to our system in real-time.",
      },
      {
        title: "Pick & Pack",
        description:
          "Our team picks items from inventory, quality checks them, and packs securely with your branding.",
      },
      {
        title: "Ship & Track",
        description:
          "Orders ship via the best carrier for your needs, with tracking information sent automatically.",
      },
      {
        title: "Delivery Confirmation",
        description:
          "You and your customer receive delivery confirmation, and the order is marked complete.",
      },
    ],
    pricing: {
      starting: "$0.50",
      model: "per order picked and packed",
      includes: [
        "Pick and pack labor",
        "Quality control inspection",
        "Standard packaging materials",
        "Packing slip printing",
        "Shipping label generation",
        "Order tracking setup",
      ],
    },
  },
  {
    id: "warehousing-storage",
    title: "Warehousing & Storage",
    category: "Core Service",
    icon: Warehouse,
    shortDescription:
      "Secure, climate-controlled storage facilities with flexible space options for inventory of any size.",
    fullDescription:
      "Store your inventory in our modern, secure warehouse facilities designed specifically for e-commerce fulfillment. With flexible storage options and advanced inventory management, you only pay for the space you use.",
    features: [
      "Climate-controlled facilities",
      "24/7 security monitoring and surveillance",
      "Flexible storage options (pallet, shelf, bin)",
      "No long-term contracts required",
      "Easy scalability as your business grows",
      "Organized racking and shelving systems",
      "Hazmat storage available",
      "Temperature-sensitive storage options",
    ],
    benefits: [
      {
        title: "Cost Effective",
        description:
          "Only pay for the space you use with no minimum requirements or long-term commitments.",
      },
      {
        title: "Security",
        description:
          "Your inventory is protected with 24/7 surveillance, alarm systems, and restricted access.",
      },
      {
        title: "Flexibility",
        description:
          "Scale your storage up or down based on seasonal demands and business growth.",
      },
    ],
    process: [
      {
        title: "Send Inventory",
        description:
          "Ship your products to our warehouse using our receiving guidelines and protocols.",
      },
      {
        title: "Receiving & Processing",
        description:
          "We receive, count, inspect, and catalog your inventory in our system.",
      },
      {
        title: "Storage & Organization",
        description:
          "Products are stored in optimal locations for efficient picking and organized by SKU.",
      },
      {
        title: "Ongoing Management",
        description:
          "Monitor your inventory levels in real-time through our dashboard with automatic alerts.",
      },
    ],
    pricing: {
      starting: "$0.40",
      model: "per cubic foot per month",
      includes: [
        "Secure warehouse space",
        "Climate control",
        "24/7 security monitoring",
        "Receiving and processing",
        "Inventory tracking",
        "Monthly inventory reports",
      ],
    },
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    category: "Technology",
    icon: BarChart3,
    shortDescription:
      "Real-time inventory tracking with automated alerts, detailed analytics, and forecasting tools.",
    fullDescription:
      "Our advanced inventory management system gives you complete visibility and control over your stock levels. Track inventory in real-time, receive low-stock alerts, and make data-driven decisions with detailed analytics.",
    features: [
      "Real-time inventory tracking",
      "Automated low-stock alerts",
      "SKU-level tracking and reporting",
      "Multi-location inventory sync",
      "Inventory forecasting tools",
      "Lot and serial number tracking",
      "Expiration date management",
      "Detailed inventory reports and analytics",
    ],
    benefits: [
      {
        title: "Never Stockout",
        description:
          "Automated alerts ensure you reorder before running out of popular items.",
      },
      {
        title: "Data Insights",
        description:
          "Understand sales patterns and trends to make smarter inventory decisions.",
      },
      {
        title: "Reduce Waste",
        description:
          "Track expiration dates and slow-moving items to minimize losses.",
      },
    ],
    process: [
      {
        title: "System Setup",
        description:
          "We configure your inventory parameters, SKUs, and alert thresholds in our system.",
      },
      {
        title: "Real-Time Sync",
        description:
          "Inventory levels update automatically with every order, receipt, and adjustment.",
      },
      {
        title: "Monitoring & Alerts",
        description:
          "Receive notifications when inventory reaches reorder points or other critical levels.",
      },
      {
        title: "Reporting & Analysis",
        description:
          "Access detailed reports to analyze turnover rates, costs, and inventory health.",
      },
    ],
    pricing: {
      starting: "Included",
      model: "with warehousing services",
      includes: [
        "Real-time inventory dashboard",
        "Automated stock alerts",
        "SKU-level tracking",
        "Monthly inventory reports",
        "Forecasting tools",
        "API access for integrations",
      ],
    },
  },
  {
    id: "pick-pack",
    title: "Pick & Pack Services",
    category: "Fulfillment",
    icon: PackageCheck,
    shortDescription:
      "Professional picking, packing, and quality control with custom packaging options available.",
    fullDescription:
      "Our expert pick and pack team ensures every order is accurately picked, carefully packed, and quality-checked before shipping. We offer custom packaging options to match your brand identity.",
    features: [
      "Trained fulfillment specialists",
      "Multi-item order consolidation",
      "Custom packaging and branding",
      "Quality control inspections",
      "Fragile item special handling",
      "Gift wrapping services",
      "Promotional insert inclusion",
      "Kitting and bundling",
    ],
    benefits: [
      {
        title: "Brand Experience",
        description:
          "Custom packaging creates a memorable unboxing experience that builds brand loyalty.",
      },
      {
        title: "Accuracy",
        description:
          "Systematic picking and quality checks ensure every order is correct.",
      },
      {
        title: "Efficiency",
        description:
          "Professional team processes orders quickly without sacrificing quality.",
      },
    ],
    process: [
      {
        title: "Order Assignment",
        description:
          "Orders are assigned to pickers based on SKU locations and order complexity.",
      },
      {
        title: "Picking",
        description:
          "Items are picked from inventory using barcode scanning for accuracy.",
      },
      {
        title: "Packing",
        description:
          "Products are packed securely with appropriate materials and any custom elements.",
      },
      {
        title: "Quality Check",
        description:
          "Final inspection ensures correct items, quantities, and packaging quality.",
      },
    ],
    pricing: {
      starting: "$0.50",
      model: "per order + $0.25 per additional item",
      includes: [
        "Picking labor",
        "Packing labor",
        "Standard packaging materials",
        "Quality control",
        "Barcode scanning",
        "Packing slip printing",
      ],
    },
  },
  {
    id: "shipping-distribution",
    title: "Logistics Services",
    category: "Logistics",
    icon: Truck,
    shortDescription:
      "Discounted shipping rates with all major carriers and intelligent routing for fastest delivery.",
    fullDescription:
      "Leverage our partnerships with major carriers to access deeply discounted shipping rates. Our intelligent routing system automatically selects the best carrier and service level for each order.",
    features: [
      "Partnerships with USPS, UPS, FedEx, DHL",
      "Up to 70% discounted shipping rates",
      "Automatic carrier selection",
      "Multi-carrier rate shopping",
      "Residential and commercial delivery",
      "Signature confirmation options",
      "Insurance coverage available",
      "Saturday and expedited delivery",
    ],
    benefits: [
      {
        title: "Lower Costs",
        description:
          "Save up to 70% on shipping costs with our negotiated carrier rates.",
      },
      {
        title: "Faster Delivery",
        description:
          "Intelligent routing ensures the fastest delivery time for each destination.",
      },
      {
        title: "Flexibility",
        description:
          "Multiple carrier options provide backup plans and service level choices.",
      },
    ],
    process: [
      {
        title: "Rate Shopping",
        description:
          "System automatically compares rates across carriers for each order.",
      },
      {
        title: "Carrier Selection",
        description:
          "Best carrier is selected based on cost, speed, and destination.",
      },
      {
        title: "Label Generation",
        description:
          "Shipping labels are printed and attached to packaged orders.",
      },
      {
        title: "Pickup & Transit",
        description:
          "Carriers pick up daily, with tracking updates provided throughout transit.",
      },
    ],
    pricing: {
      starting: "At Cost",
      model: "pass-through carrier rates (heavily discounted)",
      includes: [
        "Discounted carrier rates",
        "Rate shopping technology",
        "Label printing",
        "Daily carrier pickups",
        "Tracking number generation",
        "Delivery confirmation",
      ],
    },
  },
  {
    id: "returns-management",
    title: "Returns Management",
    category: "Fulfillment",
    icon: RefreshCw,
    shortDescription:
      "Streamlined returns processing with inspection, restocking, and customer notification services.",
    fullDescription:
      "Make returns hassle-free for both you and your customers. Our comprehensive returns management service handles receiving, inspection, restocking, and can even process refunds or exchanges.",
    features: [
      "Dedicated returns processing area",
      "Item inspection and grading",
      "Automated customer notifications",
      "Restock to available inventory",
      "Damaged item disposal",
      "Return analytics and reporting",
      "Exchange order processing",
      "Return label generation",
    ],
    benefits: [
      {
        title: "Happy Customers",
        description:
          "Easy returns process increases customer satisfaction and repeat purchases.",
      },
      {
        title: "Quick Turnaround",
        description:
          "Fast processing means returned items are back in stock and sellable quickly.",
      },
      {
        title: "Full Visibility",
        description:
          "Track return rates, reasons, and trends to improve products and reduce returns.",
      },
    ],
    process: [
      {
        title: "Return Initiated",
        description:
          "Customer initiates return through your system or via return label.",
      },
      {
        title: "Receiving & Inspection",
        description:
          "We receive the return, inspect condition, and document any damage or issues.",
      },
      {
        title: "Processing Decision",
        description:
          "Items are either restocked, exchanged, disposed of, or returned to you based on your rules.",
      },
      {
        title: "Customer Notification",
        description:
          "Customer receives notification of return receipt and any refund or exchange status.",
      },
    ],
    pricing: {
      starting: "$2.50",
      model: "per return processed",
      includes: [
        "Return receiving",
        "Inspection and grading",
        "Restocking to inventory",
        "Disposal of damaged items",
        "Return notification",
        "Return analytics reporting",
      ],
    },
  },
  {
    id: "kitting-assembly",
    title: "Kitting & Assembly",
    category: "Value-Added",
    icon: Combine,
    shortDescription:
      "Product kitting, bundling, and light assembly services for subscription boxes and promotional packages.",
    fullDescription:
      "Create custom product bundles, subscription boxes, or promotional kits with our kitting and assembly services. Perfect for gift sets, sample packs, and bundled offerings.",
    features: [
      "Custom product bundling",
      "Subscription box assembly",
      "Promotional kit creation",
      "Light product assembly",
      "Shrink wrapping and bundling",
      "Multi-SKU kit management",
      "Quality control for kits",
      "Seasonal and promotional kitting",
    ],
    benefits: [
      {
        title: "Increase Sales",
        description:
          "Product bundles and kits often have higher average order values.",
      },
      {
        title: "Save Time",
        description:
          "We handle the labor-intensive work of assembling kits and bundles.",
      },
      {
        title: "Flexibility",
        description:
          "Easily create seasonal bundles or promotional kits without disruption.",
      },
    ],
    process: [
      {
        title: "Kit Definition",
        description:
          "You define what components make up each kit or bundle SKU.",
      },
      {
        title: "Component Picking",
        description:
          "All components for the kit are picked and staged together.",
      },
      {
        title: "Assembly",
        description:
          "Components are assembled, packaged, and labeled as a complete kit.",
      },
      {
        title: "Inventory Addition",
        description:
          "Completed kits are added to inventory and ready to fulfill as single items.",
      },
    ],
    pricing: {
      starting: "$1.50",
      model: "per kit assembled + component fees",
      includes: [
        "Component picking",
        "Assembly labor",
        "Quality control",
        "Kit packaging",
        "SKU labeling",
        "Inventory tracking",
      ],
    },
  },
  {
    id: "custom-packaging",
    title: "Custom Packaging",
    category: "Value-Added",
    icon: Tag,
    shortDescription:
      "Branded packaging, custom boxes, tissue paper, stickers, and personalized inserts for your brand.",
    fullDescription:
      "Elevate your brand with custom packaging that creates a memorable unboxing experience. From custom printed boxes to branded tissue paper and promotional inserts, we handle it all.",
    features: [
      "Custom printed boxes and mailers",
      "Branded tissue paper and wrapping",
      "Custom stickers and labels",
      "Promotional inserts and flyers",
      "Thank you cards",
      "Gift wrapping options",
      "Eco-friendly packaging materials",
      "Seasonal packaging options",
    ],
    benefits: [
      {
        title: "Brand Recognition",
        description:
          "Custom packaging reinforces your brand identity with every order.",
      },
      {
        title: "Customer Delight",
        description:
          "Impressive unboxing experiences lead to social shares and positive reviews.",
      },
      {
        title: "Professional Image",
        description:
          "Quality packaging communicates that you care about every detail.",
      },
    ],
    process: [
      {
        title: "Design Approval",
        description:
          "You provide packaging designs and materials, we review for feasibility.",
      },
      {
        title: "Material Setup",
        description:
          "Custom materials are stocked in our facility and assigned to your account.",
      },
      {
        title: "Fulfillment Integration",
        description:
          "Packing instructions are programmed so your custom materials are used for every order.",
      },
      {
        title: "Quality Assurance",
        description:
          "Regular checks ensure packaging standards are maintained consistently.",
      },
    ],
    pricing: {
      starting: "$0.75",
      model: "per order + material costs",
      includes: [
        "Custom material handling",
        "Special packing procedures",
        "Quality control",
        "Insert inclusion",
        "Material storage",
        "Material inventory tracking",
      ],
    },
  },
  {
    id: "same-day-shipping",
    title: "Same-Day Shipping",
    category: "Premium",
    icon: Zap,
    shortDescription:
      "Orders received by 2 PM ship the same day for the fastest possible delivery to customers.",
    fullDescription:
      "Give your customers the speed they expect with same-day order processing. Orders received by 2 PM are picked, packed, and shipped the same business day.",
    features: [
      "2 PM cutoff time for same-day shipping",
      "Available Monday through Friday",
      "No additional fees for same-day processing",
      "Expedited order prioritization",
      "Multiple daily carrier pickups",
      "Real-time order status updates",
      "Weekend processing available (premium)",
      "Holiday shipping support",
    ],
    benefits: [
      {
        title: "Competitive Edge",
        description:
          "Fast shipping is a major differentiator that helps you compete with large retailers.",
      },
      {
        title: "Customer Satisfaction",
        description:
          "Customers receive orders faster, leading to higher satisfaction and repeat purchases.",
      },
      {
        title: "Reduced Inquiries",
        description:
          "Fast fulfillment means fewer 'where is my order' customer service tickets.",
      },
    ],
    process: [
      {
        title: "Order Import",
        description:
          "Orders are imported to our system immediately when placed on your store.",
      },
      {
        title: "Priority Processing",
        description:
          "Orders received by cutoff are prioritized for immediate pick and pack.",
      },
      {
        title: "Same-Day Pickup",
        description:
          "Carriers pick up multiple times daily to ensure same-day orders ship out.",
      },
      {
        title: "In-Transit",
        description:
          "Tracking information is provided and orders move through carrier network.",
      },
    ],
    pricing: {
      starting: "Included",
      model: "in standard fulfillment pricing",
      includes: [
        "Same-day processing",
        "Priority order handling",
        "Multiple daily pickups",
        "No additional fees",
        "Real-time tracking",
        "Cutoff time notifications",
      ],
    },
  },
  {
    id: "international-shipping",
    title: "International Shipping",
    category: "Logistics",
    icon: Globe,
    shortDescription:
      "Global fulfillment to 150+ countries with customs documentation and international compliance.",
    fullDescription:
      "Expand your business globally with our international shipping services. We handle customs documentation, compliance, and partner with carriers experienced in international logistics.",
    features: [
      "Shipping to 150+ countries",
      "Customs documentation preparation",
      "Harmonized code classification",
      "Duty and tax calculation",
      "International carrier partnerships",
      "Landed cost estimation",
      "Restricted item compliance",
      "Country-specific packaging requirements",
    ],
    benefits: [
      {
        title: "Global Reach",
        description:
          "Sell to customers worldwide without dealing with complex international logistics.",
      },
      {
        title: "Compliance",
        description:
          "We handle all customs paperwork and ensure compliance with international regulations.",
      },
      {
        title: "Simplified Process",
        description:
          "International orders are processed just like domestic ones in your system.",
      },
    ],
    process: [
      {
        title: "Order Processing",
        description:
          "International orders are identified and routed for special handling.",
      },
      {
        title: "Customs Documentation",
        description:
          "We prepare all required customs forms, commercial invoices, and declarations.",
      },
      {
        title: "International Shipping",
        description:
          "Orders ship via appropriate international carrier with full tracking.",
      },
      {
        title: "Customs Clearance",
        description:
          "Carriers handle customs clearance and final delivery in destination country.",
      },
    ],
    pricing: {
      starting: "$5.00",
      model: "per international order + shipping costs",
      includes: [
        "Customs documentation",
        "Harmonized code classification",
        "Commercial invoice preparation",
        "International carriers",
        "Tracking to destination",
        "Compliance verification",
      ],
    },
  },
  {
    id: "subscription-fulfillment",
    title: "Subscription Box Fulfillment",
    category: "Specialized",
    icon: ShoppingBag,
    shortDescription:
      "Specialized fulfillment for subscription boxes with recurring order management and custom kitting.",
    fullDescription:
      "Perfect for subscription box businesses, we handle the unique requirements of recurring shipments including kitting, customization, and coordinated monthly shipping.",
    features: [
      "Recurring order management",
      "Custom kit assembly for each cycle",
      "Coordinated shipping dates",
      "Subscriber management integration",
      "Plan variation handling",
      "One-time box additions",
      "Gift subscription support",
      "Seasonal box coordination",
    ],
    benefits: [
      {
        title: "Consistency",
        description:
          "Ensure every subscriber receives the same great experience month after month.",
      },
      {
        title: "Scalability",
        description:
          "Easily scale from 100 to 10,000+ subscribers without operational headaches.",
      },
      {
        title: "Flexibility",
        description:
          "Support multiple subscription tiers and customize boxes per subscriber.",
      },
    ],
    process: [
      {
        title: "Box Curation",
        description: "You select products for the upcoming subscription cycle.",
      },
      {
        title: "Kit Assembly",
        description:
          "We assemble boxes according to your specifications and subscriber variations.",
      },
      {
        title: "Subscriber Sync",
        description:
          "Active subscribers are synced from your subscription platform.",
      },
      {
        title: "Coordinated Shipping",
        description:
          "All boxes ship on schedule, ensuring subscribers receive boxes together.",
      },
    ],
    pricing: {
      starting: "$3.50",
      model: "per subscription box (kitting + fulfillment)",
      includes: [
        "Product kitting and assembly",
        "Subscriber management",
        "Coordinated shipping",
        "Variation handling",
        "Quality control",
        "Tracking and notifications",
      ],
    },
  },
  {
    id: "b2b-fulfillment",
    title: "B2B Fulfillment",
    category: "Specialized",
    icon: Boxes,
    shortDescription:
      "Wholesale and B2B order fulfillment with pallet shipping, EDI integration, and vendor compliance.",
    fullDescription:
      "Fulfill large wholesale orders to retailers and business customers with our B2B fulfillment services. We handle pallet orders, EDI integration, and retailer-specific compliance requirements.",
    features: [
      "Pallet and LTL shipping",
      "EDI integration with retailers",
      "Vendor compliance management",
      "Routing guide compliance",
      "ASN generation",
      "UCC-128 labeling",
      "Appointment scheduling",
      "Bulk order processing",
    ],
    benefits: [
      {
        title: "Retail Ready",
        description:
          "Meet all major retailer requirements and compliance standards.",
      },
      {
        title: "Efficiency",
        description:
          "Process large B2B orders quickly without disrupting D2C fulfillment.",
      },
      {
        title: "Expertise",
        description:
          "We understand retailer routing guides and vendor compliance requirements.",
      },
    ],
    process: [
      {
        title: "Order Receipt",
        description:
          "B2B orders received via EDI, email, or through your system.",
      },
      {
        title: "Compliance Check",
        description:
          "Verify all retailer-specific requirements and routing guides.",
      },
      {
        title: "Picking & Palletizing",
        description:
          "Order is picked, cases labeled per requirements, and palletized.",
      },
      {
        title: "Freight & Delivery",
        description:
          "Freight carrier scheduled for pickup, ASN sent, delivery appointment made.",
      },
    ],
    pricing: {
      starting: "$50",
      model: "per pallet + picking fees",
      includes: [
        "Bulk order picking",
        "Palletizing",
        "UCC-128 labels",
        "ASN generation",
        "EDI integration",
        "Freight coordination",
      ],
    },
  },
  {
    id: "cross-docking",
    title: "Cross-Docking",
    category: "Logistics",
    icon: Container,
    shortDescription:
      "Receive shipments from suppliers and immediately ship to customers without long-term storage.",
    fullDescription:
      "Reduce storage time and costs with cross-docking services. Products received from suppliers are immediately prepped and shipped to end customers or retail locations.",
    features: [
      "Direct supplier-to-customer flow",
      "Minimal storage time",
      "Immediate order processing",
      "Supplier coordination",
      "Quality inspection on receipt",
      "Repackaging if needed",
      "Multi-supplier consolidation",
      "Time-sensitive product handling",
    ],
    benefits: [
      {
        title: "Reduced Costs",
        description:
          "Minimize storage fees by shipping products immediately upon receipt.",
      },
      {
        title: "Faster Delivery",
        description:
          "Products reach customers faster without warehouse delays.",
      },
      {
        title: "Freshness",
        description:
          "Ideal for time-sensitive or perishable products that need quick turnaround.",
      },
    ],
    process: [
      {
        title: "Supplier Shipment",
        description:
          "Supplier ships products directly to our facility with advance notice.",
      },
      {
        title: "Receipt & Inspection",
        description:
          "Products are received, counted, and inspected immediately upon arrival.",
      },
      {
        title: "Repackaging",
        description:
          "Items are repackaged per customer order specifications if needed.",
      },
      {
        title: "Immediate Shipment",
        description:
          "Orders ship same or next day without entering long-term storage.",
      },
    ],
    pricing: {
      starting: "$1.50",
      model: "per item + standard fulfillment",
      includes: [
        "Receiving and inspection",
        "Quality control",
        "Repackaging if needed",
        "Immediate processing",
        "Supplier coordination",
        "Expedited handling",
      ],
    },
  },
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    category: "Logistics",
    icon: Ship,
    shortDescription:
      "Import and export coordination including freight quotes, customs brokerage, and cargo tracking.",
    fullDescription:
      "Navigate the complexities of international freight with our forwarding services. We coordinate ocean and air freight, handle customs brokerage, and ensure your cargo arrives safely.",
    features: [
      "Ocean and air freight options",
      "Customs brokerage",
      "Freight quote comparison",
      "Container loading and unloading",
      "Cargo insurance",
      "Import/export documentation",
      "Freight tracking",
      "Door-to-door service",
    ],
    benefits: [
      {
        title: "Simplified Imports",
        description:
          "One partner handles everything from supplier pickup to warehouse delivery.",
      },
      {
        title: "Cost Savings",
        description:
          "Compare rates across carriers to find the most cost-effective shipping.",
      },
      {
        title: "Expertise",
        description:
          "Navigate customs and compliance with experienced freight forwarding professionals.",
      },
    ],
    process: [
      {
        title: "Shipment Planning",
        description:
          "Work with you to determine best freight method and coordinate with supplier.",
      },
      {
        title: "Freight Booking",
        description:
          "Book cargo space with selected carrier and arrange supplier pickup.",
      },
      {
        title: "Customs & Transit",
        description:
          "Handle all customs documentation and clearance while cargo is in transit.",
      },
      {
        title: "Final Delivery",
        description:
          "Coordinate final mile delivery to our warehouse or your specified location.",
      },
    ],
    pricing: {
      starting: "Custom Quote",
      model: "based on shipment size and route",
      includes: [
        "Freight quotes",
        "Carrier booking",
        "Customs brokerage",
        "Documentation",
        "Cargo tracking",
        "Insurance options",
      ],
    },
  },
  {
    id: "quality-control",
    title: "Quality Control & Inspection",
    category: "Value-Added",
    icon: FileCheck,
    shortDescription:
      "Product inspection, quality checks, and defect identification before items enter inventory or ship.",
    fullDescription:
      "Ensure product quality with our inspection services. We check items upon receipt or before shipping to identify defects, damage, or quality issues.",
    features: [
      "Incoming inventory inspection",
      "Pre-shipment quality checks",
      "Defect identification and documentation",
      "Product photography of issues",
      "Supplier quality reports",
      "Sampling or 100% inspection",
      "Rework and repackaging",
      "Quality metrics and trends",
    ],
    benefits: [
      {
        title: "Prevent Issues",
        description:
          "Catch defects before they reach customers, reducing returns and complaints.",
      },
      {
        title: "Supplier Accountability",
        description:
          "Document quality issues to hold suppliers accountable for improvements.",
      },
      {
        title: "Brand Protection",
        description:
          "Ensure every product meets your quality standards and protects your reputation.",
      },
    ],
    process: [
      {
        title: "Inspection Plan",
        description:
          "Define quality standards and inspection criteria for your products.",
      },
      {
        title: "Product Inspection",
        description:
          "Trained team inspects products according to your specifications.",
      },
      {
        title: "Issue Documentation",
        description:
          "Any defects or issues are photographed and documented in detail.",
      },
      {
        title: "Reporting & Action",
        description:
          "Receive reports on quality issues and we take agreed-upon actions (rework, reject, etc).",
      },
    ],
    pricing: {
      starting: "$0.75",
      model: "per item inspected",
      includes: [
        "Visual inspection",
        "Defect identification",
        "Photo documentation",
        "Quality reporting",
        "Issue tracking",
        "Trend analysis",
      ],
    },
  },
  {
    id: "product-photography",
    title: "Product Photography",
    category: "Value-Added",
    icon: Camera,
    shortDescription:
      "Professional product photography for e-commerce listings, including white background and lifestyle shots.",
    fullDescription:
      "Get professional product images without shipping samples back and forth. Our in-house photography studio can create listing photos, lifestyle shots, and detail images.",
    features: [
      "White background product shots",
      "Lifestyle photography",
      "360-degree product views",
      "Detail and close-up shots",
      "Photo editing and retouching",
      "Consistent styling across products",
      "Props and staging available",
      "Quick turnaround time",
    ],
    benefits: [
      {
        title: "Professional Images",
        description:
          "High-quality photos improve conversion rates and make products more appealing.",
      },
      {
        title: "Convenience",
        description:
          "Products already at our facility, no need to ship samples to photographers.",
      },
      {
        title: "Consistency",
        description:
          "All product images have consistent lighting, angles, and styling.",
      },
    ],
    process: [
      {
        title: "Photography Request",
        description:
          "Submit request specifying products and shot types needed.",
      },
      {
        title: "Staging & Shooting",
        description:
          "Products are pulled from inventory, staged, and photographed in our studio.",
      },
      {
        title: "Editing",
        description: "Images are edited, retouched, and optimized for web use.",
      },
      {
        title: "Delivery",
        description:
          "Final images delivered via cloud storage, ready for your listings.",
      },
    ],
    pricing: {
      starting: "$15",
      model: "per product (includes 5 images)",
      includes: [
        "Product styling",
        "Professional photography",
        "Photo editing",
        "Background removal",
        "Color correction",
        "Digital file delivery",
      ],
    },
  },
  {
    id: "labeling-barcoding",
    title: "Labeling & Barcoding",
    category: "Value-Added",
    icon: PackageOpen,
    shortDescription:
      "Custom label printing, barcode generation, and application for inventory management and compliance.",
    fullDescription:
      "Add labels, barcodes, or stickers to products for inventory tracking, compliance, or branding purposes. We handle label design, printing, and application.",
    features: [
      "Custom label design and printing",
      "Barcode generation (UPC, EAN, SKU)",
      "Label application to products or packaging",
      "Compliance labeling",
      "Multi-language labels",
      "Price tags and hang tags",
      "Promotional stickers",
      "Expiration date labeling",
    ],
    benefits: [
      {
        title: "Compliance",
        description:
          "Ensure products meet retailer or regulatory labeling requirements.",
      },
      {
        title: "Tracking",
        description:
          "Add barcodes for better inventory tracking and scan-ability.",
      },
      {
        title: "Branding",
        description:
          "Apply branded labels to generic products or add promotional stickers.",
      },
    ],
    process: [
      {
        title: "Label Design",
        description:
          "You provide label design or we create based on your requirements.",
      },
      {
        title: "Label Printing",
        description:
          "Labels are printed in required quantities and stored with your inventory.",
      },
      {
        title: "Application",
        description:
          "Labels applied to products during receiving or before fulfillment.",
      },
      {
        title: "Verification",
        description:
          "Quality check ensures labels are correctly placed and scannable.",
      },
    ],
    pricing: {
      starting: "$0.25",
      model: "per label applied + material costs",
      includes: [
        "Label application",
        "Quality control",
        "Material storage",
        "Barcode verification",
        "Label inventory tracking",
        "Compliance verification",
      ],
    },
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    category: "Value-Added",
    icon: User,
    shortDescription:
      "Virtual assistant services to help you with your business needs.",
    fullDescription:
      "Our virtual assistant services can help you with your business needs. We can help you with your accounting, marketing, customer service, and more.",
    features: [
      "Accounting",
      "Marketing",
      "Customer service",
      "Social media management",
      "Email marketing",
      "Search engine optimization",
      "Social media marketing",
    ],
    benefits: [
      {
        title: "Compliance",
        description:
          "Ensure products meet retailer or regulatory labeling requirements.",
      },
      {
        title: "Tracking",
        description:
          "Add barcodes for better inventory tracking and scan-ability.",
      },
      {
        title: "Branding",
        description:
          "Apply branded labels to generic products or add promotional stickers.",
      },
    ],
    process: [
      {
        title: "Label Design",
        description:
          "You provide label design or we create based on your requirements.",
      },
      {
        title: "Label Printing",
        description:
          "Labels are printed in required quantities and stored with your inventory.",
      },
      {
        title: "Application",
        description:
          "Labels applied to products during receiving or before fulfillment.",
      },
      {
        title: "Verification",
        description:
          "Quality check ensures labels are correctly placed and scannable.",
      },
    ],
    pricing: {
      starting: "$0.25",
      model: "per label applied + material costs",
      includes: [
        "Label application",
        "Quality control",
        "Material storage",
        "Barcode verification",
        "Label inventory tracking",
        "Compliance verification",
      ],
    },
  },
  {
    id: "compliance-legal",
    title: "Compliance & Legal Services",
    category: "Value-Added",
    icon: User,
    shortDescription:
      "Compliance and legal services to help you with your business needs.",
    fullDescription:
      "Our compliance and legal services can help you with your business needs. We can help you with your accounting, marketing, customer service, and more.",
    features: [
      "Compliance consulting",
      "Legal consulting",
      "Compliance audits",
      "Compliance training",
      "Compliance reporting",
      "Compliance monitoring",
    ],
    benefits: [
      {
        title: "Compliance",
        description:
          "Ensure products meet retailer or regulatory labeling requirements.",
      },
      {
        title: "Tracking",
        description:
          "Add barcodes for better inventory tracking and scan-ability.",
      },
      {
        title: "Branding",
        description:
          "Apply branded labels to generic products or add promotional stickers.",
      },
    ],
    process: [
      {
        title: "Label Design",
        description:
          "You provide label design or we create based on your requirements.",
      },
      {
        title: "Label Printing",
        description:
          "Labels are printed in required quantities and stored with your inventory.",
      },
      {
        title: "Application",
        description:
          "Labels applied to products during receiving or before fulfillment.",
      },
      {
        title: "Verification",
        description:
          "Quality check ensures labels are correctly placed and scannable.",
      },
    ],
    pricing: {
      starting: "$0.25",
      model: "per label applied + material costs",
      includes: [
        "Label application",
        "Quality control",
        "Material storage",
        "Barcode verification",
        "Label inventory tracking",
        "Compliance verification",
      ],
    },
  },
];
