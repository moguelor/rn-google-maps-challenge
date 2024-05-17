import React, { useContext } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { AnimationDuration, Place } from "../types";
import { StyleSheet, View } from "react-native";
import { getKeyExtractor } from "../utils";
import { StateContext } from "../providers/state";
import PlaceItem from "./place-item";

interface OverlayProps {
  isVisible: boolean;
  places: Place[];
}

const Overlay = ({ isVisible, places }: OverlayProps) => {
  const state = useContext(StateContext);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.FlatList<Place>
      entering={FadeIn.duration(AnimationDuration.slow)}
      exiting={FadeOut.duration(AnimationDuration.slow)}
      renderItem={({ item }) => {
        return <PlaceItem {...item} />;
      }}
      keyExtractor={getKeyExtractor}
      data={places}
      style={[
        StyleSheet.absoluteFill,
        styles.list,
        { paddingTop: state.headerHeight + 10 },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
    zIndex: 9,
  },
});

export default Overlay;
