import { useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import { MarkerItem } from '../types';

interface Options {
    marker: MarkerItem;
    identifier: string;
}

/** Hook to update the marker on screen when the latitude or longitude changes. */
const useUpdateMarkerOnScreen = ({ marker, identifier }: Options) => {
    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.fitToSuppliedMarkers([identifier]);
        }
    }, [marker.latitude, marker.longitude]);

    return mapRef;
};

export default useUpdateMarkerOnScreen;
