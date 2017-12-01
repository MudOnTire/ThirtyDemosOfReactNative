import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Image, Text, View, WebView } from 'react-native';
import Util from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    itemWrapper: {
        backgroundColor: '#f3f3f3'
    },
    menu: {
        backgroundColor: "#ffffff",
        width: Util.size.width,
        height: Util.size.height,
    },
    btn: {
        height: 100,
        marginBottom: 20
    },
    img: {
        height: 100,
        resizeMode: "cover",
    },
    textContainer: {
        height: 100,
        width: Util.size.width,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "500",
        paddingLeft: 20,
    },
    itemNav: {
        color: "#fff",
        position: "absolute",
        right: 20,
        top: 32
    }
});

class Poincare extends Component {
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                source={require('../../web/html/demo1.html')}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate='normal'
                startInLoadingState={true}
            />
        )
    }
}

class Sphere extends Component {
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                source={require('../../web/html/demo2.html')}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate='normal'
                startInLoadingState={true}
            />
        )
    }
}

class Hello extends Component {
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                source={require('../../web/html/demo3.html')}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate='normal'
                startInLoadingState={true}
            />
        )
    }
}

class Demo23 extends Component {

    _showWebPage = (pageName) => {
        var navigate = this.props.navigation.navigate;
        navigate(pageName);
    }

    render() {
        return (
            <View style={styles.menu}>
                <TouchableHighlight style={styles.btn} onPress={() => { this._showWebPage('Poincare') }}>
                    <View>
                        <Image source={require('../../img/poincare.png')} style={styles.img} />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Poincare Disk</Text>
                            <Icon
                                style={styles.itemNav}
                                name='ios-arrow-forward-outline'
                                size={35}
                            ></Icon>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={() => { this._showWebPage('Sphere') }}>
                    <View>
                        <Image source={require('../../img/sphere.jpg')} style={styles.img} />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Sphere</Text>
                            <Icon
                                style={styles.itemNav}
                                name='ios-arrow-forward-outline'
                                size={35}
                            ></Icon>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={() => { this._showWebPage('Hello') }}>
                    <View>
                        <Image source={require('../../img/sphere.jpg')} style={styles.img} />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Hello</Text>
                            <Icon
                                style={styles.itemNav}
                                name='ios-arrow-forward-outline'
                                size={35}
                            ></Icon>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const navigator = StackNavigator({
    Demo23: {
        screen: Demo23,
        navigationOptions: ({ navigation }) => ({
            title: 'Local WebView'
        })
    },
    Poincare: {
        screen: Poincare,
        navigationOptions: ({ navigation }) => ({
            title: 'Poincare'
        })
    },
    Sphere: {
        screen: Sphere,
        navigationOptions: ({ navigation }) => ({
            title: 'Sphere'
        })
    },
    Hello: {
        screen: Hello,
        navigationOptions: ({ navigation }) => ({
            title: 'Hello'
        })
    }
}, {
        headerMode: 'none'
    });

export default navigator;