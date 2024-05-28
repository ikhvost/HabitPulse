import { StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '@/common/colors'
import { memo } from 'react'

type InputProps = {
  label: string
  value: string
  placeholder: string
  onChangeText: (test: string) => void
}

export default memo(function Input({ label, value, placeholder, onChangeText }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        value={value}
        onChangeText={onChangeText}
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
    lineHeight: 30,
    borderColor: Colors.light,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 10
  }
})
