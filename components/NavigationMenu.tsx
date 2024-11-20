import React, { useMemo } from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, Gap, Padding } from "../GlobalStyles";

export type NavigationMenuType = {
  /** Style props */
  navigationMenuMarginLeft?: number | string;
  navigationMenuTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavigationMenu = ({
  navigationMenuMarginLeft,
  navigationMenuTop,
}: NavigationMenuType) => {
  const navigationMenuStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", navigationMenuMarginLeft),
      ...getStyleValue("top", navigationMenuTop),
    };
  }, [navigationMenuMarginLeft, navigationMenuTop]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.navigationMenu, navigationMenuStyle]}>
      <Pressable
        style={[styles.createSession, styles.createSessionBorder]}
        onPress={() => navigation.navigate("NewSessionChat5")}
      >
        <View style={styles.logoIcon2Wrapper}>
          <Image
            style={styles.logoIcon2}
            resizeMode="cover"
            source={require("../assets/logo-icon-2.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.otherMenuOptions, styles.createSessionBorder]}>
        <View style={styles.mingcutehome5FillParent}>
          <Pressable
            style={styles.mingcutehome5Fill}
            onPress={() => navigation.navigate("HomeScreenLayoutDraft")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/mingcutehome5fill.png")}
            />
          </Pressable>
          <Pressable
            style={styles.mingcutehome5Fill}
            onPress={() => navigation.navigate("ChatHistory1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/tablerclockfilled.png")}
            />
          </Pressable>
          <Pressable
            style={styles.mingcutehome5Fill}
            onPress={() => navigation.navigate("ResourcesCentre1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/resource-center-icon.png")}
            />
          </Pressable>
          <Pressable
            style={styles.mingcutehome5Fill}
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/evapersonfill.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createSessionBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_51xl,
    overflow: "hidden",
  },
  logoIcon2: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  logoIcon2Wrapper: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  createSession: {
    backgroundColor: Color.bTCDARKGREEN,
    borderColor: Color.bTCWHITE,
    borderWidth: 1,
    width: 101,
    height: 82,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  mingcutehome5Fill: {
    width: 24,
    height: 24,
  },
  mingcutehome5FillParent: {
    gap: Gap.gap_xl,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  otherMenuOptions: {
    backgroundColor: Color.bTCWHITE,
    borderColor: Color.bTCDARKGREEN,
    borderWidth: 3,
    width: 266,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_12xl,
    paddingVertical: Padding.p_9xl,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  navigationMenu: {
    position: "absolute",
    marginLeft: -192.5,
    top: 808,
    left: "50%",
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default NavigationMenu;
