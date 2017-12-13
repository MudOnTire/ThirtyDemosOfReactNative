import React, { Component } from 'react';
import { StatusBar, View, StyleSheet, Image, TextInput, CameraRoll, TouchableHighlight, Text, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Util from '../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textArea: {
        padding: 15,
        fontSize: 20,
        textAlignVertical: 'top',
    },
    functionViewContainer: {
        position: 'absolute',
        height:40,
        width:Util.size.width,
        left:0,
    },
    functionContainer: {
        height: 40,
        justifyContent: 'center',
    },
    functionIconContainer: {
        flexDirection: 'row',
    },
    functionIcon: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    functionBtn: {
        flex: 1
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
                <View style={styles.functionIconContainer}>
                    <View style={styles.functionIcon}>
                        <Icon name='ios-pin' size={23} color='#8899a5'></Icon>
                        <Icon name='md-camera' size={23} color='#8899a5'></Icon>
                        <Icon name='md-image' size={23} color='#8899a5'></Icon>
                        <Icon name='md-pie' size={23} color='#8899a5'></Icon>
                    </View>
                    <View style={styles.functionBtn}>
                        <Text style={styles.text}>
                            {this.props.numsOfText}
                        </Text>
                    </View>
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon name='logo-github' size={30} color='#000'></Icon>
                    <Icon name='md-close' color='#2aa2ef' size={25}></Icon>
                </View>
                <TextInput
                    ref='textArea'
                    style={styles.textArea}
                    maxLength={140}
                    multiline={true}
                    placeholder="有什么新鲜事？"
                    selectionColor='#2aa2ef'
                    placeholderTextColor='#ced8de'
                    onChangeText={this._updateTextNum}
                >
                </TextInput>
                <View style={[styles.functionViewContainer, { bottom: this.state.keyboardTopY }]}>
                    <FuntionView />
                </View>
            </View>
        )
    }
}