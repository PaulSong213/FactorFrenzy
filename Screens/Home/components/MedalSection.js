import { Text, HStack } from "@react-native-material/core";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { medalColors } from "../../../DefaultAsyncData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Medal from "./Medal";
export default MedalSection = ({ isFocused }) => {
  const [medals, setMedals] = useState([
    {
      title: "Initiative Learner",
      color: medalColors.bronze,
    },
  ]);

  useEffect(() => {
    const getMedalData = async () => {
      try {
        // get old medals
        let oldMedals = await AsyncStorage.getItem("gameMedals");
        if (oldMedals) {
          oldMedals = JSON.parse(oldMedals);
          setMedals((medals) => [...medals, ...oldMedals]);
        }
        console.log("Old Medals", oldMedals);
      } catch (e) {
        // saving error
        console.error(e);
      }
    };
    getMedalData();
  }, [isFocused]);

  return (
    <View
      backgroundColor="red"
      style={[styles.gameContainer, { backgroundColor: "#5C95BD" }]}
    >
      <Text style={styles.gameSubtitle}>YOUR MEDALS</Text>
      <SafeAreaView>
        <ScrollView horizontal={true} style={styles.scrollContainer}>
          <HStack m={4} spacing={12}>
            {medals.map((medal, i) => (
              <View key={i}>
                <Medal title={medal.title} color={medal.color} />
              </View>
            ))}
          </HStack>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = {
  scrollContainer: {
    paddingBottom: 15,
  },
  gameContainer: {
    width: "100%",
    paddingHorizontal: 12,
    paddingTop: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 25,
  },
  gameTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 32,
  },
  gameSubtitle: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 14,
    marginBottom: 10,
  },
  gameProgressText: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 14,
    marginTop: 8,
  },
  gamePlay: {
    position: "absolute",
    bottom: 10,
    right: 28,
  },
  gameIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  rotateDivision: {
    transform: [{ rotate: "140deg" }],
  },
};
