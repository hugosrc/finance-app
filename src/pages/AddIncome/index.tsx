import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const AddIncome: React.FC = () => {
  const navigation = useNavigation()

  function handleCancel() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSide}>
          <TouchableOpacity onPress={handleCancel}>
            <Icon name="x" color="#fff" size={22} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Add Income</Text>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddIncome;