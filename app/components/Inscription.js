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

        const { latitude, longitude } = this.props.route.params

        const sendData = () => {
    
            if(this.state.pseudo != '' && this.state.nom != '' && this.state.prenom != '' && this.state.email != '' && this.state.mdp != '' && this.state.cmdp != '') {
                if(this.state.mdp === this.state.cmdp) {
                    let data = {
                        "pseudo": this.state.pseudo,
                        "nom": this.state.nom,
                        "prenom": this.state.prenom,
                        "email": this.state.email,
                        "mdp": md5(this.state.mdp)
                    }
            
                    fetch("http://localhost:3001/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:  JSON.stringify(data)
                    })
                    .then(async (response) => {
                        if(response.status == 200) {
                            this.props.navigation.navigate('ListeBars', {latitude: latitude,longitude: longitude, pseudo: this.state.pseudo, email: this.state.email, password: md5(this.state.mdp), idEvenement: null})
                        }
                        return response.json()
                    })
                    .then(function(data) {
                        alert(data)
                    })
                }
                else {
                    alert('Les mots de passes ne sont pas identiques.')
                }
            }
            else {
                alert('Tous les champs ne sont pas remplis.')
            }
                          
        }

        return(
            <View>
                <Image style={styles.logo} source={require('../../images/barmania_logo.png')} />

                <TextInput onChangeText={text => this.setState({ pseudo: text})} style={styles.textInput} placeholder="Pseudo"/>

                <TextInput onChangeText={text => this.setState({ nom: text})} style={styles.textInput} placeholder="Nom"/>

                <TextInput onChangeText={text => this.setState({ prenom: text})} style={styles.textInput} placeholder="Prenom"/>

                <TextInput onChangeText={text => this.setState({ email: text})} style={styles.textInput} placeholder="Email"/>

                <TextInput onChangeText={text => this.setState({ mdp: text})} style={styles.textInput} placeholder="Mot de passe"
                secureTextEntry={true}/>

                <TextInput onChangeText={text => this.setState({ cmdp: text})} style={styles.textInput} placeholder="Confirmer mot de passe"
                secureTextEntry={true}/>

                <TouchableOpacity onPress={sendData} style={styles.button}>
                    <Text style={styles.btnText}>INSCRIPTION</Text>
                </TouchableOpacity>

                <Text style={styles.textConnect} onPress={() =>
                    this.props.navigation.navigate('Connexion')
                }>Connectez-vous</Text> 
            </View>
        )
    }   
}

export default Inscription


const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 160,
        margin: 'auto',
        marginBottom: -10,
        resizeMode: 'contain'
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