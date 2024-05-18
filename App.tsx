import React from 'react';
import Geocoder from 'react-native-geocoding';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApiKeys } from './src/shared/types';
import MapSearch from './src/views/map-search';

Geocoder.init(ApiKeys.googleMaps);

const App = () => {
    return (
        <SafeAreaProvider>
            <MapSearch />
        </SafeAreaProvider>
    );
};

export default App;
