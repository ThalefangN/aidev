import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ContactsLine from "../components/ContactsLine";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const ResourcesCentre = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.resourcesCentre}>
      <Pressable
        style={[styles.dashboardOption, styles.dashboardOptionPosition]}
        onPress={() => navigation.navigate("NewSessionChat5")}
      >
        <Image
          style={styles.nicePatternForStepsPage}
          resizeMode="cover"
          source={require("../assets/nice-pattern-for-steps-page1.png")}
        />
        <Text style={styles.tipHeading}>
          Resources and Contacts for Human interaction and Intevention
        </Text>
        <Image
          style={styles.dashboardOptionChild}
          resizeMode="cover"
          source={require("../assets/group-17.png")}
        />
        <Image
          style={styles.naledi31}
          resizeMode="cover"
          source={require("../assets/naledi-3-12.png")}
        />
      </Pressable>
      <View style={styles.newChatAppHeader}>
        <Pressable
          style={styles.chatIcon}
          onPress={() => navigation.navigate("ResourcesCentre1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/chat-icon.png")}
          />
        </Pressable>
        <Text style={styles.crisissupport}>{`Crisis&Support`}</Text>
        <Image
          style={styles.mioptionsVerticalIcon}
          resizeMode="cover"
          source={require("../assets/mioptionsvertical.png")}
        />
      </View>
      <View
        style={[styles.resourcesCentreChild, styles.dashboardOptionPosition]}
      />
      <Text style={[styles.tipHeading1, styles.tipTypo]}>
        Mental Health Support
      </Text>
      <Text style={[styles.tipHeading2, styles.tipTypo]}>
        Suicide and Emergency
      </Text>
      <ContactsLine />
      <ContactsLine contactsLineTop={553} />
      <ContactsLine contactsLineTop={768} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dashboardOptionPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  tipTypo: {
    width: 209,
    color: Color.favouriteFont,
    fontFamily: FontFamily.openSansBold,
    fontSize: FontSize.size_lg,
    left: 24,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: -116,
    left: 120,
    width: 330,
    height: 309,
    position: "absolute",
  },
  tipHeading: {
    top: 56,
    left: 13,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsBold,
    color: "rgba(0, 0, 0, 0.7)",
    width: 238,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  dashboardOptionChild: {
    top: 21,
    left: 11,
    width: 34,
    height: 34,
    position: "absolute",
  },
  naledi31: {
    top: 36,
    left: 285,
    width: 99,
    height: 89,
    position: "absolute",
  },
  dashboardOption: {
    top: 109,
    left: 21,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorLightgreen,
    width: 384,
    height: 117,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  chatIcon: {
    width: 38,
    height: 38,
  },
  crisissupport: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.pRIMARYFONT,
    textAlign: "center",
    width: 211,
  },
  mioptionsVerticalIcon: {
    width: 24,
    height: 24,
  },
  newChatAppHeader: {
    top: 27,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_2xl,
    left: 24,
    position: "absolute",
  },
  resourcesCentreChild: {
    top: 278,
    left: 34,
    width: 165,
    height: 161,
  },
  tipHeading1: {
    top: 249,
  },
  tipHeading2: {
    top: 507,
  },
  resourcesCentre: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default ResourcesCentre;
