import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

import MapView, { Callout, MAP_TYPES, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
let LATITUDE = 	48.858846
let LONGITUDE = 2.348354
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class DisplayLatLng extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      latitude: '',
      longitude: '',
      pseudo: '',
      email: '',
      password: '',
      idEvenement: '',
      bars: ''
    };
  }


    async componentDidMount() {
        const { latitude, longitude, pseudo, email, password, idEvenement } = this.props.route.params
        this.setState({ region: {
                            latitude: latitude,
                            longitude: longitude
                      },
                      latitude,
                      longitude,
                      pseudo,
                      email,
                      password,
                      idEvenement
                    })
        const response = await fetch(`https://glacial-bastion-48106.herokuapp.com/listebars/`)
        const data = await response.json()
        this.setState({bars: data})
    }


  // onRegionChange(region) {
  //   this.setState({ region });
  // }


  render() {

    let allbars = []
    for(const y of this.state.bars) {
      allbars.push(<MapView.Marker 
                      key={y.idbar}
                      coordinate={{
                        latitude: y.latitude,
                        longitude: y.longitude
                      }} 
                   >

                    <Callout>
                      <Text>{y.nombar}</Text>
                    </Callout>
                   </MapView.Marker>
      )
    }

    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => { this.map = ref; }}
          mapType={MAP_TYPES.TERRAIN}
          style={styles.map}
          initialRegion={this.state.region}
        >
          <MapView.Marker
            coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude
            }}
          >
            
            <Callout>
              <Text>Ici tu peux écrires les noms des restaurants</Text>
            </Callout>

          </MapView.Marker>

          {allbars}
        </MapView>
        
        <View style={[styles.bubble, styles.latlng]}>
          <Text style={{ textAlign: 'center' }}>
            {this.state.region.latitude.toPrecision(7)},
            {this.state.region.longitude.toPrecision(7)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ListeBars')}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>RETOUR</Text>
          </TouchableOpacity>

          

        </View>
      </View>
    )
  }
}

DisplayLatLng.propTypes = {
  provider: ProviderPropType,
}

export default DisplayLatLng;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
  },
});
