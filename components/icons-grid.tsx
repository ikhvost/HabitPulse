import HabitIcons from '@/common/habit-icons'
import { Pressable, StyleSheet, View, Text } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Colors from '@/common/colors'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'

type HabitIconsGridProps = {
  onSelect: (iconName: string) => void
}

export default memo(function HabitIconsGrid({ onSelect }: HabitIconsGridProps) {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<string>('')

  const onPress = useCallback((icon: string) => {
    setSelected(icon)
    onSelect(icon)
  }, [onSelect, setSelected])

  return (
    <>
      <Text style={styles.title}>{t('add.iconsGrid.title')}</Text>
      <View style={styles.container}>
        {
          HabitIcons.map((icon) => (
            <View style={styles.subContainer} key={icon}>
              <Pressable style={{ ...styles.pressable, ...icon === selected && styles.selected }} onPress={() => onPress(icon)}>
                <FontAwesome6
                  style={styles.icon}
                  name={icon}
                  color={icon === selected ? Colors.dark : Colors.light}
                  size={24}
                />
              </Pressable>
            </View>
          ))
        }
      </View>
    </>
  )
})

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    paddingLeft: 10,
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: 400,
    color: Colors.light
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  subContainer: {
    width: '25%',
    padding: 10,
    aspectRatio: '1/1'
  },
  pressable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.light,
    borderStyle: 'solid',
    borderRadius: 20
  },
  selected: {
    backgroundColor: Colors.light
  },
  icon: {
    marginRight: 0
  }
})
