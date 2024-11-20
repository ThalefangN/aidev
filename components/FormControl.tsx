import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

export type FormControlType = {
  emailAddress?: string;
  secondaryEmail?: string; // Renamed for better readability

  /** Style props */
  formControlTop?: number | string;
  formControlLeft?: number | string;

  /** Optional props for error and caption visibility */
  isError?: boolean;
  isCaptionVisible?: boolean;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FormControl = ({
  formControlTop,
  formControlLeft,
  emailAddress,
  secondaryEmail,
  isError = false,
  isCaptionVisible = false,
}: FormControlType) => {
  const formControlStyle = useMemo(() => {
    return {
      ...getStyleValue("top", formControlTop),
      ...getStyleValue("left", formControlLeft),
    };
  }, [formControlTop, formControlLeft]);

  return (
    <View style={[styles.formControl, formControlStyle]}>
      <Text style={styles.emailAddress}>{emailAddress}</Text>
      <View style={styles.input}>
        <Text style={styles.secondaryEmail}>
          {secondaryEmail}
        </Text>
      </View>
      {isCaptionVisible && (
        <Text style={[styles.thisIsA, styles.thisIsALayout]}>
          This is a caption
        </Text>
      )}
      {isError && (
        <Text style={[styles.optionalErrorCaption, styles.thisIsALayout]}>
          This is an error caption!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  thisIsALayout: {
    width: 320,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.textSmLineHeight5FontNormal_size,
  },
  emailAddress: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    width: 374,
  },
  secondaryEmail: {
    color: Color.favouriteFont,
    fontSize: FontSize.textSmLineHeight5FontNormal_size,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  input: {
    borderRadius: Border.br_4xl,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    height: 51,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_smi,
    alignSelf: "stretch",
  },
  thisIsA: {
    fontFamily: FontFamily.openSansRegular,
    color: Color.gray500,
  },
  optionalErrorCaption: {
    fontFamily: FontFamily.textSmLineHeight5FontNormal,
    color: Color.red500,
  },
  formControl: {
    position: "absolute",
    top: 343,
    left: 31,
    gap: Gap.gap_4xs,
    width: 374,
  },
});

export default FormControl;
