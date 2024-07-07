import { Colors } from '../../../@common/styles/colors'
import { SafeAreaView, Text } from 'react-native'
import { TextInput, View } from 'react-native'

function CommentTextInputComp() {
  return (
    <SafeAreaView>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          bottom: 0,
          marginBottom: 12,
          paddingHorizontal: 20,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: 'skyblue' }} />
        <View
          style={{
            backgroundColor: '#f3f3f3',
            width: '84%',
            height: 40,
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 50,
            justifyContent: 'space-between',
            paddingHorizontal: 6,
          }}>
          <TextInput
            style={{
              width: '80%',
              height: 40,
            }}
          />
          <View style={{ width: 45, height: 30, backgroundColor: Colors.green, borderRadius: 20 }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CommentTextInputComp
