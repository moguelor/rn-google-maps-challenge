import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useRequestLocation from "../shared/hooks/use-request-location";
import { DEFAULT_LOCATION } from "../shared/utils";
import { MarkerItem } from "../shared/types";
import { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import useUpdateMarkerOnScreen from "../shared/hooks/use-update-marker-on-screen";
import Header from "../shared/components/header";
import Overlay from "../shared/components/overlay";
import useResourcePlaces from "../shared/hooks/use-resource-places";

/**
 * TODO: Task:
 *
 * 1. Ask to the user if can give permissions to location gps.
 *    Yes:
 *    [DONE]  Take the location object { lat, lng } and set it up as the default marker.
 *    No:
 *    [DONE]  Put default values to location object {lat, lng}.
 *
 *    Requirements:
 *
 *    [DONE] - To have a "defaultMarker" variable this would be initialized only once when the user is requesting the
 *      location and can be the user location or the default location.
 *
 *    - If the user is selecting a custom location from the searchbox is setted this new location.
 *    - If the user is removing the custom location the default location will be setted againg.
 *
 *
 *    // Inside of hook
 *    const marker =  userAcceptedPermissions ? {lat: 1234, lng: 1234} : fallback;
 *
 *    // user | default..
 *    const defaultMarker = useRequestLocation({ fallback: constants.DEFAULT_LOCATION });
 *
 *    // Probably in the global state.
 *    const [customMarker, setCustomMarker] = useState(null);
 *
 *   // Configuring the marker
 *   return <>
 *     <Marker coordinates={customMarker ?? defaultMarker }
 *   </>
 *
 *
 *    // In the searchbox component.
 *    onClear : () => {
 *      setSearchText(null);
 *      if(customMarker) {
 *         setCustomMarker(null);
 *      }
 *    }
 *
 *    onBack : () => {
 *     setIsOpenOverlay(false);
 *     setSearchText(null);
 *     setCustomMarker(null);
 *   }
 *
 *   itemSelected: () => {
 *      setIsOpenOverlay(false)
 *      setSearchText(description)
 *      setCustomMarker({object})
 *   }
 *
 *
 *
 */

const markerIdentifier = "main-marker";

const MapSearch = () => {
  const defaultMarker = useRequestLocation({ fallback: DEFAULT_LOCATION });
  const [customMarker, setCustomMarker] = useState<MarkerItem | null>(null);
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);
  const [query, setQuery] = useState("");
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
          setQuery("");
        }}
        onInputFocus={() => {
          setIsOpenOverlay(true);
        }}
        onPressClear={() => {
          if (customMarker) {
            setCustomMarker(null);
          }
          setQuery("");
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
    width: "100%",
    height: "100%",
  },
});

export default MapSearch;
