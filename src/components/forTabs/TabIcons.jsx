import { View, Text, StyleSheet } from 'react-native'

import {Ionicons} from "@expo/vector-icons"
import {COLORS} from "../../theme/colors"
export default function TabIcons({focused,iconOutline,iconFilled}) {
  return (
    <View style={styles.container}>
      <Ionicons name={focused ? iconFilled : iconOutline}
      color={focused ? COLORS.brand.primary : COLORS.title.title2}
      size={25}/>
      <View style={[styles.underLine, focused && styles.underLineActive]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width:"100%",
       alignItems:"center",
       justifyContent:"center",
      
    },
    underLine:{
        height:5,
        width:18,
        backgroundColor:"transparent",
        marginTop:6,
        alignSelf:"center"
    },
    underLineActive:{
        backgroundColor:COLORS.brand.primary
    }
})