import * as React from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";
import AppHeader from "../components/AppHeader";
import FormControl from "../components/FormControl";
import NavigationMenu from "../components/NavigationMenu";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.profileScreen}>
      <AppHeader appHeaderMarginLeft={-196.5} appHeaderTop={27} />
      <Text style={[styles.tipHeading, styles.tipTypo]}>Your Profile</Text>
      <Text style={[styles.tipHeading1, styles.tipTypo]}>
        Tlhalefang Ntshilane
      </Text>
      <Image
        style={styles.profileScreenChild}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.tipHeading2, styles.tipTypo]}>T</Text>
      <FormControl
        emailAddress="Email Address"
        tlhalefangntshilanegmailc="tlhalefangntshilane@gmail.com"
      />
      <FormControl
        formControlTop={448}
        formControlLeft={31}
        emailAddress="Phone Number"
        tlhalefangntshilanegmailc="+267 768844994"
      />
      <FormControl
        formControlTop={553}
        formControlLeft={35}
        emailAddress="Password"
        tlhalefangntshilanegmailc="*************"
      />
      <NavigationMenu
        navigationMenuMarginLeft={-192.5}
        navigationMenuTop={808}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tipTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  tipHeading: {
    marginLeft: -103,
    top: 98,
    color: Color.favouriteFont,
    width: 206,
    fontSize: FontSize.size_4xl,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  tipHeading1: {
    marginLeft: -121,
    top: 282,
    color: "#3c2c2c",
    width: 242,
    fontSize: FontSize.size_4xl,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  profileScreenChild: {
    marginLeft: -50,
    top: 159,
    width: 100,
    height: 100,
    left: "50%",
    position: "absolute",
  },
  tipHeading2: {
    marginLeft: -15,
    top: 182,
    fontSize: 40,
    color: Color.bTCWHITE,
    width: 31,
  },
  profileScreen: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default ProfileScreen;
