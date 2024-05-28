import { ColorValue } from 'react-native'

export interface Habit {
  id: number;
  title: string;
  description: string;
  color: ColorValue;
  iconName: string;
  points: boolean[];
}
