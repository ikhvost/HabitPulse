import { StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Colors from '@/common/colors'
import { memo } from 'react'

type SubHeaderProps = {
  title: string
  onBackPress: () => void
  onConfirmPress: () => void
}

export default memo(function SubHeader({ title, onBackPress, onConfirmPress }: SubHeaderProps) {
  return (
    <View style={styles.container}>
      <FontAwesome6.Button
        name="arrow-left"
        backgroundColor={'transparent'}
        size={22}
        iconStyle={styles.btnIcon}
        onPress={onBackPress}
      />
      <Text style={styles.title}>{title}</Text>
      <FontAwesome6.Button
        name="check"
        backgroundColor={'transparent'}
        size={22}
        iconStyle={styles.btnIcon}
        onPress={onConfirmPress}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30
  },
  title: {
    fontFamily: 'Rubik',
    fontSize: 22,
    fontWeight: 500,
    color: Colors.light
  },
  btnIcon: {
    color: Colors.light,
    marginRight: 0
  }
})
