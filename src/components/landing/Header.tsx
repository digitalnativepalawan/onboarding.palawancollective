import { useState, useEffect } from "react";
import { Github, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminSettingsModal from "./AdminSettingsModal";

const ADMIN_PASSKEY = "5309";

const Header = () => {
  const [manilaTime, setManilaTime] = useState("");
  const [showPasskeyDialog, setShowPasskeyDialog] = useState(false);
  const [showAdminSettings, setShowAdminSettings] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

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

  const handleSettingsClick = () => {
    setPasskey("");
    setError("");
    setShowPasskeyDialog(true);
  };

  const handlePasskeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === ADMIN_PASSKEY) {
      setShowPasskeyDialog(false);
      setShowAdminSettings(true);
      setPasskey("");
      setError("");
    } else {
      setError("Incorrect passkey");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
        <div className="px-5 sm:px-6">
          <div className="flex items-center justify-between h-10">
            <span className="text-xs text-muted-foreground/60">
              Manila · {manilaTime}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSettingsClick}
                className="text-muted-foreground/60 hover:text-foreground transition-colors"
                aria-label="Settings"
              >
                <Settings className="w-4 h-4" />
              </button>
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
        </div>
      </header>

      {/* Passkey Dialog */}
      <Dialog open={showPasskeyDialog} onOpenChange={setShowPasskeyDialog}>
        <DialogContent className="max-w-xs">
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePasskeySubmit} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="passkey">Enter Passkey</Label>
              <Input
                id="passkey"
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="••••"
                autoFocus
              />
              {error && <p className="text-xs text-destructive">{error}</p>}
            </div>
            <Button type="submit" className="w-full">
              Access Settings
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Admin Settings Modal */}
      <AdminSettingsModal
        open={showAdminSettings}
        onOpenChange={setShowAdminSettings}
      />
    </>
  );
};

export default Header;
