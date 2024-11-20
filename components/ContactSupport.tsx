import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type ContactSupportType = {
  nicePatternForStepsPage?: ImageSourcePropType;
  tipHeading?: string;
  tipHeading1?: string;
  ellipse7?: ImageSourcePropType;
};

const ContactSupport = ({
  nicePatternForStepsPage,
  tipHeading = "Default Heading",
  tipHeading1 = "Default Subheading",
  ellipse7,
}: ContactSupportType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.contactSupport}
      onPress={() => navigation.navigate("NewSessionChat5")}
      accessibilityLabel="Contact Support"
    >
      <Image
        style={styles.nicePatternForStepsPage}
        resizeMode="cover"
        source={nicePatternForStepsPage || require('path/to/default-image.jpg')}
      />
      <Text style={[styles.tipHeading, styles.tipHeadingTypo]}>
        {tipHeading}
      </Text>
      <Text style={[styles.tipHeading1, styles.tipTypo]}>{tipHeading1}</Text>
      <Text style={[styles.tipHeading2, styles.tipTypo]}>
        0900hrs - 1700hrs
      </Text>
      <Image
        style={styles.contactSupportChild}
        resizeMode="cover"
        source={ellipse7 || require('path/to/default-icon.jpg')}
      />
      <View style={styles.seeChallengeButton}>
        <Text style={[styles.quickContact, styles.tipHeadingTypo]}>
          Quick Contact
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tipHeadingTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  tipTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    color: Color.bTCDARKGREEN,
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: -185,
    left: 25,
    width: 451,
    height: 517,
    position: "absolute",
  },
  tipHeading: {
    top: 68,
    left: 18,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 151,
    color: Color.bTCDARKGREEN,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  tipHeading1: {
    top: 128,
    left: 16,
    width: 151,
  },
  tipHeading2: {
    top: 115,
    left: 41,
    width: 98,
  },
  contactSupportChild: {
    top: 15,
    left: 72,
    width: 42,
    height: 42,
    position: "absolute",
  },
  quickContact: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.bTCWHITE,
    width: 88,
    textAlign: "center",
    fontWeight: "600",
  },
  seeChallengeButton: {
    marginLeft: -53,
    top: 148,
    left: "50%",
    borderRadius: Border.br_39xl,
    backgroundColor: Color.bTCDARKGREEN,
    borderStyle: "solid",
    borderColor: Color.bTCDARKGREEN,
    borderWidth: 1,
    width: 106,
    height: 33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
  },
  contactSupport: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.bTCWHITE,
    width: 182,
    height: 194,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ContactSupport;
