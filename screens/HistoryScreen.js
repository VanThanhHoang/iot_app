import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-gifted-charts";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const HistoryScreen = () => {
    const getColor = (temp) => {
        // < 20 viền xanh dương , 20 -30 xanh lá, >40 đỏ
        let color = "#f35c5c";
        const temp2 = parseFloat(temp);
        if(temp2 < 20) color = "#a6cafe";
        if(temp2 >= 20 && temp2 <= 30) color = "#20d0b3";
        console.log(color);
        return color;
      };
    const {... routeData} = useRoute().params;
    const history = routeData.history;
    const barData = history.map((item,index) => {
        console.log(index)
        // format time dd/mm hh:mm
        const date = new Date(item.time);
        const dateFormated = `${date.getDate()}/${date.getMonth()+1} ${date.getHours()}:${date.getMinutes()}`;

    return {
      value: item[routeData.type],
      label: dateFormated,
      frontColor: getColor(item[routeData.type])
    };
    });
  return (
    <View style={{
        flex: 1,
        backgroundColor: "#f0f5f9",
    }}>
        <Text style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            color: "#232B5D",
            marginTop:30
        }}>{`${routeData.type.toUpperCase()} HISTORY`}</Text>
       <View style={{
        flex:1,
        justifyContent: "center",
       }}>
       <BarChart
                barWidth={65}
                noOfSections={3}
                barBorderRadius={4}
                onPress={(value) => console.log(value)}
                showValuesAsTopLabel
                frontColor="lightgray"
                data={barData}
                width={screenWidth}
                labelWidth={65}
                yAxisThickness={0}
                xAxisThickness={0}
            />
       </View>
    </View>
  );
};
export default HistoryScreen;
