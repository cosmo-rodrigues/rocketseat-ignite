import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [ newSkill, setNewSkill ] = useState('')
  const [ mySkills, setMySkills ] = useState([])
  const [ gretting, setGretting ] =  useState('')

  function handleAddSkylls() {
    setMySkills(prev => [...prev, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour > 12) {
      setGretting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon')
    } else {
      setGretting('Good evening')
    }
  }, [])

  return (
    <View
      style={ styles.container }>
      <Text style={ styles.title }>Welcome, Cosmo Rodrigues</Text>
      <Text style={styles.grettings}>{gretting}</Text>
      <TextInput
        style={styles.input}
        placeholder='New skill'
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkylls}/>

      <Text style={[styles.title, { marginVertical: 50, }]}>
        My Skill
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => <SkillCard skill={item}/>}
      />
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
  grettings: {
    color: '#fff',
  }
})
