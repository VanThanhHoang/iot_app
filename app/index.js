import React from "react";
import { View } from "react-native";
import AppProvier, { AppContext } from "../AppContext";
import AppNavigation from "../AppNavigation";
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppProvier>
        <AppNavigation />
      </AppProvier>
    </View>
  );
};
export default App;
