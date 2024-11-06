import { ColorValue, Pressable, StyleSheet } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { memo, useCallback } from 'react'
import Colors from '@/common/colors'

type CheckboxProps = {
  color: ColorValue,
  value: boolean,
  onValueChange: (value: boolean) => void,
}

export default memo(function Checkbox({ value, color, onValueChange }: CheckboxProps) {
  const onPress = useCallback(() => onValueChange(!value), [value, onValueChange])

  return (
    <Pressable
      style={{ ...styles.pressable, borderColor: color, ...value && { backgroundColor: color } }}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value }}
      onPress={onPress}
    >
      <FontAwesome6
        color={value ? Colors.light : color}
        name="check"
        size={12}
      />
    </Pressable>
  )
})

const styles = StyleSheet.create({
  pressable: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 10
  }
})
