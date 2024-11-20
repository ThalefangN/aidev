import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import NewChatAppHeader from "../components/NewChatAppHeader";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OngoingSessionChat = () => {
  return (
    <ScrollView style={styles.ongoingSessionchat}>
      <View style={[styles.inputField, styles.inputPosition]}>
        <View style={styles.subHeading}>
          <Text style={styles.talkToMe}>Talk to me about anything</Text>
        </View>
      </View>
      <View style={[styles.outwardMessage, styles.outwardLayout]}>
        <View style={[styles.inputField1, styles.inputPosition]}>
          <View style={[styles.subHeading1, styles.iAmFeelingPosition]}>
            <Text style={[styles.iAmFeeling, styles.iAmFeelingTypo]}>
              I am feeling very sad today
            </Text>
          </View>
        </View>
        <View style={[styles.subHeading2, styles.amLayout]}>
          <Text style={[styles.am, styles.amTypo]}>10:32 AM</Text>
        </View>
      </View>
      <View style={[styles.outwardMessage1, styles.outwardLayout]}>
        <View style={[styles.inputField1, styles.inputPosition]}>
          <View style={[styles.subHeading3, styles.subHeading3Position]}>
            <Text style={[styles.aFriendSpoke, styles.subHeading3Position]}>
              A friend spoke to me in a rude manner
            </Text>
          </View>
        </View>
        <View style={[styles.subHeading2, styles.amLayout]}>
          <Text style={[styles.am, styles.amTypo]}>10:32 AM</Text>
        </View>
      </View>
      <View style={styles.outwardMessage2}>
        <View style={[styles.inputField3, styles.inputPosition]}>
          <View style={[styles.subHeading5, styles.iAmSorryPosition]}>
            <Text style={[styles.iAmSorry, styles.iAmSorryPosition]}>
              I am sorry to hear that, is there anything in particular that
              could be causing you to feel in such a way?
            </Text>
          </View>
        </View>
        <View style={[styles.subHeading6, styles.am2Layout]}>
          <Text style={[styles.am2, styles.am2Layout]}>10:32 AM</Text>
        </View>
      </View>
      <Image
        style={[styles.sendButtonIcon, styles.inputPosition]}
        resizeMode="cover"
        source={require("../assets/send-button1.png")}
      />
      <View style={[styles.chatIcon, styles.iconLayout]}>
        <Image
          style={[styles.logoIconOptionsFrame, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/logo-icon-options-frame1.png")}
        />
        <Image
          style={styles.naledi31}
          resizeMode="cover"
          source={require("../assets/naledi-3-15.png")}
        />
      </View>
      <Image
        style={[styles.ongoingSessionchatChild, styles.inputPosition]}
        resizeMode="cover"
        source={require("../assets/frame-117.png")}
      />
      <NewChatAppHeader />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  outwardLayout: {
    height: 91,
    width: 208,
    position: "absolute",
  },
  iAmFeelingPosition: {
    width: 160,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iAmFeelingTypo: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.pRIMARYFONT,
    marginTop: -17,
  },
  amLayout: {
    height: 25,
    width: 73,
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.size_xs,
    top: 0,
    textAlign: "center",
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  subHeading3Position: {
    width: 186,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iAmSorryPosition: {
    width: 264,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  am2Layout: {
    width: 62,
    height: 25,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 52,
    width: 52,
    position: "absolute",
  },
  talkToMe: {
    marginLeft: -102.5,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    width: 205,
    left: "50%",
    top: "50%",
    marginTop: -17,
    position: "absolute",
  },
  subHeading: {
    marginLeft: -129,
    height: 34,
    width: 205,
    left: "50%",
    top: "50%",
    marginTop: -17,
    position: "absolute",
  },
  inputField: {
    left: 28,
    height: 66,
    overflow: "hidden",
    borderRadius: Border.br_2xs,
    width: 298,
    backgroundColor: Color.white,
    top: 814,
  },
  iAmFeeling: {
    marginLeft: -80,
    width: 160,
    left: "50%",
    top: "50%",
    position: "absolute",
    lineHeight: 34,
    textAlign: "right",
  },
  subHeading1: {
    marginLeft: -68.5,
    height: 34,
    width: 160,
    marginTop: -17,
  },
  inputField1: {
    width: 203,
    left: 0,
    top: 0,
    height: 66,
    overflow: "hidden",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.white,
  },
  am: {
    height: 25,
    width: 73,
    position: "absolute",
    left: 0,
  },
  subHeading2: {
    top: 66,
    left: 135,
  },
  outwardMessage: {
    top: 122,
    left: 207,
  },
  aFriendSpoke: {
    marginLeft: -93,
    lineHeight: 17,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.pRIMARYFONT,
    marginTop: -17,
  },
  subHeading3: {
    marginTop: -16,
    marginLeft: -94.5,
    height: 34,
  },
  outwardMessage1: {
    top: 392,
    left: 202,
  },
  iAmSorry: {
    marginTop: -36,
    marginLeft: -132,
    lineHeight: 24,
    color: Color.bTCWHITE,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    width: 264,
  },
  subHeading5: {
    marginTop: -40,
    marginLeft: -135,
    height: 72,
  },
  inputField3: {
    left: 2,
    backgroundColor: Color.bTCDARKGREEN,
    height: 92,
    top: 0,
    width: 298,
    borderRadius: Border.br_2xs,
    overflow: "hidden",
  },
  am2: {
    fontSize: FontSize.size_xs,
    top: 0,
    textAlign: "center",
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  subHeading6: {
    top: 92,
  },
  outwardMessage2: {
    top: 244,
    left: 92,
    width: 300,
    height: 117,
    position: "absolute",
  },
  sendButtonIcon: {
    left: 338,
    width: 72,
    height: 66,
    overflow: "hidden",
    borderRadius: Border.br_2xs,
    top: 814,
  },
  logoIconOptionsFrame: {
    left: 0,
    top: 0,
  },
  naledi31: {
    top: 10,
    left: 6,
    width: 37,
    height: 34,
    position: "absolute",
  },
  chatIcon: {
    top: 256,
    left: 31,
  },
  ongoingSessionchatChild: {
    top: 489,
    left: 48,
    borderRadius: 9,
    width: 66,
    height: 20,
  },
  ongoingSessionchat: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default OngoingSessionChat;
