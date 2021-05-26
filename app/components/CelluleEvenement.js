import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TOuchableOpacity,
    TouchableOpacity
} from 'react-native'

const CelluleEvenement = (props) => {

    let inscription

    if(props.nbInscrit < props.limiteInscrit) {
        inscription = <TouchableOpacity style={styles.bouton}>
                    <Text style={styles.textBouton}>S'inscrire</Text>
                </TouchableOpacity>
    }
    else {
        inscription = <Text style={styles.textComplet}>COMPLET</Text> 
    }

    return(
        <View style={styles.cellule}>
            <Text style={styles.text}>{props.nomevenement} : {props.horaire}</Text>
            {inscription}
        </View>
    )
}

export default CelluleEvenement

const styles = StyleSheet.create( {
    cellule: {
        flexDirection: 'row',
        marginTop: -35,
        justifyContent: 'center',
        textAlign: 'center',
        border: '2px solid black',
        borderTopWidth: '0px',
        padding: 4,
        marginBottom: 35
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        margin: 'auto'
    },
    bouton: {
        textAlign: 'center',
        backgroundColor: 'white',
        width: 80,
        height: 30,
        padding: 5,
        borderRadius: 5,
        margin: 'auto'
    },
    textComplet: {
        color: 'red', 
        fontWeight: 'bold',
        margin: 'auto'
    }
})