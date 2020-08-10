import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';

const Incomes: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Incomes" />

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({ item }) => <CardItem />}
        keyExtractor={(item) => String(item)}
      />
    </View>
  );
};

export default Incomes;
