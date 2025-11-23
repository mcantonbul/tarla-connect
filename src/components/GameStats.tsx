import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Trophy, Star, Zap, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

const GameStats = () => {
  // Mock user data
  const userData = {
    name: "Çaylak Çiftçi",
    level: 3,
    xp: 1250,
    xpToNext: 2000,
    totalHarvest: 450,
    activeFarms: 3,
    badges: [
      { id: 1, name: "İlk Hasat", icon: "🌾", unlocked: true },
      { id: 2, name: "Erken Kalkan", icon: "🌅", unlocked: true },
      { id: 3, name: "Makine Ustası", icon: "🚜", unlocked: false },
      { id: 4, name: "Altın Eller", icon: "✨", unlocked: false },
    ],
    stats: [
      { label: "Toplam Dönüm", value: "450", icon: TrendingUp, color: "text-green-500" },
      { label: "Aktif Tarla", value: "3", icon: Star, color: "text-amber-500" },
      { label: "Hasat Sayısı", value: "12", icon: Trophy, color: "text-blue-500" },
    ]
  };

  const xpProgress = (userData.xp / userData.xpToNext) * 100;

  return (
    <div className="absolute top-20 left-4 z-10 space-y-3 w-80">
      {/* Player card */}
      <Card className="p-4 bg-background/95 backdrop-blur-sm border-border/50 shadow-elevated">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
            {userData.level}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-foreground">{userData.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Zap className="h-3 w-3 text-amber-500" />
              <Progress value={xpProgress} className="flex-1 h-1.5" />
              <span className="text-xs font-semibold text-muted-foreground">
                {userData.xp}/{userData.xpToNext}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {userData.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center p-2 rounded-lg bg-muted/50">
                <Icon className={`h-4 w-4 mx-auto mb-1 ${stat.color}`} />
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Badges */}
        <div className="flex gap-2 flex-wrap">
          {userData.badges.map((badge) => (
            <Badge
              key={badge.id}
              variant={badge.unlocked ? "default" : "outline"}
              className={`${
                badge.unlocked
                  ? 'bg-primary/10 text-primary border-primary/30'
                  : 'opacity-40 grayscale'
              }`}
            >
              <span className="mr-1">{badge.icon}</span>
              {badge.name}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Quick actions */}
      <Card className="p-3 bg-background/95 backdrop-blur-sm border-border/50 shadow-elevated">
        <h4 className="text-sm font-semibold text-foreground mb-2">Hızlı Görevler</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer">
            <span className="text-foreground">🌱 Yeni tarla ekle</span>
            <Badge variant="secondary" className="text-xs">+50 XP</Badge>
          </div>
          <div className="flex items-center justify-between text-sm p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer">
            <span className="text-foreground">🚜 Makine kirala</span>
            <Badge variant="secondary" className="text-xs">+30 XP</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GameStats;
