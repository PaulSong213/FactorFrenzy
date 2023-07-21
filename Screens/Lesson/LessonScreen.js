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

export default LessonScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);

  const open = () => {
    setModalVisible(true);
  };
  const close =() => {
    setModalVisible(false);
  };
   const open1 = () => {
    setModalVisible1(true);
  };
   const close1 =() => {
    setModalVisible1(false);
  };
  const open2 = () => {
    setModalVisible2(true);
  };
  const close2 =() => {
    setModalVisible2(false);
  };
  const open3 = () => {
    setModalVisible3(true);
  };
  const close3 =() => {
    setModalVisible3(false);
  };
  const open4 = () => {
    setModalVisible4(true);
  };
   const close4 =() => {
    setModalVisible4(false);
  };
  const open5 = () => {
    setModalVisible5(true);
  };
  const close5 =() => {
    setModalVisible5(false);
    
  };
   const navBack =() => {
    navigation.navigate('Home');
  }


  return (
    <ScrollView style = {{backgroundColor: "#111", minHeight: "100%", paddingLeft: 12, paddingRight: 12,}}>
    <SafeAreaView style = {{height: 1000,}}>
       <View style ={{flexDirection: "row", marginTop: 30,}}>
       <TouchableOpacity onPress={navBack}>
          <Ionicons
                  style={{color: "#fff", marginTop: 2, marginLeft: 10, }}
                  size={25}
                  name="arrow-back-circle"
                />
          </TouchableOpacity>
          <Text 
          style={{color: "white", fontWeight:"bold", fontSize: 22, marginLeft: 5,}}>
                                                    LESSON IN FRACTION
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
      <ScrollView style = {{backgroundColor: "#111", minHeight: "100%", paddingLeft: 12, paddingRight: 12,}}>
      <View style = {{height: 910}}>
    
 <Image
                style={{
                  height: 900,
                  width: 350,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  marginLeft: -9,
                

                }}
                source={require("../Lesson/image/bg.png")}
              />
        <View style = {{flexDirection: "row", position: "absolute", top: 10, marginLeft: 30,}}>
         <TouchableOpacity onPress={close}>
          <Ionicons
                  style={{color: "black", marginTop: 2}}
                  size={30}
                  name="arrow-back-circle"
                />
          </TouchableOpacity>
        <Text style = {{color: "black", fontSize: 20, fontWeight: "bold", marginTop: 4, marginLeft: 5}}>
            WHAT IS A FRACTION?
        </Text>
        </View>

        <View style = {{position: "absolute", }}>
        <Text style ={{width: 290, color: "black", position: "absolute", top: 50, left: 40, fontSize: 15}}>
        -  A fraction is a number that describes a relationship between a part(represented by the numerator) and a whole (represented by the denominator.)
        </Text>
        <Image
                style={{
                  height: 190,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  top: 115,
                  left: 30,
                  position: "absolute",
                }}
                source={require("../Lesson/image/fractions.png")}
              />
        </View>

        <View style ={{position: "absolute", top: 350, marginLeft: 10,}}>
        <Text style = {{color: "black", fontSize: 20, fontWeight: "bold", marginLeft: 25,}}>
            FRACTION REPRESENTATION
        </Text>
        <Image
                style={{
                  height: 450,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  marginLeft: 20,
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
       <ScrollView style = {{backgroundColor: "#111", minHeight: "100%", paddingLeft: 12, paddingRight: 12,}}>
      <View style = {{height: 910}}>
    
 <Image
                style={{
                  height: 900,
                  width: 350,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  marginLeft: -9,
                

                }}
                source={require("../Lesson/image/bg.png")}
              />
        <View style = {{flexDirection: "row", position: "absolute", top: 10, marginLeft: 30,}}>
         <TouchableOpacity onPress={close1}>
          <Ionicons
                  style={{color: "black", marginTop: 2}}
                  size={30}
                  name="arrow-back-circle"
                />
          </TouchableOpacity>
        <Text style = {{color: "black", fontSize: 20, fontWeight: "bold", marginTop: 4, marginLeft: 5}}>
            HOW TO ADD FRACTION?
        </Text>
        </View>

        <View style = {{position: "absolute", }}>
        <Text style = {{top: 55, left: 24,}}> - Adding fraction different denominator.</Text>
        <Image
                style={{
                  height: 220,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  top: 70,
                  left: 30,
                  position: "absolute",
                }}
                source={require("../Lesson/image/add.png")}
              />
        </View>

        <View style ={{position: "absolute", top: 350, marginLeft: 10,}}>
        <Text style = {{color: "black", marginLeft: 20}}>
            - Other Example
        </Text>
        <Image
                style={{
                  height: 450,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  marginLeft: 20,
                }}
                source={require("../Lesson/image//add2.jpg")}
              />
        </View>
        </View>
      </ScrollView>
      </Modal>
      
       <TouchableOpacity style = {{backgroundColor: "gray", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}
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
    <ScrollView style = {{backgroundColor: "#111", minHeight: "100%", paddingLeft: 12, paddingRight: 12,}}>
      <View style = {{height: 910}}>
    
 <Image
                style={{
                  height: 900,
                  width: 350,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  marginLeft: -9,
                

                }}
                source={require("../Lesson/image/bg.png")}
              />
        <View style = {{flexDirection: "row", position: "absolute", top: 10, marginLeft: 25,}}>
         <TouchableOpacity onPress={close2}>
          <Ionicons
                  style={{color: "black", marginTop: 2}}
                  size={30}
                  name="arrow-back-circle"
                />
          </TouchableOpacity>
        <Text style = {{color: "black", fontSize: 18, fontWeight: "bold", marginTop: 5}}>
            HOW TO SUBTRACT FRACTION?
        </Text>
        </View>

        <View style = {{position: "absolute", }}>
        <Text style = {{top: 55, left: 24,}}> - Subtracting fractions.</Text>
        <Image
                style={{
                  height: 240,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  top: 70,
                  left: 30,
                  position: "absolute",
                }}
                source={require("../Lesson/image/example.png")}
              />
        </View>

        <View style ={{position: "absolute", top: 350, marginLeft: 10,}}>
        <Text style = {{color: "black", marginLeft: 20}}>
            - Other Example
        </Text>
        <Image
                style={{
                  height: 450,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  marginLeft: 20,
                }}
                source={require("../Lesson/image/subtracting.png")}
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
       <ScrollView style = {{backgroundColor: "#111", minHeight: "100%", paddingLeft: 12, paddingRight: 12,}}>
      <View style = {{height: 910}}>
    
 <Image
                style={{
                  height: 900,
                  width: 350,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  marginLeft: -9,
                

                }}
                source={require("../Lesson/image/bg.png")}
              />
        <View style = {{flexDirection: "row", position: "absolute", top: 10, marginLeft: 25,}}>
         <TouchableOpacity onPress={close3}>
          <Ionicons
                  style={{color: "black", marginTop: 2, marginLeft: 5}}
                  size={30}
                  name="arrow-back-circle"
                />
          </TouchableOpacity>
        <Text style = {{color: "black", fontSize: 18, fontWeight: "bold", marginTop: 5, marginLeft: 5}}>
            HOW TO MULTIPLY FRACTION?
        </Text>
        </View>

        <View style = {{position: "absolute", }}>
        <Text style = {{top: 55, left: 24,}}> - Multiplying fractions.</Text>
        <Image
                style={{
                  height: 240,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  top: 70,
                  left: 30,
                  position: "absolute",
                }}
                source={require("../Lesson/image/Mul.png")}
              />
        </View>

        <View style ={{position: "absolute", top: 350, marginLeft: 10,}}>
        <Text style = {{color: "black", marginLeft: 20}}>
            - Other Example
        </Text>
        <Image
                style={{
                  height: 450,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  marginLeft: 20,
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
      <ScrollView style = {{backgroundColor: "#111", minHeight: "100%", paddingLeft: 12, paddingRight: 12,}}>
      <View style = {{height: 870}}>
    
 <Image
                style={{
                  height: 850,
                  width: 350,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  marginLeft: -9,
                

                }}
                source={require("../Lesson/image/bg.png")}
              />
        <View style = {{flexDirection: "row", position: "absolute", top: 10, marginLeft: 25,}}>
         <TouchableOpacity onPress={close4}>
          <Ionicons
                  style={{color: "black", marginTop: 2, marginLeft: 5}}
                  size={30}
                  name="arrow-back-circle"
                />
          </TouchableOpacity>
        <Text style = {{color: "black", fontSize: 18, fontWeight: "bold", marginTop: 5, marginLeft: 5}}>
            HOW TO DIVIDE FRACTION?
        </Text>
        </View>

        <View style = {{position: "absolute", }}>
        <Text style = {{top: 55, left: 24,}}> - Dividing fractions.</Text>
        <Image
                style={{
                  height: 240,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  top: 70,
                  left: 30,
                  position: "absolute",
                  borderColor: "black",
                  borderWidth: 1,
                }}
                source={require("../Lesson/image/Divide-Fractions.jpg")}
              />
        </View>

        <View style ={{position: "absolute", top: 350, marginLeft: 10,}}>
        <Text style = {{color: "black", marginLeft: 20}}>
            - Other Example
        </Text>
        <Image
                style={{
                  height: 380,
                  width: 300,
                  marginTop: 10,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  alignSelf: "center",
                  marginLeft: 20,
                  borderColor:  "black",
                  borderWidth: 1,
                }}
                source={require("../Lesson/image/Divide-A-Fraction-Steps-to-Solve.jpg")}
              />
        </View>
        </View>
      </ScrollView>
      </Modal>

        <TouchableOpacity style = {{backgroundColor: "red", height: 140, width: 330, borderRadius: 10, alignSelf: "center", marginTop: 15}}
        onPress={open5}
        >
          <View>
            <Text style = {{color: "white", marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: "bold",}}>VOCABULARY</Text>
            <Text style = {{color: "white", marginLeft: 10, fontSize: 15, marginTop: 30}}>-LEARN NEW WORD</Text>
            <Text style = {{color: "white", marginLeft: 14, fontSize: 15}}>ABOUT FRACTION</Text>
          </View>     
       </TouchableOpacity> 

       <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible5}
        onRequestClose={() => {
          setModalVisible5(!modalVisible5);
        }}
      >
      <ScrollView style = {{backgroundColor: "#111", minHeight: "100%", paddingLeft: 12, paddingRight: 12,}}>
      <View style = {{height: 870}}>
    
 <Image
                style={{
                  height: 850,
                  width: 350,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  marginLeft: -9,
                

                }}
                source={require("../Lesson/image/bg.png")}
              />
        <View style = {{flexDirection: "row", position: "absolute", top: 10, marginLeft: 25,}}>
         <TouchableOpacity style={{position: "absolute"}} onPress={close5}>
          <Ionicons
                  style={{color: "black", marginTop: 2, marginLeft: 5}}
                  size={30}
                  name="arrow-back-circle"
                />
          </TouchableOpacity>
        <Text style = {{color: "black", fontSize: 18, fontWeight: "bold", marginTop: 5, marginLeft: 45}}>
            VOCABULARY
        </Text>
        </View>

        <View style = {{position: "absolute", }}>
        <Text style = {{top: 55, left: 125, fontStyle: "italic", fontWeight: "bold"}}>~FRACTION</Text>
        <Text style = {{top: 58, left: 35, width: 310, fontSize: 14, justifyContent: "center"}}>  -  A fraction is a number that describes a relationship between a part(represented by the numerator) and a whole (represented by the denominator).</Text>
        <Text style={{top: 60, left: 180, fontSize: 15, fontWeight: "bold"}}>~(SplashLearn)</Text>
        </View>
        <View style = {{position: "absolute", }}>
        <Text style = {{top: 180, left: 110, fontStyle: "italic", width: 150, fontWeight: "bold"}}>~NUMERATOR</Text>
        <Text style = {{top: 185, left: 37, width: 310, fontSize: 14,  }}>- the number above the line in a common fraction showing how many of the parts indicated by the denominator are taken</Text>
        <Text style={{top: 190, left: 180, fontSize: 15, fontWeight: "bold"}}>~(SplashLearn)</Text>
        </View>
        <View style = {{position: "absolute", }}>
        <Text style = {{top: 300, left: 100, fontStyle: "italic", width: 150, fontWeight: "bold"}}>~DENOMINATOR</Text>
        <Text style = {{top: 305, left: 37, width: 310, fontSize: 14,  }}>- the number above the line in a common fraction showing how many of the parts indicated by the denominator are taken</Text>
        <Text style={{top: 315, left: 180, fontSize: 15, fontWeight: "bold"}}>~(SplashLearn)</Text>
        </View>
        <View style = {{position: "absolute", }}>
        <Text style = {{top: 420, left: 40, fontStyle: "italic", width: 310, fontWeight: "bold"}}>~LEAST COMMON MULTIPLE(LCM)</Text>
        <Text style = {{top: 425, left: 37, width: 310, fontSize: 14,  }}>- the number above the line in a common fraction showing how many of the parts indicated by the denominator are taken</Text>
        <Text style={{top: 435, left: 180, fontSize: 15, fontWeight: "bold"}}>~(SplashLearn)</Text>
        </View>
        <View style = {{position: "absolute", }}>
        <Text style = {{top: 550, left: 100, fontStyle: "italic", width: 310, fontWeight: "bold"}}>~LOWEST TERMS</Text>
        <Text style = {{top: 555, left: 37, width: 310, fontSize: 14,  }}>- Lowest Terms refers to form of fraction that cannot be simplified further since the numerator and denominator have no factor in common except 1</Text>
        <Text style={{top: 555, left: 180, fontSize: 15, fontWeight: "bold"}}>~(SplashLearn)</Text>
        </View>
        <View style = {{position: "absolute", }}>
        <Text style = {{top: 680, left: 110, fontStyle: "italic", width: 310, fontWeight: "bold"}}>~RECIPROCAL</Text>
        <Text style = {{top: 690, left: 37, width: 310, fontSize: 14,  }}>- The word "reciprocal" comes from the latin word "reciproc(us)", meaning "returning" or "alternating. Reciprocal can be find by interchanging numerator and denominator"</Text>
        <Text style={{top: 700, left: 180, fontSize: 15, fontWeight: "bold"}}>~(SplashLearn)</Text>
        </View>
       
        </View>
      </ScrollView>
      </Modal>

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
