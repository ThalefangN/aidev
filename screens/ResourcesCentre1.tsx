import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import AppHeader from "../components/AppHeader";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Frame from "../components/Frame";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ResourcesCentre1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.resourcesCentre}>
      <View style={[styles.frame, styles.framePosition]}>
        <AppHeader appHeaderMarginLeft={-195.75} appHeaderTop={0} />
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <Text style={styles.tipHeading}>Resources Center</Text>
      </View>
      <View style={styles.dashboardOption}>
        <Text style={styles.tipHeading1}>
          <Text style={styles.youHaveDone}>{`You have done `}</Text>
          <Text style={styles.text}>13</Text>
          <Text style={styles.youHaveDone}>
            {" "}
            mental exercise sessions this weeek
          </Text>
        </Text>
        <Image
          style={styles.nicePatternForStepsPage}
          resizeMode="cover"
          source={require("../assets/nice-pattern-for-steps-page8.png")}
        />
        <Image
          style={[styles.mentalExerciseIcon, styles.mentalExerciseIconLayout]}
          resizeMode="cover"
          source={require("../assets/mental-exercise-icon.png")}
        />
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <Pressable
          style={[styles.dashboardOption1, styles.dashboardLayout]}
          onPress={() => navigation.navigate("ResourcesCentre")}
        >
          <Image
            style={styles.nicePatternForStepsPage1}
            resizeMode="cover"
            source={require("../assets/nice-pattern-for-steps-page3.png")}
          />
          <Text
            style={[styles.tipHeading2, styles.tipTypo]}
          >{`Connections & Crisis Support`}</Text>
          <Image
            style={styles.rightArrowIcon}
            resizeMode="cover"
            source={require("../assets/right-arrow.png")}
          />
          <Image
            style={[
              styles.dashboardOptionChild,
              styles.mentalExerciseIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/group-17.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.dashboardOption2, styles.tipHeading4Position]}
          onPress={() => navigation.navigate("NewSessionChat5")}
        >
          <Image
            style={styles.nicePatternForStepsPage1}
            resizeMode="cover"
            source={require("../assets/nice-pattern-for-steps-page2.png")}
          />
          <Text style={[styles.tipHeading3, styles.tipTypo]}>{`We will put 
some Option here`}</Text>
          <Image
            style={styles.rightArrowIcon}
            resizeMode="cover"
            source={require("../assets/right-arrow1.png")}
          />
          <Image
            style={[
              styles.dashboardOptionChild,
              styles.mentalExerciseIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/group-172.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.frame3, styles.frameLayout]}>
        <View style={[styles.frame4, styles.frameLayout]}>
          <Text style={[styles.tipHeading4, styles.seeAll1Typo]}>
            Available Exercises
          </Text>
          <Pressable
            style={[styles.seeAll, styles.seeAllPosition]}
            onPress={() => navigation.navigate("ChatHistory1")}
          >
            <Text style={[styles.seeAll1, styles.seeAll1Typo]}>See All</Text>
          </Pressable>
        </View>
      </View>
      <Frame />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    left: 17,
    position: "absolute",
  },
  mentalExerciseIconLayout: {
    width: 34,
    position: "absolute",
  },
  dashboardLayout: {
    width: 182,
    height: 117,
    borderRadius: Border.br_2xl,
    overflow: "hidden",
  },
  tipTypo: {
    left: 13,
    top: 56,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  tipHeading4Position: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 25,
    overflow: "hidden",
    position: "absolute",
  },
  seeAll1Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  seeAllPosition: {
    top: 0,
    position: "absolute",
  },
  frame: {
    top: 27,
    width: 393,
    height: 41,
  },
  tipHeading: {
    fontSize: FontSize.size_4xl,
    width: 206,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    color: Color.favouriteFont,
    left: 8,
    top: 0,
    position: "absolute",
  },
  frame1: {
    top: 98,
    width: 214,
    height: 31,
  },
  youHaveDone: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.bTCDARKGREEN,
  },
  tipHeading1: {
    marginLeft: -109,
    top: 53,
    left: "50%",
    textAlign: "center",
    width: 218,
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: -93,
    left: 33,
    width: 435,
    height: 333,
    position: "absolute",
  },
  mentalExerciseIcon: {
    top: 19,
    left: 175,
    height: 44,
  },
  dashboardOption: {
    top: 278,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.bTCDARKGREEN,
    borderWidth: 3,
    height: 117,
    borderRadius: Border.br_2xl,
    width: 384,
    overflow: "hidden",
    left: 17,
    position: "absolute",
  },
  nicePatternForStepsPage1: {
    top: -185,
    left: 25,
    width: 451,
    height: 517,
    position: "absolute",
  },
  tipHeading2: {
    width: 137,
    color: Color.colorBlack,
  },
  rightArrowIcon: {
    top: 68,
    left: 146,
    width: 24,
    height: 24,
    position: "absolute",
  },
  dashboardOptionChild: {
    top: 21,
    left: 11,
    height: 34,
  },
  dashboardOption1: {
    left: 203,
    backgroundColor: Color.colorLightgreen,
    top: 0,
    position: "absolute",
  },
  tipHeading3: {
    color: Color.bTCWHITE,
    width: 125,
  },
  dashboardOption2: {
    top: 1,
    backgroundColor: Color.bTCDARKGREEN,
    width: 182,
    height: 117,
    borderRadius: Border.br_2xl,
    overflow: "hidden",
  },
  frame2: {
    top: 142,
    width: 385,
    height: 118,
  },
  tipHeading4: {
    width: 200,
    left: 0,
    position: "absolute",
    color: Color.favouriteFont,
    fontSize: FontSize.size_lg,
    top: 0,
  },
  seeAll1: {
    color: Color.bTCLIGHTGREEN,
    width: 61,
  },
  seeAll: {
    left: 315,
  },
  frame4: {
    width: 376,
    height: 25,
    left: 8,
    top: 0,
  },
  frame3: {
    top: 412,
    width: 384,
    height: 25,
    left: 17,
  },
  resourcesCentre: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default ResourcesCentre1;
