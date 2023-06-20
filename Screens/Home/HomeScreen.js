import { Button, VStack, Text, Surface } from "@react-native-material/core";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import PlayButton from "./components/PlayButton";
import { gameTypes } from "../../GameConfig";
export default HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>GAMES</Text>
        <VStack spacing={14}>
          <View>
            <PlayButton
              onPlayClick={() => {
                navigation.navigate("Game", {
                  gameType: gameTypes.addingFraction,
                });
              }}
              gameType={gameTypes.addingFraction}
            />
          </View>
          <View>
            <PlayButton gameType={gameTypes.subtractingFraction} />
          </View>
          <View>
            <PlayButton gameType={gameTypes.multiplyingFraction} />
          </View>
          <View>
            <PlayButton gameType={gameTypes.dividingFraction} />
          </View>
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
};
