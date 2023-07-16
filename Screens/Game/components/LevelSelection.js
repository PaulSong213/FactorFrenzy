import { Button, Text } from "@react-native-material/core";
import { View, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default LevelSection = ({
  isLevelSelectVisible,
  setIsLevelSelectVisible,
  maxLevel,
  setLevel,
  setCurrentProblem,
  setRemainingQuestion,
  AnswerConfig,
  operation,
  countIsAnsweredFalse,
}) => {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (isLevelSelectVisible) {
    return (
      <View
        style={[
          isLevelSelectVisible ? styles.parentContainer : styles.smallContainer,
        ]}
      >
        {isLevelSelectVisible && (
          <View style={styles.dialogContainer}>
            <Text style={styles.text}>SELECT LEVEL</Text>
            <View style={styles.numbersContainer}>
              {levels.map((value, index) => (
                <NumberContainer
                  key={index}
                  numValue={value}
                  isUnlocked={value <= maxLevel}
                  isCheckpoint={value === maxLevel}
                  onPress={() => {
                    setLevel(value);
                    const nextProblem =
                      AnswerConfig[operation][`level${value}`];
                    setCurrentProblem(nextProblem);
                    setRemainingQuestion(countIsAnsweredFalse(nextProblem));
                    setIsLevelSelectVisible(false);
                  }}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    );
  }
};

const NumberContainer = ({ numValue, isUnlocked, isCheckpoint, onPress }) => {
  return (
    <TouchableOpacity
      disabled={!isUnlocked}
      onPress={onPress}
      style={[
        styles.textInputContainer,
        isUnlocked ? styles.activeInput : styles.inactiveInput,
        isCheckpoint ? styles.checkpoint : "",
      ]}
    >
      <TextInput
        editable={false}
        color="#fff"
        style={styles.numberInput}
        keyboardType="numeric"
        value={numValue.toString()}
        variant="standard"
      />
    </TouchableOpacity>
  );
};

const styles = {
  parentContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    height: windowHeight,
    width: windowWidth,
    zIndex: 999,
    position: "absolute",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },
  dialogContainer: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    backgroundColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    marginVertical: 5,
    textAlign: "center",
    fontSize: 35,
  },
  powerupIcon: {
    marginVertical: -5,
    alignSelf: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 12,
    alignSelf: "center",
    textAlign: "center",
  },
  powerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    left: 35,
  },
  smallContainer: {
    zIndex: 900,
    position: "absolute",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    bottom: 0,
    left: 0,
  },
  activeInput: {
    backgroundColor: "#5d3675",
    opacity: 0.9,
  },
  checkpoint: {
    backgroundColor: "#e53f71",
    opacity: 1,
  },
  inactiveInput: {
    backgroundColor: "#807e7f",
    opacity: 0.6,
  },
  textInputContainer: {
    padding: 5,
    borderRadius: 10,
    marginVertical: 6,
    width: 90,
    margin: 3,
  },
  numberInput: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
  },
  numbersContainer: {
    display: "flex",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "space-between",
  },
};
