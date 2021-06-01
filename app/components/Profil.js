import React from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'


class Profil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            email: '',
            password: '',
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
        if(this.props.route.params.password !== prevProps.route.params.password) {
            this.setState({password: this.props.route.params.password})
        }
        if(this.props.route.params.idEvenement !== prevProps.route.params.idEvenement) {
            this.setState({idEvenement: this.props.route.params.idEvenement})
        }  
    }

    render() {

        const { email } = this.props.route.params
        
        const saveData = () => {
            if(this.state.pseudo != '' && this.state.email != '') {
                if(this.state.email == email) {
                    let data = {
                        "pseudo": this.state.pseudo,
                        "email": this.state.email
                    }

                    fetch("https://glacial-bastion-48106.herokuapp.com/profilPseudo/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:  JSON.stringify(data)
                    })
                    .then(async (response) => {
                        if(response.status == 200) {
                            this.props.navigation.navigate('ListeBars', {latitude: this.state.latitude, longitude: this.state.longitude, pseudo: this.state.pseudo, email: this.state.email, password: this.state.password, idEvenement: this.state.idEvenement})
                        }
                        return response
                    })
                }
                else {
                    let data = {
                        "pseudo": this.state.pseudo,
                        "emailActuel": email,
                        "emailModif": this.state.email
                    }
    
                    fetch("https://glacial-bastion-48106.herokuapp.com/profil/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:  JSON.stringify(data)
                    })
                    .then(async (response) => {
                        if(response.status == 200) {
                            this.props.navigation.navigate('ListeBars', {latitude: this.state.latitude,longitude: this.state.longitude, pseudo: this.state.pseudo, email: this.state.email, password: this.state.password, idEvenement: this.state.idEvenement})
                        }
                        return response
                    })
                }             
            }
            else {
                alert('Tous les champs ne sont pas remplis.')
            }
        }

        return (
            <View>
                <Image style={styles.logo} source={require('../../images/barmania_logo.png')}/>

                <TextInput onChangeText={text => this.setState({ pseudo: text})} style={styles.textInput} value={this.state.pseudo}/>

                <TextInput onChangeText={text => this.setState({ email: text})} style={styles.textInput} value={this.state.email}/>

                <View style={styles.viewPassword}>

                    <TextInput onChangeText={text => this.setState({ password: text})} style={[styles.textInput, styles.textInputPassword]} editable={false} value="Mot de passe"
                    secureTextEntry={true} />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangerMdp', {latitude: this.state.latitude,longitude: this.state.longitude, pseudo: this.state.pseudo, email: this.state.email, password: this.state.password, idEvenement: this.state.idEvenement})}>

                        <Image style={styles.image_edit} source={require('../../images/Edit.png')}/>

                    </TouchableOpacity>
                    

                </View>
                

                <TouchableOpacity 
                    onPress={saveData}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>SAUVEGARDER</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Profil

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
        color: '#fff',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        // placeholderTextColor: 'white',
        marginLeft: 60
    },
    textInputPassword: {
        marginRight: 17
    },
    viewPassword: {
        flexDirection: 'row'
    },
    image_edit: {
        width: 25,
        height: 25,
        marginTop: 15,
        marginRight: 15,
        resizeMode: 'contain'
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
        marginLeft: 12
    }
})