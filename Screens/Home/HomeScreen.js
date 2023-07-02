import { Button, VStack, Text, Surface } from "@react-native-material/core";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Image} from "react-native";
import PlayButton from "./components/PlayButton";
import { gameTypes, operations } from "../../config/GameConfig";
import { useEffect } from "react";


export default HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mathematics Games</Text>

        <TouchableOpacity style = {styles.buttonStyle}>
          <View style = {{flexDirection: "row"}}>
            <View>
            <Text style = {{fontSize: 30, fontWeight: "bold", marginLeft: 15, marginTop: 10, color: "#fff"}}>LESSON</Text>
            <Text style = {{fontSize: 14, marginLeft: 15, marginTop: 1, color: "#fff"}}>FRACTION</Text>
             </View>
             <View>
             <Image
                   style = {{height: 80, width: 80, marginLeft: 100, marginTop: 30}}
                    source={require("../Home/image/kisspng-book-black-and-white-clip-art-5af950be37c274.0142455915262885742284.png")}
                />
                <Text style = {{marginLeft: 116, color: "#fff", fontSize: 15}}>LEARN</Text>
                </View>
          </View>

          <View style = {{flexDirection: "row"}}>
           <Image
                   style = {{height: 25, width: 25, marginLeft: 10, marginTop: -30}}
                    source={require("../Home/image/ahcd96qodmspspc3cacrk7ua12.png")}
                />
            <Image
                   style = {{height: 25, width: 25, marginLeft: 2, marginTop: -30}}
                    source={require("../Home/image/minus-8-512.png")}
                />
            <Image
                   style = {{height: 23, width: 23, marginTop: -28, marginLeft: 3,}}
                    source={require("../Home/image/Daco_1092203.png")}
                />
            <Image
                   style = {{height: 25, width: 25, marginLeft: 2, marginTop: -30}}
                    source={require("../Home/image/clipart3429603.png")}
                />
          </View>
        </TouchableOpacity>

        
      
        <VStack spacing={14}>
          {Object.entries(operations).map(([key, operation]) => (
            <View>
              <PlayButton
                onPlayClick={() => {
                  navigation.navigate("Game", {
                    gameType: operation.gameType,
                    operation: operation.name,
                  });
                }}
                gameType={operation.gameType}
              />
            </View>
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
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
    marginBottom: 10
  },
};
