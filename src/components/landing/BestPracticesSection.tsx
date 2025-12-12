import { Check } from "lucide-react";

const practices = [
  "Always edit bookings in Sirvoy — dashboard updates automatically",
  "Keep expenses updated monthly for accurate profit tracking",
  "Use task and scheduling tools daily for staff coordination",
  "Monitor food ordering inventory to prevent stockouts",
  "Use OTR Scan for every purchase to avoid lost receipts",
  "Review occupancy heatmap weekly to optimize pricing"
];

const BestPracticesSection = () => {
  return (
    <section id="best-practices" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20 mb-4">
              Tips
            </span>
            <h2 className="section-title mb-4">Best Practices</h2>
            <p className="section-subtitle mx-auto">
              Follow these guidelines to get the most out of your dashboard
            </p>
          </div>

          {/* Checklist */}
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {practices.map((practice, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-foreground/90">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesSection;
