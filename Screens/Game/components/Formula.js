import { VStack, Text, HStack, Divider } from "@react-native-material/core";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  operations,
  isWithCommonDenominator,
} from "../../../config/GameConfig";
export default Formula = ({
  currentProblem,
  operation,
  remainingQuestion,
  setRemainingQuestion,
  setLives,
  lives,
  powerUpHintUpdater,
  setPowerUpHintUpdater,
  level,
}) => {
  /*
    Tutorial reference
    Adding : https://www.youtube.com/watch?v=CoCmsyFQ_Xc
    Subtraction : https://www.youtube.com/watch?v=jgGAJOe-Bgg
    Multiplication : https://www.youtube.com/watch?v=alstJ37BoZo
    Diving : https://www.youtube.com/watch?v=RAKwouL-lTc
  */

  const getOperation = (currentOperation, length, index, isForSimplify) => {
    if (length === index + 2) return "=";
    else if (isForSimplify)
      return "  "; // return empty operation for simplification
    else return operations[currentOperation].symbol;
  };
  const [keyRenderIndex, setKeyRenderIndex] = useState(level - 1);
  const [idsToUpdateHint, setIdsToUpdateHint] = useState([]);
  useEffect(() => {
    setKeyRenderIndex(keyRenderIndex + 1);
    console.log("FORMULA RERENDER");
  }, [currentProblem]);

  return (
    <View style={{ paddingBottom: 200 }}>
      {/* GIVEN */}
      <HStack m={8} spacing={12}>
        {currentProblem.given.map((value, index) => (
          <HStack spacing={16} key={`given_${keyRenderIndex}_${index}`}>
            <VStack>
              <NumberContainer
                level={level}
                priorityIndex={
                  String(keyRenderIndex + 0) + String(index) + String(1)
                }
                keyRenderIndex={keyRenderIndex}
                setPowerUpHintUpdater={setPowerUpHintUpdater}
                powerUpHintUpdater={powerUpHintUpdater}
                setIdsToUpdateHint={setIdsToUpdateHint}
                idsToUpdateHint={idsToUpdateHint}
                setLives={setLives}
                lives={lives}
                remainingQuestion={remainingQuestion}
                setRemainingQuestion={setRemainingQuestion}
                number={value.numerator.isAnswered ? value.numerator.value : ""}
                _isEditable={!value.numerator.isAnswered}
                correctAnswer={value.numerator.value}
              />
              {value.numerator.value && value.denomenator.value && (
                <Divider color="#fff" />
              )}
              <NumberContainer
                level={level}
                priorityIndex={
                  String(keyRenderIndex + 0) + String(index) + String(2)
                }
                keyRenderIndex={keyRenderIndex}
                setPowerUpHintUpdater={setPowerUpHintUpdater}
                powerUpHintUpdater={powerUpHintUpdater}
                setIdsToUpdateHint={setIdsToUpdateHint}
                idsToUpdateHint={idsToUpdateHint}
                setLives={setLives}
                lives={lives}
                remainingQuestion={remainingQuestion}
                setRemainingQuestion={setRemainingQuestion}
                number={
                  value.denomenator.isAnswered ? value.denomenator.value : ""
                }
                _isEditable={!value.denomenator.isAnswered}
                correctAnswer={value.denomenator.value}
              />
            </VStack>
            {index < currentProblem.given.length - 1 && (
              <View style={styles.operationContainer}>
                <Text style={styles.number}>
                  {getOperation(operation, currentProblem.given.length, index)}
                </Text>
              </View>
            )}
          </HStack>
        ))}
      </HStack>

      {/* COMMON DENOMINATOR */}
      {currentProblem.commonDenominator && (
        <HStack m={8} spacing={12}>
          {currentProblem.commonDenominator.map((value, index) => (
            <HStack
              spacing={16}
              key={`commonDenominator_${keyRenderIndex}_${index}`}
            >
              <VStack>
                <NumberContainer
                  level={level}
                  priorityIndex={
                    String(keyRenderIndex + 1) + String(index) + String(1)
                  }
                  keyRenderIndex={keyRenderIndex}
                  setPowerUpHintUpdater={setPowerUpHintUpdater}
                  powerUpHintUpdater={powerUpHintUpdater}
                  setIdsToUpdateHint={setIdsToUpdateHint}
                  idsToUpdateHint={idsToUpdateHint}
                  setLives={setLives}
                  lives={lives}
                  remainingQuestion={remainingQuestion}
                  setRemainingQuestion={setRemainingQuestion}
                  number={
                    value.numerator.isAnswered ? value.numerator.value : ""
                  }
                  _isEditable={!value.numerator.isAnswered}
                  correctAnswer={value.numerator.value}
                />

                {value.numerator.value && value.denomenator.value && (
                  <Divider color="#fff" />
                )}
                <NumberContainer
                  level={level}
                  priorityIndex={
                    String(keyRenderIndex + 1) + String(index) + String(2)
                  }
                  keyRenderIndex={keyRenderIndex}
                  setPowerUpHintUpdater={setPowerUpHintUpdater}
                  powerUpHintUpdater={powerUpHintUpdater}
                  setIdsToUpdateHint={setIdsToUpdateHint}
                  idsToUpdateHint={idsToUpdateHint}
                  setLives={setLives}
                  lives={lives}
                  remainingQuestion={remainingQuestion}
                  setRemainingQuestion={setRemainingQuestion}
                  number={
                    value.denomenator.isAnswered ? value.denomenator.value : ""
                  }
                  _isEditable={!value.denomenator.isAnswered}
                  correctAnswer={value.denomenator.value}
                />
              </VStack>
              {index < currentProblem.commonDenominator.length - 1 && (
                <View style={styles.operationContainer}>
                  <Text style={styles.number}>
                    {getOperation(
                      operation,
                      currentProblem.commonDenominator.length,
                      index
                    )}
                  </Text>
                </View>
              )}
            </HStack>
          ))}
        </HStack>
      )}

      {/* SIMPLIFY */}
      {currentProblem.simplify && (
        <HStack m={8} spacing={12}>
          {currentProblem.simplify.map((value, index) => (
            <HStack spacing={16} key={`simplify_${keyRenderIndex}_${index}`}>
              <VStack>
                <NumberContainer
                  level={level}
                  priorityIndex={
                    String(keyRenderIndex + 2) + String(index) + String(1)
                  }
                  keyRenderIndex={keyRenderIndex}
                  setPowerUpHintUpdater={setPowerUpHintUpdater}
                  powerUpHintUpdater={powerUpHintUpdater}
                  setIdsToUpdateHint={setIdsToUpdateHint}
                  idsToUpdateHint={idsToUpdateHint}
                  setLives={setLives}
                  lives={lives}
                  remainingQuestion={remainingQuestion}
                  setRemainingQuestion={setRemainingQuestion}
                  number={
                    value.numerator.isAnswered ? value.numerator.value : ""
                  }
                  _isEditable={!value.numerator.isAnswered}
                  correctAnswer={value.numerator.value}
                />
                {value.numerator.value && value.denomenator.value && (
                  <Divider color="#fff" />
                )}
                <NumberContainer
                  level={level}
                  priorityIndex={
                    String(keyRenderIndex + 2) + String(index) + String(2)
                  }
                  keyRenderIndex={keyRenderIndex}
                  setPowerUpHintUpdater={setPowerUpHintUpdater}
                  powerUpHintUpdater={powerUpHintUpdater}
                  setIdsToUpdateHint={setIdsToUpdateHint}
                  idsToUpdateHint={idsToUpdateHint}
                  setLives={setLives}
                  lives={lives}
                  remainingQuestion={remainingQuestion}
                  setRemainingQuestion={setRemainingQuestion}
                  number={
                    value.denomenator.isAnswered ? value.denomenator.value : ""
                  }
                  _isEditable={!value.denomenator.isAnswered}
                  correctAnswer={value.denomenator.value}
                />
              </VStack>
              {index < currentProblem.simplify.length - 1 && (
                <View style={styles.operationContainer}>
                  <Text style={styles.number}>
                    {getOperation(
                      operation,
                      currentProblem.simplify.length,
                      index,
                      true
                    )}
                  </Text>
                </View>
              )}
            </HStack>
          ))}
        </HStack>
      )}
    </View>
  );
};

