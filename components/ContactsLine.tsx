import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import ContactSupport from "./ContactSupport";
import { Gap } from "../GlobalStyles";

// Type definition for props
export type ContactsLineType = {
  /** Custom style props to control the top positioning of the contacts line */
  contactsLineTop?: number | string;
};

// Utility function to dynamically set styles
const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

// ContactsLine component
const ContactsLine = ({ contactsLineTop }: ContactsLineType) => {
  // Using useMemo to optimize the calculation of styles only when contactsLineTop changes
  const contactsLineStyle = useMemo(() => {
    return {
      ...getStyleValue("top", contactsLineTop), // Dynamically set the "top" style
    };
  }, [contactsLineTop]);

  return (
    <View style={[styles.contactsLine, contactsLineStyle]}>
      {/* Contact Support components with different props */}
      <ContactSupport
        nicePatternForStepsPage={require("../assets/nice-pattern-for-steps-page2.png")}
        tipHeading="Botswana Association for Psychosocial Rehabilitation (BAPR)"
        tipHeading1="Block 3 Gaborone , Plot 16024"
        ellipse7={require("../assets/ellipse-71.png")}
      />
      <ContactSupport
        nicePatternForStepsPage={require("../assets/nice-pattern-for-steps-page3.png")}
        tipHeading={`Botswana Network\n for \nMental Health`} {/* Line breaks for formatting */}
        tipHeading1="59851 Shorobe St, Gaborone"
        ellipse7={require("../assets/ellipse-72.png")}
      />
    </View>
  );
};

// Styles for the ContactsLine component
const styles = StyleSheet.create({
  contactsLine: {
    position: "absolute",
    marginLeft: -190, // Adjusting positioning from the left
    top: 295, // Default top position, can be overridden by the prop
    left: "50%", // Centering horizontally
    flexDirection: "row", // Aligning items horizontally
    alignItems: "center", // Aligning items vertically in the center
    gap: Gap.gap_xs, // Spacing between the ContactSupport components
  },
});

export default ContactsLine;
