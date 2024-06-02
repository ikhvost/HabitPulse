import { memo } from 'react'
import Config from '@/common/config'
import { StyleSheet, View } from 'react-native'
import { HabitModel } from '@/models'

type HabitPointsProps = Pick<HabitModel, 'color' | 'points'>

const pointsToTable = (points: boolean[]): boolean[][] => {
  const table: boolean[][] = new Array(Config.COLUMN_DAYS_COUNT).fill(null).map(() => [])

  for (let i = 0; i < Config.DAYS_COUNT; i++) {
    const column = Math.floor(i / Config.COLUMN_DAYS_COUNT)
    const row = i % Config.COLUMN_DAYS_COUNT
    table[row][column] = points[i]
  }

  return table
}

export default memo(function HabitPoints({ points, color }: HabitPointsProps) {
  const table = pointsToTable(points)

  return (
    <>
      {
        table.map((row, i) => (
          <View key={i} style={styles.row}>
            {
              row.map((point, j) => (
                <View key={j} style={styles.column}>
                  <View style={{ ...styles.point, backgroundColor: color, opacity: point ? 1 : 0.25 }}/>
                </View>
              ))
            }
          </View>
        ))
      }
    </>
  )
})

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  column: {
    width: `${100 / Config.ROW_DAYS_COUNT}%`,
    aspectRatio: '1/1',
    padding: 2
  },
  point: {
    flex: 1,
    borderRadius: 3
  }
})
