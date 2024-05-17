import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonIcon from "./button-icon";
import { useContext, useRef } from "react";
import { StateContext } from "../providers/state";

const SearchInput = () => {
  const state = useContext(StateContext);
  const inputRef = useRef<TextInput>(null);

  const openOverlay = () => {
    state.setIsFocusedSearchInput(true);
  };

  const closeOverlay = () => {
    state.setIsFocusedSearchInput(false);
    state.setSearchText("");
    inputRef.current?.blur();
  };

  return (
    <View style={styles.inputWrapper}>
      {state.isFocusedSearchInput && (
        <ButtonIcon onPress={closeOverlay}>
          <Ionicons name="chevron-back" size={30} color="#000" />
        </ButtonIcon>
      )}

      <TextInput
        ref={inputRef}
        value={state.searchText}
        onChangeText={(value) => {
          state.setSearchText(value);
        }}
        onFocus={openOverlay}
        style={styles.input}
        placeholder={"Please write your location..."}
      />

      {state.searchText && (
        <ButtonIcon
          onPress={() => {
            state.setSearchText("");
          }}
        >
          <Ionicons name="close-sharp" size={30} color="#000" />
        </ButtonIcon>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderColor: "lightgray",
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  input: {
    paddingVertical: 10,
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    fontWeight: "300",
    width: "100%",
  },
});

export default SearchInput;
