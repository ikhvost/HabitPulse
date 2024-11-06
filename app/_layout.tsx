import { useCallback, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import '@/i18n/config'
import Colors from '@/common/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import HabitsContext from '@/contexts/habits-context'
import HabitsStorage from '@/common/habits-storage'
import { HabitModel, AddHabitModel } from '@/models'
import { seed } from '@/common/seed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Config from '@/common/config'

SplashScreen.preventAutoHideAsync()

export default function IndexLayout() {
  const [fontsLoaded, fontsLoadingError] = useFonts({
    ...FontAwesome6.font,
    Rubik: require('@/assets/fonts/Rubik-VariableFont_wght.ttf')
  })
  const [habits, setHabits] = useState<HabitModel[]>([])
  const [habitsLoaded, setHabitsLoaded] = useState(false)

  useEffect(() => {
    (async () => {
      if (Config.CLEAR_STORAGE_ON_INIT) {
        await AsyncStorage.clear()
      }
      if (Config.SEED_STORAGE_ON_INIT) {
        await seed(Config.SEED_ENTITIES_COUNT)
      }
      const habits = await HabitsStorage.getHabits()
      setHabits(habits)
      setHabitsLoaded(true)
    })()
  }, [])

  const addHabit = useCallback(async (data: AddHabitModel) => {
    const habit = await HabitsStorage.createHabit(data)
    setHabits([...habits, habit])
  }, [habits])

  const updateHabit = useCallback(async (data: HabitModel) => {
    const updatedHabit = await HabitsStorage.overwriteHabit(data)
    const newHabits = habits.map(habit => habit.id === updatedHabit.id ? updatedHabit : habit)
    setHabits(newHabits)
  }, [habits])

  const initialLoadDone = habitsLoaded && (fontsLoaded || fontsLoadingError)

  const onLayoutRootView = useCallback(async () => {
    if (initialLoadDone) {
      await SplashScreen.hideAsync()
    }
  }, [initialLoadDone])

  if (!initialLoadDone) {
    return null
  }

  return (
    <SafeAreaView style={styles.main} onLayout={onLayoutRootView}>
      <HabitsContext.Provider value={{ habits, addHabit, updateHabit }}>
        <Slot/>
      </HabitsContext.Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.dark
  }
})
