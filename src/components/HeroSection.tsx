
import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart2, PieChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (graphicRef.current) {
      observer.observe(graphicRef.current);
    }

    return () => {
      if (graphicRef.current) {
        observer.unobserve(graphicRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:py-32 overflow-hidden bg-subtle-gradient relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-finance-secondary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-finance-primary/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="text-left space-y-6 md:space-y-8">
            <div className="inline-block py-1 px-3 rounded-full bg-finance-accent text-finance-primary text-sm font-medium animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
              Financial Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
              Interactive <span className="text-finance-primary">Finance</span> Visualization
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
              Explore Ken HaTor's financing capabilities and paths through intuitive visualizations and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
              <Button size="lg" className="group">
                Explore Dashboard
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border animate-fade-up opacity-0" style={{ animationDelay: '500ms' }}>
              <div>
                <p className="text-3xl font-bold text-finance-primary">$250M+</p>
                <p className="text-sm text-muted-foreground">Financed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-finance-primary">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-finance-primary">500+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>
          </div>

          {/* Graphic */}
          <div ref={graphicRef} className="opacity-0 relative">
            <div className="relative glass rounded-xl p-6 md:p-8 border border-white/20 shadow-xl card-hover">
              <div className="absolute -top-6 -right-6 bg-finance-primary text-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
                <BarChart2 className="h-5 w-5" />
                <span className="font-medium">Finance Analysis</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Financing Paths</h3>
              
              {/* Charts */}
              <div className="space-y-6">
                {/* Path Comparison */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Traditional Loan</span>
                    <span className="font-medium">43%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-2 bg-finance-graph1 rounded-full" style={{ width: '43%' }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Equity Partnership</span>
                    <span className="font-medium">67%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-2 bg-finance-graph2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Venture Capital</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-2 bg-finance-graph3 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                {/* Bottom Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Interest Rate</h4>
                      <PieChart className="h-5 w-5 text-finance-primary" />
                    </div>
                    <p className="text-2xl font-bold">3.75%</p>
                    <div className="flex items-center mt-1 text-xs text-finance-success">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>5% better than average</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Term Length</h4>
                      <TrendingUp className="h-5 w-5 text-finance-primary" />
                    </div>
                    <p className="text-2xl font-bold">15 Years</p>
                    <div className="flex items-center mt-1 text-xs text-finance-text-light">
                      <span>Flexible options available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-finance-accent rounded-lg transform rotate-6"></div>
            <div className="absolute -z-10 top-1/4 -right-12 w-24 h-24 bg-finance-secondary/30 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
