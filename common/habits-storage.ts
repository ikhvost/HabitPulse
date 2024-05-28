import { Habit } from '@/models'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Utils from './utils'

const lastUpdateKey = 'lastUpdate'

async function getLastUpdateDate(): Promise<Date | undefined> {
  const raw = await AsyncStorage.getItem(lastUpdateKey)
  if (!raw) return

  const time = Number(raw)
  if (!time) return

  return new Date(time)
}

async function insertHabit(habit: Omit<Habit, 'id'>): Promise<Habit> {
  const withId = updateHabitWithGeneratedId(habit)

  await AsyncStorage.setItem(withId.id.toString(), JSON.stringify(withId))
  await AsyncStorage.setItem(lastUpdateKey, withId.id.toString())

  return withId
}

async function getHabitById(id: number | string): Promise<Habit | undefined> {
  const raw = await AsyncStorage.getItem(id.toString())
  if (!raw) return

  try {
    return JSON.parse(raw)
  } catch (err) {
    console.error(err)
  }
}

async function getHabits(): Promise<Habit[]> {
  const keys = await AsyncStorage.getAllKeys()
  const habitKeys = keys.filter(key => key !== lastUpdateKey && Number(key))
  const habits = await Promise.all(habitKeys.map(getHabitById))
  return Utils.filteroutNullAndUndefined(habits)
}

function updateHabitWithGeneratedId(habit: Omit<Habit, 'id'>): Required<Habit> {
  const currTime = new Date().getTime()
  return { ...habit, id: currTime }
}

export default {
  getHabits,
  getLastUpdateDate,
  insertHabit
}
