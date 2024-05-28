import { router } from 'expo-router'
import { useCallback } from 'react'
import MainHeader from '@/components/main-header'
import { useTranslation } from 'react-i18next'

export default function Index() {
  const { t } = useTranslation()
  const onAddPress = useCallback(() => router.navigate('/add'), [])

  return (
    <>
      <MainHeader title={t('index.title')} onAddPress={onAddPress}/>
    </>
  )
}
