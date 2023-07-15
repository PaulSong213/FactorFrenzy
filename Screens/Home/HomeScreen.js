import { Button, VStack, Text, Surface } from "@react-native-material/core";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import PlayButton from "./components/PlayButton";
import { gameTypes, operations } from "../../config/GameConfig";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultGameData } from "../../DefaultAsyncData";
import { useIsFocused } from "@react-navigation/native";
import MedalSection from "./components/MedalSection";



export default HomeScreen = ({ navigation }) => {
  const [gameData, setGameData] = useState(defaultGameData);
  const isFocused = useIsFocused();

  const navClickHandler =() => {
    navigation.navigate('Lesson');
  }

  const getGameData = async () => {
    try {
      const data = await AsyncStorage.getItem("gameData");
      if (data) setGameData(JSON.parse(data));
      // await AsyncStorage.clear();
      console.log(data);
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  useEffect(() => {
    console.log("RERENDER GAME DATA");
    // TODO: Add background music when game starts
    getGameData();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MedalSection isFocused={isFocused} />
        <Text style={styles.title}>Mathematics Games</Text>

        <TouchableOpacity style={styles.buttonStyle} onPress={navClickHandler}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#fff",
                }}
              >
                LESSON
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 15,
                  marginTop: 1,
                  color: "#fff",
                }}
              >
                FRACTION
              </Text>
            </View>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  marginLeft: 100,
                  marginTop: 30,
                }}
                source={require("../Home/image/kisspng-book-black-and-white-clip-art-5af950be37c274.0142455915262885742284.png")}
              />
              <Text style={{ marginLeft: 116, color: "#fff", fontSize: 15 }}>
                LEARN
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ height: 25, width: 25, marginLeft: 10, marginTop: -30 }}
              source={require("../Home/image/ahcd96qodmspspc3cacrk7ua12.png")}
            />
            <Image
              style={{ height: 25, width: 25, marginLeft: 2, marginTop: -30 }}
              source={require("../Home/image/minus-8-512.png")}
            />
            <Image
              style={{ height: 23, width: 23, marginTop: -28, marginLeft: 3 }}
              source={require("../Home/image/Daco_1092203.png")}
            />
            <Image
              style={{ height: 25, width: 25, marginLeft: 2, marginTop: -30 }}
              source={require("../Home/image/clipart3429603.png")}
            />
          </View>
        </TouchableOpacity>

        {gameData && (
          <VStack spacing={14}>
            {Object.entries(operations).map(([key, operation]) => (
              <View key={key}>
                <PlayButton
                  onPlayClick={() => {
                    console.log(operation.name);
                    navigation.navigate("Game", {
                      gameType: operation.gameType,
                      operation: operation.name,
                      gameData: gameData,
                    });
                  }}
                  gameType={operation.gameType}
                  level={gameData[operation.name].level}
                />
              </View>
            ))}
          </VStack>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    backgroundColor: "#111",
    minHeight: "100%",
    paddingTop: 30,
    paddingLeft: 12,
    paddingRight: 12,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "green",
    height: 145,
    borderRadius: 10,
    marginBottom: 10,
  },
};
