'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

var styles = StyleSheet.create({

});

class Card extends Component {
    static propTypes = {
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
    }

    render() {
        return (
            <View style={[styles.card, { top: this.props.top, width: this.props.width, left: this.props.left }]}>

            </View>
        )
    }
}

export default class Demo14 extends Component {
    render() {
        return (
            <View>

            </View>
        );
    }
}