import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './src/theme/ThemeContext';
import { useAuthStore } from './src/store/authStore';

// Screens
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { CaptureScreen } from './src/screens/CaptureScreen';
import { EditScreen } from './src/screens/EditScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator
const HomeStackNavigator = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {!capturedImage ? (
        <>
          <Stack.Screen
            name="CaptureHome"
            component={CaptureScreen}
            options={{
              presentation: 'card',
            }}
            listeners={{
              focus: () => setCapturedImage(null),
            }}
            initialParams={{ onImageSelected: setCapturedImage }}
          />
        </>
      ) : (
        <Stack.Screen
          name="EditFlow"
          component={EditScreen}
          options={{
            presentation: 'card',
          }}
          initialParams={{
            imageUri: capturedImage,
            onSave: () => {
              setCapturedImage(null);
              // Navigate back or show success
            },
            onShare: (destination) => {
              console.log('Share to:', destination);
              setCapturedImage(null);
            },
          }}
        />
      )}
    </Stack.Navigator>
  );
};

const FloatingNavBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,204,0,0.2)',
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            preventDefault: isFocused,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              opacity: isFocused ? 1 : 0.5,
            }}
          >
            <Text style={{ fontSize: 24 }}>{options.tabBarLabel}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainAppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderTopColor: 'rgba(255,204,0,0.2)',
          borderTopWidth: 1,
        },
      }}
      tabBar={FloatingNavBar}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarLabel: '🏠' }}
      />
      <Tab.Screen
        name="Saved"
        component={() => (
          // Placeholder for Saved screen
          <View style={{ flex: 1 }} />
        )}
        options={{ tabBarLabel: '💾' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: '⚙️' }}
      />
    </Tab.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const { token, isLoading } = useAuthStore();

  if (isLoading) {
    return null; // Show splash screen
  }

  return token ? <MainAppNavigator /> : <AuthNavigator />;
};

import { View, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
