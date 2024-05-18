import React from "react";
import Geocoder from "react-native-geocoding";
import MapSearch from "./src/views/map-search";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApiKeys } from "./src/shared/types";

Geocoder.init(ApiKeys.googleMaps);

const App = () => {
  return (
    <SafeAreaProvider>
      <MapSearch />
    </SafeAreaProvider>
  );
};

export default App;
