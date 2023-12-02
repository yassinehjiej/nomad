import React, { useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesiredLocation,
  setPanResponder,
  swipeAction,
  swipeActionPharma,
} from "../../redux/actions";
import { DrugStoreList } from "../../types";
import { DEFAULT_SHADOW, UP } from "../../constants";
import {
  DOWN,
  width,
} from "../../constants";
import { drugListStyles } from "../../styles/DrugList";

const DrugList = ({ setDesiredDrugStore }: any) => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.root.drugStores);
  const handleRelocate = ({ item, index }: DrugStoreList) => {
    if (item.lat && item.lng) {
      setDesiredDrugStore(item);
      dispatch(
        setDesiredLocation({
          lat: item.lat,
          lng: item.lng,
        })
      );
      dispatch(swipeActionPharma(UP));
      dispatch(swipeAction(DOWN));

      dispatch(setPanResponder(true));
    }
  };

  const renderItem = ({ item, index }: DrugStoreList) => {
    return (
      <View
        style={{
          height: 260,
          width: width * 0.45,
          marginHorizontal: width * 0.025,
          justifyContent: "space-around",
          alignSelf: "center",
          backgroundColor: "white",
          marginVertical: 15,
          borderRadius: 20,
          padding:10,
          ...DEFAULT_SHADOW,
        }}
      >
        <View style={{flexDirection:'row', display:'flex', justifyContent:'space-between',  width: width * 0.4, alignSelf:'center'}}>
          <View style={{display:'flex'}}>
            <Text style={{textAlign:'left', fontFamily:'montserrat_bold', fontSize:14}}>Doliprane</Text>
            <Text style={{textAlign:'left', fontStyle:'italic', color:'#00C3A5', fontSize:11}}>Paracétamol</Text>
          </View>
          <View>
            <Text style={{textAlign:'right', width:25, height:'auto',maxHeight:30, fontSize:12, fontWeight:'200'}}>500 mg</Text>
          </View>
        </View>
        <Image source={require('../../assets/lineSeparator.png')} style={{alignSelf:'center'}}/>
        <View style={{width: width * 0.4, alignSelf:'center'}}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{textAlign:'left', fontWeight:'200', fontSize:11}}>Posologie</Text>
            <Text style={{textAlign:'right', fontFamily:'montserrat_bold', fontSize:10}}>Adultes</Text>
          </View>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{textAlign:'left', fontWeight:'200', fontSize:11}}>Type</Text>
            <Text style={{textAlign:'right', fontFamily:'montserrat_bold', fontSize:10}}>Comprimé</Text>
          </View>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{textAlign:'left', fontWeight:'200', fontSize:11}}>Classe</Text>
            <Text style={{textAlign:'right', fontFamily:'montserrat_bold', fontSize:10}}>Anthalgique</Text>
          </View>
        </View>
        <Image source={require('../../assets/lineSeparator.png')} style={{alignSelf:'center'}}/>
        <View  style={{alignSelf:'center'}}>
          <Text style={{textAlign:'center', fontWeight:'400', fontSize:11, margin:2}}>Prix Public</Text>
          <Text style={{textAlign:'center', fontFamily:'montserrat_bold', fontSize:11}}>11.04 DHS</Text>
        </View>
        <View  style={{alignSelf:'center'}}>
          <Text style={{textAlign:'center', fontWeight:'400', fontSize:11, margin:2}}>Prix Hospitalier</Text>
          <Text style={{textAlign:'center', fontFamily:'montserrat_bold', fontSize:11}}>9.24 DHS</Text>
        </View>
        <TouchableOpacity  style={{alignSelf:'center', height:20, width:80, borderRadius:5, backgroundColor:'#00C3A5', justifyContent:'center', }}>
          <Text style={{textAlign:'center', fontFamily:'montserrat_bold', fontSize:11, color:'white'}}>Voir Details</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    Keyboard.dismiss();
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY < -150) {
      dispatch(swipeAction(DOWN));
      dispatch(setPanResponder(true));
    }
  };

  const { container, body, hook } = drugListStyles;
  return (
    <View style={container}>
      <View style={body}>
        <FlatList
          data={data}
          renderItem={(e) => renderItem(e)}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          contentContainerStyle={{
            display: "flex",
            justifyContent: "center",
            width: width,
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default DrugList;