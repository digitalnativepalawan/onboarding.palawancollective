import { useState } from "react";
import { MessageSquare, Send, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast({
        title: "Please enter your feedback",
        description: "We'd love to hear your thoughts!",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission - in production, this would save to database
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate your input and will review it soon."
    });
    
    setFeedback("");
    setIsSubmitting(false);
  };

  return (
    <section id="feedback" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
              Feedback
            </span>
            <h2 className="section-title mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-secondary" />
              We're Continuously Improving
            </h2>
            <p className="section-subtitle mx-auto">
              Share your ideas, issues, or suggestions to help us build a better system
            </p>
          </div>

          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-wrapper shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="What features would you like to see? Any issues to report? We're all ears..."
                  className="w-full h-32 px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Feedback
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
