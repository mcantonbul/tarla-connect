import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback } from './ui/avatar';

const ActivityFeed = () => {
  const activities = [
    { id: 1, user: "Ahmet K.", action: "Konya'da 50 dönüm buğday hasat etti", time: "2 dk önce", avatar: "AK", type: "harvest" },
    { id: 2, user: "Zeynep Y.", action: "Trakya'da yeni tarla kiraladı", time: "5 dk önce", avatar: "ZY", type: "rent" },
    { id: 3, user: "Mehmet S.", action: "Biçerdöver kiralaması tamamladı", time: "8 dk önce", avatar: "MS", type: "machine" },
    { id: 4, user: "Ayşe D.", action: "İlk rozet kazandı: 🌾 İlk Hasat", time: "12 dk önce", avatar: "AD", type: "badge" },
    { id: 5, user: "Can M.", action: "Seviye 5'e yükseldi!", time: "15 dk önce", avatar: "CM", type: "levelup" },
  ];

  const getActivityColor = (type: string) => {
    switch(type) {
      case 'harvest': return 'border-l-green-500';
      case 'rent': return 'border-l-blue-500';
      case 'machine': return 'border-l-amber-500';
      case 'badge': return 'border-l-purple-500';
      case 'levelup': return 'border-l-pink-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <Card className="absolute top-20 right-4 z-10 w-80 bg-background/95 backdrop-blur-sm border-border/50 shadow-elevated">
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-foreground">Canlı Aktiviteler</h3>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Canlı</span>
          </div>
        </div>
      </div>
      
      <ScrollArea className="h-[400px]">
        <div className="p-4 space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border-l-4 ${getActivityColor(activity.type)}`}
            >
              <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs font-bold">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground font-medium truncate">
                  {activity.user}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.action}
                </p>
                <span className="text-xs text-muted-foreground/70">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ActivityFeed;
