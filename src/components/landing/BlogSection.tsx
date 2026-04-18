import { useState } from "react";
import { ArrowRight, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
}

const posts: BlogPost[] = [
  {
    id: 1,
    tag: "Business tips",
    tagColor: "#2dd4bf",
    tagBg: "#0f3b33",
    title: "Why Every Palawan Business Needs a WebApp in 2025",
    excerpt:
      "Tourists book everything online before they arrive. If your business isn't findable and bookable on their phone, you're invisible.",
    date: "April 2025",
    readTime: "3 min read",
    content: [
      "Palawan has become one of the Philippines' most sought-after destinations, and the travelers arriving on its shores are more digitally savvy than ever. Before they even step on the plane, they've already researched accommodations, compared activities, and shortlisted restaurants — all on their smartphones. If your business doesn't show up in that research phase, you've already lost the booking.",
      "A static website or a Facebook page isn't enough anymore. Tourists expect to interact with your business digitally: checking availability, reading menus, booking tours, and paying online. A purpose-built webapp gives them exactly that experience — one that feels professional, loads fast on mobile, and works even on slower island connections.",
      "The difference between a website and a webapp matters here. A website tells people about your business. A webapp lets people do something — book a room, place an order, request a quote. That shift from passive information to active transaction is what converts a curious visitor into a paying customer.",
      "Local businesses across El Nido, Puerto Princesa, and Coron are already seeing the results. A resort with an online booking link gets inquiries at midnight when the owner is asleep. A restaurant with a QR menu turns over tables faster because staff spend less time reciting specials. A transport operator fills vans weeks in advance instead of chasing walk-ins.",
      "The cost of building a webapp has dropped significantly, and the return — in bookings, efficiency, and visibility — is measurable within months. In 2025, a Palawan business without a webapp isn't just behind the times; it's actively losing revenue to competitors who have one.",
    ],
  },
  {
    id: 2,
    tag: "Resort ops",
    tagColor: "#c9a84c",
    tagBg: "#1a1200",
    title: "Running a Small Resort Without Going Crazy",
    excerpt:
      "Juggling bookings, staff, kitchen, and housekeeping across different apps and whiteboards is a recipe for burnout.",
    date: "March 2025",
    readTime: "4 min read",
    content: [
      "Running a small resort in Palawan sounds idyllic from the outside. The reality is a constant juggling act: a guest checking in early, a housekeeping team waiting for room assignments, a kitchen needing tonight's headcount, and a staff schedule that changes every week. Most resort owners manage this with a combination of WhatsApp groups, paper notebooks, and sheer force of will.",
      "The BackOffice webapp was built specifically for this problem. It brings reception, housekeeping, kitchen, bar, payroll, and financial reporting into a single dashboard. Instead of texting the housekeeping team to say which rooms need cleaning, the system updates automatically when a guest checks out. Instead of manually tallying the month's revenue, the P&L report is already there.",
      "One of the most time-consuming tasks for small resort owners is coordinating with channel managers like Cloudbeds. BackOffice connects directly to Cloudbeds, pulling reservation data in so the front desk always has an accurate picture of arrivals and departures. No more cross-referencing two screens or copying booking details by hand.",
      "The payroll module alone saves hours each week. Staff hours are logged through the app, overtime is calculated automatically, and payslips are generated without anyone touching a spreadsheet. For a team of 10–20 staff — typical for a small Palawan resort — this is the difference between a Sunday evening spent with family and a Sunday evening hunched over a laptop.",
      "The goal was never to build something complex. It was to build something that an owner could hand to a front desk clerk on day one, with minimal training, and have it actually reduce chaos rather than add to it. Operations software should make life quieter, not louder.",
    ],
  },
  {
    id: 3,
    tag: "Transportation",
    tagColor: "#378ADD",
    tagBg: "#0c1e36",
    title: "How Transport Operators Can Fill More Seats",
    excerpt:
      "Empty seats on the Puerto Princesa–El Nido route mean lost revenue. Digital booking lets tourists find and book you before they even land.",
    date: "February 2025",
    readTime: "3 min read",
    content: [
      "The Puerto Princesa to El Nido route is one of the most traveled land routes in Palawan, and on any given morning, vans leave with empty seats while tourists scramble at the terminal trying to figure out who has space. The mismatch between supply and demand isn't a capacity problem — it's an information problem.",
      "The Palawan Transit app was built to close that gap. Tourists can browse routes, check departure times, and book seats before they even arrive in Puerto Princesa. Operators list their schedules once and receive bookings automatically. No middlemen, no commission to OTA platforms, no phone calls at 6 a.m.",
      "The app launched with 36 routes seeded across Palawan's major corridors — not just the El Nido run, but routes to Port Barton, Coron, San Vicente, and beyond. Each route is managed by the operator themselves: they update schedules, set prices, and mark seats as available or sold through a simple operator dashboard.",
      "For tourists, the experience mirrors what they already expect from apps like Grab or 12Go — search, select, pay, done. For operators, it means the van is filling up days before departure instead of hours before, which means better planning, less stress, and more revenue per trip.",
      "Digital booking also creates a data trail that operators have never had before. Which routes are most popular? What days see the highest demand? When do cancellations cluster? That information helps operators make smarter scheduling decisions — adding a run on a busy weekend, dropping an underperforming route, or adjusting prices seasonally.",
    ],
  },
  {
    id: 4,
    tag: "Food & orders",
    tagColor: "#f97316",
    tagBg: "#1c0a00",
    title: "Let Your Customers Order from Their Phone",
    excerpt:
      "A QR code on every table. Guests browse the menu, add to cart, and checkout — no waiting for a staff member.",
    date: "January 2025",
    readTime: "2 min read",
    content: [
      "The QR menu has gone from novelty to expectation in the span of a few years. Restaurants that adopted it during the pandemic kept it because it works — guests spend more time browsing a digital menu than a laminated card, and average order values tend to go up when people can see photos and descriptions of every dish.",
      "The Order Online WebApp takes the concept further than a static QR menu. Guests don't just browse — they add items to a cart, submit their order directly to the kitchen, and pay at the table. Staff are notified instantly. The kitchen sees orders in sequence. No order slips lost, no miscommunications, no 'sorry, I didn't catch that.'",
      "For restaurant owners, the backend is where the real value sits. Every item, every category, every modifier is manageable without touching code. Changing the price of a dish, marking something as sold out, or adding a seasonal special takes seconds. The menu updates immediately across every table's QR code.",
      "Revenue reporting is built in. At the end of service, the owner can see exactly what sold, what didn't, and what the average spend per table looked like. Over weeks and months, patterns emerge — which dishes drive the most orders, which nights are slowest, which specials are worth repeating.",
      "For small restaurants and cafes in Palawan — places where the owner is often also the head chef — reducing the cognitive load of service matters enormously. Fewer staff needed to take orders means lower labor costs. Faster table turnover means more covers. A system that just works quietly in the background is exactly what a busy kitchen needs.",
    ],
  },
];

