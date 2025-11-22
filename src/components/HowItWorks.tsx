import { Card } from "@/components/ui/card";
import { Search, MessageSquare, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Keşfedin",
    description: "İhtiyacınıza uygun tarla, hizmet veya makineyi filtreleyerek bulun.",
  },
  {
    icon: MessageSquare,
    step: "2",
    title: "İletişim Kurun",
    description: "İlan sahibiyle güvenli mesajlaşma sistemiyle iletişime geçin.",
  },
  {
    icon: CheckCircle2,
    step: "3",
    title: "Anlaşın ve Başlayın",
    description: "Güvenli ödeme sistemiyle işlemi tamamlayın ve işinize başlayın.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            3 Adımda Başlayın
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            TarlaHub ile tarımsal ihtiyaçlarınızı karşılamak çok kolay
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-center opacity-90">
                    {step.description}
                  </p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;