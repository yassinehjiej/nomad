import { DEFAULT_SHADOW } from './../constants/index';
import { StyleSheet } from 'react-native';
import { height, width } from '../constants';

export const mapStyles = StyleSheet.create({
    container: {
        flex:1
      },
      map: {
        width:width,
        height: height * 0.835,
      },
      headerButtonsLocationWrapper: {
        borderRadius: 90,
        backgroundColor: "#00C3A5",
        ...DEFAULT_SHADOW
    
      },
      headerButtonsLocationIcon: {
        padding: 20,
      },
});
