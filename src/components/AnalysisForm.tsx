
import React, { useState } from 'react';
import { 
  Calculator, ChevronDown, 
  Upload, Check, FileText, 
  BarChart2, RefreshCcw, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from "@/components/ui/use-toast";

interface FormValues {
  businessName: string;
  industry: string;
  projectType: string;
  financingNeeds: number;
  timeframe: string;
  annualRevenue: number;
  yearsInBusiness: number;
  creditScore: number;
  existingDebt: number;
  useOfFunds: string;
}

const AnalysisForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    businessName: '',
    industry: '',
    projectType: '',
    financingNeeds: 500000,
    timeframe: '',
    annualRevenue: 1000000,
    yearsInBusiness: 5,
    creditScore: 700,
    existingDebt: 250000,
    useOfFunds: '',
  });
  
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setFormValues({
      ...formValues,
      [name]: value[0],
    });
  };

  const handleFileUpload = () => {
    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
      toast({
        title: "File Uploaded Successfully",
        description: "Your financial report has been uploaded and is ready for analysis.",
      });
    }, 2000);
  };

  const handleAnalyze = () => {
    if (!formValues.businessName) {
      toast({
        title: "Missing Information",
        description: "Please provide your business name before analyzing.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      window.location.href = "#results";
      toast({
        title: "Analysis Complete",
        description: "Your financing analysis results are ready to view.",
      });
    }, 3000);
  };

  return (
    <section id="analysis" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-block mb-3 py-1 px-3 rounded-full bg-finance-accent text-finance-primary text-sm font-medium">
            Get Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Financing Analysis</h2>
          <p className="text-muted-foreground">
            Enter your business details or upload financial documents to receive a personalized financing recommendation.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto card-hover">
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="form" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Enter Details</span>
                </TabsTrigger>
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload Documents</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="form" className="mt-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input 
                        id="businessName"
                        name="businessName"
                        value={formValues.businessName}
                        onChange={handleInputChange}
                        placeholder="Enter your business name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select 
                        value={formValues.industry}
                        onValueChange={(value) => handleSelectChange('industry', value)}
                      >
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="services">Professional Services</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select
                        value={formValues.projectType}
                        onValueChange={(value) => handleSelectChange('projectType', value)}
                      >
                        <SelectTrigger id="projectType">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expansion">Business Expansion</SelectItem>
                          <SelectItem value="startup">Startup Funding</SelectItem>
                          <SelectItem value="acquisition">Acquisition</SelectItem>
                          <SelectItem value="equipment">Equipment Purchase</SelectItem>
                          <SelectItem value="working_capital">Working Capital</SelectItem>
                          <SelectItem value="refinance">Debt Refinancing</SelectItem>
                          <SelectItem value="real_estate">Commercial Real Estate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="useOfFunds">Use of Funds</Label>
                      <Select
                        value={formValues.useOfFunds}
                        onValueChange={(value) => handleSelectChange('useOfFunds', value)}
                      >
                        <SelectTrigger id="useOfFunds">
                          <SelectValue placeholder="Select primary use of funds" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equipment">Equipment Purchase</SelectItem>
                          <SelectItem value="hiring">Hiring/Staffing</SelectItem>
                          <SelectItem value="inventory">Inventory</SelectItem>
                          <SelectItem value="marketing">Marketing/Sales</SelectItem>
                          <SelectItem value="rd">Research & Development</SelectItem>
                          <SelectItem value="real_estate">Real Estate</SelectItem>
                          <SelectItem value="operations">Operations</SelectItem>
                          <SelectItem value="debt">Debt Consolidation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="financingNeeds">Financing Needs</Label>
                        <span className="text-sm text-muted-foreground">${formValues.financingNeeds.toLocaleString()}</span>
                      </div>
                      <Slider
                        id="financingNeeds"
                        min={100000}
                        max={10000000}
                        step={100000}
                        value={[formValues.financingNeeds]}
                        onValueChange={(value) => handleSliderChange('financingNeeds', value)}
                        className="my-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>$100K</span>
                        <span>$10M</span>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeframe">Time Frame</Label>
                      <Select
                        value={formValues.timeframe}
                        onValueChange={(value) => handleSelectChange('timeframe', value)}
                      >
                        <SelectTrigger id="timeframe">
                          <SelectValue placeholder="Select time frame" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (< 30 days)</SelectItem>
                          <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long-term (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="annualRevenue">Annual Revenue</Label>
                        <span className="text-sm text-muted-foreground">${formValues.annualRevenue.toLocaleString()}</span>
                      </div>
                      <Slider
                        id="annualRevenue"
                        min={0}
                        max={10000000}
                        step={100000}
                        value={[formValues.annualRevenue]}
                        onValueChange={(value) => handleSliderChange('annualRevenue', value)}
                        className="my-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>$0</span>
                        <span>$10M+</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="creditScore">Business Credit Score</Label>
                        <span className="text-sm text-muted-foreground">{formValues.creditScore}</span>
                      </div>
                      <Slider
                        id="creditScore"
                        min={300}
                        max={850}
                        step={10}
                        value={[formValues.creditScore]}
                        onValueChange={(value) => handleSliderChange('creditScore', value)}
                        className="my-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Poor</span>
                        <span>Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={handleAnalyze} 
                    disabled={isAnalyzing}
                    className="w-full"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <BarChart2 className="mr-2 h-4 w-4" />
                        Analyze Financing Options
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="upload" className="mt-0">
                <div className="py-10">
                  {!uploadComplete ? (
                    <div className="border-2 border-dashed border-muted rounded-lg p-10 text-center">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-medium mb-2">Upload Financial Documents</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Drag and drop your financial statements, business plan, or other relevant documents.
                      </p>
                      <Button 
                        onClick={handleFileUpload} 
                        disabled={isUploading}
                        variant="outline"
                        className="mx-auto"
                      >
                        {isUploading ? (
                          <>
                            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Select Files
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-4">
                        Supported formats: PDF, XLSX, CSV, DOC (Max 10MB)
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <div className="bg-finance-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-finance-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Upload Complete</h3>
                      <p className="text-muted-foreground mb-6">
                        Your documents have been uploaded successfully and are ready for analysis.
                      </p>
                      <Button 
                        onClick={handleAnalyze} 
                        disabled={isAnalyzing}
                        className="mx-auto"
                      >
                        {isAnalyzing ? (
                          <>
                            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <BarChart2 className="mr-2 h-4 w-4" />
                            Analyze Now
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalysisForm;
