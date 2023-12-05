import { StyleSheet, Platform } from 'react-native';
import { height, width } from '../../constants';

export const mapScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        height:height
      },
      searchPart: {
        display: "flex",
        width: width,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        alignSelf: "center",
      },
      searchPartTextCancel: {
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        width: width * 0.2,
      },
      searchBarContainer: {
        display: "flex",
        width: 100,
   
        minWidth: "auto",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        marginVertical: 20,
        borderRadius:10,
        backgroundColor: 'transparent',
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            backgroundColor: 'white',
          },
          android: {
            elevation: 2,
            shadowRadius: 5,
            backgroundColor: 'white',
          },
        }),
      },
      seachBarTextInput: {
        color: "#4C4C4D",
        height: 40,
        width: width,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent:'center'
      },
      searchBarIcon: {
        position: "absolute",
        right: 10,
        color: "#4C4C4D",
      },
});