const styles = {
  number: {
    color: "#fff",
    fontSize: 50,
    fontWeight: 700,
    marginBottom: 10,
    textAlign: "center",
    alignSelf: "center",
  },
  numberFocused: {
    borderWidth: 5,
    borderColor: "#7db6bf",
  },
  operationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  numberInput: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
  },
  disableInput: {
    backgroundColor: "#444654",
  },
  activeInput: {
    backgroundColor: "#c471f5",
  },
  textInputContainer: {
    padding: 5,
    borderRadius: 10,
    marginVertical: 6,
    width: 60,
  },
  hidden: {
    opacity: 0,
  },
};

const NumberContainer = ({
  number,
  _isEditable = false,
  correctAnswer,
  setRemainingQuestion,
  remainingQuestion,
  setLives,
  lives,
  powerUpHintUpdater,
  setPowerUpHintUpdater,
  priorityIndex,
  setIdsToUpdateHint,
  idsToUpdateHint,
  keyRenderIndex,
  level,
}) => {
  const [isFocused, setIsFocused] = useState(true);
  const [numValue, setNumValue] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [isEditable, setIsEditable] = useState(_isEditable);
  useEffect(() => {
    if (number) setNumValue(number);
    if (number === null || correctAnswer === null) {
      setIsHidden(true); // hide the inputs
    }
  }, []);

  useEffect(() => {
    setPowerUpHintUpdater(0);
    setIdsToUpdateHint([]);
  }, [level]);

  useEffect(() => {
    // Adding list of IDs for HINT
    console.log(level, keyRenderIndex);
    if (!keyRenderIndex.toString().startsWith(level.toString())) return;
    if (keyRenderIndex <= 0) return; // skip first render
    if (!isEditable) return;
    if (number === null || correctAnswer === null) return;
    console.log("Adding ===== " + priorityIndex);
    let newIdsToUpdateHint = idsToUpdateHint;
    newIdsToUpdateHint.push(String(priorityIndex));
    setIdsToUpdateHint(newIdsToUpdateHint);
  }, [keyRenderIndex]);

  useEffect(() => {
    // handle having hint
    if (powerUpHintUpdater <= 0) return;
    if (number === null || correctAnswer === null) return;
    // Convert the strings to numbers
    const numbers = idsToUpdateHint.map(Number);
    // Find the minimum number
    const mostPriorityID = Math.min(...numbers);
    if (String(mostPriorityID) != String(priorityIndex)) return;
    console.log("Power Up Used : HINT", mostPriorityID);
    handleAnswer(correctAnswer, mostPriorityID);
  }, [powerUpHintUpdater]);

  const handleAnswer = (answer, mostPriorityID = null) => {
    setNumValue(answer);
    if (answer == correctAnswer) {
      setIsEditable(false);
      setRemainingQuestion(remainingQuestion - 1);
      if (mostPriorityID) {
        // remove the updated hint
        let newIdsToUpdateHint = idsToUpdateHint.filter(
          (value) => value !== String(mostPriorityID)
        );
        console.log(newIdsToUpdateHint);
        setIdsToUpdateHint(newIdsToUpdateHint);
      }
    } else if (String(answer).length >= String(correctAnswer).length) {
      // handle wrong answer
      setNumValue("");
      setLives(lives - 1);
    }

    console.log(answer, correctAnswer);
  };
  return (
    <View
      style={[
        styles.textInputContainer,
        !isEditable ? styles.disableInput : styles.activeInput,
        isHidden ? styles.hidden : "",
      ]}
    >
      <TextInput
        editable={isEditable}
        color="#fff"
        style={styles.numberInput}
        keyboardType="numeric"
        value={numValue.toString()}
        variant="standard"
        onChangeText={handleAnswer}
      />
    </View>
  );
};