const BlogSection = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 space-y-3">
          <span className="section-tag">From the blog</span>
          <h2 className="section-title">Digital tools for island businesses</h2>
          <p className="section-subtitle">
            Practical guides for resort owners, restaurant operators, transport
            companies, and other businesses building a digital presence in
            Palawan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <button
              key={post.id}
              className="glass-card text-left p-5 flex flex-col gap-3 hover:border-primary/20 transition-all duration-200 hover:-translate-y-px cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              {/* Tag */}
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium self-start"
                style={{ color: post.tagColor, background: post.tagBg }}
              >
                {post.tag}
              </span>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-medium text-foreground leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 bg-background/95 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActivePost(null);
          }}
        >
          <div className="min-h-full flex flex-col items-center px-5 sm:px-6 py-10">
            {/* Close */}
            <div className="w-full max-w-2xl flex justify-end mb-6">
              <button
                onClick={() => setActivePost(null)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <article className="w-full max-w-2xl space-y-6">
              {/* Tag */}
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  color: activePost.tagColor,
                  background: activePost.tagBg,
                }}
              >
                {activePost.tag}
              </span>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-snug">
                {activePost.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                <span>{activePost.date}</span>
                <span>·</span>
                <span>{activePost.readTime}</span>
              </div>

              {/* Body */}
              <div className="space-y-4">
                {activePost.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-base text-foreground/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-border/40">
                <p className="text-sm text-muted-foreground mb-4">
                  Want to build something like this for your business in Palawan?
                </p>
                <Button
                  size="lg"
                  className="gap-2 bg-[#25D366] hover:bg-[#1fb356] text-white border-0"
                  onClick={() =>
                    window.open("https://wa.me/639474443597", "_blank")
                  }
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with us on WhatsApp
                </Button>
              </div>
            </article>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
