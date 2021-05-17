import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const CelluleBar = (props) => {

    return(
        <View style={styles.cellules}>
            <View style={styles.cellule}>
                <Text style={styles.text}>{props.nombar}</Text>
            </View>
            <View style={styles.cellule}>
                <Text style={styles.text}>{props.adresse}</Text>
            </View>
            <View style={styles.cellule}>
                <Text style={styles.text}>{props.numerotel}</Text>
            </View>
        </View>
    )
}

export default CelluleBar

const styles = StyleSheet.create( {
    cellules: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    cellule: {
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        border: '2px solid black',
        width: 124.5,
        padding: 4,
        marginBottom: 35
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})