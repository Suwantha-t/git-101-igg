import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeForm from './screen/ResumeForm'

// function DetailScreen(props) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Detail Screen</Text>
//       {/* <Button title="Go to Home Screen" onPress={() => props.navigation.push('Home')}></Button> */}
//     </View>
//   );
// }

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* add */}
        <Stack.Screen name="ResumeForm" options={{title: 'Resume Form'}} component={ResumeForm} />
        {/* <Stack.Screen name="Detail" options={{title: 'Detail page'}} component={DetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;