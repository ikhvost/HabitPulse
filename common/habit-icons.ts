import { getRandomInt } from '@/common/utils'

const icons = [
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9', 'address-book', 'address-card',
  'align-center', 'align-justify', 'align-left', 'align-right'
]

export function getRandomHabitIcon(): string {
  const index = getRandomInt(icons.length)
  return icons[index]
}

export default icons
