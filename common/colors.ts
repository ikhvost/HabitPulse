import { ColorValue } from 'react-native'
import Utils from './utils'

const habitColorNames = [
  'gold',
  'deepChampagne',
  'mustard',
  'amber',
  'saffron',
  'fireOpal',
  'rosewood',
  'burgundy',
  'crimson',
  'rubyRed',
  'raspberry',
  'cardinal',
  'scarlet',
  'redwood',
  'auburn',
  'bloodRed',
  'vermilion',
  'flame',
  'persianRed',
  'jasperRed',
  'coralRed',
  'cherryRed',
  'carmine',
  'brickRed',
  'alizarinCrimson',
  'ferrariRed',
  'rust',
  'barnRed',
  'mahogany',
  'candyAppleRed'
] as const

type HabitColorNames = typeof habitColorNames[number]
type AppColorNames = 'dark' | 'light' | 'gray'

type HabitColors = Readonly<Record<HabitColorNames, ColorValue>>
type AppColors = Readonly<Record<HabitColorNames | AppColorNames, ColorValue>>

const colors: AppColors = {
  dark: '#1A1A1A',
  light: '#FDFDFD',
  gray: '#AEAEAE',
  gold: '#FFD700',
  deepChampagne: '#FAD6A5',
  mustard: '#FFDB58',
  amber: '#FFBF00',
  saffron: '#F4C430',
  fireOpal: '#E95C4B',
  rosewood: '#65000B',
  burgundy: '#800020',
  crimson: '#DC143C',
  rubyRed: '#9B111E',
  raspberry: '#E30B5D',
  cardinal: '#C41E3A',
  scarlet: '#FF2400',
  redwood: '#A45A52',
  auburn: '#A52A2A',
  bloodRed: '#660000',
  vermilion: '#E34234',
  flame: '#E25822',
  persianRed: '#CC3333',
  jasperRed: '#D73B3E',
  coralRed: '#FF4040',
  cherryRed: '#F70000',
  carmine: '#960018',
  brickRed: '#CB4154',
  alizarinCrimson: '#E32636',
  ferrariRed: '#FF2800',
  rust: '#B7410E',
  barnRed: '#7C0A02',
  mahogany: '#C04000',
  candyAppleRed: '#FF0800'
}

export const habitColors = habitColorNames.reduce((acc, key) => ({ ...acc, [key]: colors[key] }), {}) as HabitColors

export function getRandomHabitColor(): ColorValue {
  const habitColorsLength = habitColorNames.length
  const randomColorIndex = Utils.getRandomInt(habitColorsLength)
  return colors[habitColorNames[randomColorIndex]]
}

export default colors
