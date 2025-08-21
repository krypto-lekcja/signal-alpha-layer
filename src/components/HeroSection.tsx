import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import EarlyAccessForm from '@/components/EarlyAccessForm';

const HeroSection = () => {

  const handleLearnMore = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      {/* Animated background elements - Enhanced glow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes with reduced glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/7 rounded-full blur-3xl pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/7 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Additional glow layers */}
        <div className="absolute top-20 right-1/3 w-48 h-48 bg-primary/4 rounded-full blur-2xl pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-secondary/4 rounded-full blur-2xl pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating particles with reduced glow */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/35 rounded-full float-animation animate-glow-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/42 rounded-full float-animation animate-glow-pulse" />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary/49 rounded-full float-animation animate-glow-pulse" />
        <div className="absolute top-60 left-2/3 w-5 h-5 bg-secondary/35 rounded-full float-animation animate-glow-pulse" />
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-primary/42 rounded-full float-animation animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-10 w-4 h-4 bg-secondary/28 rounded-full float-animation animate-glow-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Drifting lines with reduced glow */}
        <div className="absolute top-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-primary/28 to-transparent drift-animation" />
        <div className="absolute top-2/3 w-1 h-24 bg-gradient-to-b from-transparent via-secondary/21 to-transparent drift-animation" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/2 w-1 h-28 bg-gradient-to-b from-transparent via-primary/18 to-transparent drift-animation" style={{ animationDelay: '7s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-7 animate-scale-in">
          <img 
            src="/lovable-uploads/af836c57-b011-43bc-89e0-4b5750675fa8.png" 
            alt="SIGNAL Logo" 
            className="h-20 md:h-24 w-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight animate-fade-in-up animate-delay-200">
          Actionable DeFi Intelligence Layer<span className="text-primary">.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
          Signals. Strategies. Alpha for DeFi and TradFi
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-400">
          <EarlyAccessForm>
            <Button 
              variant="signal" 
              size="lg" 
              className="w-full sm:w-auto hover-glow-intense"
              style={{ border: '1px solid hsl(139 78% 63%)', boxShadow: '0 0 10px hsl(139 78% 63% / 0.3)' }}
            >
              <Zap className="mr-2" size={20} />
              Join Early Access
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </EarlyAccessForm>
          
          <Button 
            variant="signal-outline" 
            size="lg" 
            onClick={handleLearnMore}
            className="w-full sm:w-auto hover-glow-intense"
            style={{ border: '1px solid hsl(139 78% 63%)', boxShadow: '0 0 10px hsl(139 78% 63% / 0.3)' }}
          >
            Learn More
          </Button>
        </div>

        {/* Stats or badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-4 rounded-lg hover-glow-intense animate-fade-in-up animate-delay-500" style={{ border: '1px solid hsl(139 78% 63%)', boxShadow: '0 0 10px hsl(139 78% 63% / 0.3)' }}>
            <div className="text-3xl font-bold text-primary mb-2">1B+</div>
            <div className="text-muted-foreground">Total Supply</div>
          </div>
          <div className="text-center p-4 rounded-lg hover-glow-intense animate-fade-in-up animate-delay-600" style={{ border: '1px solid hsl(139 78% 63%)', boxShadow: '0 0 10px hsl(139 78% 63% / 0.3)' }}>
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-muted-foreground">Market Coverage</div>
          </div>
          <div className="text-center p-4 rounded-lg hover-glow-intense animate-fade-in-up animate-delay-700" style={{ border: '1px solid hsl(139 78% 63%)', boxShadow: '0 0 10px hsl(139 78% 63% / 0.3)' }}>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Live Signals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;