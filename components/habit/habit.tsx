import { StyleSheet, View } from 'react-native'
import { HabitModel } from '@/models'
import HabitHeader from '@/components/habit/habit-header'
import { memo, useCallback } from 'react'
import HabitPoints from '@/components/habit/habit-points'

type HabitProps = {
  habit: HabitModel,
  onHabitChange: (habit: HabitModel) => void
}

export default memo(function Habit({ habit, onHabitChange }: HabitProps) {
  const onHabitLastPointChange = useCallback((value: boolean) => {
    const points = [...habit.points]
    points[points.length - 1] = value

    onHabitChange({
      ...habit,
      points
    })
  }, [habit, onHabitChange])

  return (
    <View style={{ ...styles.container, borderColor: habit.color }}>
      <HabitHeader
        title={habit.title}
        description={habit.description}
        color={habit.color}
        iconName={habit.iconName}
        lastPointValue={habit.points[habit.points.length - 1]}
        onLastPointValueChange={onHabitLastPointChange}
      />
      <HabitPoints
        color={habit.color}
        points={habit.points}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 10
  }
})
