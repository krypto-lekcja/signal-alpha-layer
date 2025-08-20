import React from 'react';
import { Coins, TrendingUp, Lock, Users, Flame, Gift } from 'lucide-react';

const TokenomicsSection = () => {
  const tokenOverview = [
    { label: 'Token Name', value: 'SIGNAL', highlight: false },
    { label: 'Symbol', value: '$SIGNAL', highlight: true },
    { label: 'Total Supply', value: '1,000,000,000 (fixed)', highlight: true },
    { label: 'Type', value: 'ERC-20 (EVM + L2s)', highlight: false },
  ];

  const utilities = [
    { name: 'Staking', icon: Lock },
    { name: 'Fees', icon: Coins },
    { name: 'Governance', icon: Users },
    { name: 'Premium Access', icon: TrendingUp },
    { name: 'Data Licensing', icon: Gift },
  ];

  const valueFlow = [
    {
      icon: Lock,
      title: 'Stake-to-Publish',
      description: 'Creators stake $SIGNAL to post signals → slashed if inaccurate.'
    },
    {
      icon: Coins,
      title: 'Access & Fees',
      description: 'Unlock signals, pay protocol fees, and access premium data with $SIGNAL.'
    },
    {
      icon: Users,
      title: 'Governance',
      description: 'Holders shape fees, listings, treasury, and protocol upgrades.'
    },
    {
      icon: Flame,
      title: 'Buyback & Burn',
      description: 'A share of protocol revenue buys back $SIGNAL → reducing supply.'
    },
    {
      icon: Gift,
      title: 'Incentives',
      description: 'Rewards for top creators, vault performance, and governance participants.'
    }
  ];

  const allocation = [
    { category: 'Community & Creator Incentives', percentage: 35, notes: '6-mo bootstrap → 3-yr linear release' },
    { category: 'Ecosystem Growth & Partnerships', percentage: 15, notes: 'BizDev, integrations, RWA pilots' },
    { category: 'Team & Advisors', percentage: 15, notes: '12-mo cliff → 36-mo linear vesting' },
    { category: 'Investors (Seed & Private)', percentage: 15, notes: '6–24 mo linear unlock, low initial float' },
    { category: 'Treasury / DAO Reserves', percentage: 10, notes: 'Governance-controlled grants & ops' },
    { category: 'Liquidity & Market Making', percentage: 10, notes: 'CEX/DEX liquidity, price stability' },
  ];

  const saleStrategy = [
    { phase: 'Pre-seed', amount: '$300k', status: 'completed', description: 'Equity/SAFE' },
    { phase: 'Public/Private Sale', amount: '$3M - $5M', status: 'Within 6-9 months', description: 'Soft to Hard Cap' },
    { phase: 'Initial Circulating', amount: '~10-12% at TGE', status: 'heavily vested', description: 'Sustainability focus' },
  ];

  return (
    <section id="tokenomics" className="signal-section bg-gradient-to-b from-card/20 to-background">
      <div className="signal-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            <span className="signal-text-gradient">SIGNAL</span> Tokenomics
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Token Overview */}
          <div className="signal-card hover-glow-intense animate-fade-in-left animate-delay-200">
            <div className="flex items-center mb-6">
              <Coins className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold">Token Overview</h3>
            </div>
            <div className="space-y-4">
              {tokenOverview.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className={`font-semibold ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Utility:</h4>
              <div className="flex flex-wrap gap-2">
                {utilities.map((utility, index) => {
                  const Icon = utility.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-primary/10 rounded-lg text-primary text-sm font-medium">
                      <Icon size={16} />
                      <span>{utility.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Token Sale Strategy */}
          <div className="signal-card hover-glow-intense animate-fade-in-right animate-delay-300">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold">Token Sale Strategy</h3>
            </div>
            <div className="space-y-4">
              {saleStrategy.map((sale, index) => (
                <div key={index} className="p-4 bg-muted/20 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">{sale.phase}:</span>
                    <span className="text-primary font-bold">{sale.amount}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{sale.description}</div>
                  <div className="text-sm text-secondary">{sale.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Utility & Value Flow */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in-up animate-delay-400">Utility & Value Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueFlow.slice(0, 3).map((flow, index) => {
              const Icon = flow.icon;
              return (
                <div key={index} className={`signal-card hover:signal-glow transition-all duration-300 hover-glow-intense animate-scale-in animate-delay-${(index + 4) * 100}`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl mr-3">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <h4 className="text-lg font-semibold">{flow.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{flow.description}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {valueFlow.slice(3).map((flow, index) => {
              const Icon = flow.icon;
              return (
                <div key={index + 3} className={`signal-card hover:signal-glow transition-all duration-300 hover-glow-intense animate-scale-in animate-delay-${(index + 7) * 100}`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl mr-3">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <h4 className="text-lg font-semibold">{flow.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{flow.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Allocation */}
        <div className="signal-card hover-glow-intense animate-slide-in-bottom animate-delay-600">
          <h3 className="text-2xl font-bold mb-8 text-center">Allocation (1,000,000,000 $SIGNAL)</h3>
          <div className="space-y-4">
            {allocation.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-foreground">{item.category}</span>
                    <span className="text-2xl font-bold text-primary ml-auto md:ml-4">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2 md:mb-0">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:ml-4 md:max-w-xs">
                  {item.notes}
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Streams */}
          <div className="mt-12 p-6 bg-primary/5 rounded-xl border-2 border-primary/20">
            <h4 className="text-xl font-bold mb-4 text-center">Revenue Streams → Token Flows</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><strong className="text-primary">Unlock Fees & Subscriptions</strong> → Protocol cut streamed to treasury.</p>
                <p><strong className="text-primary">Vault Performance Fees</strong> → Split between creator + protocol.</p>
              </div>
              <div className="space-y-2">
                <p><strong className="text-primary">Protocol Treasury Revenue</strong> → Used for buyback/burn or ecosystem incentives.</p>
                <p><strong className="text-primary">Premium Access</strong> → $SIGNAL required for top-tier data + early vault slots.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;