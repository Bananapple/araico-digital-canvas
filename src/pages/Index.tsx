
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-orange-50 via-white to-amber-50">
      
      {/* Wave Line Divider */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/3 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C300,20 600,100 900,60 C1050,40 1150,80 1200,60 L1200,120 L0,120 Z"
            fill="#ff6b35"
            opacity="0.8"
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
