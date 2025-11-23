import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface MapViewProps {
  onLandClick?: (land: any) => void;
}

const MapView = ({ onLandClick }: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenSaved, setTokenSaved] = useState(false);

  // Mock farm data - gerçek lokasyonlarda tarlalar
  const mockFarms = [
    { id: 1, name: "Konya Ovası - 50 Dönüm Buğday Tarlası", lng: 32.4846, lat: 37.8746, type: "wheat", status: "ready", progress: 85 },
    { id: 2, name: "Çukurova - 30 Dönüm Pamuk", lng: 35.3213, lat: 37.0000, type: "cotton", status: "growing", progress: 60 },
    { id: 3, name: "Trakya - 100 Dönüm Ayçiçeği", lng: 27.2156, lat: 41.6719, type: "sunflower", status: "planting", progress: 25 },
    { id: 4, name: "Ege - 25 Dönüm Zeytin Bahçesi", lng: 27.1428, lat: 38.4237, type: "olive", status: "ready", progress: 95 },
    { id: 5, name: "Anadolu - 75 Dönüm Arpa", lng: 35.4956, lat: 39.9334, type: "barley", status: "growing", progress: 45 },
  ];

  useEffect(() => {
    if (!mapContainer.current || !tokenSaved || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [35.2433, 38.9637], // Türkiye merkezi
        zoom: 6,
        pitch: 45,
      });

      // Navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add farms as markers
      map.current.on('load', () => {
        mockFarms.forEach((farm) => {
          const el = document.createElement('div');
          el.className = 'farm-marker';
          el.style.cssText = `
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #10b981, #059669);
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.5);
            cursor: pointer;
            transition: transform 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
          `;
          
          // Icon based on type
          const icons: Record<string, string> = {
            wheat: '🌾',
            cotton: '🌸',
            sunflower: '🌻',
            olive: '🫒',
            barley: '🌾',
          };
          el.innerHTML = icons[farm.type] || '🌱';

          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.2)';
          });
          
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
          });

          el.addEventListener('click', () => {
            if (onLandClick) onLandClick(farm);
          });

          // Progress ring
          const ring = document.createElement('div');
          ring.style.cssText = `
            position: absolute;
            top: -5px;
            left: -5px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #fbbf24;
            transform: rotate(${farm.progress * 3.6}deg);
            pointer-events: none;
          `;
          el.appendChild(ring);

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div style="padding: 8px; min-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 4px; color: #1f2937;">${farm.name}</h3>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                <div style="flex: 1; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden;">
                  <div style="height: 100%; background: linear-gradient(90deg, #10b981, #059669); width: ${farm.progress}%;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 600; color: #059669;">${farm.progress}%</span>
              </div>
              <p style="margin-top: 8px; font-size: 12px; color: #6b7280;">Durum: ${farm.status === 'ready' ? '🎯 Hasat Hazır' : farm.status === 'growing' ? '🌱 Büyüyor' : '🌾 Ekim'}</p>
            </div>
          `);

          new mapboxgl.Marker(el)
            .setLngLat([farm.lng, farm.lat])
            .setPopup(popup)
            .addTo(map.current!);
        });
      });

    } catch (error) {
      console.error('Mapbox initialization error:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [tokenSaved, mapboxToken]);

  if (!tokenSaved) {
    return (
      <Card className="p-8 max-w-md mx-auto mt-20">
        <h3 className="text-2xl font-bold mb-4 text-foreground">Haritayı Başlat</h3>
        <p className="text-muted-foreground mb-6">
          Türkiye genelindeki tarlaları görmek için Mapbox token'ınızı girin.
          <a 
            href="https://account.mapbox.com/access-tokens/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            Token almak için tıklayın →
          </a>
        </p>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="pk.eyJ1Ijo..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="font-mono text-sm"
          />
          <Button 
            onClick={() => setTokenSaved(true)} 
            disabled={!mapboxToken}
            className="w-full"
          >
            Haritayı Aç
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/40" />
    </div>
  );
};

export default MapView;
