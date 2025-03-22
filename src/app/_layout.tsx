import { colors } from "@/styles/theme"
import { Stack } from "expo-router"
import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"
import { Loading } from "@/components/loading"

export default function Layout() {

    const [fontsLoader] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if(!fontsLoader){
        return <Loading/>
    }
 
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.gray[100] }
            }}
        />
    )
}