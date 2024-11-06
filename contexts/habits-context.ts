import { createContext } from 'react'
import { HabitModel, AddHabitModel } from '@/models'

type HabitsContextModel = {
  habits: HabitModel[],
  addHabit: (habit: AddHabitModel) => void,
  updateHabit: (habit: HabitModel) => void,
}

const HabitsContext = createContext<HabitsContextModel>(null as never as HabitsContextModel)

export default HabitsContext
