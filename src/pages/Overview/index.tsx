import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import FabButton from '../../components/FabButton';

import styles from './styles';

const Overview: React.FC = () => {
  const navigation = useNavigation();

  function toggleDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon name="menu" color="#fff" size={22} />
        </TouchableOpacity>

        <Text style={styles.title}>Budgets</Text>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.headerTitle}>Total</Text>
            <TouchableOpacity>
              <Icon name="edit-3" color="#444" size={22} />
            </TouchableOpacity>
          </View>

          <Text style={styles.cartValue}>$58,410</Text>
        </View>
      </View>

      <View style={styles.dataBox}>
        <Text style={styles.dataType}>Overview</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.data, { marginTop: 24 }]}
        >
          <View style={styles.buttonAndType}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#F6A900' }]}
            >
              <Icon name="plus" color="#fff" size={22} />
            </TouchableOpacity>
            <Text style={styles.type}>Incomes</Text>
          </View>
          <Text style={styles.value}>$25.315</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.data}>
          <View style={styles.buttonAndType}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#23C2AF' }]}
            >
              <Icon name="minus" color="#fff" size={22} />
            </TouchableOpacity>
            <Text style={styles.type}>Expenses</Text>
          </View>
          <Text style={styles.value}>$7.315</Text>
        </TouchableOpacity>
      </View>

      <FabButton pressIncome={() => {}} pressExpense={() => {}} />
    </View>
  );
};

export default Overview;
