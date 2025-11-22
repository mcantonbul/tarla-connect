import { useState } from "react";
import { Search, MapPin, Calendar, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockMachinery = [
  {
    id: 1,
    title: "John Deere S780 Biçerdöver",
    location: "Konya, Karatay",
    dailyPrice: 8000,
    model: "2019",
    type: "Biçerdöver",
    image: "/placeholder.svg",
    features: ["GPS", "Klima", "Otomatik Vites"],
    available: true
  },
  {
    id: 2,
    title: "Case IH Puma 185 Traktör",
    location: "Ankara, Polatlı",
    dailyPrice: 2500,
    model: "2021",
    type: "Traktör",
    image: "/placeholder.svg",
    features: ["Klima", "4WD", "Hidrolik"],
    available: true
  },
  {
    id: 3,
    title: "New Holland T6.180 Traktör",
    location: "Eskişehir, Merkez",
    dailyPrice: 2200,
    model: "2020",
    type: "Traktör",
    image: "/placeholder.svg",
    features: ["Klima", "4WD"],
    available: false
  },
  {
    id: 4,
    title: "Massey Ferguson 9895 Biçerdöver",
    location: "Konya, Ereğli",
    dailyPrice: 7500,
    model: "2018",
    type: "Biçerdöver",
    image: "/placeholder.svg",
    features: ["GPS", "Klima"],
    available: true
  }
];

const SearchMachinery = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const features = ["GPS", "Klima", "4WD", "Hidrolik", "Otomatik Vites"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Makine Kirala</h1>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Makine tipi veya konum ara..."
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
                    Günlük Fiyat (₺): {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Makine Tipi</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="harvester">Biçerdöver</SelectItem>
                      <SelectItem value="tractor">Traktör</SelectItem>
                      <SelectItem value="plough">Pulluk</SelectItem>
                      <SelectItem value="seeder">Ekim Makinesi</SelectItem>
                      <SelectItem value="sprayer">İlaçlama</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Model Yılı</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020 ve öncesi</SelectItem>
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
              <p className="text-muted-foreground">{mockMachinery.length} makine bulundu</p>
              <Select defaultValue="price-low">
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">En Yeni</SelectItem>
                  <SelectItem value="price-low">Fiyat: Düşükten Yükseğe</SelectItem>
                  <SelectItem value="price-high">Fiyat: Yüksekten Düşüğe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockMachinery.map((machine) => (
                <Card key={machine.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img src={machine.image} alt={machine.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className={`absolute top-4 right-4 ${machine.available ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {machine.available ? 'Müsait' : 'Dolu'}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{machine.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{machine.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Gauge size={16} className="text-primary" />
                        <span className="text-sm">{machine.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span className="text-sm">Model: {machine.model}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {machine.features.map((feature) => (
                        <span key={feature} className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-2xl font-bold text-primary">₺{machine.dailyPrice.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">günlük</div>
                      </div>
                      <Button disabled={!machine.available}>
                        {machine.available ? 'Kirala' : 'Müsait Değil'}
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

export default SearchMachinery;