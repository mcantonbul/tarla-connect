import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Sprout, MapPin, Tractor, TrendingUp } from 'lucide-react';

interface QuestStep {
  id: number;
  title: string;
  description: string;
  icon: any;
  completed: boolean;
}

const OnboardingQuest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [questSteps, setQuestSteps] = useState<QuestStep[]>([
    {
      id: 1,
      title: "Tarlana Hoş Geldin!",
      description: "Haritada ilk tarlana göz at. Her tarla bir fırsat, her fırsat bir serüven.",
      icon: MapPin,
      completed: false,
    },
    {
      id: 2,
      title: "Toprağı Tanı",
      description: "Hangi ürünü ekeceğine karar ver. Toprak analizi, iklim ve pazar fiyatlarını gözden geçir.",
      icon: Sprout,
      completed: false,
    },
    {
      id: 3,
      title: "Ekipmanını Seç",
      description: "İhtiyacın olan traktör ve ekipmanları kirala. En yakın sağlayıcılar haritada seni bekliyor.",
      icon: Tractor,
      completed: false,
    },
    {
      id: 4,
      title: "Hasadı Planla",
      description: "Ekim takvimini oluştur ve ilk hasadına geri sayıma başla. Kazancını hesapla!",
      icon: TrendingUp,
      completed: false,
    },
  ]);

  const completeStep = () => {
    const newSteps = [...questSteps];
    newSteps[currentStep].completed = true;
    setQuestSteps(newSteps);
    
    if (currentStep < questSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const skipQuest = () => {
    setCurrentStep(questSteps.length);
  };

  const progress = (questSteps.filter(s => s.completed).length / questSteps.length) * 100;

  if (currentStep >= questSteps.length) return null;

  const step = questSteps[currentStep];
  const Icon = step.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in">
      <Card className="max-w-2xl w-full mx-4 p-8 shadow-elevated border-2 border-primary/20">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-muted-foreground">
              Görev {currentStep + 1} / {questSteps.length}
            </span>
            <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Quest content */}
        <div className="text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <Icon className="h-10 w-10 text-primary-foreground" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              {step.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Quest steps preview */}
          <div className="grid grid-cols-4 gap-3 py-6">
            {questSteps.map((s, idx) => {
              const StepIcon = s.icon;
              return (
                <div
                  key={s.id}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    s.completed
                      ? 'bg-primary/10 border-primary'
                      : idx === currentStep
                      ? 'bg-accent/10 border-accent scale-110'
                      : 'bg-muted/30 border-border'
                  }`}
                >
                  <StepIcon className={`h-6 w-6 mx-auto ${
                    s.completed ? 'text-primary' : idx === currentStep ? 'text-accent-foreground' : 'text-muted-foreground'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center pt-4">
            <Button
              variant="outline"
              onClick={skipQuest}
              className="min-w-[120px]"
            >
              Atla
            </Button>
            <Button
              onClick={completeStep}
              className="min-w-[120px] bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              {currentStep === questSteps.length - 1 ? 'Başla!' : 'Devam Et'}
            </Button>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-sm text-center text-muted-foreground">
            💡 <span className="font-semibold text-foreground">Bilgin olsun:</span> Platform üzerinde her tamamladığın görev sana XP kazandırır!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default OnboardingQuest;
