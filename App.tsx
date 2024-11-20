const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ResourcesCentre from "./screens/ResourcesCentre";
import CognitiveReframingLoading from "./screens/CognitiveReframingLoading";
import NewSessionChat6 from "./screens/NewSessionChat6";
import DailyCheckUp from "./components/DailyCheckUp";
import NotificationsPopUp from "./components/NotificationsPopUp";
import OngoingSessionChat from "./screens/OngoingSessionChat";
import ChatHistory from "./screens/ChatHistory";
import HomeScreenLayoutDraft from "./screens/HomeScreenLayoutDraft";
import CognitiveReframingWithInput from "./screens/CognitiveReframingWithInput";
import ResourcesCentre1 from "./screens/ResourcesCentre1";
import ProfileScreen from "./screens/ProfileScreen";
import CognitiveReframingExercise from "./screens/CognitiveReframingExercise";
import SignUp1 from "./screens/SignUp1";
import SignUp from "./screens/SignUp";
import MioptionsVertical from "./components/MioptionsVertical";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ResourcesCentre"
              component={ResourcesCentre}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CognitiveReframingLoading"
              component={CognitiveReframingLoading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewSessionChat5"
              component={NewSessionChat6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DailyCheckUp"
              component={DailyCheckUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationsPopUp"
              component={NotificationsPopUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OngoingSessionChat"
              component={OngoingSessionChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatHistory1"
              component={ChatHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreenLayoutDraft"
              component={HomeScreenLayoutDraft}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CognitiveReframingWithInput"
              component={CognitiveReframingWithInput}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResourcesCentre1"
              component={ResourcesCentre1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CognitiveReframingExercise"
              component={CognitiveReframingExercise}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
