import React from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Cronometro from '../screens/Cronometro';
import Relogio from '../screens/Relogio';



const Stack = createStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Relogio" >
  
        <Stack.Screen name="Cronometro" component={Cronometro} options={{ headerShown: false}}/>
        <Stack.Screen name="Relogio" component={Relogio}  options={{ headerShown: false}}/>
          
  
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Routes