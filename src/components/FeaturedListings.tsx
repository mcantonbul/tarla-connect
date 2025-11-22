import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp } from "lucide-react";
import tractorImage from "@/assets/tractor-field.jpg";
import combineImage from "@/assets/combine-harvester.jpg";
import storageImage from "@/assets/storage-facility.jpg";

const listings = [
  {
    id: 1,
    image: tractorImage,
    title: "250 Dönüm Sulak Tarla",
    location: "Konya, Karatay",
    price: "₺45,000",
    period: "/sezon",
    type: "Tarla",
    badge: "Popüler",
    features: ["Sulama sistemi", "Yol kenarı", "Elektrik mevcut"],
  },
  {
    id: 2,
    image: combineImage,
    title: "New Holland Biçerdöver",
    location: "Ankara, Polatlı",
    price: "₺8,500",
    period: "/gün",
    type: "Makine",
    badge: "Yeni",
    features: ["2020 model", "Tam bakımlı", "Deneyimli operatör"],
  },
  {
    id: 3,
    image: storageImage,
    title: "Soğuk Hava Deposu",
    location: "Bursa, İnegöl",
    price: "₺2,50",
    period: "/kg/ay",
    type: "Depo",
    badge: "Premium",
    features: ["1500 ton kapasite", "24/7 güvenlik", "Kolay erişim"],
  },
];

const FeaturedListings = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Öne Çıkan İlanlar
            </h2>
            <p className="text-muted-foreground">
              En çok beğenilen ve tercih edilen ilanlar
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Tümünü Gör
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
            <Card 
              key={listing.id} 
              className="group overflow-hidden hover:shadow-elevated transition-all duration-300 border-border/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {listing.badge}
                </Badge>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                    {listing.type}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {listing.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {listing.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.features.map((feature, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {listing.price}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {listing.period}
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    İncele
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full">
            Tümünü Gör
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;