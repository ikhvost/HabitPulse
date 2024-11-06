import { HabitModel, AddHabitModel } from '@/models'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Utils from './utils'
import dayjs from 'dayjs'

const lastUpdateKey = 'lastUpdate'

async function getLastUpdateDate(): Promise<Date | undefined> {
  const raw = await AsyncStorage.getItem(lastUpdateKey)
  if (!raw) return

  const time = Number(raw)
  if (!time) return

  return new Date(time)
}

async function createHabit(habit: AddHabitModel): Promise<HabitModel> {
  const withId = generateAndSetId(habit)
  await setHabit(withId)
  return withId
}

async function overwriteHabit(habit: HabitModel): Promise<HabitModel> {
  await setHabit(habit)
  return habit
}

async function getHabitsSyncedWithCurrentDate(): Promise<HabitModel[]> {
  const [habits, lastUpdateDate] = await Promise.all([getHabits(), getLastUpdateDate()])

  const pointsCountToUpdate = dayjs().startOf('d').diff(dayjs(lastUpdateDate).startOf('d'), 'days')

  if (!pointsCountToUpdate) { return habits }

  return syncHabits(habits, pointsCountToUpdate)
}

function syncHabits(habits: HabitModel[], pointsCount: number): Promise<HabitModel[]> {
  for (const habit of habits) {
    habit.points = habit.points
      .slice(pointsCount)
      .concat(Utils.generateHabitPoints(pointsCount))
  }

  return overwriteHabits(habits)
}

function overwriteHabits(habits: HabitModel[]): Promise<HabitModel[]> {
  return Promise.all(habits.map(overwriteHabit))
}

async function getHabits(): Promise<HabitModel[]> {
  const isIdKey = Number

  const keys = await AsyncStorage.getAllKeys()
  const idKeys = keys.filter(isIdKey)
  const habits = await Promise.all(idKeys.map(getHabitById))
  return Utils.filteroutNullAndUndefined(habits)
}

async function getHabitById(id: number | string): Promise<HabitModel | undefined> {
  const raw = await AsyncStorage.getItem(id.toString())
  if (!raw) return

  try {
    return JSON.parse(raw)
  } catch (err) {
    console.error(err)
  }
}

async function setHabit(data: HabitModel): Promise<void> {
  await Promise.all([
    AsyncStorage.setItem(data.id.toString(), JSON.stringify(data)),
    AsyncStorage.setItem(lastUpdateKey, new Date().getTime().toString())
  ])
}

function generateAndSetId(habit: AddHabitModel): Required<HabitModel> {
  const currTime = new Date().getTime()
  return { ...habit, id: currTime }
}

export default {
  getHabits: getHabitsSyncedWithCurrentDate,
  createHabit,
  overwriteHabit
}
