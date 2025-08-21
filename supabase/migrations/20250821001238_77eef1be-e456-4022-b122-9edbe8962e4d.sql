-- Create early access signups table
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT,
  telegram_handle TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Ensure at least one contact method is provided
  CONSTRAINT at_least_one_contact CHECK (
    (email IS NOT NULL AND email != '') OR 
    (telegram_handle IS NOT NULL AND telegram_handle != '')
  )
);

-- Enable Row Level Security (public read/write for signups)
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert signups (public landing page)
CREATE POLICY "Anyone can submit early access signup" 
ON public.early_access_signups 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users can view signups (for admin purposes later)
CREATE POLICY "Authenticated users can view signups" 
ON public.early_access_signups 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create index for better performance
CREATE INDEX idx_early_access_created_at ON public.early_access_signups(created_at DESC);