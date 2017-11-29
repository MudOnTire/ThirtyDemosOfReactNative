'use strict';

import React, { Component } from 'react';
import { Animated, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, View, Platform } from 'react-native';
import Video from 'react-native-video';
import Util from '../utils';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        height: Util.size.height - StatusBar.currentHeight,
        width: Util.size.width,
    },
    backgroundFixed: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#777'
    },
    logo: {
        alignItems: 'center',
        position: 'absolute',
        width: Util.size.width,
        top: 50,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logoIconContainer: {
        backgroundColor: 'transparent',
        paddingRight: 5,
        marginTop: 5,
    },
    logoTextContainer: {
        backgroundColor: 'transparent',
    },
    logoText: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 35,
        fontWeight: '700',
        backgroundColor: 'transparent',
    },
    sliders: {
        position: 'absolute',
        width: Util.size.width,
        bottom: 70,
        left: 0,
    },
    swiperDot: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    swiperActiveDot: {
        backgroundColor: 'rgba(255,255,255,1)',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    slide: {
        flex: 1,
        height: Util.size.height - 200,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
    },
    slideTextTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    slideText: {
        color: '#fff',
        textAlign: 'center'
    },
    btnContainer: {
        position: 'absolute',
        width: Util.size.width,
        bottom: 0,
        left: 0,
        height: 40,
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
    }
});

class Intro extends Component {
    render() {
        return (
            <View style={styles.backgroundFixed}>
                <View style={styles.logo}>
                    <View style={styles.logoIconContainer}>
                        <Icon name="spotify" size={60} color="white"></Icon>
                    </View>
                    <View style={styles.logoTextContainer}>
                        <Text style={styles.logoText}>Spotify</Text>
                    </View>
                </View>
                <View style={styles.sliders}>
                    <Swiper
                        height={Util.size.height - 200}
                        showsButtons={false}
                        autoplay={false}
                        dot={<View style={styles.swiperDot}></View>}
                        activeDot={<View style={styles.swiperActiveDot}></View>}
                    >
                        <View style={styles.slide}>
                            <Text style={styles.slideTextTitle}>Welcome</Text>
                            <Text style={styles.slideText}>Sign up for free music on your phone, tablet</Text>
                            <Text style={styles.slideText}>and computer</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text style={styles.slideTextTitle}>Browse</Text>
                            <Text style={styles.slideText}>Explore top tracks, new releases and the right</Text>
                            <Text style={styles.slideText}>playlist for every moment</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text style={styles.slideTextTitle}>Search</Text>
                            <Text style={styles.slideText}>Looking for that special album or artist? Just</Text>
                            <Text style={styles.slideText}>search and hit play!</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text style={styles.slideTextTitle}>Running</Text>
                            <Text style={styles.slideText}>Music that perfectly matches</Text>
                            <Text style={styles.slideText}>your tempo.</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text style={styles.slideTextTitle}>Your Library</Text>
                            <Text style={styles.slideText}>Save any song,album or artist to your own</Text>
                            <Text style={styles.slideText}>music collection.</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableHighlight style={[styles.btn, { backgroundColor: "#201437" }]}>
                        <Text style={styles.btnText}>LOG IN</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.btn, { backgroundColor: "#29b859" }]}>
                        <Text style={styles.btnText}>SIGN UP</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default class Demo6 extends Component {
    componentDidMount() {
        if (Platform.OS === 'ios') {
            StatusBar.setBarStyle(1);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Intro></Intro>
            </View>
        )
    }
}