import {
  Button,
  VStack,
  Text,
  Surface,
  HStack,
  Divider,
} from "@react-native-material/core";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { operations } from "../../../GameConfig";
export default Formula = ({ operation }) => {
  /*
    Tutorial reference
    Adding : https://www.youtube.com/watch?v=CoCmsyFQ_Xc

  */
  const answerKeyConfig = {
    addition: {
      level1: {
        given: [
          {
            numerator: {
              value: 3,
              isAnswered: true,
            },
            denomenator: {
              value: 10,
              isAnswered: true,
            },
          },
          {
            numerator: {
              value: 3,
              isAnswered: true,
            },
            denomenator: {
              value: 6,
              isAnswered: true,
            },
          },
          {
            numerator: {
              value: null,
              isAnswered: true,
            },
            denomenator: {
              value: null,
              isAnswered: true,
            },
          },
        ],
        commonDenominator: [
          {
            numerator: {
              value: 9,
              isAnswered: false,
            },
            denomenator: {
              value: 30,
              isAnswered: false,
            },
          },
          {
            numerator: {
              value: 15,
              isAnswered: false,
            },
            denomenator: {
              value: 30,
              isAnswered: false,
            },
          },
          {
            numerator: {
              value: 24,
              isAnswered: false,
            },
            denomenator: {
              value: 30,
              isAnswered: false,
            },
          },
        ],
        simplify: [
          {
            numerator: {
              value: null,
              isAnswered: true,
            },
            denomenator: {
              value: null,
              isAnswered: true,
            },
          },
          {
            numerator: {
              value: null,
              isAnswered: true,
            },
            denomenator: {
              value: null,
              isAnswered: true,
            },
          },
          {
            numerator: {
              value: 4,
              isAnswered: true,
            },
            denomenator: {
              value: 5,
              isAnswered: true,
            },
          },
        ],
      },
    },
  };
  const getOperation = (currentOperation, length, index) => {
    if (length === index + 2) return "=";
    else return operations[currentOperation].symbol;
  };
  const currentProblem = answerKeyConfig[operation].level1;

  return (
    <View>
      {/* GIVEN */}
      <HStack m={10} spacing={16}>
        {currentProblem.given.map((value, index) => (
          <HStack spacing={16} key={`given_${index}`}>
            <VStack>
              <NumberContainer number={value.numerator.value} />
              {value.numerator.value && value.denomenator.value && (
                <Divider color="#fff" />
              )}
              <NumberContainer number={value.denomenator.value} />
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
      <HStack m={10} spacing={16}>
        {currentProblem.commonDenominator.map((value, index) => (
          <HStack spacing={16} key={`commonDenominator_${index}`}>
            <VStack>
              <NumberContainer
                _isEditable={true}
                correctAnswer={value.numerator.value}
              />
              {value.numerator.value && value.denomenator.value && (
                <Divider color="#fff" />
              )}
              <NumberContainer
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
    padding: 6,
    borderRadius: 10,
    marginVertical: 6,
  },
  hidden: {
    opacity: 0,
  },
};

const NumberContainer = ({ number, _isEditable = false, correctAnswer }) => {
  const [isFocused, setIsFocused] = useState(true);
  const [numValue, setNumValue] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [isEditable, setIsEditable] = useState(_isEditable);
  useEffect(() => {
    if (number) setNumValue(number);
    if (number === null) {
      setNumValue("00"); // place holder for width
      setIsHidden(true); // hide the inputs
    }
  }, []);
  const handleAnswer = (answer) => {
    setNumValue(answer);
    if (answer == correctAnswer) setIsEditable(false);
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
