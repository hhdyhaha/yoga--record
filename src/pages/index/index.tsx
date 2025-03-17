import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtCalendar } from "taro-ui"

import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

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
      </View>
    </View>
  )
}
