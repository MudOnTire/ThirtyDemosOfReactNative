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

    static navigationOptions = ({ navigation }) => {
        return {
            title: '30 demos for 30 days'
        }
    }

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
                    hideNav: false,
                }, {
                    key: 1,
                    title: "A weather app",
                    isFA: false,
                    icon: "ios-partly-sunny",
                    size: 60,
                    color: "#90bdc1",
                    hideNav: true,
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