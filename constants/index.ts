import { Dimensions, Platform } from "react-native";

export const { width, height } = Dimensions.get("window");
export const UP = "up";
export const DOWN = "down";
export const PHARMACY_ICON = require("../assets/pharmacy.png");
export const H24_ICON = require('../assets/24H.png')
export const DRUG_ICON = require("../assets/drug.png");
export const HELLO_ICON = require("../assets/hello.png");
export const FORM_ICON = require("../assets/form.png");
export const CHAT_ICON = require('../assets/chat.png');
export const DAY_ICON = require('../assets/day.png');
export const NIGHT_ICON = require('../assets/night.png');
export const LOCATE_PIN = require('../assets/locate.png');
export const DRUG_STORE_PIN = require("../assets/drugStorePin.png");
export const SETTINGS_ICON = require('../assets/settings.png');
export const MAP_ICON = require('../assets/map.png');
export const NAVIGATION_ICON = require('../assets/navigation.png');
export const LOGO = require("../assets/logo.png");
export const HEALTH_CARE_LOGO = require("../assets/healthcare_icon.png");
export const MEDICAMENT_LOGO = require("../assets/medicament_icon.png");
export const CHAT_LOGO = require("../assets/chat_icon.png");
export const BACKGROUND_TARGET = require("../assets/backgroundTarget.png");
export const MAP = "map";
export const DEFAULT_SHADOW = {
  ...Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    android: {
      elevation: 2,
    },
  }),
};
