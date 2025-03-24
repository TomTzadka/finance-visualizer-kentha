
import React, { useState } from 'react';
import {
  Building, Briefcase, ChevronRight, 
  Shield, Users, BarChart, Percent, Timer,
  Check, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const KenHaTorFinance: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState('ken-hator');
  
  // Financing options data
  const financingOptions = [
    {
      id: "low-deposit",
      title: "מקדמה נמוכה",
      titleEn: "Low Initial Deposit",
      description: "מסלול המאפשר כניסה לעסקה עם הון עצמי מינימלי ודחיית עיקר התשלום לסוף התהליך",
      descriptionEn: "Enter with minimal equity and defer most payment until project completion",
      depositRange: "7-10%",
      remainingPayment: "90-93%",
      idealFor: "זוגות צעירים, משפרי דיור, משקיעים",
      idealForEn: "Young couples, housing upgraders, investors seeking leverage",
      features: [
        "מקדמה של 7-10% בלבד בחתימת החוזה",
        "יתרת התשלום באכלוס",
        "ערבויות חוק מכר מלאות",
        "אפשרות להתאמה אישית של לוח התשלומים",
      ],
      featuresEn: [
        "Only 7-10% deposit on contract signing",
        "Remaining payment at occupancy",
        "Full bank guarantees",
        "Customizable payment schedule",
      ],
      icon: <Percent className="h-6 w-6" />,
    },
    {
      id: "fixed-rate",
      title: "ריבית קבועה",
      titleEn: "Fixed Rate Mortgage",
      description: "הצעת מימון בריבית קבועה נמוכה לתקופה ארוכה, המקנה ודאות להחזרים החודשיים",
      descriptionEn: "Low fixed-rate financing for long term, providing certainty of monthly payments",
      rate: "2.99%",
      term: "20 שנה",
      termEn: "20 years",
      idealFor: "משפרי דיור, רוכשים בערים מרכזיות",
      idealForEn: "Urban homebuyers sensitive to interest rate fluctuations",
      features: [
        "ריבית קבועה של 2.99% בלבד למשך 20 שנה",
        "חיסכון משמעותי לאורך תקופת המשכנתא",
        "הגנה מפני עליית ריבית בשוק",
        "שיתוף פעולה עם בנקים מובילים",
      ],
      featuresEn: [
        "Fixed rate of only 2.99% for 20 years",
        "Significant savings over mortgage lifetime",
        "Protection against market rate increases",
        "Partnership with leading banks",
      ],
      icon: <Timer className="h-6 w-6" />,
    },
    {
      id: "pre-sale",
      title: "פרי-סייל",
      titleEn: "Pre-Sale Benefits",
      description: "הטבות מיוחדות לרוכשים בשלבים מוקדמים של הפרויקט לפני השקה מלאה",
      descriptionEn: "Special benefits for early buyers before full project launch",
      discount: "5-8%",
      idealFor: "מזהי הזדמנויות, משקיעים",
      idealForEn: "Opportunity seekers, investors, early adopters",
      features: [
        "מחירים אטרקטיביים לרוכשים מוקדמים",
        "אפשרות בחירה של הדירות הטובות ביותר",
        "תנאי מימון מועדפים",
        "אפשרות לשדרוגים ללא עלות",
      ],
      featuresEn: [
        "Attractive pricing for early buyers",
        "First choice of best units",
        "Preferred financing terms",
        "Possibility of free upgrades",
      ],
      icon: <BarChart className="h-6 w-6" />,
    },
  ];
  
  // Companies comparison data
  const companies = [
    {
      id: "ken-hator",
      name: "קן התור",
      nameEn: "Ken HaTor",
      deposit: "7-10%",
      paymentMethod: "גמיש במהלך הבנייה, עיקר הסכום באכלוס",
      paymentMethodEn: "Flexible during construction, majority at occupancy",
      specialBenefits: [
        "משכנתא בריבית קבועה נמוכה (2.99% ל-20 שנה)",
        "מחירי פריסייל למקדימים",
        "התאמות אישיות בלוח התשלומים",
      ],
      specialBenefitsEn: [
        "Low fixed-rate mortgage (2.99% for 20 years)",
        "Pre-sale pricing for early buyers",
        "Personalized payment schedules",
      ],
      targetAudience: "רוכשי דירות באזורי ביקוש (ת\"א) שיכולים לעמוד במחיר אך מעדיפים נזילות; משפרי דיור בערים; משקיעים המחפשים מינוף גבוה עם יזם אמין",
      targetAudienceEn: "Homebuyers in high-demand areas (Tel Aviv) who can afford prices but prefer liquidity; urban housing upgraders; investors seeking high leverage with reliable developer",
      riskLevel: "בינוני",
      riskLevelEn: "Medium",
      riskPercent: 60,
      financialStrength: "גבוהה",
      financialStrengthEn: "High",
      strengthPercent: 85,
    },
    {
      id: "rotshtein",
      name: "רותשטיין",
      nameEn: "Rotshtein",
      deposit: "10-15%",
      paymentMethod: "יתרה באכלוס (85-90%)",
      paymentMethodEn: "Remainder at occupancy (85-90%)",
      specialBenefits: [
        "החזר חודשי לרוכש למשך מספר שנים",
        "פטור מהצמדה למדד התשומות עד המסירה",
        "מבצעים נקודתיים: 10% מקדמה לדירות נבחרות",
      ],
      specialBenefitsEn: [
        "Monthly refund to buyer for several years",
        "Exemption from construction index linkage until delivery",
        "Special offers: 10% deposit for selected apartments",
      ],
      targetAudience: "משפחות וזוגות בערי לווין ופרויקטי התחדשות בפריפריה; מעמד ביניים הזקוק להקלה במימון; גם משקיעים מקומיים במידה מוגבלת",
      targetAudienceEn: "Families in satellite cities and urban renewal projects; middle class needing financing relief; local investors to a limited extent",
      riskLevel: "בינוני-נמוך",
      riskLevelEn: "Medium-Low",
      riskPercent: 45,
      financialStrength: "גבוהה",
      financialStrengthEn: "High",
      strengthPercent: 80,
    },
    {
      id: "sela",
      name: "סלע בינוי",
      nameEn: "Sela Binui",
      deposit: "5%",
      paymentMethod: "95% באכלוס (ללא ריבית/הצמדה)",
      paymentMethodEn: "95% at occupancy (without interest/linkage)",
      specialBenefits: [
        "ויתור מלא על ריבית והצמדה על חלק דחוי",
        "לעיתים בשיתוף עם שותף (איסתא) למימון ההטבה",
        "מבצע תקף בעיקר לדירות אחרונות/אכלוס מיידי",
      ],
      specialBenefitsEn: [
        "Complete waiver of interest and linkage on deferred portion",
        "Sometimes in partnership with Issta for financing benefit",
        "Offer usually valid for last units/immediate occupancy",
      ],
      targetAudience: "רוכשים עם הון עצמי מזערי שלא יכולים לקנות אחרת; צעירים בתחילת הדרך; משקיעים בעלי כושר החזר עתידי שמוכנים למינוף כמעט מלא",
      targetAudienceEn: "Buyers with minimal equity who cannot buy otherwise; young starters; investors with future repayment capacity willing to leverage almost fully",
      riskLevel: "גבוה",
      riskLevelEn: "High",
      riskPercent: 85,
      financialStrength: "בינונית",
      financialStrengthEn: "Medium",
      strengthPercent: 65,
    },
    {
      id: "aura",
      name: "אאורה",
      nameEn: "Aura",
      deposit: "20%",
      paymentMethod: "80% באכלוס",
      paymentMethodEn: "80% at occupancy",
      specialBenefits: [
        "מודל מימון \"שמרני\" הנתמך ע\"י הבנקים",
        "ללא הצמדה על חלק ששולם",
        "אפשרות להטבות נוספות בפרויקטים ספציפיים",
      ],
      specialBenefitsEn: [
        "\"Conservative\" financing model supported by banks",
        "No linkage on paid portion",
        "Possibility of additional benefits in specific projects",
      ],
      targetAudience: "זוגות צעירים זכאי משכנתא סטנדרטית; משפרי דיור עם הון ממכירת דירה קיימת; משקיעים סולידיים שממנפים רק עד 80%",
      targetAudienceEn: "Young couples eligible for standard mortgages; upgraders with equity from existing home sale; conservative investors leveraging only up to 80%",
      riskLevel: "נמוך",
      riskLevelEn: "Low",
      riskPercent: 30,
      financialStrength: "גבוהה",
      financialStrengthEn: "High",
      strengthPercent: 85,
    },
  ];
  
  // Client segments data
  const clientSegments = [
    {
      id: "young-couples",
      name: "זוגות צעירים",
      nameEn: "Young Couples",
      description: "רוכשי דירה ראשונה, לרוב עם הון עצמי מוגבל",
      descriptionEn: "First-time homebuyers, typically with limited equity",
      idealPlans: ["מקדמה נמוכה", "ריבית קבועה"],
      idealPlansEn: ["Low deposit", "Fixed rate mortgage"],
      benefits: [
        "כניסה לדירה עם הון עצמי נמוך (7-10%)",
        "דחיית עיקר התשלום לאכלוס",
        "זמן להתארגנות פיננסית",
        "פריסת תשלומים גמישה",
      ],
      benefitsEn: [
        "Entry with low equity (7-10%)",
        "Deferral of main payment until occupancy",
        "Time for financial organization",
        "Flexible payment schedule",
      ],
      icon: <Users className="h-12 w-12" />,
    },
    {
      id: "upgraders",
      name: "משפרי דיור",
      nameEn: "Housing Upgraders",
      description: "בעלי דירה קיימת המעוניינים לשדרג לדירה טובה יותר",
      descriptionEn: "Existing homeowners looking to upgrade to a better property",
      idealPlans: ["ריבית קבועה", "פרי-סייל"],
      idealPlansEn: ["Fixed rate mortgage", "Pre-sale benefits"],
      benefits: [
        "הגנה מפני עליית ריבית (2.99% קבוע ל-20 שנה)",
        "אפשרות למכור את הדירה הקיימת לקראת האכלוס",
        "גמישות בעיתוי התשלומים",
        "יציבות בהחזרי המשכנתא",
      ],
      benefitsEn: [
        "Protection against interest rate increases (2.99% fixed for 20 years)",
        "Ability to sell existing apartment near occupancy",
        "Flexibility in payment timing",
        "Stability in mortgage repayments",
      ],
      icon: <Building className="h-12 w-12" />,
    },
    {
      id: "investors",
      name: "משקיעים",
      nameEn: "Investors",
      description: "רוכשים להשקעה המחפשים מינוף והזדמנויות",
      descriptionEn: "Buyers seeking leverage and investment opportunities",
      idealPlans: ["מקדמה נמוכה", "פרי-סייל"],
      idealPlansEn: ["Low deposit", "Pre-sale benefits"],
      benefits: [
        "מינוף מקסימלי עם רק 7-10% הון עצמי",
        "אפשרות למכירה לפני אכלוס (אקזיט מהיר)",
        "הטבות פרי-סייל לשיפור תשואה",
        "אפשרות לרכישת מספר יחידות בהון מוגבל",
      ],
      benefitsEn: [
        "Maximum leverage with only 7-10% equity",
        "Opportunity to sell before occupancy (quick exit)",
        "Pre-sale benefits to improve returns",
        "Ability to purchase multiple units with limited capital",
      ],
      icon: <Briefcase className="h-12 w-12" />,
    },
  ];

  // Similarities with competitors
  const similarities = [
    {
      title: "דחיית תשלומים",
      titleEn: "Payment Deferral",
      description: "רוב החברות מציעות לדחות חלק ניכר מהתשלום לסוף, במודל \"שלם מעט עכשיו - הרבה אחר כך\"",
      descriptionEn: "Most companies offer to defer a significant portion of payment until the end, following a \"pay little now - much later\" model",
    },
    {
      title: "הון עצמי נמוך",
      titleEn: "Low Equity",
      description: "המגמה הכללית היא להוריד את רף הכניסה ולאפשר רכישה עם הון עצמי מופחת (5-20%)",
      descriptionEn: "The general trend is to lower the entry threshold and enable purchase with reduced equity (5-20%)",
    },
    {
      title: "ליווי בנקאי",
      titleEn: "Bank Supervision",
      description: "כל החברות פועלות בליווי בנקאי המספק ערבויות חוק מכר ורשת ביטחון לרוכשים",
      descriptionEn: "All companies operate under bank supervision providing legal guarantees and a safety net for buyers",
    },
    {
      title: "התאמה לתנאי שוק",
      titleEn: "Market Adaptation",
      description: "מסלולי המימון המיוחדים נוצרו כתגובה לשוק איטי יותר והפכו למרכיב שיווקי מרכזי",
      descriptionEn: "Special financing routes were created in response to a slower market and became a central marketing component",
    },
  ];

  // Differences from competitors
  const differences = [
    {
      title: "מידת האגרסיביות",
      titleEn: "Level of Aggressiveness",
      description: "קן התור מציעה 7-10%, סלע מציעה 5%, אאורה 20% - הבדלים משקפים סיכון ויציבות",
      descriptionEn: "Ken HaTor offers 7-10%, Sela offers 5%, Aura 20% - differences reflect risk and stability",
    },
    {
      title: "הטבות נלוות",
      titleEn: "Additional Benefits",
      description: "קן התור מתמקדת בריבית קבועה נמוכה, רותשטיין בהחזרים חודשיים - כל חברה והבידול שלה",
      descriptionEn: "Ken HaTor focuses on low fixed interest, Rotshtein on monthly returns - each company has its own differentiation",
    },
    {
      title: "קהל יעד",
      titleEn: "Target Audience",
      description: "קן התור פונה יותר לשוק אורבני איכותי, חברות אחרות לפריפריה - יש בידול סוציו-אקונומי",
      descriptionEn: "Ken HaTor targets more upscale urban market, other companies target periphery - socioeconomic differentiation exists",
    },
    {
      title: "יציבות פיננסית",
      titleEn: "Financial Stability",
      description: "חברות עם גב פיננסי חזק יותר (כמו קן התור) יכולות להציע תנאים גמישים יותר בבטחה",
      descriptionEn: "Companies with stronger financial backing (like Ken HaTor) can safely offer more flexible terms",
    },
  ];

  return (
    <section id="ken-hator-finance" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-block mb-3 py-1 px-3 rounded-full bg-finance-accent text-finance-primary text-sm font-medium">
            Ken HaTor Financing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Estate Financing Solutions</h2>
          <p className="text-muted-foreground">
            Comprehensive analysis of Ken HaTor financing options and comparison with market competitors
          </p>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
              <TabsTrigger value="overview">Company Overview</TabsTrigger>
              <TabsTrigger value="options">Financing Options</TabsTrigger>
              <TabsTrigger value="comparison">Competitor Analysis</TabsTrigger>
              <TabsTrigger value="clients">Client Segments</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardHeader className="bg-finance-primary text-white">
                  <CardTitle>Ken HaTor Financing Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-finance-primary" />
                      Financial Security
                    </h3>
                    <p className="text-muted-foreground">
                      Ken HaTor maintains high self-financing capability alongside long-term collaborations with banks and financial institutions. This enables the company to finance projects with full or partial bank supervision, offering buyers security in the knowledge that the project is backed by a stable financial entity.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <Building className="mr-2 h-5 w-5 text-finance-primary" />
                      Bank Supervision & Guarantees
                    </h3>
                    <p className="text-muted-foreground">
                      In every new residential project, Ken HaTor operates under bank or institutional supervision. This means buyers pay according to construction progress (phased payments) and receive a bank guarantee for each payment under the Sale Law. This supervision protects buyers in case of project failure and ensures funds are used solely for construction purposes.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-finance-primary" />
                      Target Audience Flexibility
                    </h3>
                    <p className="text-muted-foreground">
                      Ken HaTor's flexible terms indicate they target diverse audiences, not just standard first-time homebuyers. Young couples and upgraders with limited equity benefit from arrangements like 10%-90%, allowing them to start the process with a small down payment. The company also explicitly identifies investors as a target audience, with project advertisements stating the opportunity is for both homebuyers and investors.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">Financial Risk Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {companies.map((company) => (
                        <div key={company.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{company.nameEn}</span>
                            <span className="font-medium">{company.riskLevelEn}</span>
                          </div>
                          <Progress 
                            value={company.riskPercent} 
                            className={`h-2 ${company.id === 'ken-hator' ? 'bg-muted' : 'bg-muted/50'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">Financial Partnerships</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Ken HaTor emphasizes close working relationships with banks and financial companies over the years. In practice, this means the company is able to mobilize lending banks to provide credit for projects and for buyers.
                    </p>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Key Financial Collaboration:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <ChevronRight className="h-4 w-4 mr-2 text-finance-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">Fixed-rate mortgage at 2.99% for 20 years (presumably with a major bank that agreed to discounted interest rates)</p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-4 w-4 mr-2 text-finance-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">Possible collaboration with non-bank financial institutions for supplementary equity financing for buyers</p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-4 w-4 mr-2 text-finance-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">Ken HaTor views bank supervision as an integral part of the secure purchase experience</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Financing Options Tab */}
          <TabsContent value="options" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financingOptions.map((option) => (
                <Card key={option.id} className="overflow-hidden">
                  <div className="bg-finance-primary text-white p-4 flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{option.titleEn}</h3>
                      <p className="text-xs opacity-75">{option.title}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-5 space-y-4">
                    <p className="text-sm text-muted-foreground">{option.descriptionEn}</p>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      {option.id === 'low-deposit' && (
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Initial Deposit:</span>
                          <span className="font-bold">{option.depositRange}</span>
                        </div>
                      )}
                      {option.id === 'fixed-rate' && (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Interest Rate:</span>
                            <span className="font-bold">{option.rate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Term:</span>
                            <span className="font-bold">{option.termEn}</span>
                          </div>
                        </div>
                      )}
                      {option.id === 'pre-sale' && (
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Average Discount:</span>
                          <span className="font-bold">{option.discount}</span>
                        </div>
                      )}
                      
                      <div className="mt-2">
                        <span className="text-sm">Ideal For:</span>
                        <p className="font-medium text-sm mt-1">{option.idealForEn}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {option.featuresEn.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="h-4 w-4 mr-2 text-finance-success flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-2">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Payment Flexibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Information indicates that Ken HaTor is willing to adapt the payment structure to the client's profile. The term "flexible payments during construction" appeared in connection with the low down payment track, so that a buyer who can and wants to pay part of the amount before occupancy can do so at a spread convenient to them.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-muted/40 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-finance-primary" />
                      Young Couple Example
                    </h4>
                    <p className="text-sm">
                      A young couple could pay 7% at signing, then add another 3% when their savings plan matures, and defer the remaining 90% to occupancy with a mortgage. This customization gives them breathing room while planning their finances.
                    </p>
                  </div>
                  
                  <div className="bg-muted/40 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-finance-primary" />
                      Investor Example
                    </h4>
                    <p className="text-sm">
                      An investor planning to sell another property could arrange a personalized schedule: 10% at signing, another 20% after selling their current asset, and the remaining 70% at occupancy. This maximizes their investment potential.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Competitor Comparison Tab */}
          <TabsContent value="comparison" className="space-y-8">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Company</TableHead>
                    <TableHead>Initial Deposit</TableHead>
                    <TableHead>Remaining Payment</TableHead>
                    <TableHead className="min-w-[250px]">Special Benefits</TableHead>
                    <TableHead className="min-w-[200px]">Target Audience</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companies.map((company) => (
                    <TableRow key={company.id} className={company.id === 'ken-hator' ? 'bg-finance-accent/20' : ''}>
                      <TableCell className="font-medium">
                        {company.nameEn}
                        {company.id === 'ken-hator' && 
                          <Badge className="ml-2 bg-finance-primary">Featured</Badge>
                        }
                      </TableCell>
                      <TableCell>{company.deposit}</TableCell>
                      <TableCell>{company.paymentMethodEn}</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4 text-sm space-y-1">
                          {company.specialBenefitsEn.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell className="text-sm">{company.targetAudienceEn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similarities Across Companies</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {similarities.map((item, index) => (
                      <div key={index} className="pb-3 border-b last:border-0 last:pb-0">
                        <h4 className="font-medium flex items-center">
                          <Check className="mr-2 h-4 w-4 text-finance-success" />
                          {item.titleEn}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.descriptionEn}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Differentiators</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {differences.map((item, index) => (
                      <div key={index} className="pb-3 border-b last:border-0 last:pb-0">
                        <h4 className="font-medium flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4 text-finance-primary" />
                          {item.titleEn}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.descriptionEn}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Market Position Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Israeli real estate market in 2023-2025 has been characterized by a certain slowdown in sales due to rising interest rates, which has driven many developers to offer creative financing solutions to attract buyers. Ken HaTor is a prominent example of this trend, but it is certainly not the only one.
                </p>
                
                <p>
                  What distinguishes Ken HaTor is a balance between financial creativity and responsible conservatism: it offers customers some of the best terms in the market, but while relying on financial strength and controlled bank partnership - thus conveying security alongside attractiveness. In the eyes of buyers, the important thing is to meet their needs: both Ken HaTor and its competitors currently provide such a response, with slight differences in emphasis.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Client Segments Tab */}
          <TabsContent value="clients" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clientSegments.map((segment) => (
                <Card key={segment.id} className="overflow-hidden">
                  <div className="p-6 flex flex-col items-center text-center border-b">
                    <div className="w-16 h-16 bg-finance-accent rounded-full flex items-center justify-center mb-4">
                      {segment.icon}
                    </div>
                    <h3 className="text-xl font-medium">{segment.nameEn}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{segment.descriptionEn}</p>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Ideal Financing Plans:</h4>
                      <div className="flex flex-wrap gap-2">
                        {segment.idealPlansEn.map((plan, index) => (
                          <Badge key={index} variant="outline">{plan}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {segment.benefitsEn.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="h-4 w-4 mr-2 text-finance-success flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Target Audience Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The findings above indicate that Ken HaTor targets an audience with medium to high economic capability, interested in a new apartment but seeking assistance in the cash flow and financial aspect. These are people who want to upgrade housing in a big city (Tel Aviv-Jaffa, for example) or invest in property, but may not have all the initial capital required immediately. The payment tracks offered "lower the bar" for them.
                </p>
                
                <p className="mb-4">
                  In terms of payment preferences, it is clear that the customers Ken HaTor appeals to prefer payment deferral, stable interest and high certainty. Many of them are willing to pay a little more in the long run (for example, to bear interest or forego a cash discount) in exchange for liquidity now.
                </p>
                
                <p>
                  Psychologically, such buyers seek to reduce personal risks: instead of taking a heavy mortgage from day one, they enter gradually. On the other hand, the level of risk they are willing to take depends on the company's stability - their willingness to pay 7% now stems from the trust that Ken HaTor will meet its obligations.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default KenHaTorFinance;
