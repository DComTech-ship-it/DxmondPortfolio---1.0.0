'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Loader2, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface LocationData {
  latitude: number | null;
  longitude: number | null;
  loading: boolean;
  error: string | null;
  address?: string;
  lastUpdated?: Date;
}

const LiveLocation = () => {
  const [location, setLocation] = useState<LocationData>({
    latitude: null,
    longitude: null,
    loading: true,
    error: null,
    address: '',
    lastUpdated: undefined
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        loading: false,
        error: "Geolocation is not supported by your browser",
      }));
      return;
    }

    setLocation(prev => ({ ...prev, loading: true, error: null }));

    const success = async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      let address = '';
      
      try {
        // Try to get address using reverse geocoding
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
        );
        const data = await response.json();
        address = data.display_name || 'Location not specified';
      } catch (error) {
        console.error('Error fetching address:', error);
        address = 'Address not available';
      }

      setLocation({
        latitude,
        longitude,
        loading: false,
        error: null,
        address,
        lastUpdated: new Date()
      });
    };

    const error = (err: GeolocationPositionError) => {
      setLocation(prev => ({
        ...prev,
        loading: false,
        error: err.message || "Unable to retrieve your location",
        lastUpdated: new Date()
      }));
    };

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const formatLastUpdated = (date?: Date) => {
    if (!date) return '';
    return `Last updated: ${date.toLocaleTimeString()}`;
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="max-w-4xl mx-auto px-4 sm:px-7 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-primary">My Current Location</h2>
                </div>
                <div className="text-sm text-gray-500">
                  {formatLastUpdated(location.lastUpdated)}
                </div>
              </div>

              {location.loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Detecting your location...
                  </p>
                </div>
              ) : location.error ? (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300">
                  <p>Unable to detect location: {location.error}</p>
                  <Button 
                    onClick={getLocation}
                    variant="outline" 
                    size="sm" 
                    className="mt-3 flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <iframe
                      width="100%"
                      height="100%"
                      title="Live Location"
                      className="border-0"
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                        (location.longitude || 0) - 0.01
                      }%2C${
                        (location.latitude || 0) - 0.01
                      }%2C${
                        (location.longitude || 0) + 0.01
                      }%2C${
                        (location.latitude || 0) + 0.01
                      }&amp;layer=mapnik&marker=${location.latitude}%2C${location.longitude}`}
                      allowFullScreen
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-0.5">
                          <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">Coordinates</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {location.latitude?.toFixed(6)}, {location.longitude?.toFixed(6)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mt-0.5">
                          <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">Address</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {location.address || 'Address not available'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      onClick={getLocation}
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Refresh Location
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveLocation;
