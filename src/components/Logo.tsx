import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <img 
        src="/lovable-uploads/aee294a1-4fd6-45cb-848d-754649e5785d.png" 
        alt="Araico Logo" 
        className="h-8 w-8"
      />
      <div className="text-2xl font-bold text-gradient">
        ARAICO
      </div>
    </Link>
  );
};

export default Logo;