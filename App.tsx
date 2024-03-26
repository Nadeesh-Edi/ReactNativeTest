/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import HomeScreen from './pages/HomeScreen';
import usePushNotification from './hooks/usePushNotification';

import LockScreen from './pages/LockScreen';
import FilePickerScreen from './pages/FilePickerScreen';

const Stack = createNativeStackNavigator()

const backgroundStyle = {
  // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  backgroundColor: Colors.darker,
  flex: 1
};

// SHA-1 = 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
// SHA256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const withoutHeader = {
    headerShown: false
  }

  const withHeader: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#F0AE1F',
  }

  // For Push notifs
  const {
    requestUserPermission,
    getFCMToken,
    listenToBackgroundNotifications,
    listenToForegroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  } = usePushNotification();

  // Init the push notifs
  useEffect(() => {
    const listenToNotifications = () => {
      try {
        getFCMToken();
        requestUserPermission();
        onNotificationOpenedAppFromQuit();
        listenToBackgroundNotifications();
        listenToForegroundNotifications();
        onNotificationOpenedAppFromBackground();
      } catch (error) {
        console.log(error);
      }
    };

    listenToNotifications();
  }, []);
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <LoginScreen /> */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Lock" component={LockScreen} options={withoutHeader} /> */}
          <Stack.Screen name="Login" component={LoginScreen} options={withoutHeader} />
          <Stack.Screen name="Register" component={RegisterScreen} options={withoutHeader} />
          <Stack.Screen name="Home" component={HomeScreen} options={withHeader} />
          <Stack.Screen name="FilePickerScreen" component={FilePickerScreen} options={withHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
