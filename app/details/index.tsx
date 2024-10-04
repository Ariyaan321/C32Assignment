import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const index = () => {
  const params = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Details screen"
        }}
      />
      <Text>Title: {params.title}</Text>
      <Text>Id: {params.id}</Text>
      <Text>User ID: {params.userId}</Text>
      <Text>Body: {params.body}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})