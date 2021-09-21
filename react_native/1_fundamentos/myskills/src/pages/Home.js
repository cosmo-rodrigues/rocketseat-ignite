import React, { useState } from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [ newSkill, setNewSkill ] = useState('')
  const [ mySkills, setMySkills ] = useState([])

  function handleAddSkylls() {
    setMySkills(prev => [...prev, newSkill])
  }

  return (
    <View
      style={ styles.container }>
      <Text style={ styles.title }>Welcome, Cosmo Rodrigues</Text>
      <TextInput
        style={styles.input}
        placeholder='New skill'
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkylls}/>

      <Text style={[styles.title, { marginVertical: 50, }]}>
        My Skill
      </Text>

      {
        mySkills.map((skill, index) => 
          <SkillCard key={index} skill={skill}/>
        )
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121015',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 7,
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
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
