import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Button, Divider, Text, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomSheetModal from '../components/BottomSheetModal'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function EndText() {
  const theme = useTheme()
  const [visible, setVisible] = React.useState(false)
  const bottom = useSafeAreaInsets().bottom

  return (
    <>
      <BottomSheetModal visible={visible} onDismiss={() => {}} closeFn={() => setVisible(false)}>
        <View
          style={{
            backgroundColor: theme.colors.elevation.level1,
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            paddingTop: 12,
            paddingBottom: bottom,
          }}
        >
          <View
            style={{ height: 5, width: '20%', backgroundColor: theme.colors.surfaceVariant, borderRadius: 100, alignSelf: 'center', marginTop: 5 }}
          ></View>
          <View
            style={{
              width: '100%',
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 15,
                marginTop: 15,
                marginBottom: 20,
              }}
            >
              <Icon name='message-text-lock' color={theme.colors.primary} size={50} style={{ alignSelf: 'center' }} />
              <Icon name='phone-lock' color={theme.colors.primary} size={50} style={{ alignSelf: 'center' }} />
              <Icon name='lock' color={theme.colors.primary} size={52} style={{ alignSelf: 'center' }} />
            </View>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
              }}
            >
              Your text and calls are private
            </Text>
            <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 15, color: theme.colors.outline, lineHeight: 20 }}>
              End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen
              to them. This includes your:
            </Text>
            <View style={{ marginTop: 20, paddingHorizontal: 10, gap: 10 }}>
              <ContentType text='Text and voice messages' icon='message-text' />
              <ContentType text='Audio and video calls' icon='phone' />
              <ContentType text='Photos, videos and documents' icon='attachment' />
              <ContentType text='Location sharing' icon='map-marker' />
              <ContentType text='Status Updates' icon='at' />
            </View>
            <Button
              onPress={() => {
                setVisible(false)
              }}
              style={{ marginTop: 35 }}
              mode='contained'
            >
              Learn more
            </Button>
          </View>
        </View>
      </BottomSheetModal>
      <View
        style={{
          paddingBottom: 100,
          paddingTop: 20,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ color: 'gray', fontSize: 12 }}>
          <Icon name='lock' color={'gray'} size={14} /> Your personal messages are{' '}
        </Text>
        <TouchableOpacity activeOpacity={0.7} style={{ padding: 0, margin: 0 }} onPress={() => setVisible(true)}>
          <Text style={{ color: theme.colors.primary, fontSize: 12 }}>end-to-end encrypted</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

function ContentType({ text, icon }: { text: string; icon: string }) {
  const theme = useTheme()
  return (
    <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Icon name={icon} color={theme.colors.outline} size={18} />
      <Text style={{ fontSize: 15, color: theme.colors.outline }}>{text}</Text>
    </View>
  )
}
