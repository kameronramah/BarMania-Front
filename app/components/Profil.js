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
            latitude: '',
            longitude: ''
        }
    }

    componentDidMount() {
        const { pseudo, email, password, latitude, longitude } = this.props.route.params
        this.setState({pseudo, email, password, latitude, longitude})
    }

    componentDidUpdate(prevProps) {
        if(this.props.route.params.password !== prevProps.route.params.password) {
            this.setState({password: this.props.route.params.password})
        }
        console.log(this.state.password)       
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

                    fetch("http://localhost:3001/profilPseudo/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:  JSON.stringify(data)
                    })
                    .then(async (response) => {
                        if(response.status == 200) {
                            this.props.navigation.navigate('ListeBars', {latitude: this.state.latitude, longitude: this.state.longitude, pseudo: this.state.pseudo, email: this.state.email, password: this.state.password})
                        }
                        return response.json()
                    })
                }
                else {
                    let data = {
                        "pseudo": this.state.pseudo,
                        "emailActuel": email,
                        "emailModif": this.state.email
                    }
    
                    fetch("http://localhost:3001/profil/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:  JSON.stringify(data)
                    })
                    .then(async (response) => {
                        if(response.status == 200) {
                            this.props.navigation.navigate('ListeBars', {latitude: this.state.latitude,longitude: this.state.longitude, pseudo: this.state.pseudo, email: this.state.email, password: this.state.password})
                        }
                        return response.json()
                    })
                    .then(function(data) {
                        alert(data)
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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangerMdp', {latitude: this.state.latitude,longitude: this.state.longitude, pseudo: this.state.pseudo, email: this.state.email, password: this.state.password})}>

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
        margin: 'auto',
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
        placeholderTextColor: 'white',
        margin: 'auto'
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
        margin: 'auto',
        padding: 15,
        borderRadius: 40
    },
    btnText: {
        color: 'black',
        fontWeight: 'bold'
    }
})