import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";

/**
 * Hook to ask the location of the user.
 */
const useLocation = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("Permission to access location was denied");
      } else {
        let location = await getCurrentPositionAsync({});
        setLocation(location);
      }
    };

    getLocation();
  }, []);

  return [location, error] as const;
};

export default useLocation;
