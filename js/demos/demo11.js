'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, Animated, Easing } from 'react-native';
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
    },
    homeImage: {
        resizeMode: 'contain',
        height: Util.size.height,
        width: Util.size.width,
    },
    menus: {
        height: Util.size.height,
        width: Util.size.width,
    },
    fakePublishBtn: {
        position: 'absolute',
        left: (Util.size.width - 60) / 2,
        bottom: 0,
        width: 60,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

class Home extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.homeImage}
                    source={require('../../img/tumblr.png')}>
                </Image>
            </View>
        )
    }
}

class Search extends Component {
    render() {
        return (
            <View>
                <Text>Search</Text>
            </View>
        )
    }
}

class Publish extends Component {
    render() {
        return (
            <View>
                <Text>Publish</Text>
            </View>
        )
    }
}

class Chat extends Component {
    render() {
        return (
            <View>
                <Text>Chat</Text>
            </View>
        )
    }
}

class Me extends Component {
    render() {
        return (
            <View>
                <Text>Me</Text>
            </View>
        )
    }
}

class PopupMenus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shift: new Animated.Value(-120)
        }
    }

    _pushMenu = () => {
        this.state.shift,
            {
                toValue: Util.size.width === 375 ? 50 : 30,
                duration: 200,
                delay: 100,
                easing: Easing.elastic(1),
            }
    }

    render() {
        return (
            <Image source={require('../../img/tumblrblur.png')} style={styles.menus}>
                <Animated.View>

                </Animated.View>
            </Image>
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
        screen: Publish
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

export default class Demo11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenus: false
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.showMenus &&
                    <TouchableHighlight onPress={() => {
                        this.setState({
                            showMenus: false
                        });
                    }}>
                        <View>
                            <PopupMenus />
                        </View>
                    </TouchableHighlight>
                }
                <Demo11Tab />
                {
                    !this.state.showMenus &&
                    <TouchableHighlight style={styles.fakePublishBtn} onPress={() => {
                        this.setState({
                            showMenus: true
                        });
                    }}>
                        <View style={styles.publishIcon}>
                            <Icon name="md-create" size={30} style={styles.tabIcon}></Icon>
                        </View>
                    </TouchableHighlight>
                }
            </View>
        )
    }
}