import React, { useEffect, useState } from "react";
import { Button, Text } from "@react-native-material/core";
import { View, Dimensions } from "react-native";
import { medalColors } from "../../../DefaultAsyncData";
import Medal from "../../Home/components/Medal";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default NextLevelDialog = ({
  isVisible,
  level,
  score,
  onPressNextLevel,
  onPressBackHome,
  isAllLevelDialogVisible,
  operation,
}) => {
  const [medalRecieved, setMedalRecieved] = useState({
    title: "",
    color: "#fff",
  });

  useEffect(() => {
    if (isAllLevelDialogVisible) {
      let medalColor = medalColors.bronze;
      if (score > 800) {
        medalColor = medalColors.gold;
      } else if (score > 500) {
        medalColor = medalColors.silver;
      }
      const medalTitle = `Completing ${operation} Fraction`;

      const newMedal = {
        title: medalTitle,
        color: medalColor,
      };
      setMedalRecieved(newMedal);

      const storeMedalData = async (newMedal) => {
        try {
          // get old medals
          let oldMedals = await AsyncStorage.getItem("gameMedals");
          let newMedalData = [];
          if (oldMedals) {
            oldMedals = JSON.parse(oldMedals);
            newMedalData.push(oldMedals);
          }
          newMedalData.push(newMedal);
          await AsyncStorage.setItem(
            "gameMedals",
            JSON.stringify(newMedalData)
          );
          console.log("Medal Stored", newMedalData);
        } catch (e) {
          // saving error
          console.error(e);
        }
      };
      storeMedalData(newMedal);
    }
  }, [isAllLevelDialogVisible]);

  if (isVisible) {
    return (
      // Navigating to the next level modal
      // TODO: Design this screen - https://www.pinterest.ph/llli/game-ui-end-level-screens/
      <View style={styles.parentContainer}>
        <View style={styles.dialogContainer}>
          <Text style={styles.text}>Level {level} Completed!</Text>
          <Text style={styles.text}>Score {score} </Text>
          <Button title="Next Level" onPress={onPressNextLevel} />
        </View>
      </View>
    );
  } else if (isAllLevelDialogVisible) {
    return (
      // ALL LEVEL DONE - show the medal
      // TODO: Design this screen (SHOWING THE MEDAL) - https://www.pinterest.ph/llli/game-ui-end-level-screens/
      <View style={styles.parentContainer}>
        <View style={styles.dialogContainer}>
          <Text style={styles.text}>
            Congats! All level done on {operation}
          </Text>
          <Medal title={medalRecieved.title} color={medalRecieved.color} />
          <Button title="Go Back Home" onPress={onPressBackHome} />
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
    alignItems: "center",
  },
  dialogContainer: {
    padding: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
    width: "90%",
    height: 300,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    marginVertical: 5,
    fontSize: 18,
    textAlign: "center",
  },
};
