import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Place } from "../types";
import Ionicons from "@expo/vector-icons/Ionicons";

interface PlaceItemProps extends Place {}

const PlaceItem = ({ shortAddress, address }: PlaceItemProps) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.icon}>
        <Ionicons name={"location-sharp"} size={20} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {shortAddress}
          </Text>
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
