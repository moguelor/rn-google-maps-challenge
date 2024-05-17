import { LegacyRef, createContext, useRef, useState } from "react";
import { ApiKeys, Place } from "../types";
import MapView from "react-native-maps";
import useLocation from "../hooks/useLocation";
import { LocationObject } from "expo-location";
import useDebounce from "../hooks/useDebounce";

type State = {
  headerHeight: number;
  isFocusedSearchInput: boolean;
  searchText: string;
  currentLocation: Place | null;
  setHeaderHeight: (value: number) => void;
  setIsFocusedSearchInput: (value: boolean) => void;
  setSearchText: (value: string) => void;
  setCurrentLocation: (place: Place) => void;
  mapRef: LegacyRef<MapView>;
  userLocation?: LocationObject | null;
  places?: Place[];
};

interface StateProviderProps {
  children: React.ReactElement;
}

const StateContext = createContext<State>({
  headerHeight: 0,
  isFocusedSearchInput: false,
  searchText: "",
  currentLocation: null,
  setHeaderHeight: (value: number) => {},
  setIsFocusedSearchInput: (value: boolean) => {},
  setSearchText: (value: string) => {},
  setCurrentLocation: (place: Place) => {},
  mapRef: null,
  userLocation: null,
});

const StateProvider = ({ children }: StateProviderProps) => {
  const [userLocation] = useLocation();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isFocusedSearchInput, setIsFocusedSearchInput] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentLocation, setCurrentLocation] = useState<Place | null>(null);
  const [places, setPlaces] = useState([]);
  const mapRef = useRef<MapView>(null);

  const fetchResult = async (searchText: string) => {
    // Limit minimum of three letters.
    if (searchText.length < 3) {
      setPlaces([]);
      return;
    }
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${ApiKeys.googleMaps}&input=${searchText}&libraries=places`
      );
      const data = await response.json();
      setPlaces(data.predictions);
    } catch (error) {
      console.log(error);
    }
  };

  useDebounce({
    effect: () => {
      fetchResult(searchText);
    },
    dependencies: [searchText],
  });

  return (
    <StateContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        isFocusedSearchInput,
        setIsFocusedSearchInput,
        searchText,
        setSearchText,
        currentLocation,
        setCurrentLocation,
        mapRef,
        userLocation,
        places,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext };
export default StateProvider;
