import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Settings from "../screens/Myapplication";
import HomeStack from "./homeStack";

const Tab = createBottomTabNavigator();

 const BottomNavigation=()=>{
    return(
          
            <Tab.Navigator>
                <Tab.Screen name="HomeS" component={HomeStack} options={{headerShown:false}}/>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="MyApplication" component={Settings}/>
            </Tab.Navigator>
          
    )
}
export default BottomNavigation