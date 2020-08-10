import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, TouchableWithoutFeedback, Animated, Text } from 'react-native';

import styles from './styles';

interface Props {
  pressIncome(): void;
  pressExpense(): void;
}

const FabButton: React.FC<Props> = ({ pressIncome, pressExpense }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    setOpen(!open);
  }

  const incomeStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  const expenseStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '135deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={pressIncome}>
        <Animated.View style={[styles.button, styles.option, incomeStyle]}>
          <Icon name="dollar-sign" size={22} color="#fff" />
          <Text style={styles.text}>Income</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={pressExpense}>
        <Animated.View style={[styles.button, styles.option, expenseStyle]}>
          <Icon name="trending-down" size={22} color="#fff" />
          <Text style={styles.text}>Expense</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, rotation]}>
          <Icon name="plus" size={22} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FabButton;
