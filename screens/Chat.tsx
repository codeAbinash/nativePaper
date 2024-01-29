import { faker } from '@faker-js/faker'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import { Appbar, Avatar, Button, IconButton, MD3Colors, Text } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LightTheme } from '../theme/LightTheme'

export default function Chat({ navigation }: { navigation: any }) {
  return <>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} style={{ margin: 0 }} />
      <Avatar.Image
        size={35}
        style={{ backgroundColor: "#00000015", marginRight: 10 }}
        source={{ uri: 'https://picsum.photos/50' }}
      />
      <Appbar.Content title={faker.person.firstName()} />
      <Appbar.Action style={{ margin: 3 }} icon="video" onPress={() => { }} />
      <Appbar.Action style={{ margin: 3 }} icon="phone" onPress={() => { }} />
      <Appbar.Action style={{ margin: 3 }} icon="dots-vertical" onPress={() => { }} />
    </Appbar.Header>
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        display: "flex",
      }}
    >
      <ChatArea />

    </View>
    <View style={{
      backgroundColor: LightTheme.colors.background,
      display: 'flex',
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, flex: 0.1, paddingTop: 0
    }}>
      <View
        style={{
          backgroundColor: '#00000015',
          flex: 1,
          display: "flex",
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 1000,
          paddingRight: 10,
          paddingLeft: 3,
          paddingVertical: 3
        }}
      >
        <IconButton
          icon="blur"
          size={25}
          onPress={() => console.log('Pressed')}
          style={{ margin: 0 }}
        />
        <View style={{ flex: 1 }} />
        <IconButton
          icon="attachment"
          size={25}
          iconColor='grey'
          style={{ margin: 0, marginRight: 5, transform: [{ rotate: '-135deg' }] }}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          iconColor='grey'
          icon="camera"
          size={22}
          onPress={() => console.log('Pressed')}
          style={{ margin: 0 }}
        />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 1000,
          backgroundColor: LightTheme.colors.primary,
          marginLeft: 10
        }}
      >

        <IconButton
          icon="microphone"
          iconColor={'#fff'}
          size={20}
          style={{ backgroundColor: LightTheme.colors.primary, padding: 0 }}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  </>
}


function ChatArea() {
  return <ScrollView>
    <View style={{ padding: 15 }}>
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.sentence()} isMe={true} />
      <ChatBubble message={faker.lorem.sentence()} isMe={false} />
      <ChatBubble message={faker.lorem.paragraph()} isMe={false} />

    </View>
  </ScrollView>
}

function ChatBubble({ message, isMe }: { message: string, isMe: boolean }) {
  return <View style={{ display: 'flex', flexDirection: 'row', justifyContent: isMe ? 'flex-end' : 'flex-start', marginVertical: 5 }}>
    {
      isMe &&
      <Time time={faker.date.recent().toLocaleTimeString(
        'en-US',
        { hour: 'numeric', minute: 'numeric', hour12: true }
      )} />
    }
    <TouchableOpacity
      activeOpacity={isMe ? 0.9 : 0.6}
      style={{ backgroundColor: isMe ? LightTheme.colors.primary : '#00000015', borderRadius: 15, paddingHorizontal: 13, paddingVertical: 10, maxWidth: '70%', }}>
      <Text style={{ color: isMe ? '#fff' : '#000', fontSize: 15 }}>{message}</Text>
    </TouchableOpacity>
    {
      !isMe &&
      <Time time={faker.date.recent().toLocaleTimeString(
        'en-US',
        { hour: 'numeric', minute: 'numeric', hour12: true }
      )} />
    }

  </View>
}

function Time({ time }: { time: string }) {
  return <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 10 }}>
    <Text style={{ color: '#00000050', fontSize: 12, marginRight: 3, marginLeft: 3 }}>{time}</Text>
    <Icon name='check-all' size={14} color={LightTheme.colors.primary} style={{ opacity: 0.7 }} />
  </View>
}
