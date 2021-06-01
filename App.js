import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Connexion from './app/components/Connexion';
import Inscription from './app/components/Inscription';
import ListeBars from './app/components/ListeBars';
import Evenements from './app/components/Evenements'
import Profil from './app/components/Profil'
import ChangerMdp from './app/components/ChangerMdp'
import DisplayLatLng from './app/components/Map'

const Stack = createStackNavigator()


class App extends React.Component {

  render(){

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#73B479' }
          }}
        >
          
          <Stack.Screen
              name="Connexion"
              component={Connexion}
          />

          <Stack.Screen
              name="Inscription"
              component={Inscription}
          />

          <Stack.Screen
              name="ListeBars"
              component={ListeBars}
          />

          <Stack.Screen
              name="Evenements"
              component={Evenements}
          />

          <Stack.Screen
              name="Map"
              component={DisplayLatLng}
          />

          <Stack.Screen
              name="Profil"
              component={Profil}
          />

          <Stack.Screen
              name="ChangerMdp"
              component={ChangerMdp}
          />
          
         
        </Stack.Navigator>
      </NavigationContainer>
    )
}
}

export default App