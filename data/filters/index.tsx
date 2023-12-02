import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from "react-native";
import { DAY_ICON, H24_ICON, NIGHT_ICON } from "../../constants";

export const drugStoreTypes = [
  {
    name: "Jour",
    icon: <Image source={DAY_ICON} style={{width:20, height:20}}/>,
  },
  {
    name: "Nuit",
    icon: <Image source={NIGHT_ICON} style={{width:20, height:20}}/>,
  },
  {
    name: "24h",
    icon: <Image source={H24_ICON} style={{width:20, height:20}}/>
  },
];


export const drugTypes = [
  {
    name: "Nom",
    icon: <></>,
  },
  {
    name: "Principe actif",
    icon: <></>,
  },
];