import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import Header from "./shared/components/header";
import Overlay from "./shared/components/overlay";
import { useContext } from "react";
import { StateContext } from "./shared/providers/state";

const MapScreen = () => {
  const state = useContext(StateContext);

  return (
    <View style={styles.container}>
      <Header />
      <Overlay
        isVisible={state.isFocusedSearchInput}
        places={[
          {
            location: { lat: 0, lng: 0 },
            placeId: "1",
            address: "Full Address Demo",
            shortAddress: "Short Address Demo",
          },
          {
            location: { lat: 0, lng: 0 },
            placeId: "2",
            address: "Full Address Demo",
            shortAddress: "Short Address Demo",
          },
          {
            location: { lat: 0, lng: 0 },
            placeId: "3",
            address: "Full Address Demo",
            shortAddress: "Short Address Demo",
          },
        ]}
      />
      <MapView style={styles.map} />
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
