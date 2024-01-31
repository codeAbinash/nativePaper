import { faker } from '@faker-js/faker'
import React from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import { Appbar, Avatar, FAB, Tooltip, TouchableRipple, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EndText from '../../EndText'
import BottomSheetModal from '../../../components/BottomSheetModal'

const { width, height } = Dimensions.get('window')

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const theme = useTheme()

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title='Whatsapp' />
        <Tooltip title='Camera'>
          <Appbar.Action style={{ margin: 3 }} iconColor={theme.colors.onSurfaceVariant} icon='camera' onPress={() => {}} />
        </Tooltip>
        <Tooltip title='Search'>
          <Appbar.Action style={{ margin: 3 }} iconColor={theme.colors.onSurfaceVariant} icon='magnify' onPress={() => {}} />
        </Tooltip>
        <Tooltip title='More options'>
          <Appbar.Action style={{ margin: 3 }} iconColor={theme.colors.onSurfaceVariant} icon='dots-vertical' onPress={() => {}} />
        </Tooltip>
      </Appbar.Header>
      <ScrollView
        style={{
          flexGrow: 1,
          display: 'flex',
          backgroundColor: theme.colors.surface,
          // backgroundColor: theme.dark ? theme.colors.surface : 'white',
        }}
      >
        <View style={{ flexGrow: 1, display: 'flex' }}>
          {Array.from(Array(20).keys()).map((item) => (
            <Chat key={item} value={item} navigation={navigation} />
          ))}
        </View>
        <EndText />
      </ScrollView>
      <FAB icon='message-text' style={{ position: 'absolute', margin: 20, right: 0, bottom: 0 }} onPress={() => console.log('Pressed')} />
    </>
  )
}

function Chat({ value, navigation }: { value: number; navigation: any }) {
  const isNewMessage = faker.datatype.boolean()
  const isDelivered = faker.datatype.boolean()
  const isRead = faker.datatype.boolean()

  const theme = useTheme()

  return (
    <TouchableRipple onPress={() => navigation.navigate('Chat')} rippleColor={theme.colors.surfaceVariant}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          paddingBottom: 12,
          paddingTop: 12,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <Avatar.Image size={50} style={{ backgroundColor: theme.colors.surfaceVariant }} source={{ uri: `https://picsum.photos/${50 + value}` }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontSize: 16.5,
                color: theme.colors.onSurface,
                maxWidth: width * 0.5,
              }}
              numberOfLines={1}
            >
              {faker.person.fullName()}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2,
                overflow: 'hidden',
              }}
            >
              {isNewMessage ? null : isDelivered ? (
                <Icon name='check' size={16} color={theme.colors.onSurfaceVariant} style={{ opacity: 0.7 }} />
              ) : (
                <Icon
                  name='check-all'
                  size={16}
                  color={!isRead ? theme.colors.onSurfaceVariant : 'dodgerblue'}
                  style={{ opacity: isRead ? 1 : 0.7 }}
                />
              )}
              <Text
                numberOfLines={1}
                style={{ color: theme.colors.onSurfaceVariant, maxWidth: width * 0.5, paddingLeft: 3, fontSize: 15, opacity: 0.7 }}
              >
                {faker.lorem.paragraph({ min: 1, max: 1 })}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 7,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                color: isNewMessage ? theme.colors.primary : theme.colors.onSurfaceVariant,
                fontSize: 12,
                opacity: isNewMessage ? 1 : 0.7,
              }}
            >
              {faker.date.recent().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </Text>

            {isNewMessage && (
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: theme.colors.onPrimary, fontSize: 12 }}>{faker.number.bigInt({ min: 1, max: 10 }).toString()}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableRipple>
  )
}

export default HomeScreen
