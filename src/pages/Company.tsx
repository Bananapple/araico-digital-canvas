import { Card, CardContent } from "@/components/ui/card";
import { Building, Zap, MapPin } from "lucide-react";

const Company = () => {
  const stats = [
    { value: "2 GW", label: "Development Pipeline", icon: Zap },
    { value: "3", label: "Sites", icon: Building },
    { value: "40 MW", label: "Energized or Committed", icon: MapPin }
  ];

  // Mock partner logos - in real implementation, these would be actual logo URLs
  const partners = [
    "Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"
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
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
              COMPANY
            </h1>
          </div>

          {/* Company Blurb */}
          <section className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are enabling flexible, scalable, and sustainable data centers with excellence, 
              through reliable and high-quality solutions, allowing our clients to expand their 
              businesses efficiently and quickly, keeping pace with technological innovation, 
              digital transformation, and leaving a lasting legacy for society.
            </p>
          </section>

          {/* Key Stats */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              KEY STATS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover-lift text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Partners */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              PARTNERS
            </h2>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover-lift">
                  <CardContent className="p-8 flex items-center justify-center">
                    <div className="text-lg font-medium text-muted-foreground">
                      {partner}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                {partners.map((partner, index) => (
                  <Card key={index} className="bg-card border-border shadow-card flex-shrink-0 w-48">
                    <CardContent className="p-6 flex items-center justify-center">
                      <div className="text-sm font-medium text-muted-foreground text-center">
                        {partner}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Company;