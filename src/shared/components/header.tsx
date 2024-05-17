import React, { useContext } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchInput from "./search-input";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import { StateContext } from "../providers/state";
import { AnimationDuration } from "../types";

const Header = () => {
  const { top } = useSafeAreaInsets();
  const state = useContext(StateContext);

  const animationProgress = useDerivedValue(() =>
    withTiming(state.isFocusedSearchInput ? 1 : 0, {
      duration: AnimationDuration.normal,
    })
  );

  const headerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animationProgress.value,
      [0, 1],
      ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
    ),
  }));

  return (
    <Animated.View
      onLayout={(e: LayoutChangeEvent) => {
        state.setHeaderHeight(e.nativeEvent.layout.height);
      }}
      style={[
        styles.header,
        headerStyle,
        {
          paddingTop: top + 10,
        },
      ]}
    >
      <SearchInput />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    backgroundColor: "#FFF",
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
});

export default Header;
