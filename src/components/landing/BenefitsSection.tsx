import { TrendingUp, Zap, Bot, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize Revenue",
    description: "Real-time visibility of bookings and occupancy helps you optimize pricing and reduce empty nights."
  },
  {
    icon: Zap,
    title: "Boost Efficiency",
    description: "One ecosystem for staff management, payroll, food service, and guest experience — no more switching apps."
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Automatic sync with booking channels, receipt scanning, and timesheet calculations save hours every day."
  },
  {
    icon: Target,
    title: "Perfect Accuracy",
    description: "Reduce manual workload and errors with OTR Scan receipts and automated payroll calculations."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
              Benefits
            </span>
            <h2 className="section-title mb-4">Why Resort Owners Love It</h2>
            <p className="section-subtitle mx-auto">
              Built specifically for the unique challenges of remote resort management
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="flex gap-5 p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-transparent border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary shrink-0">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mt-12 p-8 rounded-2xl gradient-border overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-3 gradient-text inline-block">
                Offline Communication via BitChat
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When internet fails — and in remote Palawan, it often does — your team stays connected. 
                BitChat uses Bluetooth mesh networking for reliable staff communication, 
                even during storms or outages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
