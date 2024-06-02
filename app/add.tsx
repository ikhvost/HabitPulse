import SubHeader from '@/components/sub-header'
import { useTranslation } from 'react-i18next'
import { useCallback, useContext, useState } from 'react'
import { router } from 'expo-router'
import Config from '@/common/config'
import { getRandomHabitColor } from '@/common/colors'
import { ScrollView, StyleSheet, View } from 'react-native'
import Input from '@/components/input'
import IconSelectGrid from '@/components/icon-select-grid'
import HabitIcons, { getRandomHabitIcon } from '@/common/habit-icons'
import HabitsContext from '@/contexts/habits-context'
import Utils from '@/common/utils'

export default function Add() {
  const { t } = useTranslation()

  const { addHabit } = useContext(HabitsContext)

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [selectedIcon, setSelectedIcon] = useState<string>(HabitIcons[0])

  const onBackPress = useCallback(() => router.navigate('/'), [])
  const onConfirmPress = useCallback(() => {
    addHabit({
      title,
      description,
      iconName: selectedIcon || getRandomHabitIcon(),
      color: getRandomHabitColor(),
      points: Utils.generateHabitPoints(Config.DAYS_COUNT)
    })
    router.navigate('/')
  }, [title, description, selectedIcon, addHabit])

  return (
    <ScrollView>
      <SubHeader
        title={t('add.title')}
        onBackPress={onBackPress}
        onConfirmPress={onConfirmPress}
      />
      <View style={styles.container}>
        <Input
          maxLength={50}
          label={t('add.titleInput.label')}
          placeholder={t('add.titleInput.placeholder', { count: 50 })}
          value={title}
          onValueChange={setTitle}
        />
        <Input
          maxLength={100}
          label={t('add.descriptionInput.label')}
          placeholder={t('add.descriptionInput.placeholder', { count: 100 })}
          value={description}
          onValueChange={setDescription}
        />
        <IconSelectGrid
          selected={selectedIcon}
          icons={HabitIcons}
          onSelect={setSelectedIcon}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
})
