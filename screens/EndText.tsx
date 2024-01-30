import React from 'react'
import { View } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function EndText() {
  const theme = useTheme()
  return (
    <>
      {/* <Divider style={{ marginTop: 15, backgroundColor: theme.colors.surface }} /> */}
      <View
        style={{
          paddingBottom: 100,
          paddingTop: 20,
          flex: 1,
        }}
      >
        <Text
          style={{
            color: 'gray',
            textAlign: 'center',
            marginTop: 10,
            fontSize: 12,
          }}
        >
          <Icon name='lock' color={'gray'} size={14} /> Your personal messages are{' '}
          <Text style={{ color: theme.colors.primary }}>end-to-end encrypted</Text>
        </Text>
      </View>
    </>
  )
}
