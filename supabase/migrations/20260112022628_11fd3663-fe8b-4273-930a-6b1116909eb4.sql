-- Create FAQs table
CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Allow public read access (FAQs are public content)
CREATE POLICY "FAQs are publicly readable" 
ON public.faqs 
FOR SELECT 
USING (true);

-- Allow all operations for now (admin-only in UI)
CREATE POLICY "Allow all operations on FAQs" 
ON public.faqs 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_faqs_updated_at
BEFORE UPDATE ON public.faqs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default FAQs
INSERT INTO public.faqs (question, answer, display_order) VALUES
('Do I still need Sirvoy?', 'Yes. Sirvoy manages bookings and channel syncing. Palawan Collective sits on top to manage daily operations — staff, payroll, food orders, inventory, and reporting.', 1),
('Will this prevent double bookings?', 'Yes. Sirvoy keeps availability synced across Booking.com, Agoda, and Airbnb in real time.', 2),
('Is this hard to use?', 'No. Built by a Palawan resort owner for other owners. If you can use the Booking.com extranet, you can use this.', 3),
('What data can I see?', 'Occupancy, revenue, trends, guest demographics, staff hours, expenses, food sales, and overall performance — all in one place.', 4),
('Does it work for small resorts?', 'Yes. Designed for eco-lodges, homestays, and boutique resorts — not hotel chains.', 5),
('Can staff use the system?', 'Yes. Staff clock in/out, view schedules, manage food orders, and chat internally. Owners control access to sensitive data.', 6),
('What happens offline?', 'Booking data stays safe in Sirvoy. BitChat allows staff communication even without signal.', 7),
('Do you help with setup?', 'Yes. We assist with connecting Sirvoy, setting up the dashboard, and onboarding step by step.', 8),
('How much does it cost?', 'Sirvoy starts at ~₱1,100/month. Palawan Collective tools are free during the pilot program. No commissions.', 9),
('Who owns my data?', 'You do. Your booking and operational data remains fully yours. No lock-in.', 10);