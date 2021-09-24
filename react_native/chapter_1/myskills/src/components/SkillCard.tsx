import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

interface SkillProps extends TouchableOpacityProps {
  skill: string,
}
export function SkillCard({skill, ...rest} : SkillProps) {

  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text
        style={styles.textSkill}
        {...rest}
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
