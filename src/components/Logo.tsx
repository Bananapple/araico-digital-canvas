import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
      <div className="text-2xl font-bold text-gradient">
        ARAICO
      </div>
    </Link>
  );
};

export default Logo;