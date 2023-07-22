import { Button, Text } from "@react-native-material/core";
import { View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default GameOverDialog = ({
  lives,
  onPressBackCheckpoint,
  setCurrentProblem,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (lives === 0) {
      // TODO: Add sound effect game over
      setIsVisible(true);
      setCurrentProblem({ given: [], commonDenominator: [], simplify: [] });
    } else setIsVisible(false);
  }, [lives]);

  if (isVisible) {
    return (
      // TODO: Design this page - https://in.pinterest.com/pin/775393260852950127/
      <View style={styles.parentContainer}>
        <View style={styles.dialogContainer}>
          <Text style={styles.text}>GAME OVER!</Text>
          <Button title="SELECT LEVEL" onPress={onPressBackCheckpoint} />
        </View>
      </View>
    );
  }
};

const styles = {
  parentContainer: {
    height: windowHeight,
    width: windowWidth,
    zIndex: 999,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "rgba(255,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
  },
  dialogContainer: {
    padding: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
    width: "90%",
    height: 300,
  },
  text: {
    color: "#fff",
    marginVertical: 5,
  },
};
