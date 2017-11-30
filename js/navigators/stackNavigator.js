import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home';
import Demo1 from '../demos/demo1';
import Demo2 from '../demos/demo2';
import Demo3 from '../demos/demo3';
import Demo4 from '../demos/demo4';
import { Demo3TopNav } from '../demos/demo3';
import Demo5 from '../demos/demo5';
import Demo6 from '../demos/demo6';
import Demo7 from '../demos/demo7';
import Demo8 from '../demos/demo8';

const navigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: "30 demos of React-Native for 30 days"
        }),
    },
    Demo1: {
        screen: Demo1,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Demo2: {
        screen: Demo2,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Demo3: {
        screen: Demo3,
        navigationOptions: ({ navigation }) => ({
            header: <Demo3TopNav></Demo3TopNav>
        }),
    },
    Demo4: {
        screen: Demo4,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo5: {
        screen: Demo5,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo6: {
        screen: Demo6,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo7: {
        screen: Demo7,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo8: {
        screen: Demo8,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
});

export default navigator;