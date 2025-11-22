import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Leaf className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">TarlaHub</span>
            </div>
            <p className="opacity-90 max-w-md">
              Türkiye'nin en büyük tarla kiralama, tarım hizmeti ve tarım makinesi platformu. 
              Tarımın geleceğini birlikte inşa ediyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-accent transition-colors">Tarla Kirala</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hizmetler</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Makineler</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Depolama</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Destek</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-accent transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">SSS</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gizlilik</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
          <p>&copy; 2024 TarlaHub. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;