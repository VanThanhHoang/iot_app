import { View, Text } from "react-native";
import SpeedMeter from "../components/SpeedM";
import { useContext } from "react";
import { AppContext } from "@/AppContext";
import HistoryButton from "@/components/HistoryButton";
const GasScreen = () => {
  const { data } = useContext(AppContext);
  
  function gasWarningAndAdvice(ppm) {
    if (ppm >= 0 && ppm <= 33) {
      return "Gas concentration is very low. It is generally safe, but still monitor for any changes.";
    } else if (ppm >= 34 && ppm <= 66) {
      return "Gas concentration is low. Maintain ventilation and monitor for any increase.";
    } else if (ppm >= 67 && ppm <= 100) {
      return "Gas concentration is moderately low. Ensure proper ventilation and keep monitoring.";
    } else if (ppm >= 101 && ppm <= 133) {
      return "Gas concentration is moderately high. Take measures to improve ventilation and reduce exposure.";
    } else if (ppm >= 134 && ppm <= 166) {
      return "Gas concentration is high. Immediate action is needed to improve ventilation and minimize exposure.";
    } else if (ppm >= 167 && ppm <= 200) {
      return "Gas concentration is very high. Evacuate the area immediately and seek professional help.";
    } else {
      return "Invalid input.";
    }
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#f0f5f9",
      }}
    >
     <HistoryButton type="gas"/>

      <View style={{
        margin:25
      }}>
        <SpeedMeter value={data?.gas ?? 0} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
          marginTop: 60,
          backgroundColor: "#F0F0F0",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#232B5D",
            padding: 25,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          {gasWarningAndAdvice(data?.gas ?? 0)}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          margin: 10,
          right: 0,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#232B5D",
            textAlign: "center",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          {`Last update: ${data?.timeUpdate}`}
        </Text>
      </View>
    </View>
  );
};
export default GasScreen;
