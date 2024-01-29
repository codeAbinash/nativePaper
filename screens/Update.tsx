import React from 'react'
import { ScrollView, View } from 'react-native'
import { Appbar, Card, IconButton, Text, useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Update({ navigation }: { navigation: any }) {
  const theme = useTheme()
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title='Card Images' />
      </Appbar.Header>
      <ScrollView
        style={{
          // backgroundColor: theme.colors.background,
          backgroundColor: theme.colors.surface,
          flexGrow: 1,
          display: 'flex',
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/701' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/702' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/703' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/704' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/705' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/706' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/707' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/708' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/709' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/710' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/711' }} />
        <View style={{ marginTop: 10, paddingTop: 30, paddingBottom: 80 }}>
          <Text
            style={{
              color: 'gray',
              textAlign: 'center',
              fontSize: 13,
              padding: 20,
            }}
          >
            It can draw content under the navigation bar or the tab bar so that content is not obscured by translucent bars. The prop is platform
            specific and is ignored on Android. false by default.
          </Text>
        </View>
      </ScrollView>
    </>
  )
}
