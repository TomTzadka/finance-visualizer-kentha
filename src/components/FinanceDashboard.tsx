
import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell 
} from 'recharts';
import { ArrowUpRight, Wallet, TrendingUp, Percent, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FinanceDashboard: React.FC = () => {
  // Sample data
  const monthlyData = [
    { name: 'Jan', traditional: 4000, equity: 2400, venture: 1400 },
    { name: 'Feb', traditional: 4200, equity: 2800, venture: 1500 },
    { name: 'Mar', traditional: 4100, equity: 2700, venture: 1600 },
    { name: 'Apr', traditional: 4500, equity: 3000, venture: 1700 },
    { name: 'May', traditional: 4700, equity: 3200, venture: 1900 },
    { name: 'Jun', traditional: 5000, equity: 3500, venture: 2100 },
  ];

  const comparativeData = [
    { name: 'Risk', traditional: 30, equity: 60, venture: 85 },
    { name: 'Return', traditional: 40, equity: 70, venture: 90 },
    { name: 'Time', traditional: 60, equity: 50, venture: 40 },
    { name: 'Control', traditional: 85, equity: 50, venture: 25 },
  ];

  const allocationData = [
    { name: 'Traditional Loan', value: 35, color: '#3273F3' },
    { name: 'Equity Partnership', value: 45, color: '#6FAFFF' },
    { name: 'Venture Capital', value: 20, color: '#A6D0FF' },
  ];

  const statCards = [
    { 
      title: 'Available Credit', 
      value: '$2.5M', 
      change: '+12%',
      icon: <Wallet className="h-5 w-5" />,
      positive: true 
    },
    { 
      title: 'Growth Rate', 
      value: '18.5%', 
      change: '+2.3%',
      icon: <TrendingUp className="h-5 w-5" />,
      positive: true 
    },
    { 
      title: 'Interest Rate', 
      value: '3.75%', 
      change: '-0.25%',
      icon: <Percent className="h-5 w-5" />,
      positive: true 
    },
    { 
      title: 'Term Length', 
      value: '15 Years', 
      change: 'Flexible',
      icon: <Calendar className="h-5 w-5" />,
      positive: null 
    },
  ];

  return (
    <section id="dashboard" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Dashboard</h2>
          <p className="text-muted-foreground">
            A comprehensive overview of Ken HaTor's financing capabilities and performance metrics.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {statCards.map((card, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-finance-accent p-2 rounded-lg">
                    <div className="text-finance-primary">
                      {card.icon}
                    </div>
                  </div>
                  {card.positive !== null && (
                    <div className={`flex items-center space-x-1 text-sm ${
                      card.positive ? 'text-finance-success' : 'text-finance-error'
                    }`}>
                      <span>{card.change}</span>
                      {card.positive && <ArrowUpRight className="h-3 w-3" />}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-medium text-muted-foreground">{card.title}</h3>
                <p className="text-2xl font-bold mt-1">{card.value}</p>
                {card.positive === null && (
                  <p className="text-sm text-muted-foreground mt-1">{card.change}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Line Chart */}
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle>Monthly Financing Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        border: 'none'
                      }} 
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="traditional" 
                      name="Traditional Loan" 
                      stroke="#3273F3" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="equity" 
                      name="Equity Partnership" 
                      stroke="#6FAFFF" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="venture" 
                      name="Venture Capital" 
                      stroke="#A6D0FF" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle>Financing Path Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparativeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        border: 'none'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="traditional" name="Traditional Loan" fill="#3273F3" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="equity" name="Equity Partnership" fill="#6FAFFF" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="venture" name="Venture Capital" fill="#A6D0FF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pie Chart */}
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle>Recommended Financing Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={140}
                    innerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      border: 'none'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinanceDashboard;
