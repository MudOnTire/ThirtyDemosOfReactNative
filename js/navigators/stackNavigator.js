import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home';
import Demo1 from '../demos/demo1';
import Demo2 from '../demos/demo2';

const navigator = StackNavigator({
    Home: { screen: Home },
    Demo1: { screen: Demo1 },
    Demo2: { screen: Demo2 }
});

export default navigator;