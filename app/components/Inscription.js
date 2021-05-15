import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import md5 from 'md5'

class Inscription extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          pseudo: '',
          nom: '',
          prenom: '',
          email: '',
          mdp: '',
          cmdp: ''
        }
    }

    

    render(){

        function sendData() {
            alert('test')
        }

        console.log(this.state.mdp)
        return(
            <View style={styles.inscription}>
                <Image style={styles.logo} source={require('../../images/logo.png')} />

                <TextInput onChangeText={text => this.setState({ pseudo: text})} style={styles.textInput} placeholder="Pseudo"
                underlineColorAndroid={'transparent'}/>

                <TextInput onChangeText={text => this.setState({ nom: text})} style={styles.textInput} placeholder="Nom"
                underlineColorAndroid={'transparent'}/>

                <TextInput onChangeText={text => this.setState({ prenom: text})} style={styles.textInput} placeholder="Prenom"
                underlineColorAndroid={'transparent'}/>

                <TextInput onChangeText={text => this.setState({ email: text})} style={styles.textInput} placeholder="Email"
                underlineColorAndroid={'transparent'}/>

                <TextInput onChangeText={text => this.setState({ mdp: md5(text)})} style={styles.textInput} placeholder="Mot de passe"
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <TextInput onChangeText={text => this.setState({ cmdp: md5(text)})} style={styles.textInput} placeholder="Confirmer mot de passe"
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <TouchableOpacity onPress={sendData} style={styles.button}>
                    <Text style={styles.btnText}>INSCRIPTION</Text>
                </TouchableOpacity>

                <Text style={styles.textConnect} onPress={() =>
                    this.props.navigation.navigate('Connexion')
                }>Connectez-vous</Text> 
            </View>
        );
    }
}

export default Inscription


const styles = StyleSheet.create({
    inscription: {
        backgroundColor: '#73B479'
    },
    logo: {
        width: 250,
        height: 140,
        margin: 'auto'
    },
    textInput: {
        backgroundColor: '#73B479',
        height: 40,
        width: '70%',
        marginBottom: 20,
        color: '#fff',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        placeholderTextColor: 'white',
        margin: 'auto'
    },
    button: {
        textAlign: 'center',
        backgroundColor: 'white',
        marginTop: 30,
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
        marginTop: 40,
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        paddingBottom: 30
    }
})