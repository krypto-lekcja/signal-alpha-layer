import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Zap, ArrowRight, Mail, MessageCircle } from 'lucide-react';

interface EarlyAccessFormProps {
  children: React.ReactNode;
}

const EarlyAccessForm: React.FC<EarlyAccessFormProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [telegramHandle, setTelegramHandle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email && !telegramHandle) {
      toast({
        title: "Missing Information",
        description: "Please provide either an email address or Telegram handle.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('early_access_signups')
        .insert({
          email: email || null,
          telegram_handle: telegramHandle || null,
        });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Welcome to the Signal early access!",
        description: "We'll reach out to you soon with exclusive updates.",
      });
      
      setIsOpen(false);
      setEmail('');
      setTelegramHandle('');
    } catch (error) {
      console.error('Error saving signup:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Join Early Access
          </DialogTitle>
          <DialogDescription>
            Get exclusive access to SIGNAL's alpha platform and be the first to receive actionable DeFi intelligence.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex-1 h-px bg-border"></div>
            <span>OR</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telegram" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Telegram Handle
            </Label>
            <Input
              id="telegram"
              type="text"
              placeholder="@yourusername"
              value={telegramHandle}
              onChange={(e) => setTelegramHandle(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            variant="signal"
          >
            {isSubmitting ? (
              "Joining..."
            ) : (
              <>
                Join Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessForm;