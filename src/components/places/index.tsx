import { Text, useWindowDimensions, View } from "react-native"
import { Place, PlaceProps } from "../place"
import { useRef } from "react"
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { s } from "./styles"
import { router } from "expo-router"

type Props = {
    data: PlaceProps[]
}

export function Places({data}: Props) {
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place data={item} onPress={() => router.navigate({ pathname: '/market/[id]', params: { id: item.id } })} />}
                contentContainerStyle={s.content}
                ListHeaderComponent={() => (
                    <Text style={s.title}>Explore locais perto de você</Text>
                )}
            />
        </BottomSheet>
    )
}