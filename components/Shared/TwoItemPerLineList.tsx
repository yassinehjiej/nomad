import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface TwoItemsPerLineListProps {
  data: string[][];
}

const TwoItemsPerLineList: React.FC<TwoItemsPerLineListProps> = ({ data }) => {
  const dataLength = data.length;

  const renderItem = ({ item, index }: { item: string[]; index: number }) => (
    <View
      style={{
        ...styles.row,
        paddingBottom: dataLength == index + 1 ? 100 : 0,
      }}
    >
      <View style={styles.item}>
        <Text>{item[0]}</Text>
      </View>
      <View style={styles.item}>
        <Text>{item[1]}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor:"gray",
    borderWidth:0.5,
    borderStyle:"solid"
  },
});

export default TwoItemsPerLineList;
