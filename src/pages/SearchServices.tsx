import { useState } from "react";
import { Search, MapPin, Sprout, Droplets, Wheat } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockServices = [
  {
    id: 1,
    title: "Profesyonel Ekim Hizmeti",
    provider: "Ahmet Tarım Hizmetleri",
    location: "Konya, Çumra",
    pricePerAcre: 150,
    rating: 4.8,
    serviceType: "Ekim",
    description: "20 yıllık tecrübe ile buğday, arpa ekimi",
    image: "/placeholder.svg",
    certifications: ["Sertifikalı", "Sigortalı"],
    available: true
  },
  {
    id: 2,
    title: "Droneyla İlaçlama",
    provider: "Modern Tarım Teknoloji",
    location: "Ankara, Polatlı",
    pricePerAcre: 80,
    rating: 4.9,
    serviceType: "İlaçlama",
    description: "Drone teknolojisi ile hassas ilaçlama",
    image: "/placeholder.svg",
    certifications: ["Sertifikalı", "Drone Lisanslı"],
    available: true
  },
  {
    id: 3,
    title: "Hasat ve Harmanlama",
    provider: "Konya Biçerdöver A.Ş.",
    location: "Konya, Karatay",
    pricePerAcre: 300,
    rating: 4.7,
    serviceType: "Hasat",
    description: "Modern biçerdöverlerle hızlı hasat",
    image: "/placeholder.svg",
    certifications: ["Sigortalı"],
    available: false
  },
  {
    id: 4,
    title: "Organik Gübreleme",
    provider: "Eko Tarım Danışmanlık",
    location: "Eskişehir, Sivrihisar",
    pricePerAcre: 120,
    rating: 5.0,
    serviceType: "Gübreleme",
    description: "Organik sertifikalı gübre uygulaması",
    image: "/placeholder.svg",
    certifications: ["Organik Sertifikalı", "Sigortalı"],
    available: true
  }
];

const SearchServices = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);

  const certifications = ["Sertifikalı", "Sigortalı", "Organik Sertifikalı", "Drone Lisanslı"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Tarım Hizmetleri</h1>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Hizmet veya konum ara..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button>Ara</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Filtreler</h3>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Dönüm Başı Fiyat (₺): {priceRange[0]} - {priceRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Hizmet Türü</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planting">Ekim</SelectItem>
                      <SelectItem value="plowing">Sürme/Çekme</SelectItem>
                      <SelectItem value="fertilizing">Gübreleme</SelectItem>
                      <SelectItem value="spraying">İlaçlama</SelectItem>
                      <SelectItem value="irrigation">Sulama</SelectItem>
                      <SelectItem value="harvesting">Hasat</SelectItem>
                      <SelectItem value="transport">Nakliye</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Minimum Puan</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Yıldız</SelectItem>
                      <SelectItem value="4">4+ Yıldız</SelectItem>
                      <SelectItem value="3">3+ Yıldız</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Sertifikalar</label>
                  <div className="space-y-2">
                    {certifications.map((cert) => (
                      <div key={cert} className="flex items-center space-x-2">
                        <Checkbox
                          id={cert}
                          checked={selectedCerts.includes(cert)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCerts([...selectedCerts, cert]);
                            } else {
                              setSelectedCerts(selectedCerts.filter(c => c !== cert));
                            }
                          }}
                        />
                        <label htmlFor={cert} className="text-sm cursor-pointer">
                          {cert}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="available" />
                  <label htmlFor="available" className="text-sm cursor-pointer">
                    Sadece Müsait Olanlar
                  </label>
                </div>

                <Button className="w-full" variant="outline">Filtreleri Temizle</Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{mockServices.length} hizmet bulundu</p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">En Yüksek Puan</SelectItem>
                  <SelectItem value="price-low">Fiyat: Düşükten Yükseğe</SelectItem>
                  <SelectItem value="price-high">Fiyat: Yüksekten Düşüğe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {mockServices.map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1 aspect-square bg-muted relative overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      {!service.available && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold">Müsait Değil</span>
                        </div>
                      )}
                    </div>
                    <CardContent className="md:col-span-3 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.provider}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-2xl">⭐</span>
                          <span className="font-semibold">{service.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{service.location}</span>
                      </div>
                      
                      <p className="text-sm mb-4">{service.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {service.serviceType}
                        </span>
                        {service.certifications.map((cert) => (
                          <span key={cert} className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-2xl font-bold text-primary">₺{service.pricePerAcre}</div>
                          <div className="text-xs text-muted-foreground">dönüm başı</div>
                        </div>
                        <Button disabled={!service.available}>
                          {service.available ? 'Teklif Al' : 'Müsait Değil'}
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchServices;