import { Card } from './ui/card';
import { MapPin, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const PortfolioStats = () => {
  // Kullanıcının portföy verileri
  const portfolioData = {
    totalArea: 450, // toplam dönüm
    activeFarms: 3,
    monthlyRevenue: 125000,
    monthlyExpense: 45000,
    farms: [
      { name: "Konya Ovası", area: 50, crop: "Buğday", status: "Hasat Hazır", revenue: 45000 },
      { name: "Çukurova", area: 30, crop: "Pamuk", status: "Büyüme", revenue: 32000 },
      { name: "Trakya", area: 100, crop: "Ayçiçeği", status: "Ekim", revenue: 48000 },
    ]
  };

  const profit = portfolioData.monthlyRevenue - portfolioData.monthlyExpense;
  const profitMargin = ((profit / portfolioData.monthlyRevenue) * 100).toFixed(1);

  return (
    <div className="absolute top-20 left-4 z-10 space-y-3 w-80">
      {/* Genel özet */}
      <Card className="p-4 bg-background/95 backdrop-blur-sm border-border/50 shadow-elevated">
        <h3 className="font-bold text-foreground mb-4">Portföy Özeti</h3>
        
        {/* Gelir/Gider */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-foreground">Gelir (Aylık)</span>
            </div>
            <span className="text-lg font-bold text-green-600">
              ₺{portfolioData.monthlyRevenue.toLocaleString('tr-TR')}
            </span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-foreground">Gider (Aylık)</span>
            </div>
            <span className="text-lg font-bold text-red-600">
              ₺{portfolioData.monthlyExpense.toLocaleString('tr-TR')}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Net Kar</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-primary">
                ₺{profit.toLocaleString('tr-TR')}
              </span>
              <span className="block text-xs text-muted-foreground">
                {profitMargin}% margin
              </span>
            </div>
          </div>
        </div>

        {/* Portföy stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-foreground">{portfolioData.totalArea}</div>
            <div className="text-xs text-muted-foreground">Toplam Dönüm</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-foreground">{portfolioData.activeFarms}</div>
            <div className="text-xs text-muted-foreground">Aktif Tarla</div>
          </div>
        </div>
      </Card>

      {/* Aktif tarlalar */}
      <Card className="p-4 bg-background/95 backdrop-blur-sm border-border/50 shadow-elevated">
        <h4 className="text-sm font-semibold text-foreground mb-3">Aktif Tarlalar</h4>
        <div className="space-y-2">
          {portfolioData.farms.map((farm, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span className="text-sm font-medium text-foreground">{farm.name}</span>
                </div>
                <span className="text-xs font-semibold text-primary">
                  ₺{farm.revenue.toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{farm.area} dönüm • {farm.crop}</span>
                <span className={`px-2 py-0.5 rounded-full ${
                  farm.status === 'Hasat Hazır' ? 'bg-green-500/20 text-green-700' :
                  farm.status === 'Büyüme' ? 'bg-amber-500/20 text-amber-700' :
                  'bg-blue-500/20 text-blue-700'
                }`}>
                  {farm.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PortfolioStats;
