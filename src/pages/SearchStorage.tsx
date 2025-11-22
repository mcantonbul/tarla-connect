import { useState } from "react";
import { Search, MapPin, Thermometer, Package, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockStorage = [
  {
    id: 1,
    title: "Modern Soğuk Hava Deposu",
    location: "Konya, Karatay",
    capacity: 5000,
    pricePerTon: 25,
    storageType: "Soğuk Hava",
    temperature: "-5°C / +5°C",
    image: "/placeholder.svg",
    features: ["24/7 Güvenlik", "Sigorta", "Forklift", "Yükleme Rampası"],
    available: true
  },
  {
    id: 2,
    title: "Tahıl Silosu",
    location: "Ankara, Polatlı",
    capacity: 10000,
    pricePerTon: 15,
    storageType: "Silo",
    temperature: "Ortam",
    image: "/placeholder.svg",
    features: ["24/7 Güvenlik", "Kurutma", "Tartım"],
    available: true
  },
  {
    id: 3,
    title: "Kapalı Ambar",
    location: "Eskişehir, Sivrihisar",
    capacity: 2000,
    pricePerTon: 20,
    storageType: "Ambar",
    temperature: "Ortam",
    image: "/placeholder.svg",
    features: ["Güvenlik", "Kuru Ortam"],
    available: false
  },
  {
    id: 4,
    title: "Kontrollü Atmosferli Depo",
    location: "Antalya, Serik",
    capacity: 3000,
    pricePerTon: 35,
    storageType: "CA Depo",
    temperature: "0°C / +4°C",
    image: "/placeholder.svg",
    features: ["24/7 Güvenlik", "Sigorta", "CA Teknoloji", "Nem Kontrolü"],
    available: true
  }
];

const SearchStorage = () => {
  const [capacityRange, setCapacityRange] = useState([0, 10000]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const features = ["24/7 Güvenlik", "Sigorta", "Forklift", "Yükleme Rampası", "Tartım", "Kurutma", "CA Teknoloji"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Depolama Ara</h1>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Depo tipi veya konum ara..."
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
                    Kapasite (Ton): {capacityRange[0]} - {capacityRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={capacityRange}
                    onValueChange={setCapacityRange}
                    className="mb-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Ton Başı Fiyat (₺): {priceRange[0]} - {priceRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={50}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Depo Tipi</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cold">Soğuk Hava</SelectItem>
                      <SelectItem value="silo">Silo</SelectItem>
                      <SelectItem value="warehouse">Ambar</SelectItem>
                      <SelectItem value="ca">CA Depo</SelectItem>
                      <SelectItem value="open">Açık Alan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Ürün Tipi</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grain">Tahıl</SelectItem>
                      <SelectItem value="vegetable">Sebze</SelectItem>
                      <SelectItem value="fruit">Meyve</SelectItem>
                      <SelectItem value="legume">Baklagil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Özellikler</label>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedFeatures([...selectedFeatures, feature]);
                            } else {
                              setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                            }
                          }}
                        />
                        <label htmlFor={feature} className="text-sm cursor-pointer">
                          {feature}
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
              <p className="text-muted-foreground">{mockStorage.length} depo bulundu</p>
              <Select defaultValue="price-low">
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">En Yeni</SelectItem>
                  <SelectItem value="price-low">Fiyat: Düşükten Yükseğe</SelectItem>
                  <SelectItem value="price-high">Fiyat: Yüksekten Düşüğe</SelectItem>
                  <SelectItem value="capacity">Kapasite: Büyükten Küçüğe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockStorage.map((storage) => (
                <Card key={storage.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img src={storage.image} alt={storage.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className={`absolute top-4 right-4 ${storage.available ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {storage.available ? 'Müsait' : 'Dolu'}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{storage.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{storage.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Package size={16} className="text-primary" />
                        <span className="text-sm">{storage.capacity} ton</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Thermometer size={16} className="text-primary" />
                        <span className="text-sm">{storage.temperature}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {storage.storageType}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {storage.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                      {storage.features.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{storage.features.length - 3} more</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-2xl font-bold text-primary">₺{storage.pricePerTon}</div>
                        <div className="text-xs text-muted-foreground">ton/aylık</div>
                      </div>
                      <Button disabled={!storage.available}>
                        {storage.available ? 'Rezervasyon Yap' : 'Dolu'}
                      </Button>
                    </div>
                  </CardContent>
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

export default SearchStorage;