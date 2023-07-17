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
import ChoicesDialog from "./components/ChoicesDialog";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LevelSelection from "./components/LevelSelection";

export default GameScreen = ({ navigation, route }) => {
  const operation = route.params.operation;
  const gameData = route.params.gameData;
  const checkpoints = [1, 3, 5, 8];
  const defaultLives = 5;
  const [score, setScore] = useState(gameData[operation].score);
  const [lives, setLives] = useState(gameData[operation].lives);
  const [level, setLevel] = useState(gameData[operation].level);
  const [isLevelSelectVisible, setIsLevelSelectVisible] = useState(true);
  const [powerUpHintUpdater, setPowerUpHintUpdater] = useState(0);
  const [powerUpSkipUpdater, setPowerUpSkipUpdater] = useState(0);
  const [powerUpChoiceUpdater, setPowerUpChoiceUpdater] = useState(0);
  const [willShowChoices, setWillShowChoices] = useState(false);
  const [answerChoices, setAnswerChoices] = useState([]);
  const [lastRandomLevel, setLastRandomLevel] = useState();
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

  function generateRandomLevel(currentLevel) {
    const randomLevels = [
      [1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10],
    ];
    let levelsToSelect = randomLevels[0];
    for (let i = 0; i < randomLevels.length; i++) {
      const randomLevel = randomLevels[i];
      if (randomLevel.includes(currentLevel)) {
        levelsToSelect = randomLevel;
      }
    }

    if (lastRandomLevel) {
      levelsToSelect.splice(levelsToSelect.indexOf(lastRandomLevel), 1);
    }

    console.log(levelsToSelect, "==========");

    // Select a random level from the available randomLevels
    const randomLevel =
      levelsToSelect[Math.floor(Math.random() * levelsToSelect.length)];
    setLastRandomLevel(randomLevel);
    return randomLevel;
  }

  function returnToCheckpoint() {
    setLevel(gameData[operation].level);
    setLives(defaultLives);
    setIsLevelSelectVisible(true);
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

  function getAnswers(obj) {
    let answers = [];

    function countIsAnsweredFalseRecursive(item) {
      if (typeof item === "object" && item !== null) {
        if (item.hasOwnProperty("isAnswered") && item.isAnswered === false) {
          answers.push(item.value);
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

    return answers;
  }

  useEffect(() => {
    console.log("Remaining Questions========= ", remainingQuestion);
    if (firstUpdate.current || remainingQuestion < 0) {
      firstUpdate.current = false;
      return;
    }
    if (remainingQuestion === 0) {
      if (level === maxLevel) setIsAllLevelDialogVisible(true);
      else setIsLevelDialogVisible(true);
    }
  }, [remainingQuestion]);

  useEffect(() => {
    if (powerUpChoiceUpdater === 0) return;
    const problem = currentProblem;
    console.log(problem);
    setAnswerChoices(getAnswers(problem));
    // console.log(getAnswers(problem));
    setWillShowChoices(true);
  }, [powerUpChoiceUpdater]);

  useEffect(() => {
    if (powerUpSkipUpdater === 0) return;
    let currentLevel = level;
    let currentPowerUpHintUpdater = powerUpHintUpdater;
    let currentRemainingQuestions = remainingQuestion;
    const skipInterval = setInterval(() => {
      currentPowerUpHintUpdater++;
      currentRemainingQuestions--;
      setPowerUpHintUpdater(currentPowerUpHintUpdater);
      if (currentRemainingQuestions <= 0) clearInterval(skipInterval);
    }, 1000);
  }, [powerUpSkipUpdater]);

  useEffect(() => {
    console.log(gameData);
    if (!gameData) return;
    if (gameData[operation].level > level) return;
    let newGameData = gameData;
    newGameData[operation].lives = lives;
    newGameData[operation].score = score;
    newGameData[operation].level = level;
    const storeGameData = async (value) => {
      try {
        await AsyncStorage.setItem("gameData", JSON.stringify(newGameData));
      } catch (e) {
        // saving error
        console.error(e);
      }
    };
    storeGameData();
  }, [lives, score, level]);

  useEffect(() => {
    // TODO: Add background music when game starts
  }, []);

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
            level={level}
            powerUpHintUpdater={powerUpHintUpdater}
            setPowerUpHintUpdater={setPowerUpHintUpdater}
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
        operation={operation}
        isVisible={isLevelDialogVisible}
        level={level}
        score={score}
        isAllLevelDialogVisible={isAllLevelDialogVisible}
        onPressBackHome={() => {
          navigation.navigate("Home");
        }}
        onPressNextLevel={() => {
          setScore(score + 100);
          const newLevel = level + 1;
          const randomLevel = generateRandomLevel(level);
          setLevel(newLevel);
          setIsLevelDialogVisible(false);
          const nextProblem = AnswerConfig[operation][`level${randomLevel}`];
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
      <LevelSelection
        generateRandomLevel={generateRandomLevel}
        maxLevel={level}
        isLevelSelectVisible={isLevelSelectVisible}
        setIsLevelSelectVisible={setIsLevelSelectVisible}
        setLevel={setLevel}
        setCurrentProblem={setCurrentProblem}
        setRemainingQuestion={setRemainingQuestion}
        AnswerConfig={AnswerConfig}
        operation={operation}
        countIsAnsweredFalse={countIsAnsweredFalse}
      />
      <PowerUpsNavigation
        powerUpHint={() => {
          setPowerUpHintUpdater(powerUpHintUpdater + 1);
        }}
        powerUpSkip={() => {
          setPowerUpSkipUpdater(powerUpSkipUpdater + 1);
        }}
        powerUpChoice={() => {
          if (!willShowChoices)
            setPowerUpChoiceUpdater(powerUpChoiceUpdater + 1);
        }}
        willShowChoices={willShowChoices}
        score={score}
        setScore={setScore}
      />
      <ChoicesDialog
        willShowChoices={willShowChoices}
        answerChoices={answerChoices}
      />
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
