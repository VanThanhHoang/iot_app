import { AppContext } from "@/AppContext";
import React, { useContext, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PieChart } from "react-native-gifted-charts";
import CircularProgress from "react-native-circular-progress-indicator";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import db from "@/firebaseConfig";
import HistoryButton from '../components/HistoryButton'
// nhiệt độ không khi chia thành 4 loại như sau:
// - Rất lạnh: #344047
// - Lạnh: #60cdfe
// - Bình thường: #438819
// - Nóng: #fcb832
// - Rất nóng: #ff0d04
// nhiệt độ bé hơn 0: Rất lạnh
// nhiệt độ từ 0 đến 20: Lạnh
// nhiệt độ từ 21 đến 30: Bình thường
// nhiệt độ từ 31 đến 40: Nóng
// nhiệt độ lớn hơn 40: Rất nóng
const temperatureColors = {
  veryCold: "#344047",
  cold: "#60cdfe",
  normal: "#438819",
  hot: "#fcb832",
  veryHot: "#ff0d04",
};

const getTemperatureText = (temp) => {
  console.log(temp);
  // enlish
  if (temp < 0) {
    return "Very cold";
  }
  if (temp >= 0 && temp <= 20) {
    return "Cold";
  }
  if (temp >= 21 && temp <= 33) {
    return "Normal";
  }
  if (temp >= 33 && temp <= 37) {
    return "Hot";
  }
  return "Very hot";
};
// hàm chuyển đổi nhiệt độ từ độ C sang độ F
// giới hạn 2 số sau dấu phẩy
const celsiusToFahrenheit = (celsius) => {
  return ((celsius * 9) / 5 + 32).toFixed(1);
};
const fahrenheitToCelsius = (fahrenheit) => {
  return (((fahrenheit - 32) * 5) / 9).toFixed(1);
};
const TemperatureSreen = () => {
  const { data, setIsLoading } = useContext(AppContext);
  const [tempType, setTempType] = React.useState("C");
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data]);
  const getTempTitle = (temp) => {
    const temp2 = tempType == "C" ? `${temp}` : `${celsiusToFahrenheit(temp)} `;
    return temp2;
  };
  const getCircularProgressColorC = (temp) => {
    // < 20 viền xanh dương , 20 -30 xanh lá, >40 đỏ
    let color = "#f35c5c";
    const temp2 = parseFloat(temp);
    if(temp2 < 20) color = "#a6cafe";
    if(temp2 >= 20 && temp2 <= 30) color = "#20d0b3";
    console.log(color);
    return color;
  };
  const getCircularProgressColorF = (temp) => {
    // < 68 viền xanh dương , 68 - 86 xanh lá, >104 đỏ
   let color = "#f35c5c";
    const temp2 = parseFloat(temp);
    if(temp2 < 68) color = "#a6cafe";
    if(temp2 >= 68 && temp2 <= 86) color = "#20d0b3";
    return color;
  };
  const {setUser,user} = useContext(AppContext)
  const getUserInfo = async () => {
    try {
      const auth = getAuth();
      console.log(auth.currentUser)
      if (auth.currentUser) {
        const q = query(
          collection(db, "user"),
          where("uId", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          setUser({
            ...doc.data(),
            id: doc.id,
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#0970ec",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <HistoryButton type="temp"/>
      <CircularProgress
        value={getTempTitle(data?.temp ?? 0)}
        radius={120}
        duration={500}
        progressValueColor={"#ecf0f1"}
        inActiveStrokeColor="#9babc1"
        maxValue={122} 
        activeStrokeColor={tempType == "C" ? getCircularProgressColorC(data?.temp ?? 0) : getCircularProgressColorF(celsiusToFahrenheit(data?.temp ?? 0))}
        title={tempType == "C" ? "°C" : "°F"}
        titleColor={"white"}
        activeStrokeWidth={20}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={20}
        titleStyle={{ fontWeight: "bold" }}
      />
      <Text
        style={{
          fontSize: 60,
          color: "black",
          textAlign: "center",
          marginTop: 50,
          fontWeight: "bold",
        }}
      ></Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "white",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {getTemperatureText(data?.temp ?? 0)}
        </Text>
        <Image
          style={{
            width: 30,
            height: 30,
            tintColor: "white",
          }}
          source={require("../assets/thermometer.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setTempType(tempType === "C" ? "F" : "C");
        }}
        style={{
          width: 200,
          height: 50,
          backgroundColor: "white",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {`Change to display ${tempType === "C" ? "°F" : "°C"}`}
        </Text>
      </TouchableOpacity>
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
            color: "white",
            textAlign: "right",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >{`${tempType == "C" ? "Fahrenheit" : "Celsius"} ${
          tempType == "C"
            ? celsiusToFahrenheit(data?.temp ?? 0)
            : fahrenheitToCelsius(celsiusToFahrenheit(data?.temp ?? 0))
        }°${tempType == "C" ? "F" : "C"}`}</Text>
        <Text
          style={{
            fontSize: 18,
            color: "white",
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
export default TemperatureSreen;
