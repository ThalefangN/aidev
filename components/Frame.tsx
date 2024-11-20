import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavigationMenu from "./NavigationMenu";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.exerciseParent}>
          <View style={styles.exercise}>
            <Text
              style={[styles.tipHeading, styles.tipTypo]}
            >{`Cognitive Reframing `}</Text>
            <Text style={styles.tipPosition}>
              <Text
                style={styles.inputAWorry}
              >{`Input a worry or negative thought, and `}</Text>
              <Text style={styles.naledi}>Naledi</Text>
              <Text style={styles.inputAWorry}>
                {" "}
                will suggest reframed perspectives.
              </Text>
            </Text>
            <Pressable
              style={styles.playButton}
              onPress={() => navigation.navigate("CognitiveReframingExercise")}
            >
              <View style={[styles.playExercise, styles.playExerciseLayout]}>
                <Text style={styles.play}>Play</Text>
              </View>
            </Pressable>
            <Image
              style={styles.nicePatternForStepsPage}
              resizeMode="cover"
              source={require("../assets/nice-pattern-for-steps-page9.png")}
            />
          </View>
          <View style={styles.exercise}>
            <Text
              style={[styles.tipHeading2, styles.tipTypo]}
            >{`Daily Affirmations `}</Text>
            <Text style={[styles.tipHeading3, styles.tipPosition]}>
              Description of a mental exercise will be showned
            </Text>
            <View
              style={[styles.seeChallengeButton, styles.playExerciseLayout]}
            >
              <Text style={styles.play}>Play</Text>
            </View>
            <Image
              style={styles.nicePatternForStepsPage}
              resizeMode="cover"
              source={require("../assets/nice-pattern-for-steps-page10.png")}
            />
          </View>
        </View>
        <NavigationMenu
          navigationMenuMarginLeft={-194.25}
          navigationMenuTop={358}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    overflow: "hidden",
    height: 440,
    position: "absolute",
  },
  tipTypo: {
    textAlign: "left",
    color: Color.bTCDARKGREEN,
    fontSize: FontSize.size_4xl,
    left: 28,
    top: 67,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  playExerciseLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_80xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: Color.bTCDARKGREEN,
    borderRadius: Border.br_39xl,
    left: "50%",
    height: 33,
    width: 106,
    borderColor: Color.bTCDARKGREEN,
    borderStyle: "solid",
    position: "absolute",
  },
  tipPosition: {
    width: 325,
    fontSize: FontSize.size_xs,
    top: 102,
    textAlign: "left",
    color: Color.bTCDARKGREEN,
    left: 28,
    position: "absolute",
  },
  tipHeading: {
    width: 249,
  },
  inputAWorry: {
    fontFamily: FontFamily.poppinsRegular,
  },
  naledi: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  play: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSansBold,
    color: Color.white,
    textAlign: "center",
    width: 88,
    fontWeight: "700",
  },
  playExercise: {
    marginLeft: -53,
    top: 0,
  },
  playButton: {
    left: 263,
    height: 33,
    width: 106,
    top: 18,
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: -93,
    left: 33,
    width: 435,
    height: 333,
    position: "absolute",
  },
  exercise: {
    alignSelf: "stretch",
    borderRadius: Border.br_2xl,
    borderWidth: 3,
    height: 197,
    borderColor: Color.bTCDARKGREEN,
    borderStyle: "solid",
    overflow: "hidden",
  },
  tipHeading2: {
    width: 274,
  },
  tipHeading3: {
    fontFamily: FontFamily.poppinsRegular,
  },
  seeChallengeButton: {
    marginLeft: 72.5,
    top: 18,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_80xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: Color.bTCDARKGREEN,
    borderRadius: Border.br_39xl,
    left: "50%",
  },
  exerciseParent: {
    left: 0,
    width: 381,
    gap: Gap.gap_md,
    top: 0,
    position: "absolute",
  },
  frame1: {
    left: 3,
    width: 392,
    top: 0,
  },
  frame: {
    top: 450,
    left: 17,
    width: 395,
  },
});

export default Frame;
