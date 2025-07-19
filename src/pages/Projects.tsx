import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    { name: "Penguin", "2025e": "40 MW", "2030e": "80 MW", "2035e": "100 MW" },
    { name: "Pjt A", "2025e": "30 MW", "2030e": "100 MW", "2035e": "200 MW" },
    { name: "Pjt B", "2025e": "30 MW", "2030e": "100 MW", "2035e": "200 MW" }
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-gradient">
            PROJECTS
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Our capacity milestones across key development projects
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block bg-card rounded-lg border border-border shadow-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border bg-muted/30">
                  <TableHead className="font-bold text-foreground text-lg">Project</TableHead>
                  <TableHead className="font-bold text-foreground text-lg text-center">2025e</TableHead>
                  <TableHead className="font-bold text-foreground text-lg text-center">2030e</TableHead>
                  <TableHead className="font-bold text-foreground text-lg text-center">2035e</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={index} className="border-border hover:bg-muted/20 transition-colors">
                    <TableCell className="font-bold text-primary text-lg">{project.name}</TableCell>
                    <TableCell className="text-center text-lg text-muted-foreground">{project["2025e"]}</TableCell>
                    <TableCell className="text-center text-lg text-muted-foreground">{project["2030e"]}</TableCell>
                    <TableCell className="text-center text-lg text-muted-foreground">{project["2035e"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">2025e</p>
                      <p className="text-lg font-bold text-muted-foreground">{project["2025e"]}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">2030e</p>
                      <p className="text-lg font-bold text-muted-foreground">{project["2030e"]}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">2035e</p>
                      <p className="text-lg font-bold text-muted-foreground">{project["2035e"]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;