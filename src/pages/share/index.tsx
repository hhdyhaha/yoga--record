import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Share () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='share'>
      <Text>Share Page！</Text>
    </View>
  )
}
