const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Print3D
            </h3>
            <p className="text-sm opacity-80">
              Tu tienda especializada en impresión 3D
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Impresoras</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Filamentos</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Repuestos</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Accesorios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Envíos</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Devoluciones</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Términos</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacidad</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 text-center text-sm opacity-80">
          <p>© 2024 Print3D. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
