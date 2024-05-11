import React from 'react'
import { StyleSheet, Switch, SwitchProps } from 'react-native'

import { Colors } from '../../@common/styles/colors'

interface SwitchCompProps {
  isSwitch: boolean
  setIsSwitch: (value: boolean) => void
  thumbColor?: SwitchProps['thumbColor']
  trackColor?: SwitchProps['trackColor']
  scaleX?: number
  scaleY?: number
}

function SwitchComp(props: SwitchCompProps) {
  const {
    isSwitch,
    setIsSwitch,
    thumbColor = Colors.white,
    trackColor = {
      true: Colors.green,
      false: Colors.gray,
    },
    scaleX = 0.8,
    scaleY = 0.8,
  } = props
  const styles = createStyles(scaleX, scaleY)

  return (
    <Switch
      style={styles.container}
      value={isSwitch}
      thumbColor={thumbColor}
      trackColor={trackColor}
      onValueChange={setIsSwitch}
    />
  )
}

const createStyles = (scaleX: number, scaleY: number) =>
  StyleSheet.create({
    container: {
      transform: [{ scaleX }, { scaleY }],
    },
  })

export default SwitchComp
