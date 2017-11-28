import React, {Component} from 'react';
import {Platform, Image, MapView, StatusBar, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types'
import Util from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

export class Map extends Component{
    static defaultProps = {
        mapType:"standard",
        showUserLocation:false,
        followUserLocation:false,
    };

    static propTypes={
        mapType:React.propTypes.oneOf(["standard", "satellite", "hybrid"]),
        showUserLocation: React.PropTypes.bool.isRequired,
        followUserLocation:React.PropTypes.bool.isRequired,
    }

    constructor(props){
        super(props);
        this.state={
            isFirstLoad:true,
            mapRegion:undefined,
            annotations:[],
        };
    }



}