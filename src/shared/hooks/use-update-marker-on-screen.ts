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
        /**
         * Adding a time out to avoid the performance problem, more info on
         * docs.
         *
         * @info https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md#methods
         */
        setTimeout(() => {
            if (mapRef.current) {
                mapRef.current.fitToSuppliedMarkers([identifier]);
            }
        }, 300);
    }, [identifier, marker.latitude, marker.longitude]);

    return mapRef;
};

export default useUpdateMarkerOnScreen;
