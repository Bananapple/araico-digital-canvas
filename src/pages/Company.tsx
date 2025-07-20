import { Card, CardContent } from "@/components/ui/card";
import { Building, Zap, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const Company = () => {
  const stats = [
    { value: "2 GW", label: "Development Pipeline", icon: Zap },
    { value: "3", label: "Sites", icon: Building },
    { value: "40 MW", label: "Energized or Committed", icon: MapPin }
  ];

  // Carousel logic
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let animationFrame: number;
    let isHovered = false;
    let scrollAmount = 0;
    const speed = 1; // px per frame
    const scroll = () => {
      if (!isHovered) {
        carousel.scrollLeft += speed;
        // If we've scrolled to the end, reset to start for infinite loop
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    scroll();
    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      cancelAnimationFrame(animationFrame);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
            <h1 className="text-5xl md:text-5xl font-bold mb-8 text-black">
              Company and <span style={{fontFamily: 'Times, "Times New Roman", serif'}} className="italic font-normal">Vision</span>
            </h1>
          </div>

          {/* Company Blurb */}
          <section className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Araico is building the premier hub for AI infrastructure in Latin America. In partnership with industry leaders, we are developing a network of world-class, interconnected data centers grounded in operational excellence, technological innovation, and an unwavering commitment to security and sustainability.
              <br /><br />
              The rise of AI is reshaping industries, geopolitics, and the climate. We see this transformation not just as an opportunity, but as a responsibility. As builders at the frontier, we are committed to creating sustainable infrastructure that safeguards our planet while enabling the next wave of technological progress. At the same time, we're passionate about bringing cutting-edge solutions to Latin America and helping cultivate a thriving AI ecosystem across one of the most dynamic regions in the world.
            </p>
          </section>

          {/* Key Stats */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              KEY STATS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border-gray-300 hover-lift text-center">
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
            <h2 className="text-3xl md:text-5xl text-center mb-12 text-black tracking-tight">
              <span className="font-bold">Differentiated platform leveraging </span><span style={{fontFamily: 'Times, "Times New Roman", serif'}} className="italic font-normal">close partnerships</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-center">
              The Araico platform is built on a well-defined governance structure combining infrastructure private equity capital and a network of partners of global investment banks and financial institutions, technology and service providers, as well as sector experts and senior advisors. This gives us unparralleled reach and the ability to act swiftly.
            </p>
            {/* Partner Logos Carousel */}
            <div
              ref={carouselRef}
              className="flex space-x-20 overflow-x-auto pb-4 scrollbar-hide justify-center items-center relative"
              style={{ scrollBehavior: 'smooth', minHeight: '100px', cursor: 'grab' }}
            >
              {Array(2).fill(['amd.png', 'apcgr.png', 'covegr.png', 'nvidia.png', 'modular.png', 'macq.png']).flat().map((logo, idx) => (
                <img
                  key={idx}
                  src={`/${logo}`}
                  alt={logo.replace('.png', '')}
                  className="h-20 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-105 mx-10"
                  style={{ maxWidth: '160px' }}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Company;