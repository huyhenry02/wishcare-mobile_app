import { StyleSheet } from "react-native"

import { COLORS } from "/common/colors"
import { fontSizer, getScreenHeight, getScreenWidth, responsiveH, responsiveW } from "/utils/dimension"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  labelContainer: {
    paddingTop: 8,
    paddingBottom: 4,
  },
  labelText: {
    color: COLORS.darkText,
    fontSize: 14,
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  changeDateContainer: {
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.grayBorderColor,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonStyle: {
    height: 48,
    borderRadius: 5,
    flex: 1,
  },
  buttonContentStyle: {
    height: 48,
  },
})