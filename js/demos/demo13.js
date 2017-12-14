import React, { Component } from 'react';
import { StatusBar, View, StyleSheet, Image, TextInput, CameraRoll, TouchableHighlight, Text, Keyboard, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Util from '../utils';

const functionViewHeight = 50;

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
        height: functionViewHeight,
        width: Util.size.width,
        left: 0,
    },
    functionContainer: {
        height: functionViewHeight,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
        paddingRight: 8,
    },
    functionIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    functionIcon: {
        width: 50,
        textAlign: 'center',
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
            images: []
        }
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
            <View style={styles.functionContainer}>
                <View style={styles.functionIcons}>
                    <Icon style={styles.functionIcon} name='ios-pin' size={23} color='#8899a5'></Icon>
                    <Icon style={styles.functionIcon} name='md-camera' size={23} color='#8899a5'></Icon>
                    <Icon style={styles.functionIcon} name='md-image' size={23} color='#8899a5'></Icon>
                    <Icon style={styles.functionIcon} name='md-pie' size={23} color='#8899a5'></Icon>
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
        )
    }
}

export default class Demo13 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numsOfText: 140,
            keyboardTopY: 0,
        }
    }

    componentWillMount() {
        this.keyboardDidShowListner = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListner = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    _keyboardDidShow(something) {
        console.log(something);
        console.log('Keyboard Shown');
    }

    _keyboardDidHide() {
        console.log('Keyboadr Hidden');
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
                    style={[styles.textArea, { height: Util.size.height - this.state.keyboardTopY - 60 - functionViewHeight }]}
                    maxLength={140}
                    multiline={true}
                    placeholder="有什么新鲜事？"
                    selectionColor='#2aa2ef'
                    placeholderTextColor='#bdc7cd'
                    onChangeText={this._updateTextNum}
                    underlineColorAndroid='transparent'
                >
                </TextInput>
                <View style={[styles.functionViewContainer, { bottom: this.state.keyboardTopY }]}>
                    <FuntionView numsOfText={this.state.numsOfText} />
                </View>
            </View>
        )
    }
}