import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Turkish farmland" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Tarımın Geleceği Burada Başlıyor
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Tarla kiralayın, tarım hizmeti alın, makine kiralayın. Türkiye'nin en kapsamlı tarım platformu.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl p-3 shadow-elevated max-w-2xl">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="İl, ilçe veya mahalle..." 
                  className="pl-10 border-0 bg-muted/50 h-12"
                />
              </div>
              <div className="flex-1 relative">
                <Input 
                  placeholder="Dönüm miktarı..." 
                  type="number"
                  className="border-0 bg-muted/50 h-12"
                />
              </div>
              <Button className="h-12 px-8 bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-opacity">
                <Search className="mr-2 h-5 w-5" />
                Ara
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">15K+</div>
              <div className="text-sm text-primary-foreground/80">Tarla İlanı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">8K+</div>
              <div className="text-sm text-primary-foreground/80">Hizmet Sağlayıcı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-primary-foreground/80">Mutlu Kullanıcı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;