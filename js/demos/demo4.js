import React, { Component } from 'react';
import { Animated, Easing, Text, View, Button, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import Util from '../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollView: {
        width: Util.size.width,
        height: Util.size.height,
        backgroundColor: 'skyblue',
    },
    scrollViewContentContainer: {
        alignItems: 'center',
        minHeight: Util.size.height * 2,
    },
    fadeIn: {
        width: 250,
        height: 50,
        backgroundColor: 'powderblue'
    },
    fadeInText: {
        fontSize: 28,
        lineHeight: 28,
        textAlign: 'center',
        margin: 10
    },
    parallelAnimation: {
        height: Util.size.height,
        width: Util.size.height,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

class FadeIn extends Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 10000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={[
                    styles.fadeIn,
                    { opacity: fadeAnim }         // Bind opacity to animated value
                ]}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

class ParallelAnimation extends Component {
    state = {
        opacity: new Animated.Value(0),
        rotation: new Animated.Value(0),
        fontSize: new Animated.Value(0),
    };

    componentDidMount() {
        Animated.parallel(['opacity', 'rotation', 'fontSize'].map((type) => {
            return Animated.timing(this.state[type], {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            });
        })).start();
    }

    render() {
        return (
            <Animated.View
                style={[styles.parallelAnimation,
                {
                    opacity: this.state.opacity,
                    transform: [{
                        rotateZ: this.state.rotation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
                    }]
                }]}>
                <Animated.Text style={{
                    fontSize: this.state.fontSize.interpolate({
                        inputRange: [0, 1],
                        outputRange: [12, 26]
                    })
                }}>
                    I'm rotating while fading in...
                </Animated.Text>
            </Animated.View>
        )
    }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class Demo4 extends React.Component {
    componentDidMount() {
        if (Platform.OS === 'ios') {
            StatusBar.setBarStyle(0);
        } else {
            StatusBar.setHidden(true);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <FadeIn style={styles.fadeIn}>
                        <Text style={styles.fadeInText}>I'm Fading in</Text>
                    </FadeIn>
                    <ParallelAnimation></ParallelAnimation>
                </ScrollView>
            </View>
        )
    }
}