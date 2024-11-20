import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

export type ComponentType = {
  /** Variant props */
  property1?: string;
};

const Component = ({ property1 = "Loading Icon 1" }: ComponentType) => {
  return (
    <View style={styles.component1}>
      <View style={[styles.loadingCube, styles.loadingLayout]} />
      <View style={[styles.loadingCube1, styles.loadingLayout]} />
      <View style={[styles.loadingCube2, styles.loadingLayout]} />
      <View style={[styles.loadingCube3, styles.loadingLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingLayout: {
    backgroundColor: Color.bTCWHITE,
    width: "41.03%",
    height: "40.48%",
    position: "absolute",
  },
  loadingCube: {
    left: "0%",
    right: "58.97%",
    backgroundColor: Color.bTCWHITE,
    width: "41.03%",
    height: "40.48%",
    bottom: "59.52%",
    top: "0%",
  },
  loadingCube1: {
    right: "0%",
    left: "58.97%",
    bottom: "59.52%",
    top: "0%",
    backgroundColor: Color.bTCWHITE,
    width: "41.03%",
    height: "40.48%",
  },
  loadingCube2: {
    top: "47.62%",
    bottom: "11.9%",
    left: "0%",
    right: "58.97%",
    backgroundColor: Color.bTCWHITE,
    width: "41.03%",
    height: "40.48%",
  },
  loadingCube3: {
    top: "59.52%",
    right: "2.56%",
    bottom: "0%",
    left: "56.41%",
    backgroundColor: Color.bTCWHITE,
    width: "41.03%",
    height: "40.48%",
  },
  component1: {
    top: 40,
    left: 184,
    width: 39,
    height: 42,
    position: "absolute",
  },
});

export default Component;
