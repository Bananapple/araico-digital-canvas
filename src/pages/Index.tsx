
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background relative">
      {/* Animated Wave Background Effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-96 w-[200vw] h-96 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animation: 'wave 8s ease-in-out infinite' }}></div>
        <div className="absolute top-1/2 -left-96 w-[200vw] h-80 bg-gradient-to-r from-transparent via-amber-500/15 to-transparent rounded-full blur-3xl" style={{ animation: 'wave 10s ease-in-out infinite 2s' }}></div>
        <div className="absolute bottom-1/4 -left-96 w-[200vw] h-72 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent rounded-full blur-3xl" style={{ animation: 'wave 12s ease-in-out infinite 4s' }}></div>
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
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-araico-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-araico-purple/10 rounded-full blur-3xl"></div>
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
