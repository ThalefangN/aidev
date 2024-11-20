import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

export type NotificationsPopUpType = {
  onClose?: () => void;
};

const NotificationsPopUp = ({ onClose }: NotificationsPopUpType) => {
  return (
    <View style={styles.notificationsPopUp}>
      <Image
        style={[
          styles.nicePatternForStepsPage,
          styles.logoIconOptionsFramePosition,
        ]}
        resizeMode="cover"
        source={require("../assets/nice-pattern-for-steps-page7.png")}
      />
      <Text style={styles.tipHeading}>Notifications</Text>
      <Image
        style={styles.eicloseOIcon}
        resizeMode="cover"
        source={require("../assets/eicloseo1.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.chatIconParent}>
          <View style={styles.iconLayout}>
            <Image
              style={[styles.logoIconOptionsFrame, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/logo-icon-options-frame.png")}
            />
            <Image
              style={styles.naledi31}
              resizeMode="cover"
              source={require("../assets/naledi-3-14.png")}
            />
          </View>
          <View style={styles.tipHeadingParent}>
            <Text style={[styles.tipHeading1, styles.tipFlexBox]}>
              Click to view without notifications
            </Text>
            <Text style={[styles.tipHeading2, styles.tipFlexBox]}>
              Clicking will show this popup with no data
            </Text>
          </View>
        </View>
        <View style={styles.chatIconParent}>
          <View style={styles.iconLayout}>
            <Image
              style={[styles.logoIconOptionsFrame, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/logo-icon-options-frame.png")}
            />
            <Image
              style={styles.naledi31}
              resizeMode="cover"
              source={require("../assets/naledi-3-14.png")}
            />
          </View>
          <View style={styles.tipHeadingParent}>
            <Text style={[styles.tipHeading1, styles.tipFlexBox]}>
              Daily Check Up Completed!
            </Text>
            <Text style={[styles.tipHeading2, styles.tipFlexBox]}>
              Remember my tip for the day
            </Text>
          </View>
        </View>
        <View style={styles.chatIconParent}>
          <View style={styles.iconLayout}>
            <Image
              style={[styles.logoIconOptionsFrame, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/logo-icon-options-frame.png")}
            />
            <Image
              style={styles.naledi31}
              resizeMode="cover"
              source={require("../assets/naledi-3-14.png")}
            />
          </View>
          <View style={styles.tipHeadingParent}>
            <Text style={[styles.tipHeading1, styles.tipFlexBox]}>
              Congrats! on your first Exercise
            </Text>
            <Text style={[styles.tipHeading2, styles.tipFlexBox]}>
              Keep Up the good work
            </Text>
          </View>
        </View>
        <View style={styles.chatIconParent}>
          <View style={styles.iconLayout}>
            <Image
              style={[styles.logoIconOptionsFrame, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/logo-icon-options-frame.png")}
            />
            <Image
              style={styles.naledi31}
              resizeMode="cover"
              source={require("../assets/naledi-3-14.png")}
            />
          </View>
          <View style={styles.tipHeadingParent}>
            <Text style={[styles.tipHeading1, styles.tipFlexBox]}>
              Your Password was reset
            </Text>
            <Text style={[styles.tipHeading2, styles.tipFlexBox]}>
              You can now log in using your new password
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoIconOptionsFramePosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 42,
    width: 42,
  },
  tipFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.bTCDARKGREEN,
  },
  nicePatternForStepsPage: {
    left: -62,
    width: 523,
    height: 405,
  },
  tipHeading: {
    marginLeft: -85.5,
    top: 36,
    left: "50%",
    fontSize: FontSize.size_2xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    textAlign: "center",
    width: 171,
    color: Color.bTCDARKGREEN,
    position: "absolute",
  },
  eicloseOIcon: {
    top: 16,
    left: 325,
    width: 59,
    height: 59,
    position: "absolute",
  },
  logoIconOptionsFrame: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  naledi31: {
    top: 8,
    left: 5,
    width: 30,
    height: 27,
    position: "absolute",
  },
  tipHeading1: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  tipHeading2: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  tipHeadingParent: {
    width: 300,
  },
  chatIconParent: {
    backgroundColor: Color.colorSilver,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 108,
    left: -1,
    width: 392,
    gap: 6,
    position: "absolute",
  },
  notificationsPopUp: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.cREAMWHITE,
    width: 391,
    height: 514,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default NotificationsPopUp;
