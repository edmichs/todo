import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from './src/Screens/Login';
import SignupScreen from './src/Screens/Signup';
import MainScreen from './src/Screens/Main';
import EditScreen from './src/Screens/Edit';


export default function App() {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='loginScreen'
          animation='fade'
          component={LoginScreen}
          panHandlers={null}
          hideNavBar={true} initial />
        <Scene key='signupScreen'
          animation='fade'
          component={SignupScreen}
          panHandlers={null}
          hideNavBar={true} />
        <Scene key='mainScreen'
          animation='fade'
          component={MainScreen}
          panHandlers={null}
          hideNavBar={true} />
        <Scene key='editScreen'
          animation='fade'
          hideNavBar={true}
          panHandlers={null}
          component={EditScreen} />
      </Scene>
    </Router>
  );
}


