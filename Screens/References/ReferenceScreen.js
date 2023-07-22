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

  const navBack =() => {
    navigation.navigate('Home');
  }



  return (
    <ScrollView style = {styles.container}>
<View style ={{height: 920,}}>
  <Image
                style={{
                  height: 890,
                  width: 350,
                  resizeMode: "stretch", 
                  borderRadius: 10,
                  marginLeft: -9,
                

                }}
                source={require("../Lesson/image/bg.png")}
              />
    <View style ={{flexDirection: "row", position: "absolute", marginLeft: 30, marginTop: 20}}>
    <TouchableOpacity onPress={navBack}>
      <Ionicons
                  style={{color: "#111", marginTop: 2, marginLeft: 5, }}
                  size={30}
                  name="arrow-back-circle"
                />
      </TouchableOpacity>
                <Text style = {{color: "black", marginLeft: 5, marginTop: 4, fontWeight: "bold", fontSize: 20,  }}>REFERENCE</Text>
    </View>
        <View style = {{position: "absolute", width: 300, top: 70, left: 30}}>
          <Text style={{fontWeight: "bold"}}>~SplashLearn(n.d) MathVocaulary.</Text>
           <Text style={{marginLeft: 30, width: 280}}>Retrived from https://www.splashlearn.com/math-vocabulary/</Text>
        </View>

        <View style = {{position: "absolute", width: 300, top: 150, left: 30}}>
          <Text style={{fontWeight: "bold"}}>~Banuelos M., (2023) How to divide and Multiply Fractions.</Text>
           <Text style={{marginLeft: 30, width: 280}}>Retrived from https://www.wikihow.com/Divide-and-Multiply-Fractions</Text>
        </View>

         <View style = {{position: "absolute", width: 320, top: 250, left: 30}}>
          <Text style={{fontWeight: "bold"}}>~Radford J.,(n.d)Addition & Subtraction with Fractions. </Text>
           <Text style={{marginLeft: 30, width: 280}}>Retrived from https://www.radfordmathematics.com/Numbers/fractions/addition-substraction-with-fractions.html#:~:text=Addition%20When%20adding%20two%20fractions%2C%20a%20%b%20and,a%20%E2%88%92%20%28since%20we%27re%20dealing%20with%20a%20substraction%29</Text>
        </View>

          <View style = {{position: "absolute", width: 320, top: 480, left: 30}}>
          <Text style={{fontWeight: "bold"}}>~Mathantics(2012) Dividing Fraction. </Text>
           <Text style={{marginLeft: 30, width: 280}}>Retrived from https://www.youtube.com/watch?v=5juto2ze8Lg&ab_channel=mathantics.</Text>
        </View>

          <View style = {{position: "absolute", width: 320, top: 570, left: 30}}>
          <Text style={{fontWeight: "bold"}}>~Bartlett S., (n.d) How to Explain Fractions for kids: Help with Teaching Maths at Home. </Text>
           <Text style={{marginLeft: 30, width: 280}}>Retrived from https://thirdspacelearning.com/blog/how- to-teach-fractions-for-kids/.</Text>
        </View>

         <View style = {{position: "absolute", width: 320, top: 710, left: 30}}>
          <Text style={{fontWeight: "bold"}}>~Faisal(2018), Addition and Subtraction of Dissimilar Fractions-Fractions with Different Denominator.</Text>
           <Text style={{marginLeft: 30, width: 280}}>Retrived from http://math-lover.com/addition-and-subtraction-of-dissimilar-with-defferent-denominators/</Text>
        </View>



    </View>
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
