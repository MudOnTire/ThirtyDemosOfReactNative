'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils';

const styles = StyleSheet.create({
    tabIcon: {
        color: '#ccc',
        textAlign: 'center',
    },
    publishIcon: {
        width: 54,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: '#529ECC',
        borderRadius: 6,
    }
})

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

class Publish extends Component {
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
                    <Icon name="md-home" size={30} style={styles.tabIcon}></Icon>
                )
            }
        })
    },
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name="md-search" size={30} style={styles.tabIcon}></Icon>
                )
            }
        })
    },
    Publish: {
        screen: Publish,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <View style={styles.publishIcon}>
                        <Icon name="md-create" size={30} style={styles.tabIcon}></Icon>
                    </View>
                )
            }
        })
    },
    Chat: {
        screen: Chat,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name="md-contact" size={30} style={styles.tabIcon}></Icon>
                )
            }
        })
    },
    Me: {
        screen: Me,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon name="md-person" size={30} style={styles.tabIcon}></Icon>
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
            indicatorStyle: {
                display: 'none',
            },
            style: {
                backgroundColor: '#36465D'
            },
            tabStyle: {
                padding: 0,
            },
            iconStyle: {
                height: 50,
                width: 54,
            }
        }
    });

export default Demo11Tab;