import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';
import Card from './card';

export default function Search() {
  const [scr, setScr] = useState('');
  const [scrc, setScrc] = useState('');

  function handleChange(val) {
    setScr(val);
  }
  function handleClick() {
    setScrc(scr);

  }

  const styles = StyleSheet.create({
    textInput: {
      padding: 10,
      borderWidth: 2,
      borderColor: '#000000',
      margin: 20,
      color: '#19ffd1',
    },
    input: {
      margin: 20,
      position: 'relative',
    },
    button: {
      margin: 10,
      marginTop: 5,
    },
  });
  return (
    <View styles={styles.input}>
      <View style={styles.textInput}>
        <TextInput
          placeholder="City Name"
          value={scr}
          onChangeText={(val) => handleChange(val)}
        />
      </View>

      <View style={styles.button}>
        <Button title="Search" color="#19ffd1" onPress={handleClick} />
      </View>
      <Card title={scrc} />
    </View>
  );
}