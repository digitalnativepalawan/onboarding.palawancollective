-- Create feedback table
CREATE TABLE public.feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL,
  author_name TEXT DEFAULT 'Anonymous',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read feedback (public display)
CREATE POLICY "Anyone can view feedback"
ON public.feedback
FOR SELECT
USING (true);

-- Allow anyone to insert feedback (no auth required for guest feedback)
CREATE POLICY "Anyone can submit feedback"
ON public.feedback
FOR INSERT
WITH CHECK (true);

-- Enable realtime for feedback table
ALTER PUBLICATION supabase_realtime ADD TABLE public.feedback;