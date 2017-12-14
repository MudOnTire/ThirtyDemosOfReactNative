import React, { Component } from 'react';
import { StatusBar, View, StyleSheet, Image, TextInput, CameraRoll, TouchableHighlight, Text, Keyboard, Button, Alert, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Util from '../utils';

const toolBarHeight = 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeBtn: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
    , textArea: {
        padding: 15,
        fontSize: 18,
        textAlignVertical: 'top',
    },
    functionViewContainer: {
        position: 'absolute',
        left: 0,
    },
    functionContainer: {
        width: Util.size.width,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    toolBar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 8,
    },
    functionIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    functionIcon: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    functionRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postBtn: {
        backgroundColor: '#0090FF',
        width: 60,
        height: 34,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    remainCount: {
        fontSize: 16,
        marginRight: 10,
    },
    imageGrid: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    imageIcon: {
        width: Util.size.width / 4,
        height: Util.size.width / 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRightWidth: 1,
        borderRightColor: '#ccc',

    }
});

class FuntionView extends Component {

    static defaultProps = {
        numsOfText: 140,
    }

    static PropTypes = {
        numsOfText: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            functionViewHeight: new Animated.Value(toolBarHeight),
        }
    }

    componentWillMount() {
        this.keyboardDidShowListner = Keyboard.addListener('keyboardDidShow', () => {
            Animated.timing(
                this.state.functionViewHeight,
                {
                    toValue: toolBarHeight,
                    duration: 100,
                    delay: 0,
                    easing: Easing.elastic(1),
                }
            ).start();
        });
    }

    componentDidMount() {
        const fetchParams = {
            first: 4,
        };
        CameraRoll.getPhotos(fetchParams).done(
            (data) => {
                this.storeImages(data)
            },
            (err) => {
                this.logImageError(err);
            }
        )
    }

    storeImages(data) {
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        this.setState({
            images: images,
        });
    }

    logImageError(err) {
        console.log(err);
    }

    render() {
        return (
            <Animated.View style={[styles.functionContainer, { height: this.state.functionViewHeight }]}>
                <View style={styles.toolBar}>
                    <View style={styles.functionIcons}>
                        <TouchableHighlight style={styles.functionIcon} underlayColor='rgba(0,0,0,0)'>
                            <Icon name='ios-pin' size={23} color='#8899a5'></Icon>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.functionIcon}
                            onPress={
                                () => {
                                    Keyboard.dismiss();
                                    Animated.timing(
                                        this.state.functionViewHeight,
                                        {
                                            toValue: toolBarHeight + 240,
                                            duration: 100,
                                            delay: 0,
                                            easing: Easing.elastic(1),
                                        }
                                    ).start();
                                }
                            } underlayColor='rgba(0,0,0,0)'>
                            <Icon name='md-camera' size={23} color='#8899a5'></Icon>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='rgba(0,0,0,0)' style={styles.functionIcon}>
                            <Icon name='md-image' size={23} color='#8899a5'></Icon>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.functionIcon} underlayColor='rgba(0,0,0,0)'>
                            <Icon name='md-pie' size={23} color='#8899a5'></Icon>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.functionRight}>
                        <Text style={styles.remainCount}>
                            {this.props.numsOfText}
                        </Text>
                        <TouchableHighlight style={styles.postBtn}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>发推</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.imageGrid}>
                    <View style={styles.imageIcon}>
                        <Icon name='ios-camera' size={80} color='#2aa2ef'></Icon>
                    </View>
                    <View style={styles.imageIcon}>
                        <Icon name='ios-videocam' size={80} color='#2aa2ef'></Icon>
                    </View>
                    {
                        this.state.images.map(
                            (image, index) => {
                                <View key={index} style={styles.imageIcon}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: image.uri }}>
                                    </Image>
                                </View>
                            }
                        )
                    }
                </View>
            </Animated.View>
        )
    }
}

export default class Demo13 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numsOfText: 140,
            keyboardTopY: 2,
            isEditing: false,
        }
    }

    _updateTextNum = (text) => {
        let remain = 140 - text.length;
        this.setState({
            numsOfText: remain
        })
    }

    _closePage = () => {
        Alert.alert(
            '确认推出发布吗？',
            null,
            [
                { text: '确认', onPress: () => this.props.navigation.goBack() },
                { text: '取消', onPress: () => console.log('cancel close'), style: 'cancel' }
            ],
            { cancelable: true }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon name='logo-github' size={30} color='#000'></Icon>
                    <TouchableHighlight
                        style={styles.closeBtn}
                        underlayColor='rgba(0,0,0,0)'
                        onPress={this._closePage}>
                        <Icon name='md-close' color='#2aa2ef' size={25}></Icon>
                    </TouchableHighlight>
                </View>
                <TextInput
                    ref='textArea'
                    style={[styles.textArea, { height: Util.size.height - this.state.keyboardTopY - 60 - toolBarHeight }]}
                    maxLength={140}
                    multiline={true}
                    placeholder="有什么新鲜事？"
                    selectionColor='#2aa2ef'
                    placeholderTextColor='#bdc7cd'
                    onChangeText={this._updateTextNum}
                    underlineColorAndroid='transparent'
                    onFocus={() => this.setState({ isEditing: true })}
                    onBlur={() => this.setState({ isEditing: false })}
                >
                </TextInput>
                <View style={[styles.functionViewContainer, { bottom: 0 }]}>
                    <FuntionView numsOfText={this.state.numsOfText} isEditing={this.state.isEditing} />
                </View>
            </View>
        )
    }
}