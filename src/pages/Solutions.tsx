import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-full h-96" viewBox="0 0 1200 400" preserveAspectRatio="none">
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
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            FLEXIBLE DELIVERY MODELS
          </h2>
          
          {/* Desktop Table */}
          <div className="hidden md:block bg-card rounded-lg border border-border shadow-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border bg-muted/30">
                  <TableHead className="font-bold text-foreground">Model</TableHead>
                  <TableHead className="font-bold text-foreground">We Provide</TableHead>
                  <TableHead className="font-bold text-foreground">You Manage</TableHead>
                  <TableHead className="font-bold text-foreground">Best For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveryModels.map((model, index) => (
                  <TableRow key={index} className="border-border hover:bg-muted/20 transition-colors">
                    <TableCell className="font-medium text-primary">{model.model}</TableCell>
                    <TableCell className="text-muted-foreground">{model.weProvide}</TableCell>
                    <TableCell className="text-muted-foreground">{model.youManage}</TableCell>
                    <TableCell className="text-muted-foreground">{model.bestFor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {deliveryModels.map((model, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-primary">{model.model}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">We Provide:</p>
                    <p className="text-sm text-muted-foreground">{model.weProvide}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">You Manage:</p>
                    <p className="text-sm text-muted-foreground">{model.youManage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Best For:</p>
                    <p className="text-sm text-muted-foreground">{model.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries We Target */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            INDUSTRIES WE TARGET
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover-lift text-center">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            WHY ARAICO?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyAraico.map((item, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover-lift text-center">
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