import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  const items = Array.from({length: 100}, (_, i) => `Item ${i+1}`)

  return (
    <ScrollView style={{flex:1, backgroundColor: '#f6f6f6'}} 
      contentContainerStyle={{
        padding: 16,
        alignItems: "center"
      }}
    >
      {
        items.map((item) => (
          <Text key={item}>{item}</Text>
        ))
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})