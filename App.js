import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from './src/navigator/BottomTabs';
import { LogIn } from './src/screens/LogIn';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;