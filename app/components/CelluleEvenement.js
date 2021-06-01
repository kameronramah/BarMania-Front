import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const CelluleEvenement = (props) => {

    let idEvenement = props.idEvenement

    function inscrire() {
        let data = {
            "email": props.email,
            "idEvenement": props.id,
            "nbInscrit": props.nbInscrit
        }

        fetch("https://glacial-bastion-48106.herokuapp.com/inscriptionEvenement/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        })
        .then(async (response) => {
            if(response.status == 200) {
                props.onIDEvenementChange(props.id)
                idEvenement = props.id
            }
            return response
        })
    }

    function desinscrire() {
        let data = {
            "email": props.email,
            "idEvenement": props.id,
            "nbInscrit": props.nbInscrit
        }

        fetch("https://glacial-bastion-48106.herokuapp.com/desinscriptionEvenement/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        })
        .then(async (response) => {
            if(response.status == 200) {
                props.onIDEvenementChange(null)
                idEvenement = null
            }
            return response
        })
    }

    let inscription

    if(props.nbInscrit < props.limiteInscrit) {
        if(idEvenement != null) {
            if(idEvenement != props.id) {
                inscription = <Text style={[styles.textRouge, {fontSize: 10}]}>DÉJÀ INSCRIT À UN ÉVÈNEMENT</Text>
            }
            else {
                inscription = <TouchableOpacity onPress={desinscrire} style={[styles.bouton, {width: 120}]}>
                                <Text style={styles.textBouton}>Se désinscrire</Text>
                              </TouchableOpacity>
            }
        }
        else {
            inscription = <TouchableOpacity onPress={inscrire} style={styles.bouton}>
                            <Text style={styles.textBouton}>S'inscrire</Text>
                          </TouchableOpacity>
        }       
    }       
    else {
        inscription = <Text style={styles.textRouge}>COMPLET</Text> 
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
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderTopWidth: 0,
        padding: 4,
        marginBottom: 35
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 50,
        marginTop: 5
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
    textBouton: {
        marginLeft: 7
    },
    textRouge: {
        color: 'red', 
        fontWeight: 'bold',
        marginTop: 5,
        marginRight: 10
    }
})