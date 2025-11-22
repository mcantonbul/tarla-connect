import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LandPlot, Wrench, Tractor, Warehouse } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    icon: LandPlot,
    title: "Tarla Kiralama",
    description: "Binlerce tarla ilanına göz atın. Sulak, kuru veya özel ihtiyaçlarınıza uygun tarlaları bulun.",
    stats: "15,000+ ilan",
    color: "from-green-500 to-emerald-600",
    link: "/tarla-ara",
  },
  {
    icon: Wrench,
    title: "Tarım Hizmetleri",
    description: "Ekim, hasat, gübreleme, ilaçlama ve daha fazlası. Profesyonel hizmet sağlayıcılar burada.",
    stats: "25+ hizmet türü",
    color: "from-amber-500 to-orange-600",
    link: "/hizmet-ara",
  },
  {
    icon: Tractor,
    title: "Makine Kiralama",
    description: "Biçerdöver, traktör, ekim makinesi ve tüm tarım makinelerini saatlik veya günlük kiralayın.",
    stats: "5,000+ makine",
    color: "from-blue-500 to-cyan-600",
    link: "/makine-ara",
  },
  {
    icon: Warehouse,
    title: "Depolama",
    description: "Ürünleriniz için güvenli depolama alanları. Silo, soğuk hava deposu ve ambar seçenekleri.",
    stats: "200+ depo",
    color: "from-purple-500 to-pink-600",
    link: "/depo-ara",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platformumuz 4 ana kategoride hizmet veriyor. İhtiyacınıza göre seçin, başlayın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border/50 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(category.link)}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 min-h-[60px]">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent">
                    {category.stats}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Keşfet →
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;