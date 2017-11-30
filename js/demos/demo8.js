import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar, Text, TouchableHighlight, TouchableOpacity, PanResponder, LayoutAnimation, ScrollVieww, View, Platform, Animated } from 'react-native';
import Util from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import Demo7 from './demo7';

const contentHeight = Util.size.height - StatusBar.currentHeight;
const sideMenuWidth = 0.7 * Util.size.width;

var styles = StyleSheet.create({
    container: {
        height: contentHeight,
        width: Util.size.width,
    },
    mainScreen: {
        flex: 1
    },
    drop: {
        height: contentHeight,
        width: Util.size.width,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    sideMenu: {
        position: 'absolute',
        width: sideMenuWidth + 20,
        backgroundColor:'transparent'
    },
    sideMenuContainer: {
        width: sideMenuWidth,
        height: contentHeight,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0,
        shadowRadius: 5,
        shadowOffset: {
            height: 10,
            width: 10,
        }
    },
    sideMenuHeader: {
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingLeft: 15,
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    senary: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    username: {

    },
    email: {

    },
    btnContainer: {

    },
    btn: {

    },
    btnIcon: {

    },
    btnText: {

    }
});

class Menu extends Component {

    static defaultProps = {
        avatar: require('../../img/avatar.jpg'),
        senary: require('../../img/senary.png'),
        username: 'MudOnTire',
        email: '895157882@qq.com',
    };

    render() {
        return (
            <View style={styles.sideMenuContainer}>
                <View style={styles.sideMenuHeader}>
                    <View style={styles.imgContainer}>
                        <Image source={this.props.senary} style={styles.senary}></Image>
                        <Image source={this.props.avatar} style={styles.avatar}></Image>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.username}>{this.props.username}</Text>
                        <Text style={styles.email}>{this.props.email}</Text>
                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableHighlight underlayColor='#888' onPress={() => true}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name='map-marker' size={15}></Icon>
                            <Text style={styles.btnText}></Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default class Demo8 extends Component {
    constructor() {
        super();
        this.state = {
            showDrop: false,
        }
    }

    _previousLeft = -1 * sideMenuWidth;
    _previousOpacity = 0;
    _minLeft = -1 * sideMenuWidth;
    _menuStyles = {};
    _dropStyles = {};
    _CustomLayoutLinear = LayoutAnimation.Presets.linear;
    menu = null;
    drop = null;

    _updatePosition() {
        this.menu && this.menu.setNativeProps(this._menuStyles);
        this.drop && this.drop.setNativeProps(this._dropStyles);
    }

    _endMove(event, gestureState) {
        if (gestureState.vx < 0 || gestureState.dx < 0) {
            this._menuStyles.style.left = this._minLeft;
            this._dropStyles.style.opacity = 0;
            this._previousLeft = this._minLeft;
            this._previousOpacity = 0;
            this.setState({
                showDrop: false,
            });
        }
        if (gestureState.vx > 0 || gestureState.dx > 0) {
            this._menuStyles.style.left = 0;
            this._dropStyles.style.opacity = 1;
            this._previousLeft = 0;
            this._previousOpacity = 1;
        }
        this._updatePosition();
        LayoutAnimation.configureNext(this._CustomLayoutLinear);
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onMoveShouldSetPanResponder: (event, gestureState) => {
                return gestureState.dy / gestureState.dx != 0;
            },
            onPanResponderGrant: (event, gestureState) => {
                this.setState({
                    showDrop: true
                })
            },
            onPanResponderMove: (event, gestureState) => {
                this._menuStyles.style.left = this._previousLeft + gestureState.dx;
                this._dropStyles.style.opacity = this._previousOpacity + Math.pow(gestureState.dx / (-this._minLeft), 0.5);
                if (this._menuStyles.style.left > 0) {
                    this._menuStyles.style.left = 0;
                    this._dropStyles.style.opacity = 1;
                }
                if (this._menuStyles.style.left < this._minLeft) {
                    this._menuStyles.style.left = this._minLeft;
                    this._dropStyles.style.opacity = 0;
                }
                this._updatePosition();
                LayoutAnimation.configureNext(this._CustomLayoutLinear);
            },
            onPanResponderTerminationRequest: (event, gestureState) => true,
            onPanResponderRelease: (event, gestureState) => this._endMove(event, gestureState),
            onPanResponderTerminate: (event, gestureState) => this._endMove(event, gestureState),
            onShouldBlockNativeResponder: (event, gestureState) => true
        });

        this._menuStyles = {
            style: {
                left: this._previousLeft,
            },
        };
        this._dropStyles = {
            style: {
                opacity: this._previousOpacity,
            }
        }
    }

    componentDidMount() {
        this._updatePosition();
        if (Platform.OS === 'ios') {
            StatusBar.setBarStyle(1);
        }
    }

    _hideSideMenu = () => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../img/agrass.png')}></Image>
                {
                    this.state.showDrop ?
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.drop}
                            onPress={() => this._hideSideMenu()}
                            ref={(drop) => { this.drop = drop }}
                        >
                        </TouchableOpacity>
                        :
                        <View></View>
                }
                <View
                    {...this._panResponder.panHandlers}
                    style={styles.sideMenu}
                    ref={(menu) => { this.menu = menu }}
                >
                    <Menu></Menu>
                </View>
            </View>
        )
    }
}