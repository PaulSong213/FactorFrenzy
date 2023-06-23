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

  return (
    <View>
      {/* GIVEN */}
      <HStack m={8} spacing={12}>
        {currentProblem.given.map((value, index) => (
          <HStack spacing={16} key={`given_${index}`}>
            <VStack>
              <NumberContainer
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
      {/* {currentProblem.commonDenominator && (
        <HStack m={8} spacing={12}>
          {currentProblem.commonDenominator.map((value, index) => (
            <HStack spacing={16} key={`commonDenominator_${index}`}>
              <VStack>
                <NumberContainer
                  currentProblem={currentProblem}
                  setCurrentProblem={setCurrentProblem}
                  _isEditable={true}
                  correctAnswer={value.numerator.value}
                />
                {value.numerator.value && value.denomenator.value && (
                  <Divider color="#fff" />
                )}
                <NumberContainer
                  currentProblem={currentProblem}
                  setCurrentProblem={setCurrentProblem}
                  _isEditable={true}
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
      )} */}

      {/* SIMPLIFY */}
      {/* <HStack m={8} spacing={12}>
        {currentProblem.simplify.map((value, index) => (
          <HStack spacing={16} key={`simplify${index}`}>
            <VStack>
              <NumberContainer
                currentProblem={currentProblem}
                setCurrentProblem={setCurrentProblem}
                _isEditable={true}
                correctAnswer={value.numerator.value}
              />
              {value.numerator.value && value.denomenator.value && (
                <Divider color="#fff" />
              )}
              <NumberContainer
                currentProblem={currentProblem}
                setCurrentProblem={setCurrentProblem}
                _isEditable={true}
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
      </HStack> */}
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
}) => {
  const [isFocused, setIsFocused] = useState(true);
  const [numValue, setNumValue] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [isEditable, setIsEditable] = useState(_isEditable);
  useEffect(() => {
    if (number) setNumValue(number);
    if (number === null || correctAnswer === null) setIsHidden(true); // hide the inputs
  }, []);
  const handleAnswer = (answer) => {
    setNumValue(answer);
    if (answer == correctAnswer) {
      setIsEditable(false);
      setRemainingQuestion(remainingQuestion - 1);
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
