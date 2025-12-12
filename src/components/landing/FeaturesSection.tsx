import { 
  LayoutDashboard, 
  Clock, 
  Utensils, 
  MessageCircle, 
  ScanLine, 
  Settings 
} from "lucide-react";

const tools = [
  {
    icon: LayoutDashboard,
    title: "Occupancy & Profit Dashboard",
    description: "Shows live occupancy, revenue, break-even, expenses, add-ons, and forecasting. Get a complete financial picture at a glance.",
    color: "primary" as const
  },
  {
    icon: Clock,
    title: "Employee Timesheet & Payroll",
    description: "Clock-in → lunch → clock-out, payroll calculations, schedules, and staff task management — all automated.",
    color: "secondary" as const
  },
  {
    icon: Utensils,
    title: "Online Food Ordering System",
    description: "Guest mobile ordering with delivery to units or tables. Admin can set menu items, availability, inventory, and food costs.",
    color: "primary" as const
  },
  {
    icon: MessageCircle,
    title: "BitChat – Offline Bluetooth Messaging",
    description: "A walkie-talkie style Bluetooth mesh chat for staff (and guests in emergencies). Works with no internet, no signal.",
    color: "secondary" as const
  },
  {
    icon: ScanLine,
    title: "OTR Scan – Receipt Scanner",
    description: "Scans handwritten + thermal receipts from markets, sari-sari stores, hardware, and official ORs. Generates clean PDFs.",
    color: "primary" as const
  },
  {
    icon: Settings,
    title: "External / Developer Tools",
    description: "Links for admin-only settings, GitHub, and system management. Full control over your resort ecosystem.",
    color: "secondary" as const
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            Tools
          </span>
          <h2 className="section-title mb-4">Everything You Need</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit designed for modern resort management
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div 
              key={tool.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`icon-wrapper${tool.color === 'secondary' ? '-secondary' : ''} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
