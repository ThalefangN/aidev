import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const DashboardOption = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboardOption}>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={styles.frame}>
        <Pressable
          style={styles.seeFlexBox}
          onPress={() => navigation.navigate("OngoingSessionChat")}
          accessible={true}
          accessibilityLabel="Continue previous chat"
        >
          <View style={[styles.seeChallengeButton, styles.seeFlexBox]}>
            <Text style={styles.continueChat}>Continue Chat</Text>
          </View>
        </Pressable>
      </View>
      <Text style={[styles.tipHeading, styles.frameIconPosition]}>
        Would you like to continue your previous chat?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    left: 7,
    position: "absolute",
  },
  seeFlexBox: {
    alignItems: "center",
    width: 153,
    justifyContent: "center",
  },
  frameIcon: {
    top: -93,
    width: "100%", // Use relative width for better responsiveness
    height: 333,
    overflow: "hidden",
  },
  frameIcon1: {
    top: 21,
    width: 38,
    height: 34,
    overflow: "hidden",
  },
  continueChat: {
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.bTCDARKGREEN,
    textAlign: "center",
    width: 144,
    fontSize: FontSize.size_smi,
  },
  seeChallengeButton: {
    borderRadius: Border.br_39xl,
    backgroundColor: Color.cREAMWHITE,
    height: 33,
    flexDirection: "row",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: Padding.p_3xs,
  },
  frame: {
    top: 162,
    width: 157,
    alignItems: "flex-end",
    justifyContent: "center",
    left: 7,
    overflow: "hidden",
    position: "absolute",
  },
  tipHeading: {
    top: 92,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.bTCWHITE,
    textAlign: "left",
    width: 169,
    fontSize: FontSize.size_smi,
  },
  dashboardOption: {
    top: 338,
    left: 25,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.bTCDARKGREEN,
    width: 182,
    height: 240,
    overflow: "hidden",
    position: "absolute",
  },
});

export default DashboardOption;
