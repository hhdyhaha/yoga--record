import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Stats () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='stats'>
      <Text>Stats Page！</Text>
    </View>
  )
}
