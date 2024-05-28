import { AppContext } from "@/AppContext";
import React, { useContext } from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-gifted-charts";
// "Dry" (Khô): Độ ẩm tương đối dưới 30%.
// "Good" (Tốt): Độ ẩm tương đối từ 30% đến 60%.
// "Wet" (Ẩm ướt): Độ ẩm tương đối trên 60%.
const HumiditySreen = () => {
  const pieData = [
    {
      value: 70,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
      focused: true,
    },
    { value: 30, color: "#a8ecf8", gradientCenterColor: "#3BE9DE" },
  ];
  const getHumidityText = (humidity) => {
    if (humidity < 30) {
      return "Dry";
    } else if (humidity >= 30 && humidity <= 60) {
      return "Good";
    } else {
      return "Wet";
    }
  };
  const getHumidityAdviceInEnglish = (humidity) => {
    if (humidity < 30) {
      return "Dry: It's important to stay hydrated.\nDrink plenty of water and consider using a humidifier to add moisture to the air.\nAdditionally, use a good moisturizer to keep your skin hydrated.";
    } else if (humidity >= 30 && humidity <= 60) {
      return "Good: The humidity level is ideal.\nMaintain your current skincare routine and ensure you are staying hydrated.\nNo special adjustments are needed.";
    } else {
      return "Wet: High humidity can promote mold growth.\nMake sure your living space is well-ventilated, use a dehumidifier if necessary,and keep an eye on areas that tend to stay damp.";
    }
  };
  const { data, setIsLoading } = useContext(AppContext);
  const [pieData2, setPieData] = React.useState(pieData);
  React.useEffect(() => {
    if (data) {
      const humidity1 = {
        ...pieData[0],
        value: data.humi,
      };
      const humidity2 = {
        ...pieData[1],
        value: 100 - data.humi,
      };
      setPieData([humidity1, humidity2]);
      console.log([humidity1, humidity2]);
    }
  }, [data]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f5f9",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <PieChart
          data={pieData2}
          donut
          showGradient
          sectionAutoFocus
          radius={150}
          innerRadius={140}
          innerCircleColor={"#232B5D"}
          centerLabelComponent={() => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
                ></Text>
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                >
                  Humidity
                </Text>
                <Text
                  style={{ fontSize: 60, color: "white", fontWeight: "bold" }}
                >{`${pieData2[0].value}%`}</Text>
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                >
                  {getHumidityText(pieData2[0].value)}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
          marginTop: 20,
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
          {getHumidityAdviceInEnglish(pieData[0].value)}
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
export default HumiditySreen;
