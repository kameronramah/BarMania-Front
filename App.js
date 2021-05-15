import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Connexion from './app/components/Connexion';
import Inscription from './app/components/Inscription';
import MotdePasseOublier from './app/components/motdePasseOublier';

const Stack = createStackNavigator()


class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
              name="Inscription"
              component={Inscription}
          />
          <Stack.Screen
              name="Connexion"
              component={Connexion}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
}

export default App

// function MyStack(){
//   return(
//     <Stack.Navigator>
     
//       <Stack.Screen name="connexion" component={Connexion} />

     
//     </Stack.Navigator>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
});

