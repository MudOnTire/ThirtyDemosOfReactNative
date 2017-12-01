'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils';

class Home extends Component {
    render() {
        return (
            <View></View>
        )
    }
}

class Search extends Component {
    render() {
        return (
            <View></View>
        )
    }
}

class Chat extends Component {
    render() {
        return (
            <View></View>
        )
    }
}

class Me extends Component {
    render() {
        return (
            <View></View>
        )
    }
}

const Demo11Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name="md-home" size={36}></Icon>
                )
            }
        })
    },
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name="md-search" size={36}></Icon>
                )
            }
        })
    },
    Chat: {
        screen: Chat,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name="md-contact" size={36}></Icon>
                )
            }
        })
    },
    Me: {
        screen: Me,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name="md-person" size={36}></Icon>
                )
            }
        })
    },
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: '#fff',
            inactiveTintColor: '#9BA3AD',
            pressColor: '#fff',
            indicatorStyle:{
                display:'none',
            },
            style: {
                backgroundColor: '#36465D'
            },
            tabStyle:{
                backgroundColor:'#ff0000'
            }
        }
    });

export default Demo11Tab;