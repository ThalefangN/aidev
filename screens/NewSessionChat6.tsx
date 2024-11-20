import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import NewChatAppHeader from "../components/NewChatAppHeader";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const NewSessionChat6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.newSessionchat}>
      <NewChatAppHeader />
      <View style={styles.chatIcon}>
        <Image
          style={styles.chatIconChild}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={styles.naledi31}
          resizeMode="cover"
          source={require("../assets/naledi-3-11.png")}
        />
      </View>
      <Text style={[styles.hiImNalediContainer, styles.containerLayout]}>
        <Text style={[styles.hiIm, styles.hiImTypo]}>{`Hi, I\`m `}</Text>
        <Text style={styles.naledi}>
          <Text style={styles.naledi1}>Naledi</Text>
          <Text style={styles.text}>,</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.hiImTypo}>{` `}</Text>
        </Text>
      </Text>
      <Text style={[styles.yourAiMentalContainer, styles.talkToMeTypo]}>
        <Text style={styles.text}>{`Your `}</Text>
        <Text style={styles.naledi1}>AI</Text>
        <Text style={styles.text}>{` Mental Health Companion `}</Text>
      </Text>
      <Text style={[styles.yourAiMentalContainer, styles.talkToMeTypo]}>
        <Text style={styles.text}>{`Your `}</Text>
        <Text style={styles.naledi1}>AI</Text>
        <Text style={styles.text}>{` Mental Health Companion `}</Text>
      </Text>
      <Pressable
        style={[styles.inputField, styles.inputFieldLayout]}
        onPress={() => navigation.navigate("OngoingSessionChat")}
      >
        <Text style={[styles.talkToMe, styles.deletePosition]}>
          Talk to me about anything
        </Text>
      </Pressable>
      <Image
        style={[styles.sendButtonIcon, styles.inputFieldLayout]}
        resizeMode="cover"
        source={require("../assets/send-button1.png")}
      />
      <View style={[styles.options, styles.optionsLayout]}>
        <View style={[styles.mockLogo, styles.optionsLayout]}>
          <Image
            style={[styles.optionsTabIcon, styles.optionsLayout]}
            resizeMode="cover"
            source={require("../assets/options-tab.png")}
          />
          <Text style={[styles.delete, styles.deletePosition]}>Delete?</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    lineHeight: 34,
    position: "absolute",
  },
  hiImTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  talkToMeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  inputFieldLayout: {
    overflow: "hidden",
    height: 66,
    top: 814,
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  deletePosition: {
    left: "50%",
    top: "50%",
    lineHeight: 34,
    position: "absolute",
  },
  optionsLayout: {
    height: 48,
    width: 135,
    position: "absolute",
  },
  chatIconChild: {
    left: 0,
    top: 0,
    height: 246,
    width: 246,
    position: "absolute",
  },
  naledi31: {
    top: 49,
    width: 176,
    height: 159,
    left: 28,
    position: "absolute",
  },
  chatIcon: {
    top: 143,
    left: 98,
    height: 246,
    width: 246,
    position: "absolute",
  },
  hiIm: {
    color: Color.pRIMARYFONT,
  },
  naledi1: {
    color: Color.bTCDARKGREEN,
  },
  text: {
    color: Color.pRIMARYFONT,
  },
  naledi: {
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
  },
  hiImNalediContainer: {
    top: 405,
    left: 154,
    fontSize: FontSize.size_xl,
    width: 148,
    textAlign: "left",
  },
  yourAiMentalContainer: {
    top: 439,
    left: 68,
    fontSize: FontSize.size_lg,
    width: 320,
    lineHeight: 34,
    position: "absolute",
  },
  talkToMe: {
    marginTop: -17,
    marginLeft: -129,
    fontSize: FontSize.size_mini,
    width: 205,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.pRIMARYFONT,
  },
  inputField: {
    backgroundColor: Color.white,
    width: 298,
    left: 28,
  },
  sendButtonIcon: {
    left: 338,
    width: 72,
  },
  optionsTabIcon: {
    borderRadius: Border.br_2xs,
    height: 48,
    width: 135,
    left: 0,
    top: 0,
  },
  delete: {
    marginTop: -16,
    marginLeft: -19.5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.bTCWHITE,
    width: 63,
    height: 28,
    textAlign: "left",
  },
  mockLogo: {
    top: -12,
    left: 6,
  },
  options: {
    top: 80,
    left: 259,
  },
  newSessionchat: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default NewSessionChat6;
