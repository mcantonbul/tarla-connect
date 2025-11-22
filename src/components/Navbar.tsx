import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">TarlaHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tarla-ara" className="text-foreground hover:text-primary transition-colors font-medium">
              Tarla Kirala
            </Link>
            <Link to="/hizmet-ara" className="text-foreground hover:text-primary transition-colors font-medium">
              Hizmetler
            </Link>
            <Link to="/makine-ara" className="text-foreground hover:text-primary transition-colors font-medium">
              Makineler
            </Link>
            <Link to="/depo-ara" className="text-foreground hover:text-primary transition-colors font-medium">
              Depolama
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground">
              Giriş Yap
            </Button>
            <Button className="bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-opacity">
              İlan Ver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-slide-in">
            <Link to="/tarla-ara" className="block text-foreground hover:text-primary transition-colors font-medium">
              Tarla Kirala
            </Link>
            <Link to="/hizmet-ara" className="block text-foreground hover:text-primary transition-colors font-medium">
              Hizmetler
            </Link>
            <Link to="/makine-ara" className="block text-foreground hover:text-primary transition-colors font-medium">
              Makineler
            </Link>
            <Link to="/depo-ara" className="block text-foreground hover:text-primary transition-colors font-medium">
              Depolama
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" className="w-full">
                Giriş Yap
              </Button>
              <Button className="w-full bg-gradient-to-r from-accent to-secondary">
                İlan Ver
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;