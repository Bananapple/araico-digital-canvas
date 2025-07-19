import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/solutions", label: "Solutions" },
    { to: "/projects", label: "Projects" },
    { to: "/company", label: "Company" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `text-sm font-medium transition-all duration-300 hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <Button 
          asChild 
          className="gradient-primary hover:gradient-hover text-white border-0 hover-lift"
        >
          <NavLink to="/contact">CONTACT US</NavLink>
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-card border-l border-border shadow-xl">
            <div className="flex flex-col p-6 space-y-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-all duration-300 hover:text-primary py-2 ${
                        isActive ? "text-primary" : "text-foreground"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                <Button 
                  asChild 
                  className="gradient-primary hover:gradient-hover text-white border-0 mt-6 w-full"
                >
                  <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    CONTACT US
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;