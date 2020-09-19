import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesList from './screens/MoviesList';
import MovieDetail from './screens/MovieDetail'



const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator 
      screenOptions ={
        {
          headerStyle: {
            backgroundColor: 'black',
            shadowOpacity: 0,

          },
          headerTintColor: 'white'
        }
      }
    >
      <Stack.Screen
        name="MoviesList"
        options={
          {
            title: 'Movie show time Example'
          }
        }
        component={MoviesList}
      />
      <Stack.Screen
        name="MovieDetail"
        options={
          {
            title: null,
             
          }
        }
        component={MovieDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',

  },
});

