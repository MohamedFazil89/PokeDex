import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, Animated} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function  StartPoke(){
    const navigation = useNavigation();
    const [Anime, setAnime] = useState(false);
    const [select, setSelect] = useState(null);
    const [Pokemon, setPokemon] = useState("NONE")

    const Position = useRef(new Animated.ValueXY({ x: 0, y: 0})).current;

    const StartAnimation = () =>{
        Animated.spring(Position,{
            toValue: {x: 0, y: 150},
            duration: 2000,
            speed: 10,
            bounciness: 10,
            useNativeDriver: true,
            
        }).start();

    }

    const handleClick = (Number) => () => {
        setSelect(Number);
        StartAnimation();
        setAnime(true);
        Number === 1 ? setPokemon("Bulbasaur") : Number === 2 ? setPokemon("Squirtle") : setPokemon("Charmander")

        setTimeout(() =>{
            navigation.navigate("Home");
            setAnime(false)
        },2000)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={ styles.Heading}>Welcome Trainer!!</Text>
            <View style={styles.Sub}>
                <Text style={styles.Sub2}>Choose Your Stater Pokemon for your Journey</Text>
                <View style={styles.Pokemons}>
                { select == 1 || select == null  ? (<TouchableOpacity style={[styles.Button, { backgroundColor: 'lightgreen', transform: [{ translateY: Position.y}]}]} onPress={handleClick(1,"Pikachu")}>

                    <Image style={styles.circle} source={require("../assets/pokemon/1.png")} resizeMode="cover" />
                </TouchableOpacity>) : ""}
                {select == 1 || select == null && <Text style={styles.name}>Bulbasaur</Text>}



                {/*  */}
               { select == 2 || select == null ? <TouchableOpacity style={[styles.Button, { backgroundColor: 'lightblue', transform:[{ translateY: Position.y}]}]} onPress={handleClick(2)}>
                    <Image style={styles.circle} source={require("../assets/pokemon/7.png")} resizeMode="cover" />
                </TouchableOpacity> : ""}
                { select == 2 || select == null && <Text style={styles.name}>Squirtle
                </Text>}

                {/*  */}
                { select == 3 || select == null  ? <TouchableOpacity style={[styles.Button, { backgroundColor: 'orange', transform:[ { translateY: Position.y}]}]} onPress={handleClick(3)}>
                    <Image style={styles.circle} source={require("../assets/pokemon/4.png")} resizeMode="cover" />
                </TouchableOpacity> : ""}
                {select == 3 || select == null && <Text style={styles.name}>Charmander</Text> }
                { Anime ? <Text style={styles.ChooseText}>You Choose  {Pokemon}</Text> : ""}




                </View>
                
                
            </View>          
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1D1D',
        alignItems: 'center',
        // justifyContent: 'center',
        
    },
    Heading: {
        fontSize: 60,
        position: 'absolute',
        top: 50,
        left: 5,
        color: 'white'
    },
    Sub: {
        position: "relative",
        top: 200,
        // margin:20,

    },

    Sub2:{
        fontSize: 25,
        color: 'white'

        

        

    },

    Button: {
        // position: "relative",
        margin: 'auto',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 100,
        backgroundColor: 'lightgreen',
        padding: 10,
        borderStartColor: 'red'
       
        
        
        // marginBottom: 40
    },
    Pokemons:{
        flexDirection: "column",
        margin: 10,
        padding: 10,
       


    },

    circle:{
        width: 100,
        height: 100,
        // backgroundColor: 'red',
        borderRadius: 50,
        margin: 'auto'
        
       

    },
    name:{
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },

    ChooseText:{
        color: "white",
        fontSize: 40,
        margin: "auto",
        transform: [{ translateY: 150}],
        // width: "100%"
    }

})