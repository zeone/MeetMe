import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { withNavigation } from 'react-navigation';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedScreen: 'MainEventsScreen'
        }

        this.goToMainScreen = this.goToMainScreen.bind(this);
        this.goToManageEventsScreen = this.goToManageEventsScreen.bind(this);
        this.goToProfileScreen = this.goToProfileScreen.bind(this);
    }

    goToMainScreen() {
        this.setState({
            focusedScreen: 'MainEventsScreen'
        });
        const { navigation } = this.props;
        navigation.navigate('MainEventsScreen');
    }

    goToManageEventsScreen() {
        this.setState({
            focusedScreen: 'ManageEventsScreen'
        });
        const { navigation } = this.props;
        navigation.navigate('ProfileAsAuthorScreen');
    }

    goToProfileScreen() {
        this.setState({
            focusedScreen: 'ProfileAsAuthorScreen'
        });
        const { navigation } = this.props;
        navigation.navigate('ProfileAsAuthorScreen');
    }

    render() {
        const {focusedScreen} = this.state;
        return (
            <View style={styles.containerStyle}>
                <Button style={styles.buttonStyle} onPress={this.goToMainScreen}>
                    <Icon name="FooterHomeIcon" height="20" width="24" fill={focusedScreen === 'MainEventsScreen' ? 'rgba(146, 211, 110, 0.8)' : '#000'}/>
                </Button>
                <Button style={styles.buttonStyle} onPress={this.goToManageEventsScreen}>
                    <Icon name="FooterStarIcon" height="25" width="24" fill={focusedScreen === 'ManageEventsScreen' ? 'rgba(146, 211, 110, 0.8)' : '#000'}/>
                </Button>
                <Button style={styles.buttonStyle} onPress={this.goToProfileScreen}>
                    <Icon name="FooterProfileIcon" height="20" width="24" fill={focusedScreen === 'ProfileAsAuthorScreen' ? 'rgba(146, 211, 110, 0.8)' : '#000'}/>
                </Button>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#f9f9f9',
        borderColor: '#faf3fc',
        borderTopWidth: 1
    },
    buttonStyle: {
        width: 46,
        height: 46,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default withNavigation(Footer);