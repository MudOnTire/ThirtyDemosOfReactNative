import React, { Component } from 'react';
import { View, Platform, StatusBar, ScrollView, Text, StyleSheet, Slider } from 'react-native';
import GL from 'gl-react';
import { Surface } from 'gl-react-native';
import Util from '../utils';

const styles = StyleSheet.create({
    container:{
        width:Util.size.width,
        height:Util.size.height,
    },
    titleContainer:{
        alignItems:'center'
    },
    text:{
        lineHeight:30,
        fontSize:16,
    }
});

const shaders = GL.Shaders.create({
    helloGL: {
        frag: `
            precision highp float;
            varying vec2 uv;
            uniform float value;
            void main(){
                gl_FragColor=vec4(uv.x,uv.y,value,1.0);
            }
        `
    }
});

const HelloGL = GL.createComponent(
    ({ value }) => (
        <GL.Node shader={shaders.helloGL} uniforms={{ value }} />
    ),
    { displayName: 'HelloGL' }
)

export default class Demo12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            saturationFactor: 1,
            progress: 0
        };
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            Statusbar.setBarStyle(0);
        }
    }

    render() {
        let { value, saturationFactor, progress } = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>Gradients:</Text>
                </View>
                <Slider
                    maximumValue={1}
                    value={0}
                    onValueChange={(value) => {
                        this.setState({ value: value })
                    }}
                />
                <Surface width={Util.size.width} height={200}>
                    <HelloGL value={value} />
                </Surface>
            </ScrollView>
        )
    }
}