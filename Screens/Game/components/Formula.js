import {
  Button,
  VStack,
  Text,
  Surface,
  HStack,
  Divider,
  TextInput,
} from "@react-native-material/core";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default Formula = ({ navigation, route }) => {
  return (
    <HStack m={10} spacing={16}>
      <VStack>
        <NumberContainer number={13} />
        <Divider color="#fff" />
        <NumberContainer number={14} />
      </VStack>
      <View style={styles.operationContainer}>
        <Text style={styles.number}>+</Text>
      </View>
      <VStack>
        <NumberContainer number={15} />
        <Divider color="#fff" />
        <NumberContainer focusState={true} />
      </VStack>
      <View style={styles.operationContainer}>
        <Text style={styles.number}>=</Text>
      </View>
    </HStack>
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
};

const NumberContainer = ({ number, focusState }) => {
  const [isFocused, setIsFocused] = useState(focusState);
  if (number) {
    return (
      <View>
        <Text style={styles.number}>{number}</Text>
      </View>
    );
  } else {
    return (
      <TouchableHighlight
        onPress={() => setIsFocused(!isFocused)}
        style={[isFocused ? styles.numberFocused : ""]}
      >
        <View>
          <TextInput style variant="standard" />
          <Ionicons style={styles.number} name="help" />
        </View>
      </TouchableHighlight>
    );
  }
};
