import { View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { AtCalendar,AtButton } from "taro-ui"

import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  // 记录练习
  const handleRecordPractice = () => {
    Taro.switchTab({
      url: '/pages/record/index',
    })
  }

  return (
    <View className='index'>
      {/* 分为头部，内容 */}
      <View className='at-row at-row__justify--between header'>
        <View className='at-col at-col-5'>header-left</View>
        <View className='at-col at-col-5'>header-right</View>
      </View>

      <View className='content'>
        {/* 日历 */}
        <View className='calendar'>
          <AtCalendar />
        </View>

        {/* 按钮 */}
        <View className='button'>
          <AtButton circle onClick={handleRecordPractice}>按钮</AtButton>
        </View>
      </View>
    </View>
  )
}
