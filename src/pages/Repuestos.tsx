import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EditProductDialog } from "@/components/EditProductDialog";
import { CartButton } from "@/components/CartButton";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2 } from "lucide-react";

const repuestosData = [
  {
    id: 1,
    name: "Nozzle 0.4mm Acero",
    description: "Boquilla de acero endurecido para filamentos abrasivos",
    price: "$8.990",
    image: "/placeholder.svg",
    specs: ["Compatible con E3D", "Acero endurecido", "0.4mm"],
    badge: "Esencial"
  },
  {
    id: 2,
    name: "Hotend V6 Completo",
    description: "Hotend completo con ventilador y termistor incluido",
    price: "$42.990",
    image: "/placeholder.svg",
    specs: ["24V", "Hasta 300°C", "Compatible E3D V6"],
    badge: null
  },
  {
    id: 3,
    name: "Cama Caliente 220x220",
    description: "Cama de aluminio con adhesivo PEI de doble cara",
    price: "$35.990",
    image: "/placeholder.svg",
    specs: ["220x220mm", "24V 180W", "Superficie PEI"],
    badge: "Popular"
  },
  {
    id: 4,
    name: "Extrusor BMG Clonado",
    description: "Extrusor de doble engranaje tipo BMG de alto rendimiento",
    price: "$29.990",
    image: "/placeholder.svg",
    specs: ["Ratio 3:1", "Aluminio CNC", "Doble engranaje"],
    badge: null
  },
  {
    id: 5,
    name: "Set Correas GT2",
    description: "Kit de 5 metros de correa GT2 con poleas",
    price: "$12.990",
    image: "/placeholder.svg",
    specs: ["6mm ancho", "5 metros", "2x Poleas 20 dientes"],
    badge: null
  },
  {
    id: 6,
    name: "Ventiladores 40x40mm",
    description: "Pack de 3 ventiladores silenciosos para impresora",
    price: "$9.990",
    image: "/placeholder.svg",
    specs: ["24V", "Pack x3", "Ultra silenciosos"],
    badge: "Pack"
  },
  {
    id: 7,
    name: "Termistores NTC 100K",
    description: "Set de 5 termistores de repuesto",
    price: "$5.990",
    image: "/placeholder.svg",
    specs: ["100K ohm", "Pack x5", "Cable 1m"],
    badge: null
  },
  {
    id: 8,
    name: "Rodamientos Lineales",
    description: "Pack de rodamientos LM8UU para ejes de 8mm",
    price: "$14.990",
    image: "/placeholder.svg",
    specs: ["LM8UU", "Pack x10", "8mm diámetro"],
    badge: null
  },
  {
    id: 9,
    name: "BLTouch v3.1",
    description: "Sensor de nivelación automática de alta precisión",
    price: "$38.990",
    image: "/placeholder.svg",
    specs: ["Original", "v3.1", "Universal"],
    badge: "Upgrade"
  }
];

const Repuestos = () => {
  const [repuestos, setRepuestos] = useState(repuestosData);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setRepuestos(repuestos.filter(item => item.id !== id));
    toast({
      title: "Producto eliminado",
      description: "El producto ha sido eliminado del catálogo",
    });
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setIsEditDialogOpen(true);
  };

  const handleSave = (updatedProduct: any) => {
    setRepuestos(repuestos.map(item => 
      item.id === updatedProduct.id ? updatedProduct : item
    ));
    toast({
      title: "Producto actualizado",
      description: "Los cambios han sido guardados exitosamente",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Repuestos y Componentes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para mantener y mejorar tu impresora 3D
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repuestos.map((repuesto) => (
              <Card key={repuesto.id} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={repuesto.image} 
                      alt={repuesto.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{repuesto.name}</CardTitle>
                    {repuesto.badge && (
                      <Badge variant="default">{repuesto.badge}</Badge>
                    )}
                  </div>
                  <CardDescription>{repuesto.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {repuesto.specs.map((spec, index) => (
                      <p key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                        {spec}
                      </p>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <CartButton 
                    product={{
                      id: repuesto.id,
                      name: repuesto.name,
                      price: parseInt(repuesto.price.replace(/[$.]/g, '')),
                      image: repuesto.image,
                      category: 'repuestos'
                    }}
                  />
                  <div className="flex w-full items-center justify-between gap-2">
                    <span className="text-2xl font-bold text-primary">{repuesto.price}</span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleEdit(repuesto)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => handleDelete(repuesto.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <EditProductDialog
        product={editingProduct}
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onSave={handleSave}
      />
      
      <Footer />
    </div>
  );
};

export default Repuestos;
