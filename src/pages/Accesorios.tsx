import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CartButton } from "@/components/CartButton";

const accesoriosData = [
  {
    id: 1,
    name: "Espátula Metálica Flexible",
    description: "Herramienta esencial para remover impresiones fácilmente",
    price: "$7.990",
    image: "/placeholder.svg",
    specs: ["Acero inoxidable", "Mango ergonómico", "Flexible y resistente"],
    badge: "Esencial"
  },
  {
    id: 2,
    name: "Kit Herramientas 12 piezas",
    description: "Set completo de herramientas para mantenimiento",
    price: "$24.990",
    image: "/placeholder.svg",
    specs: ["12 herramientas", "Estuche incluido", "Calidad premium"],
    badge: "Kit Completo"
  },
  {
    id: 3,
    name: "Calibrador Digital",
    description: "Medidor de precisión para verificar tus impresiones",
    price: "$16.990",
    image: "/placeholder.svg",
    specs: ["Precisión 0.01mm", "Pantalla LCD", "150mm rango"],
    badge: null
  },
  {
    id: 4,
    name: "Superficie PEI 220x220",
    description: "Lámina de PEI de doble cara para mejor adhesión",
    price: "$18.990",
    image: "/placeholder.svg",
    specs: ["220x220mm", "Doble cara", "Fácil instalación"],
    badge: "Popular"
  },
  {
    id: 5,
    name: "Caja Hermética Filamento",
    description: "Mantén tus filamentos secos y protegidos",
    price: "$32.990",
    image: "/placeholder.svg",
    specs: ["2kg capacidad", "Higrómetro incluido", "Gel de sílice"],
    badge: null
  },
  {
    id: 6,
    name: "Alicate de Corte Preciso",
    description: "Ideal para cortar filamento y limpiar impresiones",
    price: "$11.990",
    image: "/placeholder.svg",
    specs: ["Acero al carbono", "Corte preciso", "Mangos suaves"],
    badge: null
  },
  {
    id: 7,
    name: "Cepillo de Latón",
    description: "Para limpiar nozzles obstruidos",
    price: "$5.990",
    image: "/placeholder.svg",
    specs: ["Cerdas de latón", "Mango de madera", "Resistente al calor"],
    badge: null
  },
  {
    id: 8,
    name: "Agujas Limpieza 0.4mm",
    description: "Set de agujas para desobstruir nozzles",
    price: "$4.990",
    image: "/placeholder.svg",
    specs: ["Pack x10", "0.4mm", "Acero inoxidable"],
    badge: null
  },
  {
    id: 9,
    name: "Raspador de Vidrio",
    description: "Perfecto para limpiar camas de vidrio",
    price: "$8.990",
    image: "/placeholder.svg",
    specs: ["Hoja reemplazable", "Mango ergonómico", "5 hojas extra"],
    badge: null
  },
  {
    id: 10,
    name: "Pegamento en Barra 40g",
    description: "Mejora la adhesión en la cama caliente",
    price: "$3.990",
    image: "/placeholder.svg",
    specs: ["40 gramos", "Lavable", "No tóxico"],
    badge: "Económico"
  },
  {
    id: 11,
    name: "Spray Limpiador IPA",
    description: "Alcohol isopropílico para limpiar la cama",
    price: "$12.990",
    image: "/placeholder.svg",
    specs: ["500ml", "99% puro", "Spray atomizador"],
    badge: null
  },
  {
    id: 12,
    name: "Lámpara LED USB",
    description: "Ilumina tu área de impresión",
    price: "$9.990",
    image: "/placeholder.svg",
    specs: ["USB 5V", "Flexible", "Luz blanca fría"],
    badge: null
  }
];

const Accesorios = () => {

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Accesorios y Herramientas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complementa tu setup con las mejores herramientas y accesorios
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accesoriosData.map((accesorio) => (
              <Card key={accesorio.id} className="border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                <CardHeader>
                  <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={accesorio.image} 
                      alt={accesorio.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-sm leading-tight">{accesorio.name}</CardTitle>
                    {accesorio.badge && (
                      <Badge variant="secondary" className="text-xs shrink-0">{accesorio.badge}</Badge>
                    )}
                  </div>
                  <CardDescription className="text-xs">{accesorio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {accesorio.specs.map((spec, index) => (
                      <p key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-secondary"></span>
                        {spec}
                      </p>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <div className="w-full mb-2">
                    <span className="text-xl font-bold text-secondary">{accesorio.price}</span>
                  </div>
                  <CartButton 
                    product={{
                      id: accesorio.id,
                      name: accesorio.name,
                      price: parseInt(accesorio.price.replace(/[$.]/g, '')),
                      image: accesorio.image,
                      category: 'accesorios'
                    }}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Accesorios;
