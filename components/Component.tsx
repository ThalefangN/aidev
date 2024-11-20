import React, { useState, useMemo, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import NotificationsPopUp from "./NotificationsPopUp"; // Assuming this component exists
import { Color, FontSize, FontFamily, Gap } from "../GlobalStyles"; // Assuming this file contains your global styles

export type AppHeaderType = {
  /** Style props */
  appHeaderMarginLeft?: number | string;
  appHeaderTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const AppHeader = ({ appHeaderMarginLeft, appHeaderTop }: AppHeaderType) => {
  const appHeaderStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", appHeaderMarginLeft),
      ...getStyleValue("top", appHeaderTop),
    };
  }, [appHeaderMarginLeft, appHeaderTop]);

  const [mynauinotificationIconVisible, setMynauinotificationIconVisible] =
    useState(false);

  const openMynauinotificationIcon = useCallback(() => {
    setMynauinotificationIconVisible(true);
  }, []);

  const closeMynauinotificationIcon = useCallback(() => {
    setMynauinotificationIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.appHeader, styles.mockLogoFlexBox, appHeaderStyle]}>
        <View style={[styles.mockLogo, styles.mockLogoFlexBox]}>
          <Image
            style={styles.logoIcon1}
            resizeMode="cover"
            source={require("../assets/logo-icon-1.png")}
            accessibilityLabel="Logo" // Accessibility improvement
          />
          <Text style={styles.nalediai}>
            <Text style={styles.naledi}>naledi.</Text>
            <Text style={styles.ai}>ai</Text>
          </Text>
        </View>
        <Pressable
          style={styles.mynauinotification}
          onPress={openMynauinotificationIcon}
          accessibilityLabel="Open Notifications"
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/mynauinotification.png")}
            accessibilityLabel="Notification Icon"
          />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={mynauinotificationIconVisible}
      >
        <View style={styles.mynauinotificationIconOverlay}>
          <Pressable
            style={styles.mynauinotificationIconBg}
            onPress={closeMynauinotificationIcon}
            accessibilityLabel="Close Notifications"
          />
          <NotificationsPopUp onClose={closeMynauinotificationIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mockLogoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  logoIcon1: {
    width: 41,
    height: 41,
  },
  naledi: {
    color: Color.pRIMARYFONT,
  },
  ai: {
    color: Color.bTCDARKGREEN,
  },
  nalediai: {
    alignSelf: "stretch",
    fontSize: FontSize.size_10xl,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    width: 134,
  },
  mockLogo: {
    width: 178,
    gap: Gap.gap_5xs,
    height: 41,
  },
  mynauinotificationIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mynauinotificationIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  mynauinotification: {
    width: 32,
    height: 32,
  },
  appHeader: {
    position: "absolute",
    marginLeft: -196.5,
    top: 27,
    left: "50%",
    gap: Gap.gap_4xl,
  },
});

export default AppHeader;
