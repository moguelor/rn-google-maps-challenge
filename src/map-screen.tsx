import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Header from "./shared/components/header";
import Overlay from "./shared/components/overlay";
import { LegacyRef, useContext, useEffect, useRef, useState } from "react";
import { StateContext } from "./shared/providers/state";
import useLocation from "./shared/hooks/useLocation";
import { LocationObject } from "expo-location";

const MapScreen = () => {
  const [userLocation, error] = useLocation();
  const state = useContext(StateContext);

  // useEffect(() => {
  //   if (userLocation) {
  //     state.setCurrentLocation({
  //       address: "",
  //       location: {
  //         lat: userLocation.coords.latitude,
  //         lng: userLocation.coords.longitude,
  //       },
  //       placeId: "user-default",
  //       shortAddress: "",
  //     });
  //   }
  // }, [userLocation]);

  // useEffect(() => {
  //   // The marker has changed, is doing the zoom in.
  //   if (mapRef.current && state.currentLocation) {
  //     mapRef.current?.fitToSuppliedMarkers([state.currentLocation.placeId]);
  //   }
  // }, [state.currentLocation?.placeId]);

  // state.mapRef.current?.fitToSuppliedMarkers(["user-default-location"]);
  console.log("state.currentLocation", state.currentLocation);
  return (
    <View style={styles.container}>
      <Header />
      <Overlay
        isVisible={state.isFocusedSearchInput}
        places={state.places?.map((place) => ({
          address: place.description,
        }))}
      />
      {/* 
        Google Maps is no longer supported in Expo Go for iOS. 
        Is needed to use Apple Maps in Expo Go instead for android is using google maps.  
        More Info: 
        https://expo.dev/changelog/2024/05-07-sdk-51
        https://github.com/react-native-maps/react-native-maps/issues/5049
      */}
      <MapView style={styles.map} ref={state.mapRef}>
        <Marker
          identifier={state.currentLocation?.placeId ?? "user-default-location"}
          coordinate={{
            latitude:
              state.currentLocation?.location.lat ??
              state.userLocation?.coords.latitude ??
              0,
            longitude:
              state.currentLocation?.location.lng ??
              state.userLocation?.coords.longitude ??
              0,
          }}
        />
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

export default MapScreen;
