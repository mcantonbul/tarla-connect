import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Tarımsal Potansiyelinizi Ortaya Çıkarın
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Hemen ücretsiz üye olun ve binlerce tarımsal fırsata erişin. 
            İlk ilanınızı 5 dakikada yayınlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 h-14"
            >
              Ücretsiz Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 h-14"
            >
              Daha Fazla Bilgi
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-6">
            Kredi kartı gerektirmez • 50,000+ aktif kullanıcı • 7/24 destek
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;