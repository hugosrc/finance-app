import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation()

  const handleClickBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleClickBack}>
        <Icon name="arrow-left" color="#fff" size={22} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Header;