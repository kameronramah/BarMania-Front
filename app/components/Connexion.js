import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

class Connexion extends React.Component {
    render(){
        return(
            <View style={styles.connexion}>
                <Image style={styles.logo} source={require('../../images/logo.png')} />

                <TextInput style={styles.textInput} placeholder="Pseudo"
                underlineColorAndroid={'transparent'}/>

                <TextInput style={styles.textInput} placeholder="Mot de passe"
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <Text style={styles.forgetPassword}>Mot de passe oublié ?</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>CONNEXION</Text>
                </TouchableOpacity>

                <Text style={styles.textConnect} onPress={() =>
                    this.props.navigation.navigate('Inscription')
                }>Inscrivez-vous</Text> 
            </View>
        );
    }
}

export default Connexion

const styles = StyleSheet.create({
    connexion: {
        backgroundColor: '#73B479'
    },
    logo: {
        width: 250,
        height: 140,
        margin: 'auto',
        marginBottom: 30
    },
    textInput: {
        backgroundColor: '#73B479',
        height: 40,
        width: '70%',
        marginBottom: 40,
        color: '#fff',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        placeholderTextColor: 'white',
        margin: 'auto'
    },
    forgetPassword: {
        textDecorationLine: 'underline',
        marginLeft: '50%',
        color: 'white'
    },
    button: {
        textAlign: 'center',
        backgroundColor: 'white',
        marginTop: 120,
        width: 150,
        height: 50,
        margin: 'auto',
        padding: 15,
        borderRadius: 40
    }, 
    btnText: {
        color: 'black',
        fontWeight: 'bold'
    },
    textConnect: {
        fontSize: 17,
        marginTop: 100,
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        paddingBottom: 30
    }
});