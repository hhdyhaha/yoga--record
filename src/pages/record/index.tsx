import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Record () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='record'>
      <Text>Record Page！</Text>
    </View>
  )
}
