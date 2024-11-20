import React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; // for navigation
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const CognitiveReframingHeader = () => {
  const navigation = useNavigation(); // Hook for navigation

  // Sample function to navigate to another screen
  const handlePress = () => {
    // Example of navigation, replace with the actual screen you want to navigate to
    navigation.navigate("SomeScreen");
  };

  return (
    <View style={styles.cognitiveReframingHeader}>
      <Pressable onPress={handlePress}>
        <Image
          source={require("../assets/your-icon.png")} // replace with your icon source
          style={styles.chatIcon}
        />
      </Pressable>

      <Text style={styles.cognitiveReframing}>Cognitive Reframing</Text>

      <Pressable onPress={handlePress}>
        <Image
          source={require("../assets/mock-logo.png")} // replace with your logo source
          style={styles.mockLogo}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  chatIcon: {
    width: 38,
    height: 38,
  },
  cognitiveReframing: {
    marginTop: -17,
    marginLeft: -105.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.pRIMARYFONT,
    textAlign: "left",
    width: 211,
    position: "absolute",
  },
  mockLogo: {
    height: 34,
    width: 211,
  },
  cognitiveReframingHeader: {
    top: 27,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_2xl,
    position: "absolute",
  },
});

export default CognitiveReframingHeader;
