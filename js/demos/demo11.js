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
    menusBg: {
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
    },
    menuContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: Util.size.width,
        height: Util.size.height,
    },
    menuImg: {
        width: 120,
        height: 100,
        resizeMode: "contain",
    },
    menuText: {
        width: 120,
        textAlign: "center",
        color: "#fff",
        backgroundColor: "transparent"
    },
    menuItem1: {
        position: "absolute",
        left: 50,
        top: 80
    },
    menuItem3: {
        position: "absolute",
        left: 50,
        top: 250
    },
    menuItem5: {
        position: "absolute",
        left: 50,
        top: 420
    },
    menuItem2: {
        position: "absolute",
        right: 50,
        top: 80
    },
    menuItem4: {
        position: "absolute",
        right: 50,
        top: 250
    },
    menuItem6: {
        position: "absolute",
        right: 50,
        top: 420
    },
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
            showMenus: false,
            shift: new Animated.Value(-120),
            menuBgOpacity: new Animated.Value(1),
        }
    }

    _pushMenus = () => {
        Animated.timing(
            this.state.menuBgOpacity,
            {
                toValue: 1,
                duration: 100
            }).start();
        Animated.timing(
            this.state.shift,
            {
                toValue: Util.size.width === 375 ? 50 : 30,
                duration: 200,
                delay: 100,
                easing: Easing.elastic(1),
            }).start();
    }

    _popMenus = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: -120,
                duration: 200,
                delay: 100,
                easing: Easing.elastic(1),
            }
        ).start(() => {
            setTimeout(() => {
                this.setState({
                    showMenus: false,
                })
            }, 200);
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.showMenus &&
                    <TouchableHighlight onPress={() => {
                        this._popMenus();
                    }}>
                        <Animated.View style={{ opacity: this.state.menuBgOpacity }}>
                            <Image source={require('../../img/tumblrblur.png')} style={styles.menusBg}></Image>
                            <View style={styles.menuContainer}>
                                <Animated.View style={[styles.menuItem1, { left: this.state.shift }]}>
                                    <Image style={styles.menuImg} source={require('../../img/tumblr-text.png')}></Image>
                                    <Text style={styles.menuText}>Text</Text>
                                </Animated.View>
                                <Animated.View style={[styles.menuItem2, { right: this.state.shift }]}>
                                    <Image style={styles.menuImg} source={require('../../img/tumblr-photo.png')}></Image>
                                    <Text style={styles.menuText}>photo</Text>
                                </Animated.View>
                                <Animated.View style={[styles.menuItem3, { left: this.state.shift }]}>
                                    <Image style={styles.menuImg} source={require('../../img/tumblr-quote.png')}></Image>
                                    <Text style={styles.menuText}>Quote</Text>
                                </Animated.View>
                                <Animated.View style={[styles.menuItem4, { right: this.state.shift }]}>
                                    <Image style={styles.menuImg} source={require('../../img/tumblr-link.png')}></Image>
                                    <Text style={styles.menuText}>Link</Text>
                                </Animated.View>
                                <Animated.View style={[styles.menuItem5, { left: this.state.shift }]}>
                                    <Image style={styles.menuImg} source={require('../../img/tumblr-chat.png')}></Image>
                                    <Text style={styles.menuText}>Chat</Text>
                                </Animated.View>
                                <Animated.View style={[styles.menuItem6, { right: this.state.shift }]}>
                                    <Image style={styles.menuImg} source={require('../../img/tumblr-audio.png')}></Image>
                                    <Text style={styles.menuText}>Audio</Text>
                                </Animated.View>
                            </View>
                        </Animated.View>
                    </TouchableHighlight>
                }
                <Demo11Tab />
                {
                    !this.state.showMenus &&
                    <TouchableHighlight
                        underlayColor='rgba(0,0,0,0)'
                        style={styles.fakePublishBtn} onPress={() => {
                            this.setState({
                                showMenus: true
                            });
                            this._pushMenus();
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