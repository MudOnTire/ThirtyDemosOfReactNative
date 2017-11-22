import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from '../screens/home';
import Demo1 from '../demos/demo1';

const navigator = StackNavigator({
    Home:{screen:Home},
    Demo1:{screen:Demo1}
});

export default navigator;