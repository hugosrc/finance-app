import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'

import styles from './styles'
import { formatDate } from '../../utils/format';

const AddIncome: React.FC = () => {
  const navigation = useNavigation()
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [formatedDate, setFormatedDate] = useState('Today')

  const handleCancel = () => {
    navigation.goBack()
  }

  const handleClearInputs = () => {
    setDescription('')
    setAmount('')
  }

  const handleSave = () => {
    if (!(description.length > 0 && amount.length > 0)) return

    handleClearInputs()

    navigation.goBack()
  }

  const handleChangeVisibleModal = () => {
    setShow(!show)
  }

  const handleChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  useEffect(() => {
    setFormatedDate(formatDate(date))
  }, [date])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSide}>
          <TouchableOpacity onPress={handleCancel}>
            <Icon name="x" color="#fff" size={22} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Add Income</Text>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={[styles.input, { width: '50%' }]}
        placeholder="Amount"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity 
        activeOpacity={0.9} 
        style={styles.dateInput}
        onPress={handleChangeVisibleModal}
      >
        <Text style={styles.dateValue}>
          {formatedDate}
        </Text>
      </TouchableOpacity>

      { show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={handleChangeDate}
        />
      ) }

    </View>
  );
}

export default AddIncome;