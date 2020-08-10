import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

const CardItem: React.FC = () => {
  const [toggleCheckBox, setToggleBoxState] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleBoxState(newValue)}
        />
        <Text style={styles.description}>Adsense website</Text>
      </View>

      <View style={styles.rightSide}>
        <View>
          <Text style={styles.createdDate}>07 Fri</Text>
          <Text style={styles.cardValue}>$8458.00</Text>
        </View>
        <View style={styles.actionsButtons}>
          <TouchableOpacity style={styles.actionBtn}>
            <Icon name="edit" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Icon name="trash" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
