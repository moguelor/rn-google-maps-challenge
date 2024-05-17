import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StateProvider from "./state";

interface ProvidersProps {
  children: React.ReactElement;
}

const Providers = ({ children }: ProvidersProps) => (
  <StateProvider>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </StateProvider>
);

export default Providers;
