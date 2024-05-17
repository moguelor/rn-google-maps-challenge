import { createContext, useState } from "react";

type State = {
  headerHeight: number;
  setHeaderHeight: (value: number) => void;
  isFocusedSearchInput: boolean;
  setIsFocusedSearchInput: (value: boolean) => void;
  searchText: string;
  setSearchText: (value: string) => void;
};

interface StateProviderProps {
  children: React.ReactElement;
}

const StateContext = createContext<State>({
  headerHeight: 0,
  setHeaderHeight: (value: number) => {},
  isFocusedSearchInput: false,
  setIsFocusedSearchInput: (value: boolean) => {},
  searchText: "",
  setSearchText: (value: string) => {},
});

const StateProvider = ({ children }: StateProviderProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isFocusedSearchInput, setIsFocusedSearchInput] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <StateContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        isFocusedSearchInput,
        setIsFocusedSearchInput,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext };
export default StateProvider;
