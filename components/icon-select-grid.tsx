import { Pressable, StyleSheet, View, Text } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Colors from '@/common/colors'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

type IconSelectGridProps = {
  selected: string,
  icons: string[],
  onSelect: (iconName: string) => void
}

export default memo(function IconSelectGrid({ icons, selected, onSelect }: IconSelectGridProps) {
  const { t } = useTranslation()

  return (
    <>
      <Text style={styles.title}>{t('add.iconsGrid.title')}</Text>
      <View style={styles.container} accessibilityRole="radiogroup" accessibilityLabel={t('add.iconsGrid.title')}>
        {
          icons.map((icon) => (
            <View style={styles.subContainer} key={icon}>
              <Pressable
                accessibilityRole="radio"
                accessibilityLabel={icon}
                accessibilityState={{ checked: selected === icon }}
                style={{ ...styles.pressable, ...icon === selected && styles.selected }}
                onPress={() => onSelect(icon)}
              >
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
    flex: 1,
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
