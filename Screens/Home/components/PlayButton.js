import { Button, VStack, Text, Surface } from "@react-native-material/core";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { Ionicons } from "@expo/vector-icons";
import { gameDetails, gameTypes } from "../../../config/GameConfig";

export default PlayButton = ({ gameType, onPlayClick }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPlayClick}
        backgroundColor="red"
        style={[
          styles.gameContainer,
          { backgroundColor: gameDetails[gameType].playButtonColor },
        ]}
      >
        <View>
          <Text style={styles.gameTitle}>{gameDetails[gameType].title}</Text>
          <Text style={styles.gameSubtitle}>FRACTION</Text>
          <ProgressBar width={110} color={"#fff"} progress={0.3} />
          <Text style={styles.gameProgressText}>6/10 Completed</Text>
        </View>
        <Button
          onPress={onPlayClick}
          style={styles.gamePlay}
          color={"#fff"}
          variant="text"
          title="PLAY"
        />
        <Ionicons
          style={[
            styles.gameIcon,
            gameType === gameTypes.dividingFraction
              ? styles.rotateDivision
              : {},
          ]}
          name={gameDetails[gameType].ionIconName}
          size={80}
          color={"#fff"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  gameContainer: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
  },
  gameTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 32,
  },
  gameSubtitle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 30,
  },
  gameProgressText: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 14,
    marginTop: 8,
  },
  gamePlay: {
    position: "absolute",
    bottom: 10,
    right: 28,
  },
  gameIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  rotateDivision: {
    transform: [{ rotate: "140deg" }],
  },
};
