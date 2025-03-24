import React, { useState } from 'react';
import { 
  Briefcase, Building, CheckCircle, 
  CreditCard, DollarSign, LineChart, 
  Shield, Users, ChevronRight, Clock,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KenHaTorFinance from './KenHaTorFinance';

const FinancingPaths: React.FC = () => {
  const [activePath, setActivePath] = useState('traditional');
  const [showKenHaTor, setShowKenHaTor] = useState(false);

  const financingPaths = [
    {
      id: 'traditional',
      name: 'Traditional Loan',
      description: 'Conventional financing with set terms and predictable repayment schedules.',
      icon: <CreditCard className="h-5 w-5" />,
      features: [
        'Fixed or variable interest rates',
        'Predictable monthly payments',
        'No equity dilution',
        'Tax-deductible interest',
        'Longer repayment terms available',
      ],
      pros: [
        'Maintain 100% ownership',
        'Predictable payment structure',
        'No interference in business operations',
        'Can help build business credit',
      ],
      cons: [
        'Requires collateral in most cases',
        'May have strict qualification requirements',
        'Fixed obligation regardless of business performance',
        'May have prepayment penalties',
      ],
      stats: [
        { name: 'Interest Rate', value: '3.75% - 6.25%' },
        { name: 'Term Length', value: '5-20 Years' },
        { name: 'Funding Speed', value: '2-4 Weeks' },
      ],
    },
    {
      id: 'equity',
      name: 'Equity Partnership',
      description: 'Bring on partners who invest capital in exchange for ownership shares.',
      icon: <Users className="h-5 w-5" />,
      features: [
        'Exchange ownership for capital',
        'Shared risk among partners',
        'Additional expertise and network',
        'No fixed repayment schedule',
        'Aligned interests for growth',
      ],
      pros: [
        'No debt or fixed payments',
        'Partners bring expertise and connections',
        'Shared risk among multiple stakeholders',
        'Strategic guidance and mentorship',
      ],
      cons: [
        'Dilution of ownership and control',
        'Profit sharing with partners',
        'Potential disagreements on direction',
        'Complex legal documentation',
      ],
      stats: [
        { name: 'Equity Stake', value: '20% - 49%' },
        { name: 'Valuation Range', value: '$2M - $5M' },
        { name: 'Funding Speed', value: '1-3 Months' },
      ],
    },
    {
      id: 'venture',
      name: 'Venture Capital',
      description: 'Professional investors provide funding in exchange for equity and rapid growth.',
      icon: <LineChart className="h-5 w-5" />,
      features: [
        'Large capital infusions',
        'Industry expertise and connections',
        'Multiple funding rounds possible',
        'Focus on rapid scaling',
        'Exit strategy planning',
      ],
      pros: [
        'Access to significant capital',
        'Extensive network and resources',
        'Strategic guidance and industry expertise',
        'Potential for follow-on funding',
      ],
      cons: [
        'Significant equity dilution',
        'Pressure for rapid growth and returns',
        'Loss of some autonomy',
        'Rigorous due diligence process',
      ],
      stats: [
        { name: 'Equity Stake', value: '15% - 30%' },
        { name: 'Expected Return', value: '10x in 5-7 Years' },
        { name: 'Funding Speed', value: '3-6 Months' },
      ],
    },
  ];

  return (
    <section id="financing-paths" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-block mb-3 py-1 px-3 rounded-full bg-finance-accent text-finance-primary text-sm font-medium">
            Explore Options
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Financing Paths</h2>
          <p className="text-muted-foreground">
            Compare different financing approaches to find the optimal solution for your business needs.
          </p>
          <div className="mt-4">
            <Button 
              variant={showKenHaTor ? "default" : "outline"} 
              onClick={() => setShowKenHaTor(!showKenHaTor)}
              className="mr-2"
            >
              {showKenHaTor ? "Hide Ken HaTor Analysis" : "Show Ken HaTor Analysis"}
            </Button>
          </div>
        </div>

        {showKenHaTor ? (
          <KenHaTorFinance />
        ) : (
          <Tabs defaultValue="traditional" value={activePath} onValueChange={setActivePath} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:w-auto">
                {financingPaths.map((path) => (
                  <TabsTrigger 
                    key={path.id} 
                    value={path.id}
                    className="flex items-center space-x-2 px-6"
                  >
                    <span className="hidden md:inline">{path.icon}</span>
                    <span>{path.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {financingPaths.map((path) => (
              <TabsContent key={path.id} value={path.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1">
                    <div className="glass p-6 md:p-8 rounded-xl shadow-lg">
                      <div className="bg-finance-primary text-white p-3 rounded-lg inline-flex items-center space-x-2 mb-4">
                        {path.icon}
                        <span className="font-medium">{path.name}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{path.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {path.stats.map((stat, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-sm text-muted-foreground">{stat.name}</p>
                            <p className="text-lg font-bold">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-finance-primary" />
                          <span>Key Features</span>
                        </h4>
                        <ul className="space-y-2">
                          {path.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 text-finance-success flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-finance-success flex items-center">
                            <Shield className="h-4 w-4 mr-2" />
                            <span>Advantages</span>
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {path.pros.map((pro, index) => (
                              <li key={index} className="flex items-start">
                                <ChevronRight className="h-4 w-4 mr-1 text-finance-success flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-finance-error flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Considerations</span>
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {path.cons.map((con, index) => (
                              <li key={index} className="flex items-start">
                                <ChevronRight className="h-4 w-4 mr-1 text-finance-error flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <Button className="w-full md:w-auto">
                          Explore {path.name}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {path.name}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {path.id === 'traditional' && 
                          "Traditional loans provide predictable financing with fixed terms and regular payment schedules, ideal for businesses with steady cash flow and established credit history."}
                        {path.id === 'equity' && 
                          "Equity partnerships allow you to share both the risk and reward with investors who bring capital, expertise, and connections to help grow your business."}
                        {path.id === 'venture' && 
                          "Venture capital is designed for high-growth startups with scalable business models, providing substantial funding and expertise to accelerate expansion."}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass p-4 rounded-xl flex items-start space-x-3">
                        <div className="bg-finance-accent p-2 rounded-lg">
                          <Building className="h-5 w-5 text-finance-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ideal For</h4>
                          <p className="text-sm text-muted-foreground">
                            {path.id === 'traditional' && "Established businesses with steady revenue"}
                            {path.id === 'equity' && "Growing businesses seeking strategic partners"}
                            {path.id === 'venture' && "High-growth startups with scalable models"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="glass p-4 rounded-xl flex items-start space-x-3">
                        <div className="bg-finance-accent p-2 rounded-lg">
                          <Briefcase className="h-5 w-5 text-finance-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Best Use</h4>
                          <p className="text-sm text-muted-foreground">
                            {path.id === 'traditional' && "Equipment, real estate, working capital"}
                            {path.id === 'equity' && "Expansion, acquisitions, market entry"}
                            {path.id === 'venture' && "Rapid scaling, product development, talent"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="glass p-4 rounded-xl flex items-start space-x-3">
                        <div className="bg-finance-accent p-2 rounded-lg">
                          <DollarSign className="h-5 w-5 text-finance-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Funding Range</h4>
                          <p className="text-sm text-muted-foreground">
                            {path.id === 'traditional' && "$250K - $10M with varying terms"}
                            {path.id === 'equity' && "$1M - $10M based on valuation"}
                            {path.id === 'venture' && "$2M - $50M+ across funding rounds"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="glass p-4 rounded-xl flex items-start space-x-3">
                        <div className="bg-finance-accent p-2 rounded-lg">
                          <LineChart className="h-5 w-5 text-finance-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Growth Impact</h4>
                          <p className="text-sm text-muted-foreground">
                            {path.id === 'traditional' && "Steady, controlled growth with minimal dilution"}
                            {path.id === 'equity' && "Moderate to high growth with shared upside"}
                            {path.id === 'venture' && "Aggressive growth focused on market domination"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default FinancingPaths;
