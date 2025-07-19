import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cpu, Building, Globe, Leaf, MapPin, Zap } from "lucide-react";

const Solutions = () => {

  const deliveryModels = [
    {
      model: "Powered Shell",
      weProvide: "Physical building, power, cooling",
      youManage: "Everything: fit-out, racks, hardware, ops",
      bestFor: "Hyperscalers & large enterprises"
    },
    {
      model: "Turnkey Colo",
      weProvide: "Fully-built space, racks, power, cooling, physical security",
      youManage: "Your own servers, installation & operations",
      bestFor: "Enterprises, SaaS, AI & ML workloads"
    },
    {
      model: "Wholesale Colo",
      weProvide: "Large-scale space built to your specs",
      youManage: "Your servers & operations",
      bestFor: "Cloud providers & scale-focused tenants"
    },
    {
      model: "Build-to-Suit",
      weProvide: "Custom data center tailored to your design",
      youManage: "Your servers & operations",
      bestFor: "Specialized or regulated industries"
    },
    {
      model: "Fully Managed/Cloud",
      weProvide: "Everything from hardware to software, including operations",
      youManage: "Just your applications & data",
      bestFor: "Teams seeking agility without overhead"
    }
  ];

  const industries = [
    {
      title: "AI Factories",
      description: "GPU-dense, high-performance environments designed for scalable AI compute.",
      icon: Cpu
    },
    {
      title: "AI-Native Companies",
      description: "Fast-growing startups building entirely on AI-first infrastructure.",
      icon: Zap
    },
    {
      title: "Enterprise",
      description: "Large organizations undergoing digital transformation and AI integration.",
      icon: Building
    }
  ];

  const whyAraico = [
    {
      title: "Sustainability",
      description: "100% clean energy powering all operations.",
      icon: Leaf
    },
    {
      title: "Strategic Location",
      description: "Paraguay as LATAM's compute capital: affordable, green, geopolitically stable.",
      icon: MapPin
    },
    {
      title: "Cutting-Edge Technology",
      description: "Modular, efficient, and scalable infrastructure built for the AI era.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden relative bg-background">
      
      {/* S-Shaped Wave with Matte Glass Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="absolute top-[25vh] left-0 w-full h-96" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <filter id="matteGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur1"/>
              <feGaussianBlur stdDeviation="8" result="blur2"/>
              <feGaussianBlur stdDeviation="4" result="blur3"/>
              <feMerge> 
                <feMergeNode in="blur1"/>
                <feMergeNode in="blur2"/>
                <feMergeNode in="blur3"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Background glow layers */}
          <path 
            d="M0,150 C300,100 400,50 600,100 C800,150 900,200 1200,150"
            stroke="#00bcd4"
            strokeWidth="40"
            fill="none"
            filter="url(#matteGlow)"
            opacity="0.3"
          />
          <path 
            d="M0,150 C300,100 400,50 600,100 C800,150 900,200 1200,150"
            stroke="#26c6da"
            strokeWidth="25"
            fill="none"
            filter="url(#matteGlow)"
            opacity="0.4"
          />
          <path 
            d="M0,150 C300,100 400,50 600,100 C800,150 900,200 1200,150"
            stroke="#4dd0e1"
            strokeWidth="15"
            fill="none"
            filter="url(#matteGlow)"
            opacity="0.6"
          />
        </svg>
      </div>
      
      <div className="pt-20 pb-16 relative z-10">
      <div className="container mx-auto px-6 space-y-20">
        
        {/* Flexible Delivery Models */}
        <section className="min-h-screen py-20">
          {/* Desktop Two-Column Layout */}
          <div className="hidden md:flex gap-12 items-start pt-[25vh]">
            {/* Left Column - Title and Description */}
            <div className="w-2/5 flex items-start justify-center -mt-12">
              <div className="max-w-md">
                <h2 className="text-5xl text-black tracking-tight mb-8">
                  <span style={{fontFamily: 'Times, "Times New Roman", serif'}} className="italic font-normal">Flexible delivery models</span> <span className="font-bold">adapted to your needs</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choose the perfect infrastructure model that matches your control requirements and operational preferences.
                </p>
              </div>
            </div>
            
            {/* Right Column - Cards */}
            <div className="w-3/5 -mt-12">
              <div className="grid gap-1">
                {deliveryModels.map((model, index) => (
                  <Card key={index} className="bg-card border-gray-300 scale-75 -my-8">
                    <CardHeader className="pb-1">
                      <CardTitle className="text-xl text-primary font-bold mb-2">{model.model}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">We Provide:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{model.weProvide}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">You Manage:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{model.youManage}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Best For:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{model.bestFor}</p>
                      </div>
                      <div className="mt-3">
                        <div className="mb-1">
                          <span className="text-sm font-medium text-foreground">Client Control</span>
                        </div>
                        <Progress value={(index + 1) * 20} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <h2 className="text-3xl text-center mb-8 text-black tracking-tight">
              <span style={{fontFamily: 'Times, "Times New Roman", serif'}} className="italic font-normal">Flexible delivery models</span> <span className="font-bold">adapted to your needs</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Choose the perfect infrastructure model that matches your control requirements and operational preferences.
            </p>
            
            <div className="grid gap-1 max-w-4xl mx-auto">
              {deliveryModels.map((model, index) => (
                <Card key={index} className="bg-card border-gray-300 scale-75 -my-8">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-primary font-bold mb-4">{model.model}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-0">
                    <div>
                      <p className="text-base font-semibold text-foreground mb-2">We Provide:</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{model.weProvide}</p>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground mb-2">You Manage:</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{model.youManage}</p>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground mb-2">Best For:</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{model.bestFor}</p>
                    </div>
                    <div className="mt-4">
                      <div className="mb-2">
                        <span className="text-base font-medium text-foreground">Client Control</span>
                      </div>
                      <Progress value={(index + 1) * 20} className="h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Target */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-black tracking-tight">
            Industries we target
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-card border-gray-300 hover-lift text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Araico */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-black tracking-tight">
            Why Araico?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyAraico.map((item, index) => (
              <Card key={index} className="bg-card border-gray-300 hover-lift text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Solutions;