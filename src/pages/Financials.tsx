import React from 'react';
import { ArrowLeft, TrendingUp, DollarSign, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip
} from 'recharts';

const Financials = () => {
  // Revenue projection data
  const revenueData = [
    { year: '2024', revenue: 50000, costs: 35000 },
    { year: '2025', revenue: 250000, costs: 150000 },
    { year: '2026', revenue: 750000, costs: 400000 },
    { year: '2027', revenue: 1800000, costs: 900000 },
    { year: '2028', revenue: 3500000, costs: 1600000 },
  ];

  // Cost structure data
  const costStructureData = [
    { name: 'Development', value: 35, color: '#00ff88' },
    { name: 'Marketing', value: 25, color: '#00cc6a' },
    { name: 'Operations', value: 20, color: '#009950' },
    { name: 'Legal & Compliance', value: 10, color: '#007740' },
    { name: 'Other', value: 10, color: '#005530' },
  ];

  // Key metrics data
  const keyMetrics = [
    { metric: 'Total Revenue (5Y)', value: '$6.35M', growth: '+380%' },
    { metric: 'Net Profit Margin', value: '45%', growth: '+12%' },
    { metric: 'User Acquisition', value: '2.5M', growth: '+450%' },
    { metric: 'Market Cap Target', value: '$50M', growth: 'Goal' },
  ];

  // Financial breakdown table data
  const financialBreakdown = [
    { category: 'Revenue', y1: 50, y2: 250, y3: 750, y4: 1800, y5: 3500 },
    { category: 'Operating Costs', y1: 35, y2: 150, y3: 400, y4: 900, y5: 1600 },
    { category: 'Gross Profit', y1: 15, y2: 100, y3: 350, y4: 900, y5: 1900 },
    { category: 'EBITDA', y1: 10, y2: 75, y3: 280, y4: 720, y5: 1575 },
    { category: 'Net Income', y1: 8, y2: 60, y3: 225, y4: 580, y5: 1260 },
  ];

  // Token distribution data
  const tokenData = [
    { quarter: 'Q1', supply: 1000, burned: 50, staked: 300 },
    { quarter: 'Q2', supply: 2000, burned: 120, staked: 600 },
    { quarter: 'Q3', supply: 3200, burned: 200, staked: 1000 },
    { quarter: 'Q4', supply: 4500, burned: 300, staked: 1500 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="border-b bg-card/50 backdrop-blur-lg sticky top-0 z-40">
        <div className="signal-container">
          <div className="flex items-center gap-4 py-4 px-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">SIGNAL - Financial Projections</h1>
              <p className="text-sm text-muted-foreground">5 Year Strategic Financial Overview</p>
            </div>
          </div>
        </div>
      </div>

      <div className="signal-container py-8 px-4">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="pb-2">
                <CardDescription className="text-xs">{metric.metric}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{metric.value}</span>
                  <span className="text-sm text-green-400">{metric.growth}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Projections */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Revenue Projections</CardTitle>
              <CardDescription>5-Year Revenue and Cost Analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="costsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      fillOpacity={1} 
                      fill="url(#revenueGradient)" 
                      name="Revenue ($)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="costs" 
                      stroke="#ff6b6b" 
                      fillOpacity={1} 
                      fill="url(#costsGradient)" 
                      name="Costs ($)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Cost Structure */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Cost Structure</CardTitle>
              <CardDescription>Operating Expenses Distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={costStructureData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {costStructureData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Breakdown Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="text-primary">Financial Breakdown</CardTitle>
            <CardDescription>Detailed 5-Year Financial Projections (in thousands USD)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 px-4 font-semibold text-primary">Category</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">2024</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">2025</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">2026</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">2027</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">2028</th>
                  </tr>
                </thead>
                <tbody>
                  {financialBreakdown.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{row.category}</td>
                      <td className="text-right py-3 px-4">${row.y1}K</td>
                      <td className="text-right py-3 px-4">${row.y2}K</td>
                      <td className="text-right py-3 px-4">${row.y3}K</td>
                      <td className="text-right py-3 px-4">${row.y4}K</td>
                      <td className="text-right py-3 px-4 text-primary font-semibold">${row.y5}K</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Token Economics */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Token Economics</CardTitle>
              <CardDescription>Quarterly Token Supply & Burn Metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={tokenData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="supply" fill="hsl(var(--primary))" name="Total Supply" />
                    <Bar dataKey="burned" fill="#ff6b6b" name="Tokens Burned" />
                    <Bar dataKey="staked" fill="#4ecdc4" name="Tokens Staked" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Key Assumptions */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Key Assumptions</CardTitle>
              <CardDescription>Strategic Planning Foundations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <TrendingUp className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Market Growth Rate</p>
                    <p className="text-sm text-muted-foreground">25% YoY industry expansion</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Users className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">User Acquisition</p>
                    <p className="text-sm text-muted-foreground">50K new users monthly by Y3</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <DollarSign className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Revenue per User</p>
                    <p className="text-sm text-muted-foreground">$15 average monthly revenue</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Target className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Market Share Target</p>
                    <p className="text-sm text-muted-foreground">5% of addressable market</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment Highlights */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mt-8">
          <CardHeader>
            <CardTitle className="text-primary">Investment Highlights</CardTitle>
            <CardDescription>Why SIGNAL is positioned for success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">380%</div>
                <div className="text-sm font-medium">5-Year Revenue CAGR</div>
                <div className="text-xs text-muted-foreground mt-1">Exponential growth trajectory</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <div className="text-sm font-medium">Net Profit Margin</div>
                <div className="text-xs text-muted-foreground mt-1">Industry-leading efficiency</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">$50M</div>
                <div className="text-sm font-medium">Target Valuation</div>
                <div className="text-xs text-muted-foreground mt-1">Conservative market estimate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Financials;