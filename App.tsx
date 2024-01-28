import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { enableScreens } from "react-native-screens";
import Home from "./screens/Home";
import { LightTheme } from "./theme/LightTheme";
import Update from "./screens/Update";

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
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
