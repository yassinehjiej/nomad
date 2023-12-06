import MapScreen from "../screens/MapScreen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setDrugStores, setPanResponder, swipeAction, swipeActionPharma } from "../redux/actions";
import { DOWN, LOGO } from "../constants";

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
                width: 70,
                height: 70,
                borderRadius: 5,
                
                backgroundColor: focused ? "white" : "transparent",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image source={LOGO} style={{ width: 65, height: 65, borderRadius:5 }} />
            </View>
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
              dispatch(setDrugStores([]))
            }}
          ></TouchableOpacity>
        );
      },
    },
  },
];
