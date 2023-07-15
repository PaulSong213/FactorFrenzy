import { useState } from "react";
import { Button, VStack, Text, Surface } from "@react-native-material/core";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";


export default LessonScreen = ({ navigation }) => {

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
    <SafeAreaView style = {{height: 1000,}}>
       <View>
          <Text 
          style={{color: "white", fontWeight:"bold", fontSize: 20 }}>
                                                      LEARN FRACTION OPERATION
          </Text>
       </View>

      
       <TouchableOpacity style = {{backgroundColor: "blue", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}
       onPress={open}
       >
          <View>
            <Text style = {{color: "white", marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: "bold",}}>WHAT IS</Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 25, fontWeight: "bold",}}>FRACTION? </Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 15, marginTop: 20}}>-DEFINITION OF FRACTION</Text>
          </View>     
       </TouchableOpacity> 
       <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <ScrollView style = {styles.container}>
      <View style = {{height: 850}}>
      <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            WHAT IS A FRACTION?
        </Text>
        <Image
                style={{
                  height: 250,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/fractions.png")}
              />
        </View>
        <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 10}}>
            REPRESENTATION OF FRACTION
        </Text>
        <Image
                style={{
                  height: 450,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/pizza-time-min.png")}
              />
        </View>
        </View>
      </ScrollView>
      </Modal>

        


       <TouchableOpacity style = {{backgroundColor: "green", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}
       onPress={open1}
       >
          <View>
            <Text style = {{color: "white", marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: "bold",}}>ADDITION</Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 15, marginTop: 30}}>-PROCESS IN ADDING</Text>
            <Text style = {{color: "white", marginLeft: 14, fontSize: 15}}>FRACTION</Text>
          </View>     
       </TouchableOpacity> 
       <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
      <ScrollView style = {styles.container}>
      <View style = {{height: 850}}>
      <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            PROCESS OF ADDING FRACTION
        </Text>
         <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            Tutorial 1: 
        </Text>
        <Image
                style={{
                  height: 250,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/add.png")}
              />
        </View>
        <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 10}}>
             Tutorial 2: 
        </Text>
        <Image
                style={{
                  height: 450,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/add2.jpg")}
              />
        </View>
        </View>
      </ScrollView>
      </Modal>



       <TouchableOpacity style = {{backgroundColor: "yellow", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}
       onPress={open2}
       >
          <View>
            <Text style = {{color: "white", marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: "bold",}}>SUBTRACTION</Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 15, marginTop: 30}}>-PROCESS IN SUBTRACTING</Text>
            <Text style = {{color: "white", marginLeft: 14, fontSize: 15}}>FRACTION</Text>
          </View>     
       </TouchableOpacity> 

         <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
      <ScrollView style = {styles.container}>
      <View style = {{height: 850}}>
      <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            PROCESS OF SUBTRACTING FRACTION
        </Text>
         <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            Tutorial 1: 
        </Text>
        <Image
                style={{
                  height: 300,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/subtracting.png")}
              />
        </View>
        <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 10}}>
             Other Tutorial: 
        </Text>
        <Image
                style={{
                  height: 350,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/example.png")}
              />
        </View>
        </View>
      </ScrollView>
      </Modal>
       <TouchableOpacity style = {{backgroundColor: "pink", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}
       onPress={open3}
       >
          <View>
            <Text style = {{color: "white", marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: "bold",}}>MULTIPLICATION </Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 15, marginTop: 30}}>-PROCESS IN MULTIPLYING</Text>
            <Text style = {{color: "white", marginLeft: 14, fontSize: 15}}>FRACTION</Text>
          </View>     
       </TouchableOpacity> 
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible3}
        onRequestClose={() => {
          setModalVisible3(!modalVisible3);
        }}
      >
      <ScrollView style = {styles.container}>
      <View style = {{height: 850}}>
      <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            PROCESS OF MULTIPLYING FRACTION
        </Text>
         <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            Tutorial 1: 
        </Text>
        <Image
                style={{
                  height: 280,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/Mul.png")}
              />
        </View>
        <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 10}}>
             Other Tutorial: 
        </Text>
        <Image
                style={{
                  height: 400,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/multiplying-fractions_ver_2.png")}
              />
        </View>
        </View>
      </ScrollView>
      </Modal>

       <TouchableOpacity style = {{backgroundColor: "orange", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}
       onPress={open4}
       >
          <View>
            <Text style = {{color: "white", marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: "bold",}}>DIVISION</Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 15, marginTop: 30}}>-PROCESS IN DIVIDING</Text>
            <Text style = {{color: "white", marginLeft: 14, fontSize: 15}}>FRACTION</Text>
          </View>     
       </TouchableOpacity> 

        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible4}
        onRequestClose={() => {
          setModalVisible4(!modalVisible4);
        }}
      >
      <ScrollView style = {styles.container}>
      <View style = {{height: 850, alignContent: "center"}}>
      <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            PROCESS OF DIVIDING FRACTION
        </Text>
         <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, }}>
            Tutorial 1: 
        </Text>
        <Image
                style={{
                  height: 300,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/Divide-Fractions.jpg")}
              />
        </View>
        <View>
        <Text style = {{color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 10}}>
             Other Tutorial: 
        </Text>
        <Image
                style={{
                  height: 350,
                  width: 330,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center"
                }}
                source={require("../Lesson/image/Divide-A-Fraction-Steps-to-Solve.jpg")}
              />
        </View>
        </View>
      </ScrollView>
      </Modal>

        <TouchableOpacity style = {{backgroundColor: "red", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}>
          <View>
            <Text style = {{color: "white", marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: "bold",}}>VOCABULARY</Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 15, marginTop: 30}}>-LEARN NEW WORD</Text>
            <Text style = {{color: "white", marginLeft: 14, fontSize: 15}}>ABOUT FRACTION</Text>
          </View>     
       </TouchableOpacity> 

       </SafeAreaView>
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
