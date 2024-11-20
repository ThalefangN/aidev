import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Component from "../components/Component";
import CognitiveReframingHeader from "../components/CognitiveReframingHeader";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CognitiveReframingLoading = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.cognitiveReframingLoading}>
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
      <View style={[styles.inputField, styles.iconLayout]}>
        <View style={styles.subHeading}>
          <Text style={[styles.inputThoughtHere, styles.inputPosition]}>
            Input thought here
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.sendButton, styles.inputFieldPosition]}
        onPress={() => navigation.navigate("CognitiveReframingWithInput")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/send-button.png")}
        />
      </Pressable>
      <View
        style={[styles.usersInputShouldAppearHerWrapper, styles.mockLayout]}
      >
        <Text
          style={[styles.usersInputShould, styles.inputPosition]}
        >{`User\`s Input Should Appear here after being entered. There should a be a word limit so that the fit inside this container `}</Text>
      </View>
      <View style={[styles.mockLogo, styles.mockLogoLayout]}>
        <Text style={[styles.yourThought, styles.reframingTypo]}>
          Your Thought
        </Text>
      </View>
      <View style={[styles.mockLogo1, styles.mockLogo1Layout]}>
        <Text style={[styles.reframing, styles.mockLogo1Layout]}>
          Reframing..
        </Text>
      </View>
      <View style={[styles.mockLogo2, styles.mockLayout]}>
        <View style={[styles.mockLogoChild, styles.mockLayout]} />
        <Component property1="Loading Icon 1" />
      </View>
      <CognitiveReframingHeader />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    borderRadius: Border.br_2xs,
  },
  inputPosition: {
    textAlign: "center",
    color: Color.pRIMARYFONT,
    lineHeight: 34,
    left: "50%",
    position: "absolute",
  },
  inputFieldPosition: {
    height: 66,
    top: 814,
    position: "absolute",
  },
  mockLayout: {
    height: 123,
    width: 391,
    position: "absolute",
  },
  mockLogoLayout: {
    width: 142,
    position: "absolute",
  },
  reframingTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    left: "50%",
    top: "50%",
    marginTop: -17,
  },
  mockLogo1Layout: {
    width: 125,
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
    marginLeft: -82.5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "50%",
    marginTop: -17,
    textAlign: "center",
    color: Color.pRIMARYFONT,
    lineHeight: 34,
    left: "50%",
    width: 205,
  },
  subHeading: {
    top: 16,
    left: 20,
    height: 34,
    width: 205,
    position: "absolute",
  },
  inputField: {
    left: 28,
    width: 298,
    height: 66,
    top: 814,
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sendButton: {
    left: 338,
    width: 72,
  },
  usersInputShould: {
    marginLeft: -164.5,
    top: 11,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 330,
    height: 91,
    textAlign: "center",
    color: Color.pRIMARYFONT,
    lineHeight: 34,
    left: "50%",
  },
  usersInputShouldAppearHerWrapper: {
    top: 380,
    borderStyle: "solid",
    borderColor: Color.bTCDARKGREEN,
    borderWidth: 3,
    left: 19,
    width: 391,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xs,
  },
  yourThought: {
    marginLeft: 68,
    width: 142,
    position: "absolute",
  },
  mockLogo: {
    top: 336,
    left: 139,
    height: 34,
  },
  reframing: {
    marginLeft: 97.5,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    left: "50%",
    top: "50%",
    marginTop: -17,
  },
  mockLogo1: {
    top: 514,
    left: 160,
    height: 34,
  },
  mockLogoChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.bTCDARKGREEN,
    borderRadius: Border.br_2xs,
  },
  mockLogo2: {
    top: 559,
    left: 19,
    width: 391,
  },
  cognitiveReframingLoading: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default CognitiveReframingLoading;
