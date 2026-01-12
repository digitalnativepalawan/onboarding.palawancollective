import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, Check, X, GripVertical } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  display_order: number;
}

interface FAQAdminModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FAQAdminModal = ({ open, onOpenChange }: FAQAdminModalProps) => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ question: "", answer: "" });
  const [isAdding, setIsAdding] = useState(false);
  const [newForm, setNewForm] = useState({ question: "", answer: "" });
  const [loading, setLoading] = useState(false);

  const fetchFaqs = async () => {
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      toast.error("Failed to load FAQs");
      return;
    }
    setFaqs(data || []);
  };

  useEffect(() => {
    if (open) {
      fetchFaqs();
    }
  }, [open]);

  const handleEdit = (faq: FAQ) => {
    setEditingId(faq.id);
    setEditForm({ question: faq.question, answer: faq.answer });
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;
    setLoading(true);

    const { error } = await supabase
      .from("faqs")
      .update({ 
        question: editForm.question, 
        answer: editForm.answer 
      })
      .eq("id", editingId);

    if (error) {
      toast.error("Failed to update FAQ");
    } else {
      toast.success("FAQ updated");
      setEditingId(null);
      fetchFaqs();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    const { error } = await supabase.from("faqs").delete().eq("id", id);

    if (error) {
      toast.error("Failed to delete FAQ");
    } else {
      toast.success("FAQ deleted");
      fetchFaqs();
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    if (!newForm.question || !newForm.answer) {
      toast.error("Question and answer are required");
      return;
    }
    setLoading(true);

    const maxOrder = faqs.length > 0 ? Math.max(...faqs.map((f) => f.display_order)) : 0;

    const { error } = await supabase.from("faqs").insert({
      question: newForm.question,
      answer: newForm.answer,
      display_order: maxOrder + 1,
    });

    if (error) {
      toast.error("Failed to add FAQ");
    } else {
      toast.success("FAQ added");
      setNewForm({ question: "", answer: "" });
      setIsAdding(false);
      fetchFaqs();
    }
    setLoading(false);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ question: "", answer: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Manage FAQs</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="flex items-start gap-2 p-3 rounded-lg border border-border/50 bg-card/50"
            >
              <div className="flex items-center gap-1 text-muted-foreground pt-1">
                <GripVertical className="w-4 h-4" />
                <span className="text-xs w-4">{index + 1}</span>
              </div>
              
              {editingId === faq.id ? (
                <div className="flex-1 space-y-2">
                  <div>
                    <Label className="text-xs">Question</Label>
                    <Input
                      placeholder="Question"
                      value={editForm.question}
                      onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Answer</Label>
                    <Textarea
                      placeholder="Answer"
                      value={editForm.answer}
                      onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleSaveEdit} disabled={loading}>
                      <Check className="w-3 h-3 mr-1" /> Save
                    </Button>
                    <Button size="sm" variant="ghost" onClick={handleCancelEdit}>
                      <X className="w-3 h-3 mr-1" /> Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{faq.question}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{faq.answer}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button size="icon" variant="ghost" onClick={() => handleEdit(faq)}>
                      <Pencil className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDelete(faq.id)}
                      disabled={loading}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}

          {isAdding ? (
            <div className="p-3 rounded-lg border border-primary/30 bg-primary/5 space-y-2">
              <Label className="text-xs font-medium">Add New FAQ</Label>
              <div>
                <Label className="text-xs">Question</Label>
                <Input
                  placeholder="Enter the question"
                  value={newForm.question}
                  onChange={(e) => setNewForm({ ...newForm, question: e.target.value })}
                />
              </div>
              <div>
                <Label className="text-xs">Answer</Label>
                <Textarea
                  placeholder="Enter the answer"
                  value={newForm.answer}
                  onChange={(e) => setNewForm({ ...newForm, answer: e.target.value })}
                  rows={3}
                />
              </div>
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
              <Plus className="w-4 h-4 mr-2" /> Add New FAQ
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FAQAdminModal;
