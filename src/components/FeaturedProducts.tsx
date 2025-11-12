import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Impresora Pro X1",
    price: "€599",
    category: "Impresoras",
    badge: "Nuevo",
    description: "Alta precisión y velocidad",
  },
  {
    id: 2,
    name: "Filamento PLA Premium",
    price: "€24",
    category: "Filamentos",
    badge: "Popular",
    description: "1kg, múltiples colores",
  },
  {
    id: 3,
    name: "Kit de Boquillas",
    price: "€35",
    category: "Repuestos",
    badge: null,
    description: "Set de 5 boquillas profesionales",
  },
  {
    id: 4,
    name: "Mesa de Impresión",
    price: "€89",
    category: "Accesorios",
    badge: "Oferta",
    description: "Superficie magnética flexible",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-muted-foreground">
            Lo mejor de nuestra selección
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`h-48 ${
                  index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                } flex items-center justify-center relative overflow-hidden`}
              >
                {product.badge && (
                  <Badge
                    variant={product.badge === "Nuevo" ? "default" : "secondary"}
                    className="absolute top-4 right-4"
                  >
                    {product.badge}
                  </Badge>
                )}
                <div className="text-6xl opacity-20">📦</div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <Button size="sm" variant={index % 2 === 0 ? "default" : "secondary"}>
                    Ver más
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
