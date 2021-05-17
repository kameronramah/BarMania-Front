import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

class ListeBars extends React.Component {
    render() {
        return(
            <View style={styles.listeBars}>

                <TouchableOpacity style={styles.btnProfil}>
                    <Image style={styles.imageProfil} source={require('../../images/user.png')}/>
                </TouchableOpacity>

                <Image style={styles.logo} source={require('../../images/logo.png')} />

                <ScrollView style={styles.scrollView}> 

                    
                </ScrollView>

                <View style={styles.viewButtons}>

                    <View style={styles.borderBottomWhite}>
                        <TouchableOpacity style={styles.btnMenu}>
                            <Image style={styles.imageCocktail} source={require('../../images/cocktail.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btnMenu}>
                            <Image style={styles.imageEvenement} source={require('../../images/fete.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btnMenu}>
                            <Image style={styles.imageCarte} source={require('../../images/position.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btnMenu}>
                            <Image style={styles.imageScan} source={require('../../images/ScanQRCode.png')}/>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }
}

export default ListeBars

const styles = StyleSheet.create({

    btnProfil: {
        marginTop: 12,
        marginLeft: 12,
        width: 40,
        height: 40,
        backgroundColor: '#4F9153',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfil: {
        width: 20,
        height: 40,
        resizeMode: 'contain'
    },
    logo: {
        marginTop: -35,
        width: 250,
        height: 140,
        margin: 'auto'
    },
    scrollView: {
        border: '1px solid black',
        marginTop: -20,
        height: 430
    },
    viewButtons: {
        margin: 'auto',
        width: 340,
        justifyContent: 'space-evenly',
        marginTop: 30,
        flexDirection: 'row'
    },
    borderBottomWhite: {
        borderBottomWidth: 2,
        paddingBottom: 7,
        borderBottomColor: 'white'
    },
    btnMenu: {
        width: 46,
        height: 46,
        backgroundColor: '#4F9153',
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCocktail: {
        width: 28,
        height: 46,
        resizeMode: 'contain'
    },
    imageEvenement: {
        width: 30,
        height: 46,
        resizeMode: 'contain'
    },
    imageCarte: {
        width: 30,
        height: 38,
        resizeMode: 'contain'
    },
    imageScan: {
        width: 30,
        height: 38,
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