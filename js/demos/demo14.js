'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

class Card extends Component {
    static propTypes = {
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
    }

    render(){
        return (
            <View></View>
        )
    }
}

export default class Demo14 extends Component {
    render() {
        return (
            <View></View>
        );
    }
}