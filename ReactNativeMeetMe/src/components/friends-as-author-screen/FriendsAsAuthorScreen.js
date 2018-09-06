import React, { Component } from 'react';
import {View, ScrollView, Text } from 'react-native';
import Header from './Header';
import FriendsSearch from './FriendsSearch';
import FriendTile from '../common/friend-tile/FriendTile';

class FriendsAsAuthorScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header navigation={this.props.navigation}/>
                <ScrollView>
                    <FriendsSearch/>
                    <View style={styles.textContainerStyle}>
                        <Text style={styles.textStyleLetters}>Запросы в друзья</Text>
                        <Text style={styles.textStyleNumbers}>3</Text>
                    </View>
                    <View style={styles.tilesContainerStyle}>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                    </View>
                    <View style={styles.textContainerStyle}>
                        <Text style={styles.textStyleLetters}>Все друзья</Text>
                        <Text style={styles.textStyleNumbers}>245</Text>
                    </View>
                    <View style={styles.tilesContainerStyle}>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                        <FriendTile navigation={this.props.navigation}></FriendTile>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textContainerStyle: {
        padding: 20,
        paddingTop: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyleLetters: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    },
    textStyleNumbers: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto'
    },
    tilesContainerStyle: {
        borderTopColor: '#faf3fc',
        borderTopWidth: 1,
        marginBottom: 20
    }
};

export default FriendsAsAuthorScreen;