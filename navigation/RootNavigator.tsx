import * as React from "react";
import * as BottomNavigator from "@react-navigation/bottom-tabs";
import * as Navigation from "@react-navigation/native";
import * as Constants from "../constants";
import { rootNavigatorRoutes } from "./RouteConfig";
import { useTranslation } from "../i18n/i18n";
import { DEFAULT_SHADOW } from "../constants";
import { Text, TouchableOpacity, View } from "react-native";

const Navigator = BottomNavigator.createBottomTabNavigator();
const { MAP } = Constants;

export default function App() {
  const { t } = useTranslation();
  // const navigation = Navigation.useNavigation();

  return (
    <Navigation.NavigationContainer>
      <Navigator.Navigator
        initialRouteName={t(MAP)}
        screenOptions={{
          tabBarStyle: {
            height:Constants.height *0.11,
            backgroundColor: "#00C3A5",
            ...DEFAULT_SHADOW
          },
          
        }}
      >
        {rootNavigatorRoutes().map((route, index) => (
          <Navigator.Screen
            name={t(route.name)}
            component={route.component}
            key={index}
            options={({ navigation }) => ({
              ...route?.options,
              navigation,
            })}
            navigationKey={route.name}
          />
        ))}
      </Navigator.Navigator>
    </Navigation.NavigationContainer>
  );
}