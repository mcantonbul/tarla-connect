import Navbar from "@/components/Navbar";
import MapView from "@/components/MapView";
import PortfolioStats from "@/components/GameStats";
import MyActivities from "@/components/ActivityFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Ana harita görünümü */}
      <MapView onLandClick={(land) => console.log('Tarla tıklandı:', land)} />
      
      {/* Sol panel - portföy takibi */}
      <PortfolioStats />
      
      {/* Sağ panel - kişisel aktiviteler */}
      <MyActivities />
    </div>
  );
};

export default Index;