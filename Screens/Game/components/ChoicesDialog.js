import { Button, Text } from "@react-native-material/core";
import { View, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default ChoicesDialog = ({ willShowChoices, answerChoices }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (willShowChoices) {
    return (
      <View
        style={[isVisible ? styles.parentContainer : styles.smallContainer]}
      >
        {isVisible && (
          <View style={styles.dialogContainer}>
            <Text style={styles.text}>POSSIBLE ANSWERS</Text>
            <View style={styles.numbersContainer}>
              {answerChoices.map((value, index) => (
                <NumberContainer key={index} numValue={value} />
              ))}
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setIsVisible(!isVisible);
          }}
          style={styles.powerContainer}
        >
          <Ionicons
            style={styles.powerupIcon}
            size={45}
            color={"#fff"}
            name={isVisible ? "eye-off" : "eye"}
          />
          <Text style={[styles.title, { color: "#fff" }]}>
            {isVisible ? "Hide\nChoices" : "Show\nChoices"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const NumberContainer = ({ numValue }) => {
  return (
    <View style={[styles.textInputContainer, styles.activeInput]}>
      <TextInput
        editable={false}
        color="#fff"
        style={styles.numberInput}
        keyboardType="numeric"
        value={numValue.toString()}
        variant="standard"
      />
    </View>
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
    textAlign: "center",
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
  },
  textInputContainer: {
    padding: 5,
    borderRadius: 10,
    marginVertical: 6,
    width: 60,
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
