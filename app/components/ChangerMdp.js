import React from 'react'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native'
import md5 from 'md5'

class ChangerMdp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            email: '',
            password: '',
            confirmPassword: '',
            idEvenement: '',
            latitude: '',
            longitude: ''
        }
    }

    componentDidMount() {
        const { pseudo, email, password, latitude, longitude, idEvenement } = this.props.route.params
        this.setState({pseudo, email, password, latitude, longitude, idEvenement})
    }

    componentDidUpdate(prevProps) {
        if(this.props.route.params.pseudo !== prevProps.route.params.pseudo) {
            this.setState({pseudo: this.props.route.params.pseudo})
        }
        if(this.props.route.params.email !== prevProps.route.params.email) {
            this.setState({email: this.props.route.params.email})
        }
        if(this.props.route.params.password !== prevProps.route.params.password) {
            this.setState({password: this.props.route.params.password})
        }
        if(this.props.route.params.idEvenement !== prevProps.route.params.idEvenement) {
            this.setState({idEvenement: this.props.route.params.idEvenement})
        }
        
    }

    render() {

        const saveData = () => {
            if(this.state.password != '' && this.state.confirmPassword != '') {
                if(this.state.password == this.state.confirmPassword) {
                    let data = {
                        "password": this.state.password,
                        "email": this.state.email
                    }

                    fetch("https://glacial-bastion-48106.herokuapp.com/profilPassword/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:  JSON.stringify(data)
                    })
                    .then(async (response) => {
                        if(response.status == 200) {
                            this.props.navigation.navigate('Profil', {latitude: this.state.latitude, longitude: this.state.longitude, pseudo: this.state.pseudo, email: this.state.email, password: this.state.password, idEvenement: this.state.idEvenement})
                        }
                        return response
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

        return (
            <View style={styles.view}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                    <Image style={styles.back} source={require('../../images/fleche-gauche.png')}/>    
                </TouchableOpacity>

                <Text style={styles.titre}>Modifier mon mot de passe</Text>

                <Text style={styles.text}>Saisissez votre nouveau mot de passe</Text>

                <TextInput onChangeText={text => this.setState({password: md5(text)})} placeholder="Mot de passe" style={[styles.textInput, {marginTop: 30}]} secureTextEntry={true}/>

                <TextInput onChangeText={text => this.setState({confirmPassword: md5(text)})} placeholder="Confirmation mot de passe" style={styles.textInput} secureTextEntry={true}/>
                
                <TouchableOpacity 
                    onPress={saveData}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>VALIDER</Text>
                </TouchableOpacity>

            </View>
        
        )
    }
}

export default ChangerMdp

const styles = StyleSheet.create({
    view: {
        padding: 16,
        marginTop: 10
    },
    back: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    titre: {
        marginTop: 20,
        color: 'white',
        fontSize: 23,
        textDecorationLine: 'underline'
    },
    text: {
        marginTop: 50,
        color: 'white',
        fontSize: 15
    },
    textInput: {
        height: 40,
        width: '80%',
        marginBottom: 40,
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        // placeholderTextColor: 'white'
    },
    button: {
        textAlign: 'center',
        backgroundColor: 'white',
        marginTop: 120,
        width: 150,
        height: 50,
        marginLeft: 110,
        padding: 15,
        borderRadius: 40
    },
    btnText: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 30
    }
})