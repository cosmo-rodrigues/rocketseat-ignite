import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Button({onPress}) {
  return (
    <TouchableOpacity
        style={ styles.button }
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text style={ styles.buttonText }>Add</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#a370f7',
    borderRadius: 7,
    marginTop: 20,
    padding: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
})
