import { Text, HStack } from "@react-native-material/core";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { medalColors } from "../../../DefaultAsyncData";

export default Medal = ({ title, color }) => {
  return (
    <View style={styles.medalContainer}>
      <Ionicons color={color} size={75} name="medal"></Ionicons>
      <Text style={styles.medalTitle}>{title}</Text>
    </View>
  );
};

const styles = {
  medalContainer: {
    width: 140,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    alignItems: "center",
  },
  medalTitle: {
    fontSize: 10,
    fontWeight: 800,
    color: "#000",
    textAlign: "center",
  },
};
