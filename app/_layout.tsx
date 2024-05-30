import { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import '@/i18n/config'
import Colors from '@/common/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function IndexLayout() {
  const [fontsLoaded, fontsLoadingError] = useFonts({
    ...FontAwesome6.font,
    Rubik: require('@/assets/fonts/Rubik-VariableFont_wght.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsLoadingError) { await SplashScreen.hideAsync() }
  }, [fontsLoaded, fontsLoadingError])

  if (!fontsLoaded && !fontsLoadingError) { return null }

  return (
    <SafeAreaView style={styles.main} onLayout={onLayoutRootView}>
      <Slot/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.dark
  }
})
