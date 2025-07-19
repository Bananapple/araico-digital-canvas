import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;