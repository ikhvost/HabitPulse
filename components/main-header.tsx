import { StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Colors from '@/common/colors'
import { memo } from 'react'

type MainHeaderProps = {
  title: string
  onAddPress: () => void
}

export default memo(function MainHeader({ title, onAddPress }: MainHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FontAwesome6.Button
        style={styles.btn}
        name="add"
        backgroundColor={'transparent'}
        size={12}
        iconStyle={styles.btnIcon}
        onPress={onAddPress}
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
    fontSize: 36,
    fontWeight: 500,
    color: Colors.light
  },
  btn: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: Colors.light,
    borderStyle: 'solid'
  },
  btnIcon: {
    color: Colors.light,
    marginRight: 0
  }
})
