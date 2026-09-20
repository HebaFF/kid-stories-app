import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import StoryScreen from './src/screens/StoryScreen';
import { ModeProvider, useMode } from './src/ModeContext';

export type RootStackParamList = {
  Home: undefined;
  Story: { storyId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const { theme } = useMode();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.headerBg },
          headerTitleStyle: { color: theme.text, fontWeight: '800' },
          headerTintColor: theme.text,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: theme.bg },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Story" component={StoryScreen} options={{ title: '' }} />
      </Stack.Navigator>
      <StatusBar style={theme.statusBar} />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ModeProvider>
      <Navigation />
    </ModeProvider>
  );
}
