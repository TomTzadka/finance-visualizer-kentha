import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from 'recharts';
import { ArrowUpRight, Wallet, TrendingUp, Percent, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const FinanceDashboard: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const monthlyData = [
    { name: 'Jan', traditional: 4000, equity: 2400, venture: 1400 },
    { name: 'Feb', traditional: 4200, equity: 2800, venture: 1500 },
    { name: 'Mar', traditional: 4100, equity: 2700, venture: 1600 },
    { name: 'Apr', traditional: 4500, equity: 3000, venture: 1700 },
    { name: 'May', traditional: 4700, equity: 3200, venture: 1900 },
    { name: 'Jun', traditional: 5000, equity: 3500, venture: 2100 },
  ];

  const comparativeData = [
    { name: isRTL ? 'סיכון' : 'Risk', traditional: 30, equity: 60, venture: 85 },
    { name: isRTL ? 'תשואה' : 'Return', traditional: 40, equity: 70, venture: 90 },
    { name: isRTL ? 'זמן' : 'Time', traditional: 60, equity: 50, venture: 40 },
    { name: isRTL ? 'שליטה' : 'Control', traditional: 85, equity: 50, venture: 25 },
  ];

  const allocationData = [
    { name: isRTL ? 'הלוואה מסורתית' : 'Traditional Loan', value: 40, color: '#3273F3' },
    { name: isRTL ? 'שיתוף בהון' : 'Equity Partnership', value: 50, color: '#6FAFFF' },
    { name: isRTL ? 'הון סיכון' : 'Venture Capital', value: 10, color: '#A6D0FF' },
  ];

  const statCards = [
    {
      title: t('Available Credit', 'אשראי זמין'),
      value: '$10M',
      change: '+15%',
      icon: <Wallet className="h-5 w-5" />,
      positive: true
    },
    {
      title: t('Growth Rate', 'שיעור צמיחה'),
      value: '18%',
      change: '+3%',
      icon: <TrendingUp className="h-5 w-5" />,
      positive: true
    },
    {
      title: t('Interest Rate', 'שיעור ריבית'),
      value: '4.5%',
      change: '-0.5%',
      icon: <Percent className="h-5 w-5" />,
      positive: true
    },
    {
      title: t('Term Length', 'משך תקופה'),
      value: t('15 Years', '15 שנה'),
      change: t('Flexible', 'גמיש'),
      icon: <Calendar className="h-5 w-5" />,
      positive: null
    },
  ];

  return (
    <section id="dashboard" className="py-20 bg-subtle-gradient" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('Ken HaTor Financial Dashboard', 'לוח מחוונים פיננסי - קן התור')}
          </h2>
          <p className="text-muted-foreground">
            {t(
              'A comprehensive overview of Ken HaTor\'s financing capabilities and performance metrics, based on its self-financing abilities and banking partnerships.',
              'סקירה מקיפה של יכולות המימון ומדדי הביצוע של קן התור, בהתבסס על מימון עצמי ושיתופי פעולה עם בנקים.'
            )}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {statCards.map((card, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-finance-accent p-2 rounded-lg">
                    <div className="text-finance-primary">{card.icon}</div>
                  </div>
                  {card.positive !== null && (
                    <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-1'} text-sm ${
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
              <CardTitle>{t('Monthly Financing Trends', 'מגמות מימון חודשיות')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: 8, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', border: 'none' }} />
                    <Legend />
                    <Line type="monotone" dataKey="traditional" name={t('Traditional Loan', 'הלוואה מסורתית')} stroke="#3273F3" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="equity" name={t('Equity Partnership', 'שיתוף בהון')} stroke="#6FAFFF" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="venture" name={t('Venture Capital', 'הון סיכון')} stroke="#A6D0FF" strokeWidth={2} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle>{t('Financing Path Comparison', 'השוואת מסלולי מימון')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparativeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: 8, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', border: 'none' }} />
                    <Legend />
                    <Bar dataKey="traditional" name={t('Traditional Loan', 'הלוואה מסורתית')} fill="#3273F3" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="equity" name={t('Equity Partnership', 'שיתוף בהון')} fill="#6FAFFF" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="venture" name={t('Venture Capital', 'הון סיכון')} fill="#A6D0FF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pie Chart */}
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle>{t('Recommended Financing Allocation', 'הקצאת מימון מומלצת')}</CardTitle>
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
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: 8, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', border: 'none' }} />
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
