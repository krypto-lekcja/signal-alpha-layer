import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText, Presentation, BarChart3 } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'WhitePaper', href: '/whitepaper.pdf', icon: FileText, external: true },
    { label: 'Pitchdeck', href: '/pitchdeck.pdf', icon: Presentation, external: true },
    { label: 'Financials', href: '/financials', icon: BarChart3, external: false },
  ];

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
    } else if (href.startsWith('/')) {
      // Navigate to page route
      window.location.href = href;
    } else {
      // Scroll to section
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b animate-slide-in-bottom" style={{ borderBottomColor: 'hsl(139 78% 63%)', borderBottomWidth: '1px', boxShadow: '0 0 10px hsl(139 78% 63% / 0.3)' }}>
      <div className="signal-container">
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo */}
          <div className="flex items-center animate-bounce-in animate-delay-300">
            <img 
              src="/lovable-uploads/af836c57-b011-43bc-89e0-4b5750675fa8.png" 
              alt="SIGNAL Logo" 
              className="h-7 w-auto hover-wiggle cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className={`flex items-center space-x-2 ${item.external ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-200 hover:scale-105 animate-fade-in-up animate-delay-${(index + 4) * 100}`}
                >
                  {Icon && <Icon size={16} className="hover-wiggle" />}
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary animate-bounce-in animate-delay-1000 hover-wiggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t" style={{ borderTopColor: 'hsl(139 78% 63%)', borderTopWidth: '1px', boxShadow: '0 0 10px hsl(139 78% 63% / 0.3)' }}>
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href, item.external)}
                    className={`flex items-center space-x-3 w-full text-left ${item.external ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted`}
                  >
                    {Icon && <Icon size={18} />}
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;