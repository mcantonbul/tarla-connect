import { useState } from 'react';
import Navbar from "@/components/Navbar";
import MapView from "@/components/MapView";
import OnboardingQuest from "@/components/OnboardingQuest";
import GameStats from "@/components/GameStats";
import ActivityFeed from "@/components/ActivityFeed";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Onboarding Quest - hikaye tabanlı başlangıç */}
      {showOnboarding && <OnboardingQuest />}
      
      {/* Ana harita görünümü */}
      <MapView onLandClick={(land) => console.log('Tarla tıklandı:', land)} />
      
      {/* Sol panel - oyuncu bilgileri */}
      <GameStats />
      
      {/* Sağ panel - canlı aktiviteler */}
      <ActivityFeed />
    </div>
  );
};

export default Index;