import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Header />
      
      {/* Hero Section - Non-scrollable */}
      <div className="h-screen flex items-center justify-center relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-gradient">DIGITAL</span>
            <br />
            <span className="text-foreground">INFRASTRUCTURE</span>
            <br />
            <span className="text-gradient">REDEFINED</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Enabling flexible, scalable, and sustainable data centers with excellence 
            through reliable and high-quality solutions.
          </p>
          
          {/* Call to Action */}
          <div className="pt-8">
            <button className="gradient-primary hover:gradient-hover text-white px-8 py-4 rounded-xl text-lg font-medium hover-lift border-0 shadow-glow">
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
    </div>
  );
};

export default Index;
