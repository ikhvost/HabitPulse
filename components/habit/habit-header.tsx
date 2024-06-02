import { StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { HabitModel } from '@/models'
import Checkbox from '@/components/checkbox'
import { memo } from 'react'
import Colors from '@/common/colors'

type HabitHeaderProps = Omit<HabitModel, 'id' | 'points'> & {lastPointValue: boolean, onLastPointValueChange: (value: boolean) => void};

export default memo(function HabitHeader({ iconName, color, title, description, lastPointValue, onLastPointValueChange }: HabitHeaderProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={{ ...styles.iconContainer, borderColor: color }}>
        <FontAwesome6
          name={iconName}
          color={color}
          size={12}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Checkbox
        color={color}
        value={lastPointValue}
        onValueChange={onLastPointValueChange}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 10
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 12,
    color: Colors.light
  },
  description: {
    fontSize: 10,
    color: Colors.gray
  }
})
