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

        fetch("http://localhost:3001/inscriptionEvenement/", {
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
            return response.json()
        })
    }

    function desinscrire() {
        let data = {
            "email": props.email,
            "idEvenement": props.id,
            "nbInscrit": props.nbInscrit
        }

        fetch("http://localhost:3001/desinscriptionEvenement/", {
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
            return response.json()
        })
    }

    let inscription

    if(props.nbInscrit < props.limiteInscrit) {
        if(idEvenement != null) {
            if(idEvenement != props.id) {
                inscription = <Text style={[styles.textRouge, {fontSize: 10}]}>DÉJÀ INSCRIT À UN ÉVÈNEMENT</Text>
            }
            else {
                inscription = <TouchableOpacity onPress={desinscrire} style={[styles.bouton, {width: 100}]}>
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
    textRouge: {
        color: 'red', 
        fontWeight: 'bold',
        margin: 'auto'
    }
})