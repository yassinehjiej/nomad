import MapScreen from "../screens/MapScreen";
import DrugsScreen from "../screens/DrugsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AssistantScreen from "../screens/AssistantScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setPanResponder, swipeAction, swipeActionPharma } from "../redux/actions";
import { CHAT_ICON, DOWN, DRUG_ICON, MAP, MAP_ICON, SETTINGS_ICON } from "../constants";
import { useNavigation } from "@react-navigation/native";

export const rootNavigatorRoutes = () => [
  {
    name: "map",
    component: MapScreen,
    options: {
      tabBarShowLabel: false,
      headerShown: false,
      tabBarIcon: ({ focused }: any) => {
        return (
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 5,
                padding: 10,
                backgroundColor: focused ? "white" : "transparent",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image source={MAP_ICON} style={{ width: 30, height: 30 }} />
            </View>
            <View
              style={{
                width: 44,
                height: 2,
                borderRadius: 10,
                backgroundColor: focused ? "white" : "transparent",
              }}
            />
          </View>
        );
      },

      tabBarLabel: ({ color, children, focused }: any) => (
        <>
          <Text style={{ color: focused ? "#1570e7" : color, fontSize: 12 }}>
            {children}
          </Text>
        </>
      ),
      tabBarBackground: () => <View style={{ backgroundColor: "red" }}></View>,
      tabBarButton: ({ color, size, focused, ...props }: any) => {
        const dispatch = useDispatch();
        const { onPress } = props;
        return (
          <TouchableOpacity
            {...props}
            onPress={() => {
              onPress();
              dispatch(swipeAction(DOWN));
              dispatch(swipeActionPharma(DOWN));
              dispatch(setPanResponder(true));
            }}
          ></TouchableOpacity>
        );
      },
    },
  },
  // {
  //   name: "drugs",
  //   component: DrugsScreen,
  //   options: {
  //     tabBarShowLabel: false,
  //     headerShown: false,
  //     tabBarButton: ({ color, size, focused, ...props }: any) => {
  //       const { onPress } = props;
  //       return (
  //         <TouchableOpacity
  //           {...props}
  //           onPress={() => {
  //             onPress();
  //           }}
  //         ></TouchableOpacity>
  //       );
  //     },
  //     tabBarLabel: ({ color, children, focused }: any) => (
  //       <>
  //         <Text style={{ color: focused ? "#1570e7" : color, fontSize: 12 }}>
  //           {children}
  //         </Text>
  //       </>
  //     ),
  //     tabBarIcon: ({ focused }: any) => {
  //       return (
  //         <View
  //           style={{
  //             width: 50,
  //             height: 50,
  //             justifyContent: "space-between",
  //             display: "flex",
  //             alignItems: "center",
  //           }}
  //         >
  //           <View
  //             style={{
  //               width: 44,
  //               height: 44,
  //               borderRadius: 5,
  //               padding: 10,
  //               backgroundColor: focused ? "white" : "transparent",
  //               justifyContent: "center",
  //               display: "flex",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Image source={DRUG_ICON} style={{ width: 30, height: 30 }} />
  //           </View>
  //           <View
  //             style={{
  //               width: 44,
  //               height: 2,
  //               borderRadius: 10,
  //               backgroundColor: focused ? "white" : "transparent",
  //             }}
  //           />
  //         </View>
  //       );
  //     },
  //   },
  // },
  // {
  //   name: "assistant",
  //   component: AssistantScreen,
  //   options: {
  //     tabBarShowLabel: false,
  //     headerShown: false,
  //     tabBarButton: ({ color, size, focused, ...props }: any) => {
  //       const { onPress } = props;
  //       return (
  //         <TouchableOpacity
  //           {...props}
  //           onPress={() => {
  //             onPress();
  //           }}
  //         ></TouchableOpacity>
  //       );
  //     },
  //     tabBarLabel: ({ color, children, focused }: any) => (
  //       <>
  //         <Text style={{ color: focused ? "#1570e7" : color, fontSize: 12 }}>
  //           {children}
  //         </Text>
  //       </>
  //     ),
  //     tabBarIcon: ({ focused }: any) => {
  //       return (
  //         <View
  //           style={{
  //             width: 50,
  //             height: 50,
  //             justifyContent: "space-between",
  //             display: "flex",
  //             alignItems: "center",
  //           }}
  //         >
  //           <View
  //             style={{
  //               width: 44,
  //               height: 44,
  //               borderRadius: 5,
  //               padding: 10,
  //               backgroundColor: focused ? "white" : "transparent",
  //               justifyContent: "center",
  //               display: "flex",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Image source={CHAT_ICON} style={{ width: 30, height: 30 }} />
  //           </View>
  //           <View
  //             style={{
  //               width: 44,
  //               height: 2,
  //               borderRadius: 10,
  //               backgroundColor: focused ? "white" : "transparent",
  //             }}
  //           />
  //         </View>
  //       );
  //     },
  //   },
  // },
  // {
  //   name: "profile",
  //   component: ProfileScreen,
  //   options: {
  //     tabBarShowLabel: false,
  //     headerShown: false,
  //     tabBarButton: ({ color, size, focused, ...props }: any) => {
  //       const { onPress } = props;
  //       return (
  //         <TouchableOpacity
  //           {...props}
  //           onPress={() => {
  //             onPress();
  //           }}
  //         ></TouchableOpacity>
  //       );
  //     },
  //     tabBarLabel: ({ color, children, focused }: any) => (
  //       <>
  //         <Text style={{ color: focused ? "#1570e7" : color, fontSize: 12 }}>
  //           {children}
  //         </Text>
  //       </>
  //     ),
  //     tabBarIcon: ({ focused }: any) => {
  //       return (
  //         <View
  //           style={{
  //             width: 50,
  //             height: 50,
  //             justifyContent: "space-between",
  //             display: "flex",
  //             alignItems: "center",
  //           }}
  //         >
  //           <View
  //             style={{
  //               width: 44,
  //               height: 44,
  //               borderRadius: 5,
  //               padding: 10,
  //               backgroundColor: focused ? "white" : "transparent",
  //               justifyContent: "center",
  //               display: "flex",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Image source={SETTINGS_ICON} style={{ width: 30, height: 30 }} />
  //           </View>
  //           <View
  //             style={{
  //               width: 44,
  //               height: 2,
  //               borderRadius: 10,
  //               backgroundColor: focused ? "white" : "transparent",
  //             }}
  //           />
  //         </View>
  //       );
  //     },
  //   },
  // },
];
