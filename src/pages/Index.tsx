
import Header from "@/components/Header";

const Index = () => {
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
      
      <Header />
      
      {/* Hero Section - Non-scrollable */}
      <div className="h-screen flex items-center justify-center relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
            The Americas premier AI infrastructure partner
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Harnessing LATAM's strategic position and access to the world's largest renewable energy resources to build the AI factories of tomorrow
          </p>
          
          {/* Call to Action */}
          <div className="pt-8">
            <button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-4 text-lg font-medium hover-lift border-0">
              EXPLORE SOLUTIONS
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 text-center">
        <p className="text-muted-foreground text-sm">
          Araico Inc, all rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
