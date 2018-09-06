import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Button from '../common/Button';
import Header from './Header';
import ProfileMainInfo from './ProfileMainInfo';
import ProfileGallery from './ProfileGallery';

class ProfileAsAuthorScreen extends Component {
    constructor(props) {
        super(props);

        this.goToFriendsScreen = this.goToFriendsScreen.bind(this);
    }

    goToFriendsScreen() {
        this.props.navigation.navigate('Friends');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header navigation={this.props.navigation}/>
                <ScrollView>
                    <ProfileMainInfo/>
                    <ProfileGallery/>
                    <View style={styles.dividerStyle}/>
                    <Button onPress={this.goToFriendsScreen} style={styles.buttonStyle}>
                        <Text style={styles.textStyle}>Друзей</Text>
                        <Text style={styles.textStyle}>99</Text>
                    </Button>
                    <View style={styles.dividerStyle}/>
                    <Button style={styles.buttonStyle}>
                        <Text style={styles.textStyle}>Настройки</Text>
                    </Button>
                    <View style={styles.dividerStyle}/>
                    <Button style={styles.buttonStyle}>
                        <Text style={[styles.textStyle, styles.exitTextStyle]}>Выйти из аккаунта</Text>
                    </Button>
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
    dividerStyle: {
        margin: 20,
        marginBottom: 0,
        marginTop: 0,
        height: 1,
        flex: 1,
        backgroundColor: '#faf3fc'
    },
    buttonStyle: {
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto'
    },
    exitTextStyle: {
        color: '#E94A09'
    }
};

export default ProfileAsAuthorScreen;