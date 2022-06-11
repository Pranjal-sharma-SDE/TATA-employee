import React,{ useEffect } from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import HomeS from './Screen/Home';
import Onboard from './Screen/Onboard'
import Login from './Screen/Login'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Screen/Profile';
import Navi from './Nav/Navi';


const Tab=createMaterialBottomTabNavigator();
{/** 


const Onboard=({navigation})=>{
return(

    
<Onboarding
onSkip={()=> navigation.navigate("Login")}
onDone={()=> navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#e9bcde',
      image: <Image source={require('./assets/onboarding-img1.png')} />,
      title: 'Welcome To Tata Motors',
      subtitle: 'Inspire The Rise',
    },
    
  
  
    {
      backgroundColor: '#000',
      image: <Image source={require('./assets/onboarding-img2.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
  
  
    {
      backgroundColor: '#fdeb93',
      image: <Image source={require('./assets/onboarding-img3.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
 ]}
/>

);
};
const Login=({navigation})=>{
return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Login</Text>
    <Button
    title="Click Me"
    onPress={()=>alert('Login Page')}
    />
     <Button
    title="Back to board"
    onPress={()=>navigation.navigate('Onboard')}
    />
  </View>
);
};



*/}




export default function App() {
  return(
    <Navi/>);}

    {/**
 <NavigationContainer>
      <Tab.Navigator initialRouteName="Onboard">
       
        <Tab.Screen name="Profile" component={Profile} options={{

          headerStyle:{
        backgroundColor:"#005678",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }}/>
        <Tab.Screen name="Onboard" component={Onboard} options={{

          headerStyle:{
        backgroundColor:"#005678",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }}/>
       
        

        
         <Tab.Screen name="Login" component={Login} options={{

          headerStyle:{
        backgroundColor:"#017895",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }} />
        <Tab.Screen name="HomeS" component={Navi} options={{

          headerStyle:{
        backgroundColor:"#017895",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    );
 */

  
 
  }

 {/** 

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Onboard">
        <Drawer.Screen name="Home" component={Home} options={{

          headerStyle:{
        backgroundColor:"#009387",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{

          headerStyle:{
        backgroundColor:"#005678",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }}/>
        <Drawer.Screen name="Onboard" component={Onboard} options={{

          headerStyle:{
        backgroundColor:"#005678",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }}/>
        <Drawer.Screen name="Send" component={Send} options={{

          headerStyle:{
        backgroundColor:"#000666",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }} />
        <Drawer.Screen name="Signin" component={Signin} options={{

          headerStyle:{
        backgroundColor:"#017895",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }} />

        <Drawer.Screen name="Settings" component={SettingsScreen} options={{

          headerStyle:{
        backgroundColor:"#017895",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }} />
         <Drawer.Screen name="Login" component={Login} options={{

          headerStyle:{
        backgroundColor:"#017895",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }} />
        <Drawer.Screen name="HomeS" component={HomeS} options={{

          headerStyle:{
        backgroundColor:"#017895",
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          } 
          
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );*/}
