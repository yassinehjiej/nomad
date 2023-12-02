import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface HorizontalListProps {
  data: string[];
}

const HorizontalList: React.FC<HorizontalListProps> = ({ data }) => {

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius:99
  },
});

export default HorizontalList;
