import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import DailyCheckUp from "./DailyCheckUp";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ChallengePreview = () => {
  const [frameContainerVisible, setFrameContainerVisible] = useState(false);

  const openFrameContainer = useCallback(() => {
    setFrameContainerVisible(true);
  }, []);

  const closeFrameContainer = useCallback(() => {
    setFrameContainerVisible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.challengePreview}
        locations={[0]}
        colors={["#035927"]}
        useAngle={true}
        angle={90.1}
      >
        <View style={[styles.frame, styles.framePosition1]}>
          <Pressable
            style={styles.seeChallengeButtonWrapper}
            onPress={openFrameContainer}
          >
            <View style={[styles.seeChallengeButton, styles.seeSpaceBlock]}>
              <Text style={styles.takeDailyCheck}>Take Daily Check Up</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.frame1, styles.framePosition]}>
          <Text style={[styles.tipeContent, styles.tipHeadingFlexBox]}>
            I hope you are well , it`s a great day isn`t it ?
          </Text>
        </View>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={[styles.tipHeading, styles.tipHeadingFlexBox]}>
            Hello Tlhalefang
          </Text>
        </View>
        <Image
          style={styles.nicePatternForStepsPage}
          resizeMode="cover"
          source={require("../assets/nice-pattern-for-steps-page8.png")}
        />
        <View style={[styles.frame3, styles.framePosition1]}>
          <Image
            style={styles.naledi31}
            resizeMode="cover"
            source={require("../assets/naledi-3-16.png")}
          />
        </View>
        <View style={[styles.frame4, styles.frame4Layout]}>
          <View style={[styles.seeChallengeButton1, styles.frame4Layout]}>
            <Text style={styles.sad}>SAD</Text>
          </View>
        </View>
      </LinearGradient>

      <Modal animationType="fade" transparent visible={frameContainerVisible}>
        <View style={styles.frameContainerOverlay}>
          <Pressable
            style={styles.frameContainerBg}
            onPress={closeFrameContainer}
          />
          <DailyCheckUp onClose={closeFrameContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    justifyContent: "flex-end",
    top: -29,
    overflow: "hidden",
    position: "absolute",
  },
  seeSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_80xl,
    flexDirection: "row",
    height: 33,
    borderRadius: Border.br_39xl,
    justifyContent: "center",
  },
  framePosition: {
    left: 14,
    justifyContent: "flex-end",
    alignItems: "center",
    top: -29,
    overflow: "hidden",
    position: "absolute",
  },
  tipHeadingFlexBox: {
    textAlign: "left",
    color: Color.bTCWHITE,
  },
  frame4Layout: {
    width: 68,
    alignItems: "center",
  },
  frameContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  takeDailyCheck: {
    color: Color.bTCDARKGREEN,
    width: 144,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  seeChallengeButton: {
    backgroundColor: Color.cREAMWHITE,
    alignItems: "center",
    width: 153,
  },
  seeChallengeButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 153,
  },
  frame: {
    left: 10,
    alignItems: "center",
    height: 166,
    justifyContent: "flex-end",
    width: 153,
  },
  tipeContent: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    height: 34,
    width: 220,
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  frame1: {
    height: 116,
    width: 220,
  },
  tipHeading: {
    fontSize: FontSize.size_lg,
    width: 224,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
  },
  frame2: {
    height: 81,
    width: 224,
  },
  nicePatternForStepsPage: {
    left: 113,
    width: 435,
    height: 333,
    top: -29,
    position: "absolute",
  },
  naledi31: {
    height: 144,
    width: 159,
  },
  frame3: {
    left: 238,
    height: 205,
    width: 159,
    alignItems: "center",
  },
  sad: {
    width: 58,
    color: Color.bTCWHITE,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  seeChallengeButton1: {
    backgroundColor: Color.colorYellowgreen,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_80xl,
    flexDirection: "row",
    height: 33,
    borderRadius: Border.br_39xl,
    justifyContent: "center",
  },
  frame4: {
    left: 177,
    justifyContent: "flex-end",
    top: -29,
    overflow: "hidden",
    position: "absolute",
    height: 166,
  },
  challengePreview: {
    top: 101,
    left: 20,
    borderRadius: Border.br_2xl,
    width: 387,
    height: 164,
    backgroundColor: "transparent",
    overflow: "hidden",
    position: "absolute",
  },
});

export default ChallengePreview;
