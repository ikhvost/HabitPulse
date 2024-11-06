export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

function filteroutNullAndUndefined<T>(arr: (T | undefined)[]): T[] {
  return arr.filter(habit => habit != null) as T[]
}

function generateHabitPoints(count: number): boolean[] {
  return new Array(count).fill(false)
}

export default {
  getRandomInt,
  filteroutNullAndUndefined,
  generateHabitPoints
}
