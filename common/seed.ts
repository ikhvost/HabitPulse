import { HabitModel } from '@/models'
import { getRandomHabitColor } from '@/common/colors'
import { getRandomHabitIcon } from '@/common/habit-icons'
import Utils from '@/common/utils'
import HabitsStorage from '@/common/habits-storage'
import Config from '@/common/config'

export async function seed(count: number): Promise<void> {
  await Promise.all([
    new Array(count).fill(null).map((_, i) =>
      HabitsStorage.overwriteHabit(generateHabit(i))
    )
  ])
}

function generateHabit(index: number): HabitModel {
  return {
    id: new Date().getTime() + 1000 * index,
    title: `Habit ${index}`,
    description: `Habit ${index} description`,
    color: getRandomHabitColor(),
    iconName: getRandomHabitIcon(),
    points: Utils.generateHabitPoints(Config.DAYS_COUNT).map(() => Math.random() > 0.5)
  }
}
