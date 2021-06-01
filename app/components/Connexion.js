import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'
import md5 from 'md5'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

class Connexion extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            mdp: '',
            latitude: '',
            longitude: '',
            geocode: null,
            errorMessage: ''
        }
        
    }

    getLocationAsync = async () => {
        Location.setGoogleApiKey('AIzaSyDiGxBLu5mbje7UF4UOzeKfNVwGkU17LGE')
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'La permission d`accès à la localisation à été refusée',
          })
        }
    
        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
        const { latitude , longitude } = location.coords
        this.getGeocodeAsync({latitude, longitude})
        this.setState({ latitude, longitude})
    }

    getGeocodeAsync= async (location) => {
        let geocode = await Location.reverseGeocodeAsync(location)
        this.setState({ geocode })
    }

    componentDidMount() {
        this.getLocationAsync()
    }

    render(){

        const connect = () => {
            if(this.state.email != '' && this.state.mdp != '') {
                let data = {
                    "email": this.state.email,
                    "mdp": md5(this.state.mdp)
                }

                fetch("https://glacial-bastion-48106.herokuapp.com/connexion", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:  JSON.stringify(data)
                })
                .then( async(response) => {
                    if(response.status == 200) {
                        const rep = await fetch(`https://glacial-bastion-48106.herokuapp.com/infosUser/${this.state.email}`)
                        const data = await rep.json()
                        this.props.navigation.navigate('ListeBars', {latitude: this.state.latitude, longitude: this.state.longitude, pseudo: data.pseudo, email: data.email, password: data.password, idEvenement: data.idevenement})
                    }
                    return response
                })
            }
            else {
                alert('Tous les champs ne sont pas remplis.')
            }
        }

        return(
            <View>
                <Image style={styles.logo} source={require('../../images/barmania_logo.png')} />

                <TextInput onChangeText={text => this.setState({ email: text})} style={styles.textInput} placeholder="Email"/>

                <TextInput onChangeText={text => this.setState({ mdp: text})} style={styles.textInput} placeholder="Mot de passe"
                secureTextEntry={true} />

                <Text style={styles.forgetPassword}>Mot de passe oublié ?</Text>

                <TouchableOpacity onPress={connect} style={styles.button}>
                    <Text style={styles.btnText}>CONNEXION</Text>
                </TouchableOpacity>

                <Text style={styles.textConnect} onPress={() =>
                    this.props.navigation.navigate('Inscription', {latitude: this.state.latitude, longitude: this.state.longitude})
                }>Inscrivez-vous</Text> 
            </View>
        );
    }
}

export default Connexion

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 160,
        marginLeft: 80,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    textInput: {
        backgroundColor: '#73B479',
        height: 40,
        width: '70%',
        marginBottom: 40,
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        // placeholderTextColor: 'white',
        marginLeft: 60
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
        marginLeft: 130,
        padding: 15,
        borderRadius: 40
    }, 
    btnText: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 20
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