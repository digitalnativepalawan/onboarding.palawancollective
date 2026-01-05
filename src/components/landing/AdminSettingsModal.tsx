import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, Check, X, Star } from "lucide-react";

interface AppLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  display_order: number;
  is_primary: boolean;
}

interface AdminSettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ICON_OPTIONS = [
  "LayoutDashboard",
  "MapPin",
  "ShoppingCart",
  "ScanLine",
  "Clock",
  "Package",
  "Settings",
  "Home",
  "Users",
  "Calendar",
  "FileText",
  "Database",
  "Globe",
  "Mail",
  "Bell",
];

const AdminSettingsModal = ({ open, onOpenChange }: AdminSettingsModalProps) => {
  const [links, setLinks] = useState<AppLink[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: "", url: "", icon: "", is_primary: false });
  const [isAdding, setIsAdding] = useState(false);
  const [newForm, setNewForm] = useState({ name: "", url: "", icon: "LayoutDashboard", is_primary: false });
  const [loading, setLoading] = useState(false);

  const fetchLinks = async () => {
    const { data, error } = await supabase
      .from("app_links")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      toast.error("Failed to load links");
      return;
    }
    setLinks(data || []);
  };

  useEffect(() => {
    if (open) {
      fetchLinks();
    }
  }, [open]);

  const handleEdit = (link: AppLink) => {
    setEditingId(link.id);
    setEditForm({ name: link.name, url: link.url, icon: link.icon, is_primary: link.is_primary });
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;
    setLoading(true);

    const { error } = await supabase
      .from("app_links")
      .update({ 
        name: editForm.name, 
        url: editForm.url, 
        icon: editForm.icon,
        is_primary: editForm.is_primary 
      })
      .eq("id", editingId);

    if (error) {
      toast.error("Failed to update link");
    } else {
      toast.success("Link updated");
      setEditingId(null);
      fetchLinks();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    const { error } = await supabase.from("app_links").delete().eq("id", id);

    if (error) {
      toast.error("Failed to delete link");
    } else {
      toast.success("Link deleted");
      fetchLinks();
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    if (!newForm.name || !newForm.url) {
      toast.error("Name and URL are required");
      return;
    }
    setLoading(true);

    const maxOrder = links.length > 0 ? Math.max(...links.map((l) => l.display_order)) : 0;

    const { error } = await supabase.from("app_links").insert({
      name: newForm.name,
      url: newForm.url,
      icon: newForm.icon,
      is_primary: newForm.is_primary,
      display_order: maxOrder + 1,
    });

    if (error) {
      toast.error("Failed to add link");
    } else {
      toast.success("Link added");
      setNewForm({ name: "", url: "", icon: "LayoutDashboard", is_primary: false });
      setIsAdding(false);
      fetchLinks();
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Manage App Links</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {links.map((link) => (
            <div
              key={link.id}
              className="flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/50"
            >
              {editingId === link.id ? (
                <div className="flex-1 space-y-2">
                  <Input
                    placeholder="Name"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  />
                  <Input
                    placeholder="URL"
                    value={editForm.url}
                    onChange={(e) => setEditForm({ ...editForm, url: e.target.value })}
                  />
                  <select
                    className="w-full p-2 rounded-md border border-border bg-background text-sm"
                    value={editForm.icon}
                    onChange={(e) => setEditForm({ ...editForm, icon: e.target.value })}
                  >
                    {ICON_OPTIONS.map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={editForm.is_primary}
                      onChange={(e) => setEditForm({ ...editForm, is_primary: e.target.checked })}
                    />
                    Primary (highlighted)
                  </label>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleSaveEdit} disabled={loading}>
                      <Check className="w-3 h-3 mr-1" /> Save
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                      <X className="w-3 h-3 mr-1" /> Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium truncate">{link.name}</span>
                      {link.is_primary && <Star className="w-3 h-3 text-primary fill-primary" />}
                    </div>
                    <span className="text-xs text-muted-foreground truncate block">{link.url}</span>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => handleEdit(link)}>
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(link.id)}
                    disabled={loading}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </>
              )}
            </div>
          ))}

          {isAdding ? (
            <div className="p-3 rounded-lg border border-primary/30 bg-primary/5 space-y-2">
              <Label className="text-xs">Add New Link</Label>
              <Input
                placeholder="Name"
                value={newForm.name}
                onChange={(e) => setNewForm({ ...newForm, name: e.target.value })}
              />
              <Input
                placeholder="URL"
                value={newForm.url}
                onChange={(e) => setNewForm({ ...newForm, url: e.target.value })}
              />
              <select
                className="w-full p-2 rounded-md border border-border bg-background text-sm"
                value={newForm.icon}
                onChange={(e) => setNewForm({ ...newForm, icon: e.target.value })}
              >
                {ICON_OPTIONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={newForm.is_primary}
                  onChange={(e) => setNewForm({ ...newForm, is_primary: e.target.checked })}
                />
                Primary (highlighted)
              </label>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleAdd} disabled={loading}>
                  <Plus className="w-3 h-3 mr-1" /> Add
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setIsAdding(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsAdding(true)}
            >
              <Plus className="w-4 h-4 mr-2" /> Add New Link
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminSettingsModal;
