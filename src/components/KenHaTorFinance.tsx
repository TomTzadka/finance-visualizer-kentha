import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Briefcase, Building, Check, ChevronRight, Percent, Shield, Timer, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const KenHaTorFinance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { t, isRTL } = useLanguage();

  const financingOptions = [
    {
      id: 'low-deposit',
      title: 'מקדמה נמוכה',
      titleEn: 'Low Deposit Path',
      description: 'דחיית רוב התשלום לסוף התקופה',
      descriptionEn: 'Defer most payment until project completion, with minimal upfront commitment.',
      icon: <Percent className="h-5 w-5 text-white" />,
      features: [
        'תשלום של 7-10% בלבד בחתימה',
        'תשלום העיקרי נדחה לאכלוס',
        'ערבות בנקאית על פי חוק המכר',
        'חשיפה פיננסית מופחתת בשלבי הבנייה',
        'אפשרויות להתאמה אישית של לוח תשלומים'
      ],
      featuresEn: [
        'Pay only 7-10% at signing',
        'Main payment deferred to occupancy',
        'Bank guarantees as per Sale Law',
        'Reduced financial exposure during construction',
        'Options for customized payment schedules'
      ],
      idealFor: 'זוגות צעירים עם הון עצמי מוגבל; משפרי דיור המעוניינים לנצל את הזמן למכירת הדירה הנוכחית',
      idealForEn: 'Young couples with limited equity; homebuyers looking to maximize liquidity',
      depositRange: '7-10%'
    },
    {
      id: 'fixed-rate',
      title: 'משכנתא בריבית קבועה',
      titleEn: 'Fixed Rate Mortgage',
      description: 'הבטחת עתיד פיננסי יציב עם ריבית קבועה לטווח ארוך',
      descriptionEn: 'Secure a stable financial future with long-term fixed interest rates.',
      icon: <BarChart className="h-5 w-5 text-white" />,
      features: [
        'ריבית קבועה של 2.99% ל-20 שנה',
        'הגנה מפני עליות ריבית עתידיות',
        'תשלומי משכנתא יציבים וצפויים',
        'חיסכון משמעותי לאורך חיי ההלוואה',
        'שיתוף פעולה עם מוסדות פיננסיים מובילים'
      ],
      featuresEn: [
        '2.99% fixed interest rate for 20 years',
        'Protection against future interest rate increases',
        'Stable and predictable mortgage payments',
        'Significant savings over the life of the loan',
        'Collaboration with leading financial institutions'
      ],
      idealFor: 'משפחות המחפשות ודאות פיננסית; רוכשים הרגישים לשינויי ריבית',
      idealForEn: 'Families seeking financial certainty; buyers sensitive to interest rate changes',
      rate: '2.99%',
      term: '20 שנה',
      termEn: '20 years'
    },
    {
      id: 'pre-sale',
      title: 'רכישה מוקדמת (פרי-סייל)',
      titleEn: 'Early Purchase (Pre-Sale)',
      description: 'הטבות בלעדיות לרוכשים מוקדמים',
      descriptionEn: 'Exclusive benefits for early buyers in the project.',
      icon: <Timer className="h-5 w-5 text-white" />,
      features: [
        'מחירים מופחתים לרוכשים ראשונים',
        'עדיפות בבחירת דירה',
        'אפשרות למקדמה נמוכה במיוחד (7%)',
        'תנאי תשלום מועדפים',
        'פוטנציאל לעליית ערך גבוהה יותר'
      ],
      featuresEn: [
        'Reduced prices for first buyers',
        'Priority in apartment selection',
        'Possibility of especially low down payment (7%)',
        'Preferred payment terms',
        'Higher potential for value appreciation'
      ],
      idealFor: 'משקיעים ארוכי טווח; רוכשים הערוכים להחלטה מהירה',
      idealForEn: 'Long-term investors; buyers prepared for quick decision making',
      discount: '5-10%'
    }
  ];

  const companyRiskProfiles = [
    {
      id: 'ken-hator',
      name: 'קן התור',
      nameEn: 'Ken HaTor',
      riskLevel: 'סיכון נמוך',
      riskLevelEn: 'Low Risk',
      riskPercent: 25
    },
    {
      id: 'sela',
      name: 'סלע בינוי',
      nameEn: 'Sela Construction',
      riskLevel: 'סיכון גבוה',
      riskLevelEn: 'High Risk',
      riskPercent: 85
    },
    {
      id: 'aura',
      name: 'אאורה ישראל',
      nameEn: 'Aura Israel',
      riskLevel: 'סיכון בינוני-נמוך',
      riskLevelEn: 'Medium-Low Risk',
      riskPercent: 40
    },
    {
      id: 'rothstein',
      name: 'רותשטיין',
      nameEn: 'Rothstein',
      riskLevel: 'סיכון בינוני',
      riskLevelEn: 'Medium Risk',
      riskPercent: 55
    }
  ];

  return (
    <section id="financing-options" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge className="mb-4">{t('Financing Solutions', 'פתרונות מימון')}</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('Ken HaTor Financing', 'מסלולי המימון של קן התור')}
          </h2>
          <p className="text-muted-foreground">
            {t(
              'Explore Ken HaTor\'s innovative financing solutions that make property ownership accessible and affordable.',
              'גלה את פתרונות המימון החדשניים של קן התור שהופכים את הבעלות על נכס לנגישה ובמחיר סביר.'
            )}
          </p>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
          <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="overview">{t('Overview', 'סקירה כללית')}</TabsTrigger>
            <TabsTrigger value="options">{t('Financing Options', 'אפשרויות מימון')}</TabsTrigger>
            <TabsTrigger value="comparison">{t('Competitor Comparison', 'השוואת מתחרים')}</TabsTrigger>
            <TabsTrigger value="audience">{t('Target Audience', 'קהל יעד')}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardHeader className="bg-finance-primary text-white">
                  <CardTitle>{t('Ken HaTor Financing Capabilities', 'יכולות המימון של קן התור')}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-finance-primary" />
                      {t('Financial Security', 'ביטחון פיננסי')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(
                        'Ken HaTor maintains high self-financing capability alongside long-term collaborations with banks and financial institutions. This enables the company to finance projects with full or partial bank supervision, offering buyers security in the knowledge that the project is backed by a stable financial entity.',
                        'לחברת קן התור יכולת מימון עצמית גבוהה, לצד שיתופי פעולה ארוכי-טווח עם בנקים וחברות מימון. יכולת זו מאפשרת לחברה לממן פרויקטים בליווי בנקאי מלא או חלקי, ולהציע לרוכשים ביטחון בכך שהפרויקט מלווה בגוף פיננסי יציב.'
                      )}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <Building className="mr-2 h-5 w-5 text-finance-primary" />
                      {t('Bank Supervision & Guarantees', 'ליווי בנקאי וערבויות')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(
                        'In every new residential project, Ken HaTor operates under bank or institutional supervision. This means buyers pay according to construction progress (phased payments) and receive a bank guarantee for each payment under the Sale Law. This supervision protects buyers in case of project failure and ensures funds are used solely for construction purposes.',
                        'בכל פרויקט מגורים חדש, קן התור פועלת תחת ליווי בנקאי או מוסדי. המשמעות היא שהרוכשים משלמים בהתאם לקצב ההתקדמות בבנייה (תשלומים בשלבים), ותמורת כל תשלום מקבלים ערבות בנקאית על פי חוק המכר. צורת ליווי זו מגינה על הרוכשים במקרה של כשל פרויקט, ומבטיחה שהכספים ישמשו את מטרת הבנייה בלבד.'
                      )}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-finance-primary" />
                      {t('Target Audience Flexibility', 'גמישות לקהל היעד')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(
                        'Ken HaTor\'s flexible terms indicate they target diverse audiences, not just standard first-time homebuyers. Young couples and upgraders with limited equity benefit from arrangements like 10%-90%, allowing them to start the process with a small down payment. The company also explicitly identifies investors as a target audience, with project advertisements stating the opportunity is for both homebuyers and investors.',
                        'התנאים הגמישים של קן התור מעידים שהחברה פונה למגוון קהלי יעד, ולא רק לרוכשי דירה ראשונה סטנדרטיים. זוגות צעירים ומשפרי דיור עם הון עצמי מוגבל נהנים ממתווים כמו 10%-90% שמאפשרים להם להתחיל את התהליך עם מקדמה קטנה. החברה גם מזהה במפורש משקיעים כקהל מטרה, כאשר בפרסומי הפרויקטים מצוין שההזדמנות היא לרוכשי בית ולמשקיעים גם יחד.'
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">{t('Financial Risk Profile', 'פרופיל סיכון פיננסי')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {companyRiskProfiles.map((company) => (
                        <div key={company.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{isRTL ? company.name : company.nameEn}</span>
                            <span className="font-medium">{isRTL ? company.riskLevel : company.riskLevelEn}</span>
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
                    <CardTitle className="text-base font-medium">{t('Financial Partnerships', 'שותפויות פיננסיות')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {t(
                        'Ken HaTor emphasizes close working relationships with banks and financial companies over the years. In practice, this means the company is able to mobilize lending banks to provide credit for projects and for buyers.',
                        'קן התור מדגישה קשרי עבודה הדוקים עם בנקים וחברות מימון לאורך שנים. פרקטית, פירוש הדבר הוא שהחברה מסוגלת לרתום בנקים מלווים למתן אשראי לפרויקטים ועבור הרוכשים.'
                      )}
                    </p>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">{t('Key Financial Collaboration:', 'שיתוף פעולה פיננסי מרכזי:')}</h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <ChevronRight className="h-4 w-4 mr-2 text-finance-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">
                            {t(
                              'Fixed-rate mortgage at 2.99% for 20 years (presumably with a major bank that agreed to discounted interest rates)',
                              'משכנתא בריבית קבועה של 2.99% ל-20 שנה (כנראה עם בנק גדול שהסכים לריבית מוזלת)'
                            )}
                          </p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-4 w-4 mr-2 text-finance-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">
                            {t(
                              'Possible collaboration with non-bank financial institutions for supplementary equity financing for buyers',
                              'שיתוף פעולה אפשרי עם מוסדות פיננסיים חוץ-בנקאיים להשלמת הון עצמי לרוכשים'
                            )}
                          </p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-4 w-4 mr-2 text-finance-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">
                            {t(
                              'Ken HaTor views bank supervision as an integral part of the secure purchase experience',
                              'קן התור רואה בליווי הבנקאי חלק בלתי נפרד מחוויית הרכישה הבטוחה'
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="options" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financingOptions.map((option) => (
                <Card key={option.id} className="overflow-hidden">
                  <div className="bg-finance-primary text-white p-4 flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{isRTL ? option.title : option.titleEn}</h3>
                      <p className="text-xs opacity-75">{isRTL ? option.titleEn : option.title}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-5 space-y-4">
                    <p className="text-sm text-muted-foreground">{isRTL ? option.description : option.descriptionEn}</p>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      {option.id === 'low-deposit' && option.depositRange && (
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">{t('Initial Deposit:', 'מקדמה ראשונית:')}</span>
                          <span className="font-bold">{option.depositRange}</span>
                        </div>
                      )}
                      {option.id === 'fixed-rate' && option.rate && (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">{t('Interest Rate:', 'שיעור ריבית:')}</span>
                            <span className="font-bold">{option.rate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">{t('Term:', 'תקופה:')}</span>
                            <span className="font-bold">{isRTL ? option.term : option.termEn}</span>
                          </div>
                        </div>
                      )}
                      {option.id === 'pre-sale' && option.discount && (
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">{t('Average Discount:', 'הנחה ממוצעת:')}</span>
                          <span className="font-bold">{option.discount}</span>
                        </div>
                      )}
                      
                      <div className="mt-2">
                        <span className="text-sm">{t('Ideal For:', 'מתאים ל:')}</span>
                        <p className="font-medium text-sm mt-1">{isRTL ? option.idealFor : option.idealForEn}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">{t('Key Features:', 'תכונות מרכזיות:')}</h4>
                      <ul className="space-y-1">
                        {(isRTL ? option.features : option.featuresEn).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="h-4 w-4 mr-2 text-finance-success flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-2">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {t('Learn More', 'למידע נוסף')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t('Payment Flexibility', 'גמישות בתשלומים')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  {t(
                    'Information indicates that Ken HaTor is willing to adapt the payment structure to the client\'s profile. The term "flexible payments during construction" appeared in connection with the low down payment track, so that a buyer who can and wants to pay part of the amount before occupancy can do so at a spread convenient to them.',
                    'מהמידע עולה כי קן התור מגלה נכונות להתאים את מתווה התשלום לפרופיל הלקוח. הביטוי "תשלומים גמישים במהלך הבנייה" חזר בהקשר למסלול המקדמה הנמוכה, כך שרוכש שיכול ורוצה לשלם חלק מהסכום לפני האכלוס - יש באפשרותו לעשות זאת בפריסה הנוחה לו.'
                  )}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-muted/40 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-finance-primary" />
                      {t('Young Couple Example', 'דוגמה לזוג צעיר')}
                    </h4>
                    <p className="text-sm">
                      {t(
                        'A young couple could pay 7% at signing, then add another 3% when their savings plan matures, and defer the remaining 90% to occupancy with a mortgage. This customization gives them breathing room while planning their finances.',
                        'זוג צעיר יכול לשלם 7% בחתימה, להוסיף עוד 3% כשתוכנית החיסכון שלהם מבשילה, ולדחות את 90% הנותרים לאכלוס עם משכנתא. התאמה אישית זו נותנת להם מרווח נשימה בתכנון הפיננסי שלהם.'
                      )}
                    </p>
                  </div>
                  
                  <div className="bg-muted/40 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-finance-primary" />
                      {t('Investor Example', 'דוגמה למשקיע')}
                    </h4>
                    <p className="text-sm">
                      {t(
                        'An investor might pay 10% upon signing, an additional 30% from the sale of another asset a year later, and the remaining 60% at occupancy. This arrangement allows for optimal utilization of their investment portfolio.',
                        'משקיע עשוי לשלם 10% בעת החתימה, עוד 30% ממכירת נכס אחר כעבור שנה, ואת 60% הנותרים באכלוס. הסדר זה מאפשר ניצול מיטבי של תיק ההשקעות שלו.'
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Competitor A</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Details about Competitor A's financing options.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Competitor B</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Details about Competitor B's financing options.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Young Couples</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Information about financing options for young couples.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Information about financing options for investors.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Families</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Information about financing options for families.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default KenHaTorFinance;
