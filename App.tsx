import React from "react";
import Geocoder from "react-native-geocoding";
import { ApiKeys } from "./_src/shared/types";
import MapSearch from "./src/views/map-search";
import { SafeAreaProvider } from "react-native-safe-area-context";

Geocoder.init(ApiKeys.googleMaps);

const App = () => {
  return (
    <SafeAreaProvider>
      <MapSearch />
    </SafeAreaProvider>
  );
};

export default App;
