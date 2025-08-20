import React from 'react';
import { CheckCircle, Circle, Target, Rocket, Globe, Crown } from 'lucide-react';

const RoadmapSection = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      timeline: '0-6 months',
      status: 'In Progress',
      icon: Circle,
      items: [
        'Core Protocol Launch: Signal marketplace live (commit–reveal, unlock, staking)',
        'BlindSignals™: Anti-frontrun commit–reveal system with optional encryption',
        'Creator Onboarding: First 50–100 strategists publishing signals',
        'Leaderboards & AlphaScore: Transparent performance metrics on-chain',
        '$300k Pre-seed Raise: Bootstrap team + MVP'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Scaling',
      timeline: '6-12 months',
      status: 'Planned',
      icon: Target,
      items: [
        'SignalVaults: Creator-owned vaults auto-executing revealed signals',
        'Execution Router: Integration with DEX aggregators (Uniswap, 1inch, CoW Swap)',
        'Guardian Safeguards: Circuit breakers, slashing for misreports, oracle diversity',
        'Token Sale (Soft Cap $3M / Hard Cap $5M): Expand runway + ecosystem incentives',
        'First Partnerships: DAOs, funds, API integrators'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Growth',
      timeline: '12-18 months',
      status: 'Planned',
      icon: Rocket,
      items: [
        'MetaVaults: Composable portfolios of multiple SignalVaults',
        'Institutional API & SDK: For funds, brokers, and dashboards',
        'Premium SIGNAL Access: Data licensing + premium creator tiers',
        'Expanded Market Coverage: Crypto, macro, FX, commodities, RWAs',
        'Governance v1 (DAO): Token-holder voting for key protocol parameters'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Expansion',
      timeline: '18-24 months',
      status: 'Planned',
      icon: Globe,
      items: [
        'Cross-Chain Execution: Chainlink CCIP / LayerZero integration',
        'RWA Pilots: Yield strategies tied to tokenized treasuries, credit, or commodities',
        'AI Meta-Signals: Aggregating strategies using machine learning',
        'Treasury Programs: Buyback & burn, incentive pools',
        'Compliance Modules: KYC/whitelisting for RWA vaults'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Maturity',
      timeline: '24+ months',
      status: 'Planned',
      icon: Crown,
      items: [
        'Autonomous Strategy Agents: Fully automated trading vaults',
        'Institutional Adoption: Hedge funds + tradfi allocators moving on-chain',
        'Global Scale: Targeting $2.5B+ AUM and 200k+ subscribers',
        'Governance v2: Modular DAO with parameter caps and safety veto'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'text-primary border-primary bg-primary/10';
      case 'Completed':
        return 'text-green-400 border-green-400 bg-green-400/10';
      default:
        return 'text-muted-foreground border-muted bg-muted/10';
    }
  };

  const getStatusIcon = (status: string) => {
    return status === 'Completed' ? CheckCircle : Circle;
  };

  return (
    <section id="roadmap" className="signal-section bg-gradient-to-b from-background to-card/20">
      <div className="signal-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            <span className="signal-text-gradient">SIGNAL</span> Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Our journey to becoming the leading decentralized hedge fund protocol
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => {
            const StatusIcon = getStatusIcon(phase.status);
            const PhaseIcon = phase.icon;
            
            return (
              <div key={index} className={`signal-card hover:signal-glow transition-all duration-300 hover-glow-intense animate-fade-in-right animate-delay-${(index + 1) * 100}`}>
                <div className="flex items-start space-x-4">
                  {/* Phase Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                      <PhaseIcon className="text-primary" size={32} />
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Phase Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl font-bold signal-text-gradient">{phase.phase}</span>
                          <span className="text-lg">→</span>
                          <span className="text-2xl font-bold">{phase.title}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-muted-foreground">{phase.timeline}</span>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(phase.status)}`}>
                            {phase.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase Items */}
                    <div className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3 group">
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-200" />
                          </div>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="signal-card max-w-4xl mx-auto hover-glow-intense animate-scale-in animate-delay-800">
            <div className="flex items-center justify-center mb-6">
              <Target className="text-primary mr-3 hover-wiggle" size={40} />
              <h3 className="text-2xl md:text-3xl font-bold">Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By Year 5, SIGNAL becomes the leading decentralized hedge fund protocol, powering forecasts 
              and execution across crypto, macro, FX, RWAs, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;