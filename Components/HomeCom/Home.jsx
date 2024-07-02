import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";


export default function Home(){
    // const navigation = useNavigation();
    return(
        <View style={style.Container}>
            <Text>Home</Text>
        </View>
    );
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})