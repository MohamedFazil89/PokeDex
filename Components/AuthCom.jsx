import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, TextInput, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Auth(){
    const navigation = useNavigation();
    // const position = new Animated.ValueXY({ x: 0, y: -500})
    const position = new Animated.Value(0)


    useEffect(() =>{
        Animated.spring(position, {
            // toValue: { x: 0, y: -200},
            toValue: 1.1,
            speed: 0,
            velocity: 1,
            // tension: 80,
            useNativeDriver: true

        }).start()
    })

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={require("../assets/OtherAssets/pokeball.png")} style={ styles.backTop}  />
                <Animated.Image source={require("../assets/OtherAssets/logo.png")} style={[ styles.image, {
                    transform: [ { scale: position }]
                } ]}  
                resizeMode="cover" />
                <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Trainer Name"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                  />
                  <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}

                  />
                  
                  <TextInput

                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}

                  />
                  <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Starter")}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1D1D',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
    },
    image: {
        position: "absolute",
        top: 150,
        // left: 0
    },
    backTop: {
        position: 'absolute',
        top: -90,
    },
    form:{
        width: '100%',
        alignItems: 'center',
        marginBottom: -100,
        

    },


    input: {
        height: 40,
        backgroundColor: "black",
        width: 300,
        marginBottom: 20,
        padding: 10,
        margin: 10,
        color: 'white'
    },

    button:{
        backgroundColor: 'yellow',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    buttonText:{
        color: 'black',
        fontSize: 25,
    }
})