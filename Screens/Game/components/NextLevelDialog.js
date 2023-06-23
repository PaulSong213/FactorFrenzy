import React, { useState } from "react";
import { Button, Text } from "@react-native-material/core";
import { View, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default NextLevelDialog = ({
  isVisible,
  level,
  score,
  onPressNextLevel,
}) => {
  if (isVisible) {
    return (
      <View style={styles.parentContainer}>
        <View style={styles.dialogContainer}>
          <Text style={styles.text}>Level {level} Completed!</Text>
          <Text style={styles.text}>Score {score} </Text>
          <Button title="Next Level" onPress={onPressNextLevel} />
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
    backgroundColor: "rgba(255,255,255,0.6)",
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
