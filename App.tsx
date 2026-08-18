import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

// Import screens
import HomeScreen from './screens/HomeScreen';
import HoursScreen from './screens/HoursScreen';
import TachoScreen from './screens/TachoScreen';
import InfringementsScreen from './screens/InfringementsScreen';
import ParkingScreen from './screens/ParkingScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const theme = {
  dark: true,
  colors: {
    background: '#0F172A',
    card: '#1E293B',
    text: '#F1F5F9',
    border: '#334155',
    primary: '#3B82F6',
    accent: '#F97316',
    success: '#22C55E',
    warning: '#EAB308',
    danger: '#EF4444',
  }
};

export default function App() {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap = 'home';
              
              switch (route.name) {
                case 'Home': iconName = focused ? 'home' : 'home-outline'; break;
                case 'Hours': iconName = focused ? 'time' : 'time-outline'; break;
                case 'Tacho': iconName = focused ? 'card' : 'card-outline'; break;
                case 'Infringements': iconName = focused ? 'warning' : 'warning-outline'; break;
                case 'Parking': iconName = focused ? 'car' : 'car-outline'; break;
                case 'Documents': iconName = focused ? 'folder' : 'folder-outline'; break;
                case 'Expenses': iconName = focused ? 'cash' : 'cash-outline'; break;
                case 'Profile': iconName = focused ? 'person' : 'person-outline'; break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: '#94A3B8',
            tabBarStyle: {
              backgroundColor: theme.colors.card,
              borderTopColor: theme.colors.border,
              height: 70,
              paddingBottom: 10,
              paddingTop: 8,
            },
            headerStyle: {
              backgroundColor: theme.colors.card,
            },
            headerTintColor: theme.colors.text,
            headerTitleStyle: { fontWeight: '600' },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Hours" component={HoursScreen} />
          <Tab.Screen name="Tacho" component={TachoScreen} />
          <Tab.Screen name="Infringements" component={InfringementsScreen} />
          <Tab.Screen name="Parking" component={ParkingScreen} />
          <Tab.Screen name="Documents" component={DocumentsScreen} />
          <Tab.Screen name="Expenses" component={ExpensesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
