const SEED_STORAGE_ON_INIT = Boolean(process.env.EXPO_PUBLIC_SEED)
const SEED_ENTITIES_COUNT = (() => {
  const count = Number(process.env.EXPO_PUBLIC_SEED_COUNT)
  return isNaN(count) ? undefined : count
})()
const CLEAR_STORAGE_ON_INIT = Boolean(process.env.EXPO_PUBLIC_CLEAR)

const ROW_DAYS_COUNT = (() => {
  const count = Number(process.env.EXPO_PUBLIC_ROW_DAYS_COUNT)
  if (isNaN(count)) {
    throw new Error('\'EXPO_PUBLIC_ROW_DAYS_COUNT\' is required to start application')
  }
  return count
})()
const COLUMN_DAYS_COUNT = (() => {
  const count = Number(process.env.EXPO_PUBLIC_COLUMN_DAYS_COUNT)
  if (isNaN(count)) {
    throw new Error('\'EXPO_PUBLIC_COLUMN_DAYS_COUNT\' is required to start application')
  }
  return count
})()
const DAYS_COUNT = ROW_DAYS_COUNT * COLUMN_DAYS_COUNT

export default {
  SEED_STORAGE_ON_INIT,
  SEED_ENTITIES_COUNT,
  CLEAR_STORAGE_ON_INIT,
  ROW_DAYS_COUNT,
  COLUMN_DAYS_COUNT,
  DAYS_COUNT
}
