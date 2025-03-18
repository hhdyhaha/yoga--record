import { View, Text, Picker } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Form, Cell, Slider, Textarea, Toast } from "@taroify/core"
import { AtButton } from "taro-ui"

import { useState } from 'react'
import Taro from '@tarojs/taro'

import './index.scss'

export default function Record() {
  // 状态管理
  const [date, setDate] = useState(new Date('2025-03-17'))
  const [dateStr, setDateStr] = useState('2025年03月17日')
  const [dateValue, setDateValue] = useState('2025-03-17')
  const [duration, setDuration] = useState(120)
  const [selectedActions, setSelectedActions] = useState<string[]>([])
  const [feeling, setFeeling] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false)

  // 练习动作列表
  const actionList = [
    "站立前屈", "下犬式", "战士一式", "战士二式",
    "树式", "三角式", "鸽子式", "婴儿式"
  ]

  // 添加或移除练习动作
  const toggleAction = (action: string) => {
    if (selectedActions.includes(action)) {
      setSelectedActions(selectedActions.filter(item => item !== action))
    } else {
      setSelectedActions([...selectedActions, action])
    }
  }

  // 自定义添加动作
  const addCustomAction = () => {
    Taro.showToast({
      title: "自定义动作功能开发中",
      icon: 'none',
      duration: 2000
    })
  }

  // 处理日期变化
  const handleDateChange = (e) => {
    const value = e.detail.value
    setDateValue(value)
    
    // 转换为显示格式
    const [year, month, day] = value.split('-')
    setDateStr(`${year}年${month}月${day}日`)
  }

  const handleSubmit = () => {
    // 合并表单值与状态值
    const formData = {
      date: dateStr,
      duration,
      actions: selectedActions,
      feeling
    }
    console.log(formData)
    Taro.showToast({
      title: "保存成功",
      icon: 'success',
      duration: 2000
    })
  }

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='record-page'>
      <Toast id="toast" />
      
      <Form>
        <Cell.Group title="练习日期" className="record-group">
          <Cell>
            <Picker 
              mode='date' 
              value={dateValue}
              onChange={handleDateChange}
            >
              <View className="date-picker-field">
                {dateStr}
              </View>
            </Picker>
          </Cell>
        </Cell.Group>
        
        <Cell.Group title="练习时长" className="record-group">
          <Cell>
            <View className="slider-box">
              <Slider
                value={duration}
                min={5}
                max={180}
                step={1}
                onChange={setDuration}
                className="custom-slider"
              />
              <Text className="duration-text">{duration} 分钟</Text>
            </View>
          </Cell>
        </Cell.Group>
        
        <Cell.Group title="练习动作" className="record-group">
          <Cell>
            <View className="action-tags">
              {actionList.map(action => (
                <View 
                  key={action}
                  className={`action-tag ${selectedActions.includes(action) ? 'selected' : ''}`}
                  onClick={() => toggleAction(action)}
                >
                  {action}
                </View>
              ))}
              <View className="action-tag add-tag" onClick={addCustomAction}>
                添加
              </View>
            </View>
          </Cell>
        </Cell.Group>
        
        <Cell.Group title="练习感受" className="record-group">
          <Cell>
            <Textarea
              className="feeling-textarea"
              placeholder="记录一下今天的练习感受..."
              maxlength={200}
              value={feeling}
              onChange={(e) => setFeeling(e.detail.value)}
            />
          </Cell>
        </Cell.Group>
      </Form>
      
      <View className="submit-button-wrapper">
        <AtButton className="save-button" onClick={handleSubmit}>
          保存记录
        </AtButton>
      </View>
    </View>
  )
}
