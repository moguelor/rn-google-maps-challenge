import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { MarkerItem } from '../types';

interface Options {
    fallback?: MarkerItem;
}

/** Hook to request the location of the device. */
const useRequestLocation = ({
    fallback = { latitude: 0, longitude: 0 },
}: Options) => {
    const [location, setLocation] = useState<MarkerItem>(fallback);

    useEffect(() => {
        const requestLocation = async () => {
            let { status } = await requestForegroundPermissionsAsync();

            if (status === 'granted') {
                const currentPosition = await getCurrentPositionAsync();
                setLocation({
                    latitude: currentPosition.coords.latitude,
                    longitude: currentPosition.coords.longitude,
                });
            }
        };

        requestLocation();
    }, []);

    return location;
};

export default useRequestLocation;
