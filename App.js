import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import * as ExpoFont from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [fontsLoaded] = ExpoFont.useFonts({
    "raj-regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#000066",
            width: "100%",
            borderBottomLeftRadius: 100,
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <View style={{ position: "absolute", left: 10, top: 10 }}>
            <Ionicons name="menu-sharp" size={40} color="white" />
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontFamily: "raj-regular",
                  fontSize: 30,
                  color: "white",
                }}
              >
                PowerBall Number
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "80%",
                height: 50,
                backgroundColor: "gray",
                flexDirection: "row",
                justifyContent: "space-around",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: selectedMenu === 1 ? "red" : "blue",
                    marginVertical: 5,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30%",
                  },
                ]}
                onPress={() => {
                  setSelectedMenu(1);
                }}
              >
                <Text style={{ color: "white" }}>Powerball</Text>
              </Pressable>
              <View
                style={{ borderRightWidth: 0.5, borderRightColor: "black" }}
              />
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: selectedMenu === 2 ? "red" : "blue",
                    marginVertical: 5,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30%",
                  },
                ]}
                onPress={() => {
                  setSelectedMenu(2);
                }}
              >
                <Text style={{ color: "white" }}>MegaMillion</Text>
              </Pressable>
              <View
                style={{ borderRightWidth: 0.5, borderRightColor: "black" }}
              />
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: selectedMenu === 3 ? "red" : "blue",
                    marginVertical: 5,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30%",
                  },
                ]}
                onPress={() => {
                  setSelectedMenu(3);
                }}
              >
                <Text style={{ color: "white" }}>Get Tips</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: "#000066" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopRightRadius: 100,
          }}
        ></View>
      </View>
      <View style={{ flex: 3 }}></View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
