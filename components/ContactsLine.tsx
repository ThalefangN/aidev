import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import ContactSupport from "./ContactSupport";
import { Gap } from "../GlobalStyles";

export type ContactsLineType = {
  /** Style props */
  contactsLineTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContactsLine = ({ contactsLineTop }: ContactsLineType) => {
  const contactsLineStyle = useMemo(() => {
    return {
      ...getStyleValue("top", contactsLineTop),
    };
  }, [contactsLineTop]);

  return (
    <View style={[styles.contactsLine, contactsLineStyle]}>
      <ContactSupport
        nicePatternForStepsPage={require("../assets/nice-pattern-for-steps-page2.png")}
        tipHeading="Botswana Association for Psychosocial Rehabilitation (BAPR)"
        tipHeading1="Block 3 Gaborone , Plot 16024"
        ellipse7={require("../assets/ellipse-71.png")}
      />
      <ContactSupport
        nicePatternForStepsPage={require("../assets/nice-pattern-for-steps-page3.png")}
        tipHeading={`Botswana Network
 for 
Mental Health `}
        tipHeading1="59851 Shorobe St, Gaborone"
        ellipse7={require("../assets/ellipse-72.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactsLine: {
    position: "absolute",
    marginLeft: -190,
    top: 295,
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default ContactsLine;
