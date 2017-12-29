import React, { Component } from 'react';
import { ScrollView, TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Util from '../utils';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    navBar: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    navTitle: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "500",
    },
    navBackBtn: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 18,
        color: "#555",
    },
    itemWrapper: {
        backgroundColor: '#f3f3f3'
    },
    touchBox: {
        width: Util.size.width / 3 - 0.33334,
        height: Util.size.width / 3,
        backgroundColor: "#fff",
    },
    touchBoxContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: Util.size.width,
        borderTopWidth: Util.pixel,
        borderTopColor: "#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor: "#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor: "#ccc",
    },
    touchBox1: {
        borderBottomWidth: Util.pixel,
        borderBottomColor: "#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor: "#ccc",
    },
    touchBox2: {
        borderBottomWidth: Util.pixel,
        borderBottomColor: "#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor: "#ccc",
    },
    boxContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: Util.size.width / 3,
        height: Util.size.width / 3,
    },
    boxIcon: {
        position: "relative",
        top: -10
    },
    boxText: {
        position: "absolute",
        bottom: 15,
        width: Util.size.width / 3,
        textAlign: "center",
        left: 0,
        backgroundColor: "transparent"
    },
    slide: {
        flexGrow: 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideText: {
        position: "absolute",
        bottom: 0,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(255,255,255,0.5)",
        width: Util.size.width,
        textAlign: "center",
        fontSize: 12
    },
    image: {
        width: Util.size.width,
        flexGrow: 1,
        alignSelf: 'stretch',
        resizeMode: 'contain',
    }
});

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            demos: [
                {
                    key: 0,
                    title: "A stopwatch",
                    isFA: false,
                    icon: "ios-stopwatch",
                    size: 48,
                    color: "#ff856c",
                }, {
                    key: 1,
                    title: "A weather app",
                    isFA: false,
                    icon: "ios-partly-sunny",
                    size: 60,
                    color: "#90bdc1",
                }, {
                    key: 2,
                    title: 'A twitter demo',
                    isFA: false,
                    icon: 'logo-twitter',
                    size: 50,
                    color: "#2aa2ef",
                }, {
                    key: 3,
                    title: 'Cocoapods',
                    isFA: true,
                    icon: 'contao',
                    size: 50,
                    color: "#ff9a05",
                }, {
                    key: 4,
                    title: 'Find my location',
                    isFA: false,
                    icon: 'md-pin',
                    size: 50,
                    color: '#00d204',
                }, {
                    key: 5,
                    title: 'Spotify',
                    isFA: true,
                    icon: 'spotify',
                    size: 50,
                    color: '#777',
                }, {
                    key: 6,
                    title: 'Moveable Circle',
                    isFA: false,
                    icon: 'ios-baseball',
                    size: 50,
                    color: "#5e2a06",
                }, {
                    key: 7,
                    title: 'Swipe left Menu',
                    isFA: true,
                    icon: 'google',
                    size: 50,
                    color: '#4285f4',
                }, {
                    key: 8,
                    title: 'Twitter Parallax View',
                    isFA: true,
                    icon: 'twitter-square',
                    size: 50,
                    color: '#2aa2ef'
                }, {
                    key: 9,
                    title: 'Custom in-app browser',
                    isFA: false,
                    icon: 'ios-globe',
                    size: 50,
                    color: '#00ab6b',
                }, {
                    key: 10,
                    title: 'Tumblr Menu',
                    isFA: false,
                    icon: 'logo-tumblr',
                    size: 50,
                    color: '#37465c',
                }, {
                    key: 11,
                    title: 'OpenGL',
                    isFA: false,
                    icon: 'md-contrast',
                    size: 50,
                    color: '#2f3600',
                },{
                    key:12,
                    title:'tweet',
                    isFA:false,
                    icon:'md-chatboxes',
                    size:50,
                    color:'#83709d',
                },{
                    key:13,
                    title:'tinder',
                    isFA:true,
                    icon:'fire',
                    size:50,
                    color:'#ff6b6b',
                }
            ]
        }
    }

    _jumpToDemo = (index) => {
        var navigate = this.props.navigation.navigate;
        var demo = this.state.demos[index];
        navigate('Demo' + (index + 1), demo);
    }

    render() {
        var boxes = this.state.demos.map((demo, index) => {
            return (
                <TouchableHighlight
                    key={demo.key}
                    style={[styles.touchBox, index % 3 == 2 ? styles.touchBox2 : styles.touchBox1]}
                    underlayColor="#eee"
                    onPress={
                        () => { this._jumpToDemo(index) }
                    }
                >
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxText}>
                            Demo{index + 1}
                        </Text>
                        {
                            demo.isFA ?
                                <IconFA size={demo.size} name={demo.icon} style={[styles.boxIcon, { color: demo.color }]}></IconFA>
                                :
                                <Icon size={demo.size} name={demo.icon} style={[styles.boxIcon, { color: demo.color }]}></Icon>
                        }
                    </View>
                </TouchableHighlight>
            )
        });
        return (
            <ScrollView style={styles.mainView} title={this.props.title}>
                <Swiper height={150} showsButtons={false} autoplay={true}
                    activeDot={<View style={{ backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}>
                    <TouchableHighlight onPress={() => this._jumpToDemo(0)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../../img/day1.png')}></Image>
                            <Text style={styles.slideText}>Day1: Timer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._jumpToDemo(1)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../../img/day2.png')}></Image>
                            <Text style={styles.slideText}>Day2: Weather</Text>
                        </View>
                    </TouchableHighlight>
                </Swiper>
                <View style={styles.touchBoxContainer}>
                    {boxes}
                </View>
            </ScrollView>
        );
    }
}