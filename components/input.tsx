import { StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '@/common/colors'
import { memo } from 'react'

type InputProps = {
  maxLength?: number,
  label: string
  value: string
  placeholder: string
  onValueChange: (test: string) => void
}

export default memo(function Input({ maxLength, label, value, placeholder, onValueChange }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        maxLength={maxLength}
        accessibilityLabel={label}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        value={value}
        onChangeText={onValueChange}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15
  },
  label: {
    paddingLeft: 10,
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: 400,
    color: Colors.light
  },
  input: {
    marginTop: 5,
    fontFamily: 'Rubik',
    fontSize: 10,
    fontWeight: 400,
    color: Colors.light,
    borderColor: Colors.light,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 30
  }
})
