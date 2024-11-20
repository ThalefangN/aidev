import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
} from "react-native";
import AppHeader from "../components/AppHeader";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SessionHistoryTab from "../components/SessionHistoryTab";
import NavigationMenu from "../components/NavigationMenu";
import ChallengePreview from "../components/ChallengePreview";
import DashboardOption from "../components/DashboardOption";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const HomeScreenLayoutDraft = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.homescreenLayoutDraft}>
      <AppHeader appHeaderMarginLeft={-196.5} appHeaderTop={27} />
      <Text style={[styles.tipHeading, styles.tipTypo]}>Popular Tasks</Text>
      <Text
        style={[styles.tipHeading1, styles.seeAllPosition]}
      >{`Chat Session History `}</Text>
      <Pressable
        style={[styles.seeAll, styles.seeAllPosition]}
        onPress={() => navigation.navigate("ChatHistory1")}
      >
        <Text style={styles.seeAll1}>See All</Text>
      </Pressable>
      <View style={styles.sessionHistories}>
        <SessionHistoryTab
          sessionDate="January 7 2023"
          sessionHeading="My troubles at School"
        />
        <SessionHistoryTab
          sessionDate="January 7 2023"
          sessionHeading="How i really feel about "
        />
        <SessionHistoryTab
          sessionDate="January 7 2023"
          sessionHeading="How i really feel about "
        />
        <SessionHistoryTab
          sessionDate="January 7 2023"
          sessionHeading="How i really feel about "
        />
      </View>
      <NavigationMenu
        navigationMenuMarginLeft={-192.5}
        navigationMenuTop={808}
      />
      <ChallengePreview />
      <DashboardOption />
      <Pressable
        style={[styles.dashboardOption, styles.dashboardLayout]}
        onPress={() => navigation.navigate("ResourcesCentre1")}
      >
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          resizeMode="cover"
          source={require("../assets/frame2.png")}
        />
        <Image
          style={[styles.dashboardOptionChild, styles.frameIconPosition1]}
          resizeMode="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.frameIcon1, styles.frameIconPosition1]}
          resizeMode="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={[styles.frameIcon2, styles.frameIconPosition1]}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
        <View style={[styles.frame, styles.framePosition]}>
          <Text style={styles.tipHeading2}>Open Exercises</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.dashboardOption1, styles.dashboardLayout]}
        onPress={() => navigation.navigate("NewSessionChat5")}
      >
        <Image
          style={[styles.frameIcon3, styles.frameIconPosition]}
          resizeMode="cover"
          source={require("../assets/frame5.png")}
        />
        <View style={[styles.frame1, styles.framePosition]}>
          <View style={styles.frame2}>
            <Text style={styles.tipHeading2}>{`Start a 
new chat`}</Text>
            <Image
              style={styles.rightArrowIcon}
              resizeMode="cover"
              source={require("../assets/right-arrow.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.dashboardOptionChild, styles.frameIconPosition1]}
          resizeMode="cover"
          source={require("../assets/group-171.png")}
        />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tipTypo: {
    color: Color.pRIMARYFONT,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  seeAllPosition: {
    top: 612,
    position: "absolute",
  },
  dashboardLayout: {
    height: 117,
    width: 182,
    borderRadius: Border.br_2xl,
    left: 220,
    overflow: "hidden",
    position: "absolute",
  },
  frameIconPosition: {
    height: 333,
    left: 11,
    overflow: "hidden",
    position: "absolute",
  },
  frameIconPosition1: {
    left: 11,
    position: "absolute",
  },
  framePosition: {
    justifyContent: "center",
    alignItems: "flex-end",
    top: 56,
    left: 11,
    overflow: "hidden",
    position: "absolute",
  },
  tipHeading: {
    top: 297,
    width: 139,
    textAlign: "left",
    position: "absolute",
  },
  tipHeading1: {
    width: 200,
    textAlign: "left",
    color: Color.pRIMARYFONT,
    left: 25,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  seeAll1: {
    color: Color.bTCLIGHTGREEN,
    width: 61,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  seeAll: {
    left: 342,
  },
  sessionHistories: {
    marginLeft: -192,
    top: 649,
    left: "50%",
    gap: Gap.gap_md,
    position: "absolute",
  },
  frameIcon: {
    top: -93,
    width: 457,
  },
  dashboardOptionChild: {
    top: 21,
    width: 34,
    height: 34,
  },
  frameIcon1: {
    top: 26,
    width: 29,
    height: 24,
    overflow: "hidden",
  },
  frameIcon2: {
    top: 68,
    width: 159,
    height: 24,
    overflow: "hidden",
  },
  tipHeading2: {
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    width: 92,
    textAlign: "left",
  },
  frame: {
    width: 94,
  },
  dashboardOption: {
    top: 461,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  frameIcon3: {
    top: -185,
    width: 450,
  },
  rightArrowIcon: {
    width: 24,
    height: 24,
  },
  frame2: {
    width: 157,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 41,
    overflow: "hidden",
  },
  frame1: {
    width: 159,
  },
  dashboardOption1: {
    top: 334,
    backgroundColor: Color.colorLightgreen,
    overflow: "hidden",
  },
  homescreenLayoutDraft: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default HomeScreenLayoutDraft;
