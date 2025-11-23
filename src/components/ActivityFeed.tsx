import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Calendar, TrendingUp, Tractor, Package } from 'lucide-react';

const MyActivities = () => {
  // Kullanıcının son aktiviteleri
  const myActivities = [
    { 
      id: 1, 
      type: "harvest", 
      title: "Hasat Tamamlandı", 
      description: "Konya Ovası - 50 dönüm buğday",
      amount: "+₺45,000",
      time: "2 saat önce",
      icon: TrendingUp,
      color: "text-green-600 bg-green-500/10"
    },
    { 
      id: 2, 
      type: "service", 
      title: "Makine Kiralaması", 
      description: "Biçerdöver - 8 saat",
      amount: "-₺12,000",
      time: "5 saat önce",
      icon: Tractor,
      color: "text-amber-600 bg-amber-500/10"
    },
    { 
      id: 3, 
      type: "storage", 
      title: "Depolama Başladı", 
      description: "Silo - 150 ton buğday",
      amount: "-₺4,500",
      time: "1 gün önce",
      icon: Package,
      color: "text-blue-600 bg-blue-500/10"
    },
    { 
      id: 4, 
      type: "planning", 
      title: "Ekim Planlandı", 
      description: "Trakya - 100 dönüm ayçiçeği",
      amount: "Tahmini: ₺48,000",
      time: "2 gün önce",
      icon: Calendar,
      color: "text-purple-600 bg-purple-500/10"
    },
  ];

  return (
    <Card className="absolute top-20 right-4 z-10 w-80 bg-background/95 backdrop-blur-sm border-border/50 shadow-elevated">
      <div className="p-4 border-b border-border/50">
        <h3 className="font-bold text-foreground">Son Aktiviteler</h3>
      </div>
      
      <ScrollArea className="h-[400px]">
        <div className="p-4 space-y-3">
          {myActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm font-semibold text-foreground">
                        {activity.title}
                      </p>
                      <span className={`text-xs font-bold whitespace-nowrap ${
                        activity.amount.startsWith('+') ? 'text-green-600' : 
                        activity.amount.startsWith('-') ? 'text-red-600' : 
                        'text-muted-foreground'
                      }`}>
                        {activity.amount}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {activity.description}
                    </p>
                    <span className="text-xs text-muted-foreground/70">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default MyActivities;
