import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils';

var styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        paddingTop: 10,
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        backgroundColor: "#fff",
    },
    navLeft: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    navMid: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    postScrollView: {
        height: Util.size.height - 125,
        backgroundColor: "#ccc",
    },
    postScrollViewContainer: {
        flexGrow: 1
    },
    postImage: {
        width: Util.size.width,
        height: 644
    }
});

class Demo3TopNav extends Component {
    render() {
        return (
            <View style={styles.nav}>
                <View style={styles.navLeft}>
                    <Icon name="ios-person-add" size={34} style={{ color: "#1b95e0", paddingLeft: 10 }}></Icon>
                </View>
                <View style={styles.navMid}>
                    <Icon name="logo-twitter" size={28} style={{ color: "#1b95e0" }}></Icon>
                </View>
                <View style={styles.navRight}>
                    <Icon name="ios-search" size={24} style={{ color: "#1b95e0", width: 30 }}></Icon>
                    <Icon name="ios-create-outline" size={24} style={{ color: "#1b95e0", width: 30, paddingRight: 10 }}></Icon>
                </View>
            </View>
        );
    }
}

export { Demo3TopNav };

class TwitterPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false
        }
    }

    _onRefresh() {
        this.setState({
            isRefreshing: true,
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            });
        }, 1000);
    }

    render() {
        return (
            <ScrollView
                style={styles.postScrollView}
                contentContainerStyle={styles.postScrollViewContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this._onRefresh()}
                        tintColor="#ddd"
                    />
                }
            >
                <Image
                    source={require('../../img/day3.png')}
                    style={styles.postImage}
                    resizeMode='contain'
                >
                </Image>
            </ScrollView>
        );
    }
}

class HomePage extends Component {
    render() {
        return (
            <TwitterPost></TwitterPost>
        );
    }
}

class NotificationPage extends Component {
    render() {
        return (
            <TwitterPost></TwitterPost>
        );
    }
}

class PrivateMessagePage extends Component {
    render() {
        return (
            <TwitterPost></TwitterPost>
        );
    }
}

class MePage extends Component {
    render() {
        return (
            <TwitterPost></TwitterPost>
        );
    }
}

var tabTapHandlder = (tapInfo)=>{
    console.log(tapInfo);
    tapInfo.jumpToIndex(tapInfo.scene.index)
};

const Demo3Tab = TabNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "主页",
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return (
                        <Icon name="ios-home-outline"></Icon>
                    )
                } else {
                    return (
                        <Icon name="ios-home"></Icon>
                    )
                }
            },
            tabBarOnPress:tabTapHandlder,
        }),
    },
    NotificationPage: {
        screen: NotificationPage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "通知",
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return (
                        <Icon name="ios-notifications-outline"></Icon>
                    )
                } else {
                    return (
                        <Icon name="ios-notifications"></Icon>
                    )
                }
            },
            tabBarOnPress:tabTapHandlder,
        }),
    },
    PrivateMessagePage: {
        screen: PrivateMessagePage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "私信",
            tabBarVisible:false,
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return (
                        <Icon name="ios-mail-outline"></Icon>
                    )
                } else {
                    return (
                        <Icon name="ios-mail"></Icon>
                    )
                }
            },
            tabBarOnPress:tabTapHandlder,
        }),
    },
    MePage: {
        screen: MePage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "我",
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return (
                        <Icon name="ios-person-outline"></Icon>
                    )
                } else {
                    return (
                        <Icon name="ios-person"></Icon>
                    )
                }
            },
            tabBarOnPress:tabTapHandlder,
        }),
    },
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon:true,
            activeTintColor: '#fff',
            inactiveTintColor: '#fff',
            pressColor: '#fff',
            indicatorStyle: { backgroundColor: '#1b95e0' },
            style: {
                backgroundColor: '#1b95e0'
            }
        }
    });

export default Demo3Tab;