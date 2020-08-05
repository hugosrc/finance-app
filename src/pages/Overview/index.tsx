import React from 'react';
import { View } from 'react-native';
import FabButton from '../../components/FabButton';

import styles from './styles'

const Overview: React.FC = () => {
  return (
    <View style={styles.container}>
      <FabButton
        pressIncome={() => {}}
        pressExpense={() => {}}
      />
    </View>
  );
}

export default Overview;