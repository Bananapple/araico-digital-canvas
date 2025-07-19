import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <img 
        src="/araico-logo.png" 
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