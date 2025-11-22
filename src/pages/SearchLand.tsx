import { useState } from "react";
import { Search, MapPin, Maximize2, Droplet, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data
const mockLands = [
  {
    id: 1,
    title: "Verimli Buğday Tarlası",
    location: "Konya, Çumra",
    area: 150,
    price: 25000,
    priceType: "yıllık",
    waterSource: "Sulama sistemi mevcut",
    soilType: "Killi toprak",
    image: "/placeholder.svg",
    features: ["Elektrik", "Yol", "Sulama"]
  },
  {
    id: 2,
    title: "Organik Tarım Arazisi",
    location: "Eskişehir, Sivrihisar",
    area: 80,
    price: 18000,
    priceType: "yıllık",
    waterSource: "Kuyu",
    soilType: "Kumlu toprak",
    image: "/placeholder.svg",
    features: ["Elektrik", "Yol"]
  },
  {
    id: 3,
    title: "Geniş Mera Alanı",
    location: "Ankara, Polatlı",
    area: 300,
    price: 45000,
    priceType: "yıllık",
    waterSource: "Gölet",
    soilType: "Mera",
    image: "/placeholder.svg",
    features: ["Yol", "Çit"]
  },
  {
    id: 4,
    title: "Sebze Bahçesi İçin İdeal",
    location: "Antalya, Serik",
    area: 25,
    price: 8000,
    priceType: "sezonluk",
    waterSource: "Damla sulama",
    soilType: "Alüvyon",
    image: "/placeholder.svg",
    features: ["Elektrik", "Yol", "Sulama", "Sera"]
  }
];

const SearchLand = () => {
  const [areaRange, setAreaRange] = useState([0, 500]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const features = ["Elektrik", "Yol", "Sulama", "Sera", "Çit", "Kuyu"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Tarla Ara</h1>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Konum veya şehir ara..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button>Ara</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Filtreler</h3>
                </div>

                {/* Area Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Alan (Dönüm): {areaRange[0]} - {areaRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={500}
                    step={10}
                    value={areaRange}
                    onValueChange={setAreaRange}
                    className="mb-2"
                  />
                </div>

                {/* Price Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Fiyat (₺): {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    min={0}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                </div>

                {/* Rental Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Kiralama Süresi</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Günlük</SelectItem>
                      <SelectItem value="seasonal">Sezonluk</SelectItem>
                      <SelectItem value="yearly">Yıllık</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Soil Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Toprak Tipi</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">Killi</SelectItem>
                      <SelectItem value="sandy">Kumlu</SelectItem>
                      <SelectItem value="alluvial">Alüvyon</SelectItem>
                      <SelectItem value="meadow">Mera</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Features */}
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

                <Button className="w-full" variant="outline">Filtreleri Temizle</Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{mockLands.length} tarla bulundu</p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">En Yeni</SelectItem>
                  <SelectItem value="price-low">Fiyat: Düşükten Yükseğe</SelectItem>
                  <SelectItem value="price-high">Fiyat: Yüksekten Düşüğe</SelectItem>
                  <SelectItem value="area-low">Alan: Küçükten Büyüğe</SelectItem>
                  <SelectItem value="area-high">Alan: Büyükten Küçüğe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockLands.map((land) => (
                <Card key={land.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img src={land.image} alt={land.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {land.priceType}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{land.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{land.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Maximize2 size={16} className="text-primary" />
                        <span className="text-sm">{land.area} dönüm</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplet size={16} className="text-primary" />
                        <span className="text-sm">{land.waterSource}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {land.features.map((feature) => (
                        <span key={feature} className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-2xl font-bold text-primary">₺{land.price.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{land.priceType}</div>
                      </div>
                      <Button>İncele</Button>
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

export default SearchLand;