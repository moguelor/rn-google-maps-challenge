import React from "react";
import Providers from "./src/shared/providers/providers";
import MapScreen from "./src/map-screen";
import Geocoder from "react-native-geocoding";
import { ApiKeys } from "./src/shared/types";

Geocoder.init(ApiKeys.googleMaps);

const App = () => {
  return (
    <Providers>
      <MapScreen />
    </Providers>
  );
};

export default App;
