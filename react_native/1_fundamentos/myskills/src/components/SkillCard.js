import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function SkillCard({skill}) {

  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text
        style={styles.textSkill}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    marginVertical: 10,
    padding: 15,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
