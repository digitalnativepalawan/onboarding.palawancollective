import { useState, useEffect } from "react";
import { Github } from "lucide-react";

const Header = () => {
  const [manilaTime, setManilaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleString("en-US", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const date = now.toLocaleString("en-US", {
        timeZone: "Asia/Manila",
        month: "short",
        day: "numeric",
      });
      setManilaTime(`${date} · ${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      <div className="px-5 sm:px-6">
        <div className="flex items-center justify-between h-10">
          <span className="text-xs text-muted-foreground/60">
            Manila · {manilaTime}
          </span>
          <a
            href="https://github.com/palawancollective"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/60 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
