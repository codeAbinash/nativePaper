import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/native'
import React from 'react'
import { BottomNavigation } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Calls from './Tabs/Home/Calls'
import HomeScreen from './Tabs/Home/HomeScreen'
import Updates from './Tabs/Home/Updates'

const Tab = createBottomTabNavigator()

const Home = () => {
  return (
    <Tab.Navigator
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          getBadge={({ route }) => {
            const { options } = descriptors[route.key]
            return route.name === 'Chats' ? '4' : undefined
          }}
          navigationState={state}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key]
            const label =
              options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : (options.title as any)
            return label
          }}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (event.defaultPrevented) {
              preventDefault()
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              })
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key]
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 })
            }
            return null
          }}
        />
      )}
    >
      <Tab.Screen
        name='Chats'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Chats',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name='message-text' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='Updates'
        component={Updates}
        options={{
          tabBarLabel: 'Updates',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name='at' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='Community'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Community',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name='account-group' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name='phone' size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default Home
