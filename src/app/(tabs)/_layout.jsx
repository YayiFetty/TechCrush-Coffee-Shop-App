import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabsIconConfig } from '../../constants/forTabs/tabsIconConfig'
import TabIcons from '../../components/forTabs/TabIcons'
import { TabNames } from '../../constants/forTabs/tabsName'

export default function TabsLayout() {
  return (
    <Tabs initialRouteName={TabNames.HOME} screenOptions={{headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:"#fff",
            height:100,
            alignSelf:"center",
            borderRadius:40,
            marginHorizontal:0,
            borderTopWidth:0,
            position:"absolute",
            bottom:0,
            shadowOpacity:0,
            elevation:0
        },
        tabBarItemStyle:{
            justifyContent:"center",
            alignItems:"center",
            paddingVertical:0,
            height:"100%"
        },
        tabBarIconStyle:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"}
    }}>
        
        {TabsIconConfig.map((tab) => (
            <Tabs.Screen key={tab.label} 
            name={tab.name} 
            options={{
                
                tabBarIcon:({focused}) =>(
                    <TabIcons focused={focused} iconFilled={tab.iconFilled} iconOutline={tab.iconOutline}/>
                )
            }}/>
        ))}
        
  </Tabs>
  )
}