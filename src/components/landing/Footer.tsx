import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span>for Palawan resorts</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Palawan Collective © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
