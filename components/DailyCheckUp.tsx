import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  Padding,
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap,
} from "../GlobalStyles";

export type DailyCheckUpType = {
  onClose?: () => void; // Optional close handler
  onNext?: () => void; // Optional next handler
  onMoodSelect?: (mood: string) => void; // Optional mood select handler
};

const DailyCheckUp = ({ onClose, onNext, onMoodSelect }: DailyCheckUpType) => {
  // Handle selecting a mood
  const handleMoodSelect = (mood: string) => {
    if (onMoodSelect) onMoodSelect(mood);
  };

  return (
    <View style={styles.dailycheckup}>
      {/* Background Image */}
      <Image
        style={styles.nicePatternForStepsPage}
        resizeMode="cover"
        source={require("../assets/nice-pattern-for-steps-page6.png")}
      />
      
      {/* Title */}
      <Text style={styles.tipHeading}>Daily Checkup</Text>
      <Text style={styles.tipHeading1}>How do you feel today?</Text>

      {/* Mood Options */}
      <View style={[styles.moodOptions, styles.moodLayout]}>
        <TouchableOpacity style={[styles.mood, styles.moodBorder]} onPress={() => handleMoodSelect('neutral')}>
          <Image
            style={styles.fa6SolidfaceMehIcon}
            resizeMode="cover"
            source={require("../assets/fa6solidfacemeh.png")}
          />
          <Text style={[styles.tipHeading2, styles.tipTypo]}>Neutral Mood</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mood, styles.moodBorder]} onPress={() => handleMoodSelect('happy')}>
          <Image
            style={styles.fa6SolidfaceMehIcon}
            resizeMode="cover"
            source={require("../assets/streamlinehappyfacesolid.png")}
          />
          <Text style={[styles.tipHeading2, styles.tipTypo]}>Happy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mood, styles.moodBorder]} onPress={() => handleMoodSelect('sad')}>
          <Image
            style={styles.claritysadFaceSolidIcon}
            resizeMode="cover"
            source={require("../assets/claritysadfacesolid.png")}
          />
          <Text style={[styles.tipHeading2, styles.tipTypo]}>Sad</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Image (Can be adjusted based on layout needs) */}
      <Image
        style={styles.naledi31}
        resizeMode="cover"
        source={require("../assets/naledi-3-13.png")}
      />

      {/* Close Button */}
      {onClose && (
        <TouchableOpacity style={styles.eicloseOIcon} onPress={onClose}>
          <Image
            style={styles.eicloseOIconImage}
            resizeMode="cover"
            source={require("../assets/eicloseo.png")}
          />
        </TouchableOpacity>
      )}

      {/* Next Button */}
      {onNext && (
        <TouchableOpacity style={[styles.mood3, styles.moodBorder]} onPress={onNext}>
          <Text style={[styles.tipHeading5, styles.tipTypo]}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  moodLayout: {
    width: 271,
    position: "absolute",
  },
  moodBorder: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 42,
    borderWidth: 1,
    borderColor: Color.cREAMWHITE,
    borderStyle: "solid",
    borderRadius: Border.br_57xl,
  },
  tipTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_2xl,
  },
  nicePatternForStepsPage: {
    top: 0,
    left: -62,
    width: 523,
    height: 405,
    position: "absolute",
  },
  tipHeading: {
    top: 36,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    textAlign: "left",
    width: 171,
    color: Color.bTCWHITE,
    fontSize: FontSize.size_2xl,
    left: 110,
    position: "absolute",
  },
  tipHeading1: {
    marginLeft: -126.5,
    top: 230,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 261,
    textAlign: "center",
    left: "50%",
    color: Color.bTCWHITE,
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  fa6SolidfaceMehIcon: {
    width: 22,
    height: 22,
  },
  tipHeading2: {
    color: Color.bTCDARKGREEN,
  },
  mood: {
    alignSelf: "stretch",
    backgroundColor: Color.cREAMWHITE,
    gap: Gap.gap_3xs,
  },
  claritysadFaceSolidIcon: {
    width: 24,
    height: 24,
  },
  moodOptions: {
    top: 281,
    left: 59,
    gap: 7,
  },
  naledi31: {
    top: 85,
    width: 140,
    height: 132,
    left: 110,
    position: "absolute",
  },
  eicloseOIcon: {
    top: 16,
    left: 325,
    width: 59,
    height: 59,
    position: "absolute",
  },
  eicloseOIconImage: {
    width: "100%",
    height: "100%",
  },
  tipHeading5: {
    color: Color.white,
  },
  mood3: {
    marginLeft: -135.5,
    top: 451,
    width: 271,
    position: "absolute",
    left: "50%",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 42,
    borderWidth: 1,
    borderColor: Color.cREAMWHITE,
    borderStyle: "solid",
    borderRadius: Border.br_57xl,
  },
  dailycheckup: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.bTCDARKGREEN,
    width: 391,
    height: 514,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DailyCheckUp;
