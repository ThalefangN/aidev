import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const NewChatAppHeader = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.newChatAppHeader}>
      <Pressable
        style={styles.chatIcon}
        onPress={() => navigation.navigate("HomeScreenLayoutDraft")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/chat-icon.png")}
        />
      </Pressable>
      <Text style={styles.newChat}>New Chat</Text>
      <Image
        style={styles.mioptionsVerticalIcon}
        resizeMode="cover"
        source={require("../assets/mioptionsvertical.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  chatIcon: {
    width: 38,
    height: 38,
  },
  newChat: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.pRIMARYFONT,
    textAlign: "left",
    width: 134,
  },
  mioptionsVerticalIcon: {
    width: 24,
    height: 24,
  },
  newChatAppHeader: {
    position: "absolute",
    top: 27,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_3xl,
  },
});

export default NewChatAppHeader;
