import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { backgroundImages } from '../../../assets/jsons/backgroundImage'

const { width } = Dimensions.get('window')

function OpinionCard({ item, index }) {
  const { push } = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        push('Detail', { params: item?.quotation?.id, index })
      }}
      style={{
        width: width / 3,
        height: width / 3,
        borderWidth: 1,
        borderColor: '#1F1F25',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
      }}>
      <Text
        style={{ position: 'absolute', zIndex: 10, fontSize: 15, fontWeight: '500', color: 'black' }}
        numberOfLines={3}>
        {item.quotation?.content}
      </Text>
      <Image
        style={{ width: width / 3, height: width / 3, opacity: 0.3 }}
        source={backgroundImages[index % 50].src}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )
}

export default OpinionCard
