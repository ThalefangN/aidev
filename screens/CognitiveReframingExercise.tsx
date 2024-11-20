import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import CognitiveReframingHeader from "../components/CognitiveReframingHeader";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const CognitiveReframingExercise = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.cognitiveReframingExercise}>
      <CognitiveReframingHeader />
      <Image
        style={styles.nicePatternForStepsPage}
        resizeMode="cover"
        source={require("../assets/nice-pattern-for-steps-page.png")}
      />
      <Image
        style={styles.naledi31}
        resizeMode="cover"
        source={require("../assets/naledi-3-1.png")}
      />
      <Pressable
        style={[styles.inputField, styles.inputFieldLayout]}
        onPress={() => navigation.navigate("CognitiveReframingLoading")}
      >
        <View style={[styles.subHeading, styles.subHeadingPosition]}>
          <Text style={[styles.inputThoughtHere, styles.inputFlexBox]}>
            Input thought here
          </Text>
        </View>
      </Pressable>
      <Image
        style={[styles.sendButtonIcon, styles.inputFieldLayout]}
        resizeMode="cover"
        source={require("../assets/send-button1.png")}
      />
      <View style={[styles.mockLogo, styles.mockLogoPosition]}>
        <Text style={[styles.inputAWorryContainer, styles.mockLogoPosition]}>
          <Text style={styles.inputTypo}>{`Input a `}</Text>
          <Text style={styles.worry}>Worry</Text>
          <Text style={styles.inputTypo}>{` or `}</Text>
          <Text style={styles.worry}>Negative</Text>
          <Text
            style={styles.inputTypo}
          >{` thought and i will provide you with a `}</Text>
          <Text style={styles.worry}>reframed</Text>
          <Text style={styles.inputTypo}> perspective.</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputFieldLayout: {
    overflow: "hidden",
    height: 66,
    borderRadius: Border.br_2xs,
    top: 814,
    position: "absolute",
  },
  subHeadingPosition: {
    width: 205,
    left: "50%",
    top: "50%",
    marginTop: -17,
    position: "absolute",
  },
  inputFlexBox: {
    textAlign: "center",
    lineHeight: 34,
  },
  mockLogoPosition: {
    width: 297,
    left: "50%",
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: 116,
    left: -37,
    width: 500,
    height: 526,
    position: "absolute",
  },
  naledi31: {
    top: 143,
    left: 105,
    width: 196,
    height: 177,
    position: "absolute",
  },
  inputThoughtHere: {
    marginLeft: -102.5,
    fontSize: FontSize.size_mini,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    width: 205,
    left: "50%",
    top: "50%",
    marginTop: -17,
    position: "absolute",
  },
  subHeading: {
    marginLeft: -129,
    height: 34,
  },
  inputField: {
    left: 28,
    backgroundColor: Color.white,
    width: 298,
  },
  sendButtonIcon: {
    left: 338,
    width: 72,
  },
  inputTypo: {
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  worry: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.bTCDARKGREEN,
  },
  inputAWorryContainer: {
    marginLeft: -148.5,
    top: 0,
    fontSize: 17,
    textAlign: "center",
    lineHeight: 34,
  },
  mockLogo: {
    marginLeft: -148,
    top: 360,
    height: 102,
  },
  cognitiveReframingExercise: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default CognitiveReframingExercise;
