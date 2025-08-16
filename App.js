import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BeatGridProvider } from './src/context/BeatGridContext';
import { StudioSettingsProvider } from './src/context/StudioSettingsContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import BeatGridScreen from './src/screens/BeatGridScreen';
import MixBoardScreen from './src/screens/MixBoardScreen';
import StudioAnalyticsScreen from './src/screens/StudioAnalyticsScreen';
import StudioSettingsScreen from './src/screens/StudioSettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StudioSettingsProvider>
      <BeatGridProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#0B1021" />
            <Stack.Navigator
              initialRouteName="BeatGrid"
              screenOptions={{
                headerStyle: { backgroundColor: '#0B1021' },
                headerTintColor: '#22D3EE',
                headerTitleStyle: { fontWeight: 'bold' },
                cardStyle: { backgroundColor: '#0B1021' }
              }}
            >
              <Stack.Screen 
                name="BeatGrid" 
                component={BeatGridScreen} 
                options={{ title: 'Beat Grid' }}
              />
              <Stack.Screen 
                name="MixBoard" 
                component={MixBoardScreen} 
                options={{ title: 'Mix Board' }}
              />
              <Stack.Screen 
                name="StudioAnalytics" 
                component={StudioAnalyticsScreen} 
                options={{ title: 'Studio Analytics' }}
              />
              <Stack.Screen 
                name="StudioSettings" 
                component={StudioSettingsScreen} 
                options={{ title: 'Studio Settings' }}
              />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </BeatGridProvider>
    </StudioSettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1021',
  },
});