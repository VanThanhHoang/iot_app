import { AppContext } from "@/AppContext";
import HistoryButton from "@/components/HistoryButton";
import { get } from "firebase/database";
import { useContext } from "react";
import { View, Text, Image } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const DustScreen = () => {
  function dustWarningAndAdvice(µg_per_m3) {
    if (µg_per_m3 >= 0 && µg_per_m3 <= 12) {
      return "Dust concentration is very low. It is generally safe, but still monitor for any changes.";
    } else if (µg_per_m3 >= 13 && µg_per_m3 <= 35) {
      return "Dust concentration is low. Maintain ventilation and monitor for any increase.";
    } else if (µg_per_m3 >= 36 && µg_per_m3 <= 55) {
      return "Dust concentration is moderate. Ensure proper ventilation and keep monitoring.";
    } else if (µg_per_m3 > 55) {
      return "Dust concentration is high. Immediate action is needed to improve ventilation and minimize exposure.";
    } else {
      return "Invalid input.";
    }
  }
  const getDustColor = (dust) => {
    if (dust < 12) {
      return "#a6cafe";
    }
    if (dust >= 12 && dust <= 35) {
      return "#20d0b3";
    }
    if (dust >= 36 && dust <= 55) {
      return "#fcb832";
    }
    return "#f35c5c";
  };
  const getDustTextEng = (dust) => {
    if (dust < 12) {
      return "Very Low";
    }
    if (dust >= 12 && dust <= 35) {
      return "Low";
    }
    if (dust >= 36 && dust <= 55) {
      return "Moderate";
    }
    return "High";
  };
  const { data } = useContext(AppContext);
  return (
    <View
      style={{
        backgroundColor: "#f0f5f9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <HistoryButton type="dust"/>

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
      <CircularProgress
        value={data?.dust ?? 0}
        radius={120}
        duration={500}
        progressValueColor={"#2596be"}
        inActiveStrokeColor="#9babc1"
        maxValue={52}
        activeStrokeColor={getDustColor(data?.dust ?? 0)}
        title={"µg/m³"}
        titleColor={"#2596be"}
        activeStrokeWidth={20}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={20}
        titleStyle={{ fontWeight: "bold" }}
        progressFormatter={(value) => {
          "worklet";
          return value.toFixed(2); // 2 decimal places
        }}
      />

      <Text
        style={{
          fontSize: 32,
          color: "#2596be",
          textAlign: "center",
          marginTop: 50,
          fontWeight: "bold",
        }}
      >
        {getDustTextEng(data?.dust ?? 0)}
      </Text>
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
          {dustWarningAndAdvice(data?.dust ?? 0)}
        </Text>
      </View>
    </View>
  );
};
export default DustScreen;
