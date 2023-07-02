import React, { useState, useEffect } from "react";
import { Button, Text } from "@react-native-material/core";
import { View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Keyboard } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default PowerUpsNavigation = ({ powerUpHint }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [toConfirmUse, setToConfirmUse] = useState(null);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const powerUps = {
    hint: {
      title: "Hint",
      ionIcon: "contrast",
      color: "#e53f71",
      description: "Answer 1 question on problem",
      cost: 200,
    },
    choices: {
      title: "Choices",
      ionIcon: "disc",
      color: "#e53f71",
      description: "Show all the possible answer in the problem",
      cost: 300,
    },
    skipLevel: {
      title: "Skip",
      ionIcon: "play-circle",
      color: "#e53f71",
      description: "Automatically win this level",
      cost: 500,
    },
  };

  if (!isKeyboardVisible) {
    return (
      <View
        style={[
          styles.parentContainer,
          toConfirmUse ? { height: windowHeight } : "",
        ]}
      >
        {!toConfirmUse && (
          <View style={styles.dialogContainer}>
            {Object.entries(powerUps).map(([key, powerUp]) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setToConfirmUse(powerUp);
                  }}
                  style={styles.powerContainer}
                  key={key}
                >
                  <Ionicons
                    style={styles.powerupIcon}
                    size={45}
                    color={powerUp.color}
                    name={powerUp.ionIcon}
                  />
                  <Text style={styles.title}>{powerUp.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        {toConfirmUse && (
          <View style={styles.confirmDialogContainer}>
            <View style={styles.confirmDialog}>
              <Text style={styles.text}>
                Power Up Type: {toConfirmUse.title}
              </Text>
              <Text style={styles.text}>
                Description: {toConfirmUse.description}
              </Text>
              <Text style={styles.text}>Score Cost: {toConfirmUse.cost}</Text>
              <Button
                title="Use Power Up"
                color="#e54072"
                onPress={() => {
                  if (toConfirmUse.title === "Hint") powerUpHint();
                  setToConfirmUse(null);
                }}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
};

const styles = {
  parentContainer: {
    width: windowWidth,
    zIndex: 999,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0)",
    display: "flex",
    justifyContent: "flex-end",
  },
  confirmDialogContainer: {
    position: "absolute",
    bottom: 0,
    width: windowWidth,
    padding: 20,
  },
  confirmDialog: {
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 20,
  },
  dialogContainer: {
    padding: 8,
    borderRadius: 10,
    alignSelf: "center",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  powerupIcon: {
    marginVertical: 5,
    alignSelf: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
    alignSelf: "center",
  },
  powerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
};
