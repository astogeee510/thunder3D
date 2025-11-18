import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const impresoras = [
  {
    id: 1,
    name: "Ender 3 V3 SE",
    description: "Impresora 3D ideal para principiantes con excelente calidad de impresión",
    price: "$299.990",
    image: "/placeholder.svg",
    specs: ["220x220x250mm", "Velocidad: 250mm/s", "Auto nivelación"],
    badge: "Popular"
  },
  {
    id: 2,
    name: "Bambu Lab P1S",
    description: "Impresora profesional de alta velocidad con sistema de secado integrado",
    price: "$899.990",
    image: "/placeholder.svg",
    specs: ["256x256x256mm", "Velocidad: 500mm/s", "Multi-material"],
    badge: "Profesional"
  },
  {
    id: 3,
    name: "Prusa MK4",
    description: "La mejor impresora para usuarios avanzados, calidad suiza",
    price: "$1.299.990",
    image: "/placeholder.svg",
    specs: ["250x210x220mm", "Velocidad: 200mm/s", "Input Shaping"],
    badge: "Premium"
  },
  {
    id: 4,
    name: "Artillery Sidewinder X2",
    description: "Gran volumen de impresión a precio accesible",
    price: "$449.990",
    image: "/placeholder.svg",
    specs: ["300x300x400mm", "Velocidad: 150mm/s", "Extrusor directo"],
    badge: null
  },
  {
    id: 5,
    name: "Anycubic Kobra 2",
    description: "Impresora rápida y precisa con nivelación automática",
    price: "$349.990",
    image: "/placeholder.svg",
    specs: ["220x220x250mm", "Velocidad: 300mm/s", "LeviQ 2.0"],
    badge: "Nuevo"
  },
  {
    id: 6,
    name: "Elegoo Neptune 4",
    description: "Excelente relación calidad-precio con características premium",
    price: "$399.990",
    image: "/placeholder.svg",
    specs: ["225x225x265mm", "Velocidad: 500mm/s", "Klipper"],
    badge: "Oferta"
  }
];

const Impresoras = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impresoras 3D
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra selección de impresoras 3D desde principiantes hasta profesionales
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impresoras.map((impresora) => (
              <Card key={impresora.id} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={impresora.image} 
                      alt={impresora.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle>{impresora.name}</CardTitle>
                    {impresora.badge && (
                      <Badge variant="default">{impresora.badge}</Badge>
                    )}
                  </div>
                  <CardDescription>{impresora.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {impresora.specs.map((spec, index) => (
                      <p key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                        {spec}
                      </p>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{impresora.price}</span>
                  <Button>Ver detalles</Button>
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

export default Impresoras;
