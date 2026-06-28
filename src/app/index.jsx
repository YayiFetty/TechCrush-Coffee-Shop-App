import { View, Text, Dimensions } from 'react-native'

import Onboarding from "../components/Onboarding"

// const {width, height} = Dimensions.get('window');
// const ios = Platform.OS == 'ios';
export default function Rootindex() {
  return (
    <View style={{flex:1}}>
      <Onboarding/>
    </View>
  )
}