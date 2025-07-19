
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-orange-50 via-white to-amber-50">
      
      {/* Wave Line with Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/3 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            d="M0,60 C150,30 300,90 450,40 C600,10 750,80 900,50 C1050,20 1150,70 1200,45"
            stroke="#ff6b35"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            opacity="0.9"
          />
          <path 
            d="M0,60 C150,30 300,90 450,40 C600,10 750,80 900,50 C1050,20 1150,70 1200,45"
            stroke="#ff8c42"
            strokeWidth="1"
            fill="none"
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
