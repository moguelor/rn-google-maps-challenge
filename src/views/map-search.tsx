import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../shared/components/header';
import Overlay from '../shared/components/overlay';
import useRequestLocation from '../shared/hooks/use-request-location';
import useResourcePlaces from '../shared/hooks/use-resource-places';
import useUpdateMarkerOnScreen from '../shared/hooks/use-update-marker-on-screen';
import { MarkerItem } from '../shared/types';
import { DEFAULT_LOCATION } from '../shared/utils';

const markerIdentifier = 'main-marker';

const MapSearch = () => {
    const defaultMarker = useRequestLocation({ fallback: DEFAULT_LOCATION });
    const [customMarker, setCustomMarker] = useState<MarkerItem | null>(null);
    const [isOpenOverlay, setIsOpenOverlay] = useState(false);
    const [query, setQuery] = useState('');
    const [headerHeight, setHeaderHeight] = useState(0);
    const marker = customMarker ?? defaultMarker;
    const mapRef = useUpdateMarkerOnScreen({
        marker,
        identifier: markerIdentifier,
    });
    const [places, isFetching, error] = useResourcePlaces({ query });

    return (
        <View style={styles.container}>
            <Header
                query={query}
                onPressBack={() => {
                    if (customMarker) {
                        setCustomMarker(null);
                    }
                    setIsOpenOverlay(false);
                    setQuery('');
                }}
                onInputFocus={() => {
                    setIsOpenOverlay(true);
                }}
                onPressClear={() => {
                    if (customMarker) {
                        setCustomMarker(null);
                    }
                    setQuery('');
                }}
                onInputChange={(value: string) => {
                    setQuery(value);
                }}
                setHeaderHeight={setHeaderHeight}
                isOpenOverlay={isOpenOverlay}
            />
            <Overlay
                isOpen={isOpenOverlay}
                places={places}
                isFetching={isFetching}
                error={error}
                onPressItem={(customMarker: MarkerItem) => {
                    setCustomMarker(customMarker);
                    setIsOpenOverlay(false);
                }}
                headerHeight={headerHeight}
            />
            <MapView ref={mapRef} style={styles.map}>
                <Marker identifier={markerIdentifier} coordinate={marker} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapSearch;
