import { ArrowRight, Calendar, Utensils, Clock, Receipt, FileText } from "lucide-react";

const flowItems = [
  { icon: Calendar, label: "Bookings", arrow: true, result: "Occupancy & Profit" },
  { icon: Utensils, label: "Orders", arrow: true, result: "Food Cost & Margins" },
  { icon: Clock, label: "Timesheets", arrow: true, result: "Payroll" },
  { icon: Receipt, label: "Receipts", arrow: true, result: "Inventory → Expenses" },
  { icon: FileText, label: "All", arrow: true, result: "Reports & Accountant Export" },
];

const DataFlowSection = () => {
  return (
    <section className="py-10 sm:py-14 bg-background">
      <div className="px-5 sm:px-6 max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-lg sm:text-xl font-medium text-foreground mb-2">
            How your resort data connects
          </h2>
        </div>

        {/* Flow Diagram */}
        <div className="glass-card p-4 sm:p-6">
          <div className="space-y-3">
            {flowItems.map((item, index) => (
              <div 
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/20"
              >
                {/* Source */}
                <div className="flex items-center gap-2 min-w-[100px] sm:min-w-[120px]">
                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground font-medium">{item.label}</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />

                {/* Result */}
                <span className="text-xs sm:text-sm text-muted-foreground flex-1">{item.result}</span>
              </div>
            ))}
          </div>

          {/* Caption */}
          <p className="text-xs text-muted-foreground/80 text-center mt-5 pt-4 border-t border-border/20">
            Everything connects so you see real profit, not just sales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataFlowSection;
