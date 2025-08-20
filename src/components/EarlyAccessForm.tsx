import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { X, Mail, MessageCircle, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EarlyAccessFormProps {
  children: React.ReactNode;
}

const EarlyAccessForm = ({ children }: EarlyAccessFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', telegram: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email && !formData.telegram) {
      toast({
        title: "Error",
        description: "Please provide either an email address or Telegram handle.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to the early access list. We'll be in touch soon!",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ email: '', telegram: '' });
        setIsOpen(false);
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-2 border-primary/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Zap className="text-primary" size={24} />
            Join Early Access
          </DialogTitle>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="text-center py-8 animate-scale-in">
            <CheckCircle className="text-primary mx-auto mb-4 animate-bounce-in" size={64} />
            <h3 className="text-xl font-bold mb-2">Welcome to SIGNAL!</h3>
            <p className="text-muted-foreground">
              You're now on the early access list. We'll send you updates and exclusive access when available.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                Get exclusive early access to SIGNAL's decentralized intelligence network
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="text-center text-muted-foreground">
                <span>or</span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram" className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-primary" />
                  Telegram Handle
                </Label>
                <Input
                  id="telegram"
                  type="text"
                  placeholder="@yourusername"
                  value={formData.telegram}
                  onChange={(e) => handleInputChange('telegram', e.target.value)}
                  className="border-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="signal"
                className="flex-1 hover-glow-intense"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Join Now
                    <ArrowRight size={16} />
                  </div>
                )}
              </Button>
            </div>

            <div className="text-xs text-muted-foreground text-center">
              By joining, you agree to receive updates about SIGNAL. We respect your privacy.
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessForm;