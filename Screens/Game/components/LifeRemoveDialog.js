import { Button, Text } from "@react-native-material/core";
import { View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default LifeRemoveDialog = ({ lives }) => {
  const [prevLives, setPrevLives] = useState(lives);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (lives < prevLives) {
      // TODO: Add sound effect when live is removed
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 200);
    }
    setPrevLives(lives);
  }, [lives]);

  if (isVisible) {
    return (
      <View style={styles.parentContainer}>
        <Ionicons style={styles.heartIcon} size={150} name="heart-dislike" />
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
    backgroundColor: "rgba(255, 0, 0,0.1)",
    display: "flex",
    justifyContent: "center",
  },
  heartIcon: {
    color: "rgba(255,255,255,0.6)",
    margin: "auto",
    alignSelf: "center",
  },
};
