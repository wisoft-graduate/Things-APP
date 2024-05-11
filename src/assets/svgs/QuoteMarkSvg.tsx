import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function QuoteMarkSvg({ width = 85, height = 50, color = '#CBF147' }) {
  return (
    <View style={{ width: width, height: height }}>
      <Svg width="100%" height="100%" viewBox="0 0 85 50" fill="none">
        <Path
          d="M35.416 43.75L14.6868 43.75L14.6868 23L22.9994 6.375L33.3327 6.375L25.0618 23L35.416 23L35.416 43.75Z"
          fill={color}
        />
        <Path
          d="M70.416 43.75L49.6868 43.75L49.6868 23L57.9994 6.375L68.3327 6.375L60.0618 23L70.416 23L70.416 43.75Z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default QuoteMarkSvg
