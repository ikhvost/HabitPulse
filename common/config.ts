import env from 'env-var'

const SEED_STORAGE_ON_INIT = env.get('EXPO_PUBLIC_SEED').default('false').asBool()
const SEED_ENTITIES_COUNT = env.get('EXPO_PUBLIC_SEED_COUNT').default('5').asIntPositive()
const CLEAR_STORAGE_ON_INIT = env.get('EXPO_PUBLIC_CLEAR').default('false').asBool()

const ROW_DAYS_COUNT = env.get('EXPO_PUBLIC_ROW_DAYS_COUNT').required().asIntPositive()
const COLUMN_DAYS_COUNT = env.get('EXPO_PUBLIC_COLUMN_DAYS_COUNT').required().asIntPositive()
const DAYS_COUNT = ROW_DAYS_COUNT * COLUMN_DAYS_COUNT

export default {
  SEED_STORAGE_ON_INIT,
  SEED_ENTITIES_COUNT,
  CLEAR_STORAGE_ON_INIT,
  ROW_DAYS_COUNT,
  COLUMN_DAYS_COUNT,
  DAYS_COUNT
}
