import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const CognitiveReframingHeader = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cognitiveReframingHeader}>
      <Pressable
        style={styles.chatIcon}
        onPress={() => navigation.navigate("ResourcesCentre1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/chat-icon.png")}
        />
      </Pressable>
      <View style={styles.mockLogo}>
        <Text style={styles.cognitiveReframing}>{`Cognitive Reframing `}</Text>
      </View>
      <Image
        style={styles.mioptionsVerticalIcon}
        resizeMode="cover"
        source={require("../assets/mioptionsvertical.png")}
      />
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
  mioptionsVerticalIcon: {
    width: 24,
    height: 24,
    display: "none",
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
