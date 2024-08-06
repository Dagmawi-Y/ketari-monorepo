import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./bottomTab";
import Splash from "../screens/splash";
import LogIn from "../screens/Login";
import SignUp from "../screens/Signup";
const Stack = createStackNavigator();
const StackRoute=()=>{
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
             <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
             <Stack.Screen name="Login" component={LogIn} options={{headerShown:false}}/>
             <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:true}}/>
             <Stack.Screen name="Tab" component={BottomNavigation} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
      )
 }
export default StackRoute            
          
 


        
