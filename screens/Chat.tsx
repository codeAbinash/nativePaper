import { fa, faker } from '@faker-js/faker'
import React, { useEffect, useRef } from 'react'
import { Appearance, ScrollView, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Appbar, Avatar, Button, Card, Divider, IconButton, Menu, Text, useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const wallpaper = require('../assets/wallpaper.png')
const wallpaper_dark = require('../assets/wallpaper-dark.png')

const BOTTOM_APPBAR_HEIGHT = 60

export default function Chat({ navigation }: { navigation: any }) {
  const theme = useTheme()
  const bottom = useSafeAreaInsets().bottom
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} style={{ margin: 0 }} />
        <Avatar.Image size={35} style={{ backgroundColor: '#00000015', marginRight: 10 }} source={{ uri: 'https://picsum.photos/50' }} />
        <Appbar.Content title={faker.person.firstName()} />
        <Appbar.Action style={{ margin: 3 }} icon='video' onPress={() => {}} />
        <Appbar.Action style={{ margin: 3 }} icon='phone' onPress={() => {}} />
        <Appbar.Action style={{ margin: 3 }} icon='dots-vertical' onPress={() => {}} />
      </Appbar.Header>
      <View
        style={{
          backgroundColor: theme.colors.background,
          flex: 1,
          display: 'flex',
        }}
      >
        <ImageBackground
          source={theme.dark ? wallpaper_dark : wallpaper}
          resizeMode='cover'
          style={{
            backgroundColor: theme.dark ? theme.colors.surface : theme.colors.onSecondary,
            // backgroundColor: theme.colors.surface,
          }}
        >
          <ChatArea />
        </ImageBackground>
      </View>
      <Appbar
        style={[
          {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          },
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.background,
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <View
          style={{
            backgroundColor: theme.colors.background,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 10,
            paddingTop: 7,
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.elevation.level2,
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 1000,
              paddingRight: 10,
              paddingLeft: 4,
              paddingVertical: 4,
            }}
          >
            <IconButton
              icon='blur'
              iconColor={theme.colors.onSurfaceVariant}
              size={25}
              onPress={() => console.log('Pressed')}
              style={{ margin: 0, opacity: 0.7 }}
            />
            <View style={{ flex: 1, marginBottom: 3 }}>
              <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 16, opacity: 0.7 }}>Type a message</Text>
            </View>
            <IconButton
              icon='attachment'
              size={25}
              iconColor={theme.colors.onSurfaceVariant}
              style={{
                opacity: 0.7,
                margin: 0,
                marginRight: 5,
                transform: [{ rotate: '-135deg' }],
              }}
              onPress={() => console.log('Pressed')}
            />
            <IconButton
              iconColor={theme.colors.onSurfaceVariant}
              icon='camera'
              size={22}
              onPress={() => console.log('Pressed')}
              style={{ margin: 0, opacity: 0.7 }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 1000,
              backgroundColor: theme.colors.primary,
              marginLeft: 10,
            }}
          >
            <IconButton
              icon='microphone'
              iconColor={theme.colors.onPrimary}
              size={21}
              style={{ backgroundColor: theme.colors.primary, padding: 0 }}
            />
          </View>
        </View>
      </Appbar>
    </>
  )
}

function ChatArea() {
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: false })
  }, [scrollViewRef.current])
  return (
    <ScrollView ref={scrollViewRef}>
      <View style={{ padding: 15, paddingBottom: BOTTOM_APPBAR_HEIGHT + 20 }}>
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ImageChatBubble message={faker.lorem.paragraph(2)} isMe={false} image={'https://picsum.photos/650'} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ImageChatBubble message={faker.lorem.paragraph(2)} isMe={true} image={'https://picsum.photos/652'} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ImageChatBubble message={faker.lorem.paragraph(2)} isMe={true} image={'https://picsum.photos/709'} />
        {/* <ChatBubble message={faker.lorem.sentence()} isMe={false} /> */}
        <ImageChatBubble message={faker.lorem.paragraph(2)} isMe={false} image={'https://picsum.photos/701'} />
        {/* <ChatBubble message={faker.lorem.sentence()} isMe={true} /> */}
        {/* <ChatBubble message={faker.lorem.sentence()} isMe={false} /> */}
        {/* <ChatBubble message={faker.lorem.paragraph({ max: 2, min: 2 })} isMe={false} /> */}
        <ChatBubble message={'Ok thik ache 👍🏻'} isMe={true} />
        {/* <ChatBubble message={faker.lorem.paragraph()} isMe={false} /> */}
      </View>
    </ScrollView>
  )
}

function ChatBubble({ message, isMe }: { message: string; isMe: boolean }) {
  const theme = useTheme()
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: isMe ? 'flex-end' : 'flex-start',
        marginVertical: 5,
      }}
    >
      {isMe && (
        <Time
          time={faker.date.recent().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        />
      )}
      <TouchableOpacity
        activeOpacity={isMe ? 0.9 : 0.6}
        style={{
          backgroundColor: isMe ? theme.colors.primary : theme.colors.elevation.level3,
          borderRadius: 15,
          paddingHorizontal: 13,
          paddingVertical: 10,
          maxWidth: '70%',
        }}
      >
        <Text
          style={{
            color: isMe ? theme.colors.onPrimary : theme.colors.onBackground,
            fontSize: 15.5,
          }}
        >
          {message}
        </Text>
      </TouchableOpacity>
      {!isMe && (
        <Time
          time={faker.date.recent().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        />
      )}
    </View>
  )
}

function ImageChatBubble({ message, isMe, image }: { message: string; isMe: boolean; image: string }) {
  const theme = useTheme()
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: isMe ? 'flex-end' : 'flex-start',
        marginVertical: 5,
        width: '100%',
      }}
    >
      {isMe && (
        <Time
          time={faker.date.recent().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        />
      )}
      <TouchableOpacity
        activeOpacity={isMe ? 0.9 : 0.6}
        style={{
          backgroundColor: isMe ? theme.colors.primary : theme.colors.elevation.level5,
          borderRadius: 15,
          padding: 5,
          maxWidth: '70%',
        }}
      >
        <Card.Cover style={{}} source={{ uri: image }} />
        <Text
          style={{
            color: isMe ? theme.colors.onPrimary : theme.colors.onBackground,
            fontSize: 15.5,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          {message}
        </Text>
      </TouchableOpacity>
      {!isMe && (
        <Time
          time={faker.date.recent().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        />
      )}
    </View>
  )
}

function Time({ time }: { time: string }) {
  const theme = useTheme()
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10,
        opacity: 0.7,
      }}
    >
      <Text
        style={{
          color: theme.colors.onSurfaceVariant,
          fontSize: 12,
          marginRight: 3,
          marginLeft: 3,
        }}
      >
        {time}
      </Text>
      <Icon name='check-all' size={14} color={theme.colors.primary} />
    </View>
  )
}
