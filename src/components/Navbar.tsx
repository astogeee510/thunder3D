import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Thunder3D
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/impresoras" className="text-sm font-medium hover:text-primary transition-colors">
              Impresoras
            </a>
            <a href="/filamentos" className="text-sm font-medium hover:text-primary transition-colors">
              Filamentos
            </a>
            <a href="/repuestos" className="text-sm font-medium hover:text-primary transition-colors">
              Repuestos
            </a>
            <a href="/accesorios" className="text-sm font-medium hover:text-primary transition-colors">
              Accesorios
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
