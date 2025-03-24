
import React from 'react';
import { 
  Check, ChevronRight, Download, 
  ExternalLink, Mail, PieChart, 
  Share2, Shield 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ResultsDisplay: React.FC = () => {
  const recommendedPath = "Hybrid Financing";
  
  const recommendations = [
    {
      rank: 1,
      name: "Hybrid Financing",
      match: 92,
      description: "A combination of traditional loan (60%) and equity investment (40%) to optimize capital structure.",
      interest: "4.75%",
      term: "10 Years",
      equity: "15%",
      amount: "$2,500,000",
      timeline: "45-60 days",
      features: [
        "Lower monthly payments than pure debt",
        "Maintains majority control",
        "Strategic partner expertise",
        "Flexible repayment options",
      ],
    },
    {
      rank: 2,
      name: "SBA Loan",
      match: 85,
      description: "Government-backed loan with favorable terms for qualifying businesses.",
      interest: "5.25%",
      term: "15 Years",
      equity: "0%",
      amount: "$1,750,000",
      timeline: "60-90 days",
      features: [
        "Low down payment",
        "Favorable interest rates",
        "Longer repayment terms",
        "No equity dilution",
      ],
    },
    {
      rank: 3,
      name: "Growth Equity",
      match: 79,
      description: "Minority equity investment from strategic partners focused on business growth.",
      interest: "N/A",
      term: "N/A",
      equity: "25%",
      amount: "$3,000,000",
      timeline: "90-120 days",
      features: [
        "No fixed payments",
        "Strategic partnership",
        "Industry expertise",
        "Follow-on capital potential",
      ],
    },
  ];
  
  const comparisonMetrics = [
    { name: "Monthly Payment", hybrid: "$24,850", sba: "$18,720", equity: "$0" },
    { name: "Total Cost of Capital", hybrid: "7.2%", sba: "5.25%", equity: "25% equity" },
    { name: "Time to Funding", hybrid: "45-60 days", sba: "60-90 days", equity: "90-120 days" },
    { name: "Amount Available", hybrid: "$2.5M", sba: "$1.75M", equity: "$3M" },
    { name: "Ownership Retained", hybrid: "85%", sba: "100%", equity: "75%" },
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-block mb-3 py-1 px-3 rounded-full bg-finance-accent text-finance-primary text-sm font-medium">
            Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Financing Analysis Results</h2>
          <p className="text-muted-foreground">
            Based on your business profile, here are your optimal financing options.
          </p>
        </div>
        
        {/* Summary Card */}
        <Card className="mb-10 overflow-hidden card-hover">
          <div className="bg-finance-primary text-white p-4">
            <div className="container mx-auto">
              <h3 className="text-xl font-medium">Recommended Solution: {recommendedPath}</h3>
            </div>
          </div>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold mb-2">Optimal Financing Structure</h4>
                <p className="text-muted-foreground mb-6">
                  Our analysis suggests a hybrid financing approach combining traditional debt with strategic equity investment for optimal capital efficiency and growth potential.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-card p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="text-lg font-bold">$2,500,000</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Timeline</p>
                    <p className="text-lg font-bold">45-60 days</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Interest</p>
                    <p className="text-lg font-bold">4.75%</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Equity</p>
                    <p className="text-lg font-bold">15%</p>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-finance-primary" />
                  <span>Key Benefits</span>
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {recommendations[0].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-finance-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Request Consultation
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="bg-card p-6 rounded-xl border h-full">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <PieChart className="h-4 w-4 mr-2 text-finance-primary" />
                    <span>Capital Structure</span>
                  </h4>
                  
                  {/* Debt/Equity Chart */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Debt Financing</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-3 mb-3" />
                    
                    <div className="flex justify-between text-sm mb-1">
                      <span>Equity Investment</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="h-3" />
                  </div>
                  
                  <h4 className="font-semibold mb-3 mt-6">Financing Partners</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-finance-primary mt-1">Loan</Badge>
                      <div>
                        <p className="font-medium">First National Bank</p>
                        <p className="text-xs text-muted-foreground">Commercial Term Loan</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-finance-graph2 mt-1">Equity</Badge>
                      <div>
                        <p className="font-medium">Growth Capital Partners</p>
                        <p className="text-xs text-muted-foreground">Minority Growth Investment</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <a href="#" className="text-finance-primary hover:underline flex items-center text-sm">
                      <span>View detailed capital structure</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Options Comparison */}
        <Card className="mb-10 card-hover">
          <CardHeader>
            <CardTitle>Financing Options Comparison</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="px-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Metric</TableHead>
                    <TableHead>Hybrid Financing</TableHead>
                    <TableHead>SBA Loan</TableHead>
                    <TableHead>Growth Equity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonMetrics.map((metric, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{metric.name}</TableCell>
                      <TableCell>{metric.hybrid}</TableCell>
                      <TableCell>{metric.sba}</TableCell>
                      <TableCell>{metric.equity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        {/* All Recommendations */}
        <h3 className="text-2xl font-bold mb-6">All Financing Recommendations</h3>
        <div className="space-y-6">
          {recommendations.map((recommendation) => (
            <Card key={recommendation.rank} className="overflow-hidden card-hover">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Badge 
                          className={recommendation.rank === 1 ? "bg-finance-primary" : "bg-secondary"}
                        >
                          #{recommendation.rank}
                        </Badge>
                        <h4 className="text-xl font-semibold ml-3">{recommendation.name}</h4>
                      </div>
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-finance-accent text-finance-primary">
                          {recommendation.match}% Match
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {recommendation.description}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Amount</p>
                        <p className="font-medium">{recommendation.amount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Interest</p>
                        <p className="font-medium">{recommendation.interest}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Term</p>
                        <p className="font-medium">{recommendation.term}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Equity</p>
                        <p className="font-medium">{recommendation.equity}</p>
                      </div>
                    </div>
                    
                    <h5 className="font-medium mb-2">Key Features</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {recommendation.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="h-4 w-4 mr-2 text-finance-success flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="w-full md:w-1/3 bg-muted p-6 flex flex-col">
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-1">Match Score</div>
                      <div className="flex items-center">
                        <Progress 
                          value={recommendation.match} 
                          className="h-2 flex-grow mr-3" 
                        />
                        <span className="font-bold">{recommendation.match}%</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                      <p className="font-medium">{recommendation.timeline}</p>
                    </div>
                    
                    <div className="mt-auto space-y-3">
                      <Button 
                        className={`w-full ${recommendation.rank !== 1 ? "bg-secondary text-foreground hover:bg-secondary/80" : ""}`}
                      >
                        View Details
                      </Button>
                      
                      {recommendation.rank === 1 && (
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Apply Now
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsDisplay;
