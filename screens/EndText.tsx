import { View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function EndText() {
  const theme = useTheme()
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
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
  )
}
