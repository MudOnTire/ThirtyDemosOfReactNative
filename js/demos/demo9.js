import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, PanResponder, LayoutAnimation, ScrollView, StatusBar, View } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    tabView: {
        marginTop: 20,
    },
    tabs: {
        flexDirection: 'row',
        paddingTop: 7,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        backgroundColor: "#111"
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
    tabText: {
        color: 'rgb(159,159,159)'
    }
});

class FacebookTabBar extends Component {
    tabIcons = [];

    static propTypes = {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,
    };

    componentDidMount() {
        setTimeout(() => this.props.goToPage(0), 0);
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    }

    setAnimationValue = ({ value, }) => {
        this.tabIcons.forEach((icon, i) => {
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                },
            });
        });
    }

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor = (progress) => {
        const red = 49 + (159 - 49) * progress;
        const green = 149 + (159 - 149) * progress;
        const blue = 215 + (159 - 215) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    render() {
        return <View style={[styles.tabs, this.props.style,]}>
            {this.props.tabs.map((tab, index) => {
                console.log(tab);
                return (
                    <TouchableOpacity
                        key={tab.title}
                        onPress={() => setTimeout(() => this.props.goToPage(i), 0)}
                        style={styles.tab}>
                        <Icon
                            name={tab.icon}
                            size={30}
                            color={this.props.activeTab === index ? 'rgb(49,149,215)' : 'rgb(159,159,159)'}
                            ref={(icon) => { this.tabIcons[index] = icon; }}
                        />
                        <Text style={styles.tabText}>{tab.title}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>;
    }
}

export default class Demo9 extends Component {
    render() {
        return (
            <ScrollableTabView
                style={styles.tabView}
                initialPage={0}
                renderTabBar={() => <FacebookTabBar />}
                tabBarPosition='bottom'
            >
                <ScrollView tabLabel={{ icon: 'ios-paper', title: 'Home' }}>
                    <View style={styles.card}>
                        <Text>News</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel={{ icon: 'ios-people', title: 'Contacts' }}>
                    <View style={styles.card}>
                        <Text>Friends</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel={{ icon: 'ios-chatboxes', title: 'Chat' }}>
                    <View style={styles.card}>
                        <Text>Messenger</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel={{ icon: 'ios-notifications', title: 'Messages' }}>
                    <View style={styles.card}>
                        <Text>Notifications</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel={{ icon: 'ios-list', title: 'Settings' }}>
                    <View style={styles.card}>
                        <Text>Other nav</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        )
    }
}
