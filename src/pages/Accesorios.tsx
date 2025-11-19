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
  const [accesorios, setAccesorios] = useState(accesoriosData);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setAccesorios(accesorios.filter(item => item.id !== id));
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
    setAccesorios(accesorios.map(item => 
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
              Accesorios y Herramientas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complementa tu setup con las mejores herramientas y accesorios
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accesorios.map((accesorio) => (
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
                  <CartButton 
                    product={{
                      id: accesorio.id,
                      name: accesorio.name,
                      price: parseInt(accesorio.price.replace(/[$.]/g, '')),
                      image: accesorio.image,
                      category: 'accesorios'
                    }}
                  />
                  <div className="flex w-full items-center justify-between gap-2">
                    <span className="text-xl font-bold text-secondary">{accesorio.price}</span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleEdit(accesorio)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => handleDelete(accesorio.id)}
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

export default Accesorios;
