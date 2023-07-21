import { useState } from "react";
import { Button, VStack, Text, Surface } from "@react-native-material/core";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

export default ReferenceScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const open = () => {
    setModalVisible(true);
  };
   const open1 = () => {
    setModalVisible1(true);
  };
  const open2 = () => {
    setModalVisible2(true);
  };
  const open3 = () => {
    setModalVisible3(true);
  };
  const open4 = () => {
    setModalVisible4(true);
  };


  return (
    <ScrollView style = {styles.container}>
      <Ionicons
                  style={{color: "#fff", marginTop: 2, marginLeft: 5, }}
                  size={23}
                  name="arrow-back-circle"
                />
    </ScrollView>
  );
};

const styles = {
  container: {
    backgroundColor: "#111",
    minHeight: "100%",
    paddingTop: 30,
    paddingLeft: 12,
    paddingRight: 12,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "green",
    height: 145,
    borderRadius: 10,
    marginBottom: 10,
  },
};
