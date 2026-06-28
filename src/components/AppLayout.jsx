import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync().catch(() =>{})
export default function AppLayout({children}) {
    const [fontsLoaded,fontsError] = useFonts({
        soraRegular:require("../assets/fonts/sora.regular.ttf"),
        soraMedium:require("../assets/fonts/sora.medium.ttf"),
        soraSemiBold:require("../assets/fonts/sora.semibold.ttf"),
    })

    const onLayout = useCallback(async () => {
        if( fontsLoaded || fontsError){
            await SplashScreen.hideAsync();
        }

    },[fontsLoaded, fontsError]);

    if(!fontsLoaded && !fontsError){
        return null;
    }
  return (
    <View style={{flex:1}} onLayout={onLayout}>
      {children}
    </View>
  )
}