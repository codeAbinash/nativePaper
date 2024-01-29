import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Appearance, StatusBar } from 'react-native'
import { PaperProvider, useTheme } from 'react-native-paper'
import { enableScreens } from 'react-native-screens'
import Chat from './screens/Chat'
import Home from './screens/Home'
import Update from './screens/Update'
import { DarkTheme } from './theme/DarkTheme'
import { LightTheme } from './theme/LightTheme'
import { useEffect, useState } from 'react'

enableScreens()

const Stack = createNativeStackNavigator()

const App = () => {
  const [currentSystemTheme, setCurrentSystemTheme] = useState(Appearance.getColorScheme())

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setCurrentSystemTheme(colorScheme)
    })
  }, [])

  return (
    <>
      <PaperProvider theme={currentSystemTheme == 'dark' ? DarkTheme : LightTheme}>
        <Navigation />
      </PaperProvider>
    </>
  )
}

function Navigation() {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.surface} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen
            name='Update'
            component={Update}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'fade_from_bottom',
            }}
          />
          <Stack.Screen
            name='Chat'
            component={Chat}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'fade_from_bottom',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
