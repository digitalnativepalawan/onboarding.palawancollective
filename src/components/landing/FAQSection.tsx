import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import FAQAdminModal from "./FAQAdminModal";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  display_order: number;
}

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [adminOpen, setAdminOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchFaqs();

    // Check for admin mode (same as other sections - using keyboard shortcut)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "F") {
        setIsAdmin((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const fetchFaqs = async () => {
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("display_order", { ascending: true });

    if (!error && data) {
      setFaqs(data);
    }
  };

  // Refetch when admin modal closes
  const handleAdminClose = (open: boolean) => {
    setAdminOpen(open);
    if (!open) {
      fetchFaqs();
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="px-5 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 relative">
            <span className="section-tag mb-3">FAQ</span>
            <h2 className="section-title mb-2">Common Questions</h2>
            <p className="section-subtitle mx-auto">
              Quick answers for Palawan resort owners
            </p>
            
            {/* Admin button */}
            {isAdmin && (
              <Button
                variant="outline"
                size="sm"
                className="absolute right-0 top-0"
                onClick={() => setAdminOpen(true)}
              >
                <Settings className="w-4 h-4 mr-1" />
                Manage FAQs
              </Button>
            )}
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${index}`}
                className="border border-border/20 rounded-lg px-4 bg-card/30 data-[state=open]:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-normal text-foreground/90 hover:no-underline hover:text-foreground py-3.5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground/80 leading-relaxed pb-3.5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <FAQAdminModal open={adminOpen} onOpenChange={handleAdminClose} />
    </section>
  );
};

export default FAQSection;
