import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class MotdePasseOublier extends React.Component {
    render(){
        return(
            <View style={styles.motdePasseOublier}>
                <Text style={styles.body}>Mot de passe oublié </Text>

                

                <TextInput style={styles.textinput} placeholder="Mot de passe"
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <Text style={styles.body}>Entrer votre nouveau mot de passe </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Valider</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    motdePasseOublier: {
        alignSelf: 'stretch',
    },
    body: {
        fontSize: 24,
        color: '#000000',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#000000',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    }, 
    btntext: {
        color: '#000000',
        fondWeignt: 'bold',
    }
});