import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { enableScreens } from "react-native-screens";
import Home from "./screens/Home";
import { LightTheme } from "./theme/LightTheme";
import Update from "./screens/Update";
import Chat from "./screens/Chat";

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={LightTheme.colors.surface}
      />
      <PaperProvider theme={LightTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Update"
              component={Update}
              options={{
                headerShown: false, presentation: 'modal',
                animationTypeForReplace: 'push',
                animation: 'fade_from_bottom',
              }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{
                headerShown: false, presentation: 'modal',
                animationTypeForReplace: 'push',
                animation: 'fade_from_bottom',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
