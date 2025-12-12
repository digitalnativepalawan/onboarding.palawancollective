import { Webhook, Globe, Zap, RefreshCw, Link2, Database } from "lucide-react";

const features = [
  {
    icon: Webhook,
    title: "Live Webhooks",
    description: "Every booking, modification, or cancellation instantly updates the occupancy heatmap"
  },
  {
    icon: Globe,
    title: "Multi-Channel Sync",
    description: "Connects to Booking.com, Agoda, Airbnb, VRBO, and your direct website"
  },
  {
    icon: Database,
    title: "Data Export",
    description: "Export booking data to analyze guest demographics and patterns"
  },
  {
    icon: Link2,
    title: "10 Webhook Slots",
    description: "Supports up to 10 simultaneous webhooks for SMS, housekeeping, and accounting"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20 mb-4">
              Integration
            </span>
            <h2 className="section-title mb-4">How the System Works</h2>
            <p className="section-subtitle mx-auto">
              Powered by Sirvoy.com, our dashboard receives real-time updates through webhooks
            </p>
          </div>

          {/* Main Card */}
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="icon-wrapper-secondary shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Sirvoy Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This dashboard is <span className="text-secondary font-medium">powered by Sirvoy.com</span> and{" "}
                  <span className="text-primary font-medium">Palawan Collective Inc.</span> — 
                  a comprehensive property management system. Through live webhooks, 
                  your dashboard stays synchronized with all booking channels, providing
                  instant visibility into occupancy and revenue.
                </p>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-muted"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sync Animation */}
            <div className="mt-8 pt-8 border-t border-border/50 flex items-center justify-center gap-3 text-muted-foreground">
              <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm">Syncing with booking channels in real-time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
