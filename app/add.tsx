import SubHeader from '@/components/sub-header'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { router } from 'expo-router'
import HabitsStorage from '@/common/habits-storage'
import { DAYS_COUNT } from '@/common/constants'
import { getRandomHabitColor } from '@/common/colors'
import { ScrollView, StyleSheet, View } from 'react-native'
import Input from '@/components/input'
import HabitIconsGrid from '@/components/icons-grid'
import { getRandomHabitIcon } from '@/common/habit-icons'

export default function Add() {
  const { t } = useTranslation()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)

  const onBackPress = useCallback(() => router.navigate('/'), [])
  const onConfirmPress = useCallback(async () => {
    await HabitsStorage.insertHabit({
      title,
      description,
      iconName: selectedIcon || getRandomHabitIcon(),
      color: getRandomHabitColor(),
      points: new Array(DAYS_COUNT).fill(false)
    })
    router.navigate('/')
  }, [title, description, selectedIcon])

  return (
    <ScrollView>
      <SubHeader
        title={t('add.title')}
        onBackPress={onBackPress}
        onConfirmPress={onConfirmPress}
      />
      <View style={styles.container}>
        <Input
          label={t('add.titleInput.label')}
          placeholder={t('add.titleInput.placeholder')}
          value={title}
          onChangeText={setTitle}
        />
        <Input
          label={t('add.descriptionInput.label')}
          placeholder={t('add.descriptionInput.placeholder')}
          value={description}
          onChangeText={setDescription}
        />
        <HabitIconsGrid
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
