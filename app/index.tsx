import { router } from 'expo-router'
import { useCallback, useContext } from 'react'
import MainHeader from '@/components/main-header'
import { useTranslation } from 'react-i18next'
import HabitsContext from '@/contexts/habits-context'
import Habit from '@/components/habit'
import { ScrollView, StyleSheet } from 'react-native'

export default function Index() {
  const { t } = useTranslation()
  const { habits, updateHabit } = useContext(HabitsContext)

  const onAddPress = useCallback(() => router.navigate('/add'), [])

  return (
    <ScrollView style={styles.container}>
      <MainHeader title={t('index.title')} onAddPress={onAddPress}/>
      {
        habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onHabitChange={updateHabit}
          />
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 30
  }
})
