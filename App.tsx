import React from "react";
import Providers from "./src/shared/providers/providers";
import MapScreen from "./src/map-screen";

const App = () => {
  return (
    <Providers>
      <MapScreen />
    </Providers>
  );
};

export default App;
