import {
  Button,
  VStack,
  Text,
  Surface,
  HStack,
} from "@react-native-material/core";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import ProgressBar from "react-native-progress/Bar";
import { Dimensions } from "react-native";
import Formula from "./components/Formula";

export default GameScreen = ({ navigation, route }) => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(2);
  const windowWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <VStack spacing={18}>
          <View style={styles.topBar}>
            <HStack spacing={10}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate("Home")}
              >
                <Ionicons
                  style={styles.backButton}
                  size={23}
                  name="arrow-back-circle"
                />
              </TouchableOpacity>
              <Text style={styles.score}>SCORE: {score}</Text>
            </HStack>
            <HStack>
              {[...Array(lives)].map((x, i) => (
                <Ionicons style={styles.lives} size={23} name="heart" />
              ))}
            </HStack>
          </View>
          <ProgressBar
            style={styles.levelProgress}
            width={windowWidth - 40}
            color={"#fff"}
            progress={level / 10}
          />
          <Formula operation={route.params.operation} />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    backgroundColor: "#111",
    minHeight: "100%",
    paddingTop: 35,
    paddingLeft: 17,
    paddingRight: 17,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
  },
  score: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 400,
    alignSelf: "center",
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    alignSelf: "center",
    color: "#fff",
  },
  lives: {
    alignSelf: "center",
    color: "#b31e14",
  },
  levelProgress: {
    alignSelf: "center",
  },
};
