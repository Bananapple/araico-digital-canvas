import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <img 
        src="/araico-logo-sign.png" 
        alt="Araico Logo Sign" 
        className="h-10 w-10"
      />
      <img 
        src="/araico-logo-text.png" 
        alt="Araico Logo Text" 
        className="h-10"
      />
    </Link>
  );
};

export default Logo;