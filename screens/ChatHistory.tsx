import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import SessionHistoryTab from "../components/SessionHistoryTab";
import AppHeader from "../components/AppHeader";
import NavigationMenu from "../components/NavigationMenu";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const ChatHistory = () => {
  return (
    <ScrollView style={styles.chatHistory}>
      <Text style={styles.tipHeading}>{`Chat Session History `}</Text>
      <View style={styles.sessionHistories}>
        <SessionHistoryTab
          sessionDate="January 7 2023"
          sessionHeading="My troubles at School"
        />
        <SessionHistoryTab
          sessionDate="January 8 2023"
          sessionHeading="How i really feel about "
        />
        <SessionHistoryTab
          sessionDate="January 9 2023"
          sessionHeading="The Real Reason I ****"
        />
        <SessionHistoryTab
          sessionDate="January 9 2023"
          sessionHeading="My feelings for Pearl"
        />
        <SessionHistoryTab
          sessionDate="January 9 2023"
          sessionHeading="Missing my brother"
        />
        <SessionHistoryTab
          sessionDate="January 9 2023"
          sessionHeading="How i really feel about "
        />
      </View>
      <AppHeader />
      <NavigationMenu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tipHeading: {
    top: 113,
    left: 25,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.pRIMARYFONT,
    textAlign: "left",
    width: 200,
    position: "absolute",
  },
  sessionHistories: {
    marginLeft: -193,
    top: 150,
    left: "50%",
    gap: Gap.gap_md,
    position: "absolute",
  },
  chatHistory: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default ChatHistory;
