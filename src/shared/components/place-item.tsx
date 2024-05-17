import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Place } from "../types";
import Ionicons from "@expo/vector-icons/Ionicons";
import Geocoder from "react-native-geocoding";
import { useContext } from "react";
import { StateContext } from "../providers/state";

interface PlaceItemProps extends Place {}

const PlaceItem = ({ address }: PlaceItemProps) => {
  const state = useContext(StateContext);
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        Geocoder.from(address).then((response) => {
          console.log(response.results[0].geometry.location);
          state.setCurrentLocation({
            location: {
              placeId: "new",
              lat: response.results[0].geometry.location.lat,
              lng: response.results[0].geometry.location.lng,
            },
          });
          state.mapRef.current?.fitToSuppliedMarkers(["new"]);

          // When the item is selected.
          //TODO: Put the description of that item in the search text.
          //TODO: Close the overlay
          //TODO: Print the marker.
          //TODO: Update zoom of the map to that market.
        });
      }}
    >
      <View style={styles.icon}>
        <Ionicons name={"location-sharp"} size={20} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.subTitle}>
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebebeb",
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  content: {
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  title: { flex: 1, fontSize: 16, lineHeight: 24 },
  subTitle: { flex: 1, fontSize: 14, color: "gray", lineHeight: 20 },
});

export default PlaceItem;
