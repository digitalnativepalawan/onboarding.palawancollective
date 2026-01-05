-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create table for hero app links
CREATE TABLE public.app_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'LayoutDashboard',
  display_order INTEGER NOT NULL DEFAULT 0,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.app_links ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read app links (they're public)
CREATE POLICY "App links are publicly readable"
ON public.app_links
FOR SELECT
USING (true);

-- Allow anyone to insert/update/delete with no auth requirement 
-- (protected by passkey in frontend)
CREATE POLICY "App links can be managed"
ON public.app_links
FOR ALL
USING (true)
WITH CHECK (true);

-- Insert default app links
INSERT INTO public.app_links (name, url, icon, display_order, is_primary) VALUES
('Dashboard', 'https://host.palawancollective.com/transactions', 'LayoutDashboard', 1, true),
('Occupancy Heatmap', 'https://palawancollective.bolt.host/', 'MapPin', 2, false),
('Online Orders', 'https://orderonline.palawancollective.com/', 'ShoppingCart', 3, false),
('OTR Scan', 'https://scan.palawancollective.com/', 'ScanLine', 4, false),
('Timesheet', 'https://timesheet.palawancollective.com/', 'Clock', 5, false),
('Inventory', 'https://inventory.palawancollective.com/', 'Package', 6, false);

-- Create trigger for updated_at
CREATE TRIGGER update_app_links_updated_at
BEFORE UPDATE ON public.app_links
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();