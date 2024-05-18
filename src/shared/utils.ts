import { GooglePlaceItem, MarkerItem } from "./types";

// Default marker location (Merida)
const DEFAULT_LOCATION: MarkerItem = {
  latitude: 20.97537,
  longitude: -89.61696,
};

// Used to get the key for the flat list.
const getKeyExtractor = (item: GooglePlaceItem) => item.place_id;

export { DEFAULT_LOCATION, getKeyExtractor };
