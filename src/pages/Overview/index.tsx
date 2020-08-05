import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import FabButton from '../../components/FabButton';

import styles from './styles'

const Overview: React.FC = () => {
  const navigation = useNavigation()

  function toggleDrawer() {
    navigation.dispatch(DrawerActions.openDrawer())
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

      <FabButton
        pressIncome={() => {}}
        pressExpense={() => {}}
      />
    </View>
  );
}

export default Overview;