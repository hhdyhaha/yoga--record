import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      {/* 分为头部，内容 */}
      <View className='header'>
        <Text>头部</Text>
      </View>
      <View className='content'>
        <Text>内容</Text>
      </View>
    </View>
  )
}
