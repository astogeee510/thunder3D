import { Card } from "@/components/ui/card";
import { Printer, Package, Settings, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Impresoras 3D",
    description: "Equipos de última generación",
    icon: Printer,
    color: "primary",
  },
  {
    title: "Filamentos",
    description: "PLA, ABS, PETG y más",
    icon: Package,
    color: "secondary",
  },
  {
    title: "Repuestos",
    description: "Mantén tu equipo al día",
    icon: Settings,
    color: "primary",
  },
  {
    title: "Accesorios",
    description: "Mejora tu experiencia",
    icon: Sparkles,
    color: "secondary",
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explora por Categoría
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas en un solo lugar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isPrimary = category.color === "primary";
            
            return (
              <Card
                key={category.title}
                className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-border/50"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    isPrimary ? "bg-primary/10" : "bg-secondary/10"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${
                      isPrimary ? "text-primary" : "text-secondary"
                    } group-hover:scale-110 transition-transform`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
