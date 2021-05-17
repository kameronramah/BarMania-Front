import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Connexion from './app/components/Connexion';
import Inscription from './app/components/Inscription';
import ListeBars from './app/components/ListeBars';
import MotdePasseOublier from './app/components/motdePasseOublier';

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
          
          
        </Stack.Navigator>
      </NavigationContainer>
    )
}
}

export default App