import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, ImageBackground, FlatList, Dimensions } from "react-native";
// import { useNavigation } from "@react-navigation/native";


export default function Home() {
    // const navigation = useNavigation();
    const types = [
        {
            id: 1,
            type: "Fire"
        },
        {
            id: 2,
            type: "Water"
        },
        {
            id: 3,
            type: "Grass"
        },
        {
            id: 4,
            type: "Electric"
        }
    ]

    

    const numColumns = 2; // Number of columns in the grid
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / numColumns - 20;
    console.log(itemWidth);
    


    return (
        <SafeAreaView style={style.Container}>
            <View style={style.Head}>
                <Text style={style.Text}>Welcome Trainer!</Text>
                <View style={style.user}>
                    <Image style={style.userimage} source={require('../assets/pokemon/1.png')} resizeMode="cover" />
                </View>
            </View>

            {/*  */}
            <ImageBackground source={require("../assets/pokemon/firebg.png")} resizeMode="cover" style={style.introComponent}>
                <View>
                    <Text style={style.introName}>Charizard</Text>
                    <Text style={style.introtype}>Fire type Pokemon</Text>
                </View>
                <View>
                    <Image style={style.introImage} source={require("../assets/pokemon/Charmander.png")} />
                </View>


            </ImageBackground>
            <View style={style.typeCon}>
                <FlatList
                    data={types}
                />
            </View>



        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#141414",
        // backgroundColor: 'white',
        flexDirection: 'column'
    },

    Head: {
        width: "100%",
        // alignItems: 'center',
        position: "absolute",
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text: {
        fontSize: 30,
        color: "white",
        textAlign: "left",
        margin: 10,
        padding: 10,

    },

    user: {
        margin: 'auto',
        borderRadius: 500,
        backgroundColor: 'white',
        padding: 5,
        borderWidth: 2,
        borderColor: "black",
    },

    userimage: {
        width: 40,
        height: 40,
        margin: "auto",
        borderRadius: 500,
    },


    introComponent: {
        width: "100%",
        height: 110,
        // backgroundColor: "#B84400",
        // backgroundColor: "white",
        top: 150,
        position: 'absolute',
        flexDirection: "row",
        borderRadius: 20,
        // 
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 120 },
        shadowOpacity: 1.58,
        shadowRadius: 17.00,
        elevation: 100,
        // position: "relative",

    },
    introName: {
        fontSize: 20,
        margin: 10,
        color: 'white'
    },
    introtype: {
        fontSize: 15,
        margin: 10,
        color: 'white'
    },
    introImage: {
        resizeMode: 'cover',
        width: 200,
        height: 210,
        justifyContent: 'space-between',
        elevation: 100,
    },
    typeCon: {
        width: 200,
        height: 210,
        display: "grid",
        justifyContent: 'space-between',
        flexDirection: "row"


    }


})