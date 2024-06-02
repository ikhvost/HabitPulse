import { ColorValue } from 'react-native'

export interface HabitModel {
  id: number;
  title: string;
  description: string;
  color: ColorValue;
  iconName: string;
  points: boolean[];
}

export type AddHabitModel = Omit<HabitModel, 'id'>
