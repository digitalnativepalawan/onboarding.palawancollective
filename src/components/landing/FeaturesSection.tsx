import { 
  LayoutDashboard, 
  Clock, 
  Utensils, 
  MessageCircle, 
  ScanLine, 
  Settings,
  Download
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
    color: "secondary" as const,
    downloadUrl: "https://bitchat.free/"
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
    <section id="features" className="py-16 md:py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            Tools
          </span>
          <h2 className="section-title mb-4">Everything You Need</h2>
          <p className="section-subtitle mx-auto text-base md:text-lg">
            A comprehensive toolkit designed for modern resort management
          </p>
        </div>

        {/* Tools Grid - Mobile-first stacked layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div 
              key={tool.title}
              className="glass-card-hover p-5 md:p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`icon-wrapper${tool.color === 'secondary' ? '-secondary' : ''} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold mb-1.5">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  {'downloadUrl' in tool && tool.downloadUrl && (
                    <a
                      href={tool.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
                    >
                      <Download className="w-4 h-4" />
                      Download BitChat
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
