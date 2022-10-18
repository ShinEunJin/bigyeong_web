import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [locationError, setLocationError] =
    useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    const geolocationSuccessCallback = (position: GeolocationPosition) => {
      setLocation(position);
    };

    const geolocationErrorCallback = (error: GeolocationPositionError) => {
      setLocationError(error);
    };

    navigator.geolocation.getCurrentPosition(
      geolocationSuccessCallback,
      geolocationErrorCallback
    );
  }, []);

  if (locationError) return locationError;

  return location;
};

export default useGeolocation;
