import { View, Text } from "react-native";
import SpeedMeter from "../components/Speed2";
import { useContext } from "react";
import { AppContext } from "@/AppContext";
import HistoryButton from "@/components/HistoryButton";
const AirScreen = () => {
  const { data } = useContext(AppContext);
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#f0f5f9",
      }}
    >
      <HistoryButton type="airquality"/>
      <View
        style={{
          margin: 25,
        }}
      >
        <SpeedMeter value={data?.airquality ?? 0} />
      </View>
      <View
        style={{
          marginTop: 35,
          margin: 25,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "left",
        }}
      >
        <AirItem type='Good' text={"0-50"} color={"#02e702"} />
        <AirItem type='Medium' text={"50-100"} color={"#fefc00"} />
        <AirItem type='Least'  text={"100-150"} color={"#ff7e00"} />
        <AirItem type='Bad'  text={"150-200"} color={"#fd2601"} />
        <AirItem type='Very Bad' text={"200-300"} color={"#9c154d"} />
        <AirItem type='Dangerous' text={"300-500"} color={"#7e0d1f"} />
      </View>
    </View>
  );
};
const AirItem = ({ ...props }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        margin: 10,
        width: 120,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: props.color,
          borderRadius: 15,
        }}
      ></View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#232B5D",
            fontWeight: "bold",
          }}
        >
          {props.text}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#232B5D",
            fontWeight: "bold",
          }}
        >
          {props.type}
        </Text>
      </View>
    </View>
  );
};
export default AirScreen;
