import { faker } from '@faker-js/faker'
import React, { useEffect, useRef } from 'react'
import { Image, ImageBackground, ScrollView, View } from 'react-native'
import { Appbar, Avatar, IconButton, Text, TouchableRipple, useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { PixelRatio } from 'react-native'
function pxToDp(px: number) {
  return PixelRatio.roundToNearestPixel(px)
}

const wallpaper = require('../assets/wallpaper.png')
const wallpaper_dark = require('../assets/wallpaper-dark.png')

const BOTTOM_APPBAR_HEIGHT = 62

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
            backgroundColor: theme.dark ? theme.colors.surface : theme.colors.elevation.level2,
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
            backgroundColor: 'transparent',
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 10,
            paddingTop: 5,
          }}
        >
          <View
            style={{
              backgroundColor: theme.dark ? theme.colors.elevation.level2 : 'white',
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 1000,
              paddingRight: 10,
              paddingLeft: 4,
              paddingVertical: 4,
              elevation: theme.dark ? 0 : 1.5,
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
  const bottom = useSafeAreaInsets().bottom
  // useEffect(() => {
  //   scrollViewRef.current?.scrollToEnd({ animated: false })
  // }, [scrollViewRef.current])
  return (
    <ScrollView
      ref={scrollViewRef}
      style={{
        marginBottom: BOTTOM_APPBAR_HEIGHT + bottom - 5,
      }}
    >
      <View style={{ padding: 15 }}>
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble
          message={faker.lorem.paragraph(2)}
          isMe={false}
          image={
            'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=2048x2048&w=is&k=20&c=Xa_wH_pZFMWNX8EPtufv9KSvS1OzUPus7C0Br2ZIMDg='
          }
        />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble
          message={faker.lorem.paragraph(2)}
          isMe={true}
          image={'https://i.pinimg.com/564x/43/db/46/43db4682a57bbddf864719d9403919eb.jpg'}
        />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />

        <ChatBubble
          message={faker.lorem.paragraph(2)}
          isMe={false}
          image={
            'https://images.unsplash.com/photo-1626444344029-5c680f7513c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww'
          }
        />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble
          message={faker.lorem.paragraph(2)}
          isMe={true}
          image={
            'https://images.unsplash.com/photo-1618588507085-c79565432917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww'
          }
        />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble message={faker.lorem.sentence()} isMe={false} />
        <ChatBubble message={faker.lorem.sentence()} isMe={true} />
        <ChatBubble
          message={faker.lorem.paragraph(2)}
          isMe={true}
          image={
            'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww'
          }
        />
        <ChatBubble
          message={faker.lorem.paragraph(2)}
          isMe={false}
          image={
            'https://plus.unsplash.com/premium_photo-1675873580166-d10240a7cb7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
          }
        />
        <ChatBubble message={'Ok thik ache 👍🏻'} isMe={true} />
        <ChatBubble message={'Hmm'} isMe={false} />
      </View>
    </ScrollView>
  )
}

function ChatBubble({ message, isMe, image }: { message: string; isMe: boolean; isImage?: boolean; image?: string }) {
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
      <View
        style={{
          backgroundColor: isMe ? theme.colors.primary : theme.dark ? theme.colors.elevation.level2 : 'white',
          borderRadius: 15,
          maxWidth: '70%',
          overflow: 'hidden',
        }}
      >
        {image ? (
          <TouchableRipple
            onPress={() => {}}
            rippleColor={isMe || !theme.dark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.1)'}
            onPressIn={() => {}}
            style={{ paddingHorizontal: 4, paddingVertical: 4 }}
          >
            <View style={{ padding: 0 }}>
              <DynamicImage image={image} />
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
            </View>
          </TouchableRipple>
        ) : (
          <TouchableRipple
            onPress={() => {}}
            rippleColor={isMe || !theme.dark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.1)'}
            onPressIn={() => {}}
            style={{ paddingHorizontal: 13, paddingVertical: 10 }}
          >
            <Text
              style={{
                color: isMe ? theme.colors.onPrimary : theme.colors.onBackground,
                fontSize: 15.5,
              }}
            >
              {message}
            </Text>
          </TouchableRipple>
        )}
      </View>

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

function DynamicImage({ image }: { image: string }) {
  const [h, setH] = React.useState(0)

  useEffect(() => {
    Image.getSize(image, (_, height) => {
      setH(pxToDp(height))
    })
  }, [image])

  return (
    <Image
      source={{ uri: image }}
      style={{
        width: 10000, // Set to a large value
        maxWidth: '100%', // But this will be the actual width
        height: h > 230 ? 230 : h < 100 ? 100 : h,
        resizeMode: 'cover',
        borderRadius: 15 - 4,
      }}
    />
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
