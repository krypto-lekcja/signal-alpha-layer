import React from 'react';
import { Shield, TrendingUp, Vault, Layers, Users, Briefcase, Building, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "BlindSignals™",
      description: "Forecasts are cryptographically locked until reveal, preventing copycats and frontrunning."
    },
    {
      icon: TrendingUp,
      title: "AlphaScore",
      description: "A transparent, reputation system that tracks creator skill across time horizons and assets."
    },
    {
      icon: Vault,
      title: "SignalVaults",
      description: "Non-custodial smart contracts that route capital directly to creators' signals for automated execution."
    },
    {
      icon: Layers,
      title: "MetaVaults",
      description: "Diversified portfolios that aggregate multiple strategies with risk management built in."
    }
  ];

  const userTypes = [
    {
      icon: Users,
      title: "Creators",
      subtitle: "Forecasters/Strategists",
      description: "Monetize signals, stake for credibility, and earn performance fees.",
      badge: "Creators"
    },
    {
      icon: Briefcase,
      title: "Subscribers",
      subtitle: "Retail/Pro Users",
      description: "Unlock high-quality signals or allocate capital into automated vaults.",
      badge: "Subscribers"
    },
    {
      icon: Building,
      title: "Allocators",
      subtitle: "Funds/DAOs",
      description: "Deploy capital into scalable MetaVault portfolios with risk-controlled exposure.",
      badge: "Allocators"
    },
    {
      icon: Zap,
      title: "Integrators",
      subtitle: "Brokers/Protocols",
      description: "Access AlphaScore and execution APIs to enrich their own products.",
      badge: "Integrators"
    }
  ];

  return (
    <section id="about" className="signal-section bg-gradient-to-b from-background to-card/20">
      <div className="signal-container">
        {/* Main Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            About <span className="signal-text-gradient">SIGNAL</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            SIGNAL is a decentralized intelligence network for trading forecasts. We turn predictions — from 
            crypto to macro, commodities, FX, and RWAs — into verifiable, monetizable, and executable on-chain strategies.
          </p>
        </div>

        {/* What Makes SIGNAL Different */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in-up animate-delay-300">
            <TrendingUp className="inline-block mr-3 text-primary hover-wiggle" size={32} />
            What makes SIGNAL different?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`signal-card hover:signal-glow transition-all duration-300 hover:scale-105 hover-glow-intense animate-fade-in-left animate-delay-${(index + 3) * 100}`}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who is SIGNAL for */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in-up animate-delay-700">
            <Users className="inline-block mr-3 text-primary hover-wiggle" size={32} />
            Who is SIGNAL for?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((user, index) => {
              const Icon = user.icon;
              return (
                <div key={index} className={`signal-card text-center hover:signal-glow transition-all duration-300 hover:scale-105 hover-glow-intense animate-scale-in animate-delay-${(index + 1) * 100}`}>
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-3">
                    {user.badge}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{user.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{user.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{user.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why SIGNAL */}
        <div className="text-center">
          <div className="signal-card max-w-4xl mx-auto hover-glow-intense animate-scale-in animate-delay-1000">
            <div className="flex items-center justify-center mb-6">
              <Shield className="text-primary mr-3 hover-wiggle" size={40} />
              <h3 className="text-2xl md:text-3xl font-bold">Why SIGNAL?</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Because today's trading signal industry is noisy, opaque, and easy to exploit. SIGNAL fixes this 
              with trustless verification, fair monetization, and composable on-chain execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;