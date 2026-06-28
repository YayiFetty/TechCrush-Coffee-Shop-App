import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { fonts, fontSize } from '../../theme/typography'

export default function CategoryScroll({onPress,title,active}) {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.container, active && styles.activeContainer]}>
    <Text style={[styles.text, active && styles.activeText]}>
        {title}
    </Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
container:{
    paddingVertical:14,
    paddingHorizontal:18,
    marginRight:20,
    borderRadius:10,
    backgroundColor:COLORS.text.primary2
},
activeContainer:{
 backgroundColor:COLORS.brand.primary
},
text:{
    color:COLORS.text.primary,
    fontSize:fontSize.sm,
    fontFamily:fonts.semiBold
},
activeText:{
    color:COLORS.title.title1,

}
})