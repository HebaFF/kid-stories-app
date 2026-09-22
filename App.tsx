/*
 * ===========================================================================
 * DIRECTION CONTRACT — seed ced031a5
 *
 * THESIS: A Cairo newsstand comic holding the stories its readers now tell
 *   their own children. Refuses the rounded-card kids' app and its opposite,
 *   the cream-and-pastel bedtime minimal.
 * OWN-WORLD: Press vermilion owns the ground; paper appears only as plates
 *   laid on it, edged in heavy keyline. Halftone under everything, spot inks
 *   out of register by 2px, Lalezar cut as a masthead, stamps not pills.
 * STORY: A parent recognises the magazine of their own childhood, finds a
 *   story by age and by minutes left before sleep, and reads it in Egyptian.
 * FIRST VIEWPORT: Masthead band in vermilion with حكايات مصرية at 52pt over a
 *   heavy rule; issue stamps beneath; then a full-width lead plate whose art
 *   bleeds to its keyline, and smaller plates paired below it.
 * FORM: Egyptian Children's Magazine, candidate 3 of the grounded list.
 * FINISH: unreviewed and undocumented is unfinished; this build ends with the
 *   finish review, the verdict, and DESIGN.md.
 * ===========================================================================
 */
import { useEffect } from 'react';
import { I18nManager, Platform, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import StoryScreen from './src/screens/StoryScreen';
import { ModeProvider, useMode } from './src/ModeContext';

export type RootStackParamList = {
  Home: undefined;
  Story: { storyId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Arabic leads, so the whole surface hangs from the right spine — not just the
 * Arabic text nodes. Without this the page has two spines at once: the Arabic
 * title ranges right while the Latin title, the stamps and the provenance line
 * range left, which is the tell of a layout built for English and translated
 * afterwards. PRODUCT.md treats RTL as functional, not cosmetic.
 *
 * Set before the first render: flipping the layout direction later does not
 * re-lay a mounted native tree.
 */
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
if (Platform.OS === 'web' && typeof document !== 'undefined') {
  document.documentElement.dir = 'rtl';
  document.documentElement.lang = 'ar-EG';
}

SplashScreen.preventAutoHideAsync().catch(() => {
  /* Splash may already be hidden on web; nothing to recover from. */
});

function Navigation() {
  const { theme } = useMode();
  return (
    <NavigationContainer>
      {/* Both screens draw their own masthead: a stock header bar would be a
          different design language sitting on top of this one. */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.ground },
          animation: I18nManager.isRTL ? 'slide_from_left' : 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
      </Stack.Navigator>
      <StatusBar style={theme.statusBar} />
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Lalezar: require('./assets/fonts/Lalezar-Regular.ttf'),
    NotoNaskhArabic: require('./assets/fonts/NotoNaskhArabic.ttf'),
    Archivo: require('./assets/fonts/Archivo.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  // Hold on the press ground rather than flashing a white frame. A font error
  // still renders the app — system faces are a worse magazine, not a broken one.
  if (!fontsLoaded && !fontError) {
    return <View style={styles.hold} />;
  }

  return (
    <SafeAreaProvider>
      <ModeProvider>
        <Navigation />
      </ModeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  hold: { flex: 1, backgroundColor: '#C8321E' },
});
