import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type SessionHistoryTabType = {
  sessionDate?: string;
  sessionHeading?: string;
};

const SessionHistoryTab = ({
  sessionDate,
  sessionHeading,
}: SessionHistoryTabType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.sessionHistoryTab}
      onPress={() => navigation.navigate("OngoingSessionChat")}
    >
      <Text style={[styles.sessionDate, styles.sessionFlexBox]}>
        {sessionDate}
      </Text>
      <Text style={[styles.sessionHeading, styles.sessionFlexBox]}>
        {sessionHeading}
      </Text>
      <Image
        style={styles.chatIcon}
        resizeMode="cover"
        source={require("../assets/chat-icon1.png")}
      />
      <Image
        style={styles.rightArrowIcon}
        resizeMode="cover"
        source={require("../assets/right-arrow.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sessionFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  sessionDate: {
    top: 48,
    left: 98,
    fontSize: FontSize.textSmLineHeight5FontNormal_size,
    fontFamily: FontFamily.openSansRegular,
    color: Color.pRIMARYFONT,
    width: 101,
    height: 21,
  },
  sessionHeading: {
    top: 24,
    left: 96,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorBlack,
    width: 182,
  },
  chatIcon: {
    top: 27,
    left: 16,
    width: 38,
    height: 38,
    position: "absolute",
  },
  rightArrowIcon: {
    top: 36,
    left: 337,
    width: 24,
    height: 24,
    position: "absolute",
  },
  sessionHistoryTab: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    width: 384,
    height: 89,
  },
});

export default SessionHistoryTab;
