import  React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CompneyProfile from "../screens/componeyProfile";
import AplyJob from "../screens/applyJob";
const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown:false}}/>
                <Stack.Screen name="Componeyprofile" component={CompneyProfile}/>
                <Stack.Screen name="Apply" component={AplyJob}/>
            </Stack.Navigator>
        </>
    )
}    
            