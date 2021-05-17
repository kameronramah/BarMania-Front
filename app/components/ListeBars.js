import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import CelluleBar from './CelluleBar'

class ListeBars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bars: ''
        }
    }

    async componentDidMount() {
        const { latitude, longitude } = this.props.route.params
        const response = await fetch(`http://localhost:3001/listebars/${latitude}/${longitude}`)
        const data = await response.json()
        this.setState({bars: data})
    }

    render() {

        let allBars = []
        for(const y of this.state.bars) {
            allBars.push(<CelluleBar id={y.idbar} nombar={y.nombar} adresse={`${y.rue}, ${y.ville}, ${y.codepostal}`} numerotel={y.numerotel}></CelluleBar>)
        }

        return(
            <View style={styles.listeBars}>

                <TouchableOpacity style={styles.btnProfil}>
                    <Image style={styles.imageProfil} source={require('../../images/user.png')}/>
                </TouchableOpacity>

                <Image style={styles.logo} source={require('../../images/barmania_logo.png')} />

                <ScrollView style={styles.scrollView}> 
                    {allBars}
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
        marginTop: -55,
        width: 240,
        height: 150,
        margin: 'auto',
        resizeMode: 'contain'
    },
    scrollView: {
        marginTop: -5,
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
    tableauBars: {
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'row'
    }
    
})