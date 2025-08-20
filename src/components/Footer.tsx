import React from 'react';

const Footer = () => {
  return (
    <footer className="signal-section bg-card/50 border-t border-border">
      <div className="signal-container">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-5 animate-bounce-in animate-delay-200">
            <img 
              src="/lovable-uploads/af836c57-b011-43bc-89e0-4b5750675fa8.png" 
              alt="SIGNAL Logo" 
              className="h-8 w-auto hover-wiggle cursor-pointer"
            />
          </div>
          
          <p className="text-muted-foreground mb-4 animate-fade-in-up animate-delay-400">Actionable DeFi Intelligence Layer</p>
          
          <p className="text-sm text-muted-foreground animate-fade-in-up animate-delay-600">
            © 2025 SIGNAL. Building the future of decentralized intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;