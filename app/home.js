import { Stack } from "expo-router";
import { SafeAreaView,ScrollView,View, } from "react-native";
import { COLORS, icons, images } from "../constants";

const home = () => {
  return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerLeft:()=>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default home