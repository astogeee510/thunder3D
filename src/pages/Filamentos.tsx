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

const filamentosData = [
  {
    id: 1,
    name: "PLA Premium 1kg",
    description: "Filamento PLA de alta calidad, perfecto para todo tipo de impresiones",
    price: "$15.990",
    image: "/placeholder.svg",
    specs: ["1.75mm", "1kg", "Temperatura: 190-220°C"],
    colors: ["Negro", "Blanco", "Rojo", "Azul"],
    badge: "Más vendido"
  },
  {
    id: 2,
    name: "PETG 1kg",
    description: "Resistente y duradero, ideal para piezas funcionales",
    price: "$19.990",
    image: "/placeholder.svg",
    specs: ["1.75mm", "1kg", "Temperatura: 220-250°C"],
    colors: ["Negro", "Transparente", "Verde"],
    badge: null
  },
  {
    id: 3,
    name: "ABS 1kg",
    description: "Alta resistencia térmica y mecánica para proyectos exigentes",
    price: "$18.990",
    image: "/placeholder.svg",
    specs: ["1.75mm", "1kg", "Temperatura: 230-260°C"],
    colors: ["Negro", "Blanco"],
    badge: null
  },
  {
    id: 4,
    name: "TPU Flexible",
    description: "Filamento flexible para impresiones elásticas y resistentes",
    price: "$24.990",
    image: "/placeholder.svg",
    specs: ["1.75mm", "500g", "Temperatura: 210-230°C"],
    colors: ["Negro", "Rojo", "Azul"],
    badge: "Flexible"
  },
  {
    id: 5,
    name: "PLA Silk 1kg",
    description: "Acabado sedoso brillante para impresiones decorativas",
    price: "$21.990",
    image: "/placeholder.svg",
    specs: ["1.75mm", "1kg", "Temperatura: 190-220°C"],
    colors: ["Dorado", "Plateado", "Cobre", "Bronce"],
    badge: "Premium"
  },
  {
    id: 6,
    name: "Nylon PA12",
    description: "Máxima resistencia y durabilidad para aplicaciones industriales",
    price: "$34.990",
    image: "/placeholder.svg",
    specs: ["1.75mm", "1kg", "Temperatura: 240-270°C"],
    colors: ["Natural", "Negro"],
    badge: "Industrial"
  }
];

const Filamentos = () => {
  const [filamentos, setFilamentos] = useState(filamentosData);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setFilamentos(filamentos.filter(item => item.id !== id));
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
    setFilamentos(filamentos.map(item => 
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
              Filamentos 3D
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amplia variedad de materiales para todos tus proyectos de impresión
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filamentos.map((filamento) => (
              <Card key={filamento.id} className="border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={filamento.image} 
                      alt={filamento.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle>{filamento.name}</CardTitle>
                    {filamento.badge && (
                      <Badge variant="secondary">{filamento.badge}</Badge>
                    )}
                  </div>
                  <CardDescription>{filamento.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {filamento.specs.map((spec, index) => (
                        <p key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-secondary"></span>
                          {spec}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Colores disponibles:</p>
                      <div className="flex flex-wrap gap-2">
                        {filamento.colors.map((color, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <CartButton 
                    product={{
                      id: filamento.id,
                      name: filamento.name,
                      price: parseInt(filamento.price.replace(/[$.]/g, '')),
                      image: filamento.image,
                      category: 'filamentos'
                    }}
                  />
                  <div className="flex w-full items-center justify-between gap-2">
                    <span className="text-2xl font-bold text-secondary">{filamento.price}</span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleEdit(filamento)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => handleDelete(filamento.id)}
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

export default Filamentos;
