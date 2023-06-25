import {
  Button,
  VStack,
  Text,
  Surface,
  HStack,
} from "@react-native-material/core";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";
import ProgressBar from "react-native-progress/Bar";
import { Dimensions } from "react-native";
import Formula from "./components/Formula";
import NextLevelDialog from "./components/NextLevelDialog";
import AnswerConfig from "../../config/AnswerConfig";
import LifeRemoveDialog from "./components/LifeRemoveDialog";
import GameOverDialog from "./components/GameOverDialog";
import PowerUpsNavigation from "./components/PowerUpsNavigation";

export default GameScreen = ({ navigation, route }) => {
  const operation = route.params.operation;
  const checkpoints = [1, 3, 5, 8];
  const defaultLives = 5;
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(defaultLives);
  const [level, setLevel] = useState(3);

  const [currentProblem, setCurrentProblem] = useState(
    AnswerConfig[operation][`level${level}`]
  );
  const [maxLevel, setMaxLevel] = useState(
    Object.keys(AnswerConfig[operation]).length
  );
  const [remainingQuestion, setRemainingQuestion] = useState(
    countIsAnsweredFalse(currentProblem)
  );
  const firstUpdate = useRef(true);
  const [isLevelDialogVisible, setIsLevelDialogVisible] = useState(false);
  const [isAllLevelDialogVisible, setIsAllLevelDialogVisible] = useState(false);
  const windowWidth = Dimensions.get("window").width;

  function returnToCheckpoint() {
    let lowerCheckpoint = checkpoints[0];

    for (let i = 0; i < checkpoints.length; i++) {
      if (!checkpoints[i + 1]) lowerCheckpoint = checkpoints[i];
      if (checkpoints[i + 1] > level) {
        lowerCheckpoint = checkpoints[i];
        break;
      }
    }

    setLevel(lowerCheckpoint);
    const nextProblem = AnswerConfig[operation][`level${lowerCheckpoint}`];
    setCurrentProblem(nextProblem);
    setRemainingQuestion(countIsAnsweredFalse(nextProblem));
    setLives(defaultLives);
  }

  function countIsAnsweredFalse(obj) {
    let count = 0;

    function countIsAnsweredFalseRecursive(item) {
      if (typeof item === "object" && item !== null) {
        if (item.hasOwnProperty("isAnswered") && item.isAnswered === false) {
          count++;
        } else {
          Object.values(item).forEach((value) => {
            countIsAnsweredFalseRecursive(value);
          });
        }
      }
    }

    Object.values(obj).forEach((arr) => {
      arr.forEach((item) => {
        countIsAnsweredFalseRecursive(item);
      });
    });

    return count;
  }

  useEffect(() => {
    console.log("Remaining Questions========= ", remainingQuestion);
    if (firstUpdate.current || remainingQuestion < 0) {
      firstUpdate.current = false;
      return;
    }
    setScore(score + 20);

    if (remainingQuestion === 0) {
      if (level === maxLevel) setIsAllLevelDialogVisible(true);
      else setIsLevelDialogVisible(true);
    }
  }, [remainingQuestion]);

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
                <Ionicons key={i} style={styles.lives} size={23} name="heart" />
              ))}
            </HStack>
          </View>
          <ProgressBar
            style={styles.levelProgress}
            width={windowWidth - 40}
            color={"#c472f5"}
            progress={level / 10}
          />
          <Text style={styles.level}>LEVEL {level}</Text>
          <Formula
            currentProblem={currentProblem}
            operation={route.params.operation}
            remainingQuestion={remainingQuestion}
            setRemainingQuestion={setRemainingQuestion}
            setLives={setLives}
            lives={lives}
          />
        </VStack>
      </ScrollView>
      <NextLevelDialog
        isVisible={isLevelDialogVisible}
        level={level}
        score={score}
        isAllLevelDialogVisible={isAllLevelDialogVisible}
        onPressBackHome={() => {
          navigation.navigate("Home");
        }}
        onPressNextLevel={() => {
          const newLevel = level + 1;
          setLevel(newLevel);
          setIsLevelDialogVisible(false);
          const nextProblem = AnswerConfig[operation][`level${newLevel}`];
          setCurrentProblem(nextProblem);
          setRemainingQuestion(countIsAnsweredFalse(nextProblem));
          // TODO: Save score, level, and remaining lives in async storage
        }}
      />

      <LifeRemoveDialog lives={lives} />
      <GameOverDialog
        lives={lives}
        setCurrentProblem={setCurrentProblem}
        onPressBackCheckpoint={() => {
          returnToCheckpoint();
        }}
      />
      <PowerUpsNavigation />
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
  level: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 800,
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
    color: "#ff0000",
  },
  levelProgress: {
    alignSelf: "center",
  },
};
